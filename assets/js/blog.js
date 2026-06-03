/* ==========================================================================
   blog.js — powers the blog index (blog.html) and single posts (post.html).
   --------------------------------------------------------------------------
   You normally never edit this file. Posts get clean URLs like
   /your-slug/ (each post is a folder with an index.html). See GUIDE.md.
   ========================================================================== */

const POSTS_INDEX = "/posts/posts.json";

// Friendly explanation shown when the blog can't read its files because the
// page was opened directly from disk (file://) instead of over http.
const FILE_HINT = `
  <div class="card">
    <h3 style="margin-top:0">Just one step to preview the blog locally</h3>
    <p class="muted">The blog reads your Markdown posts with JavaScript, and
    browsers block that when a page is opened directly from disk
    (a <code>file://</code> address). This does <b>not</b> affect your live site
    — on GitHub Pages the blog works with no setup.</p>
    <p class="muted"><b>To preview on your own computer:</b> double-click the
    <code>preview.command</code> file in this folder. It opens the site at
    <code>http://localhost:8000</code> where everything, including the blog,
    works. (Or run <code>python3 -m http.server 8000</code> in the folder.)</p>
  </div>`;

const isFileProtocol = location.protocol === "file:";

async function loadIndex() {
  const res = await fetch(POSTS_INDEX, { cache: "no-cache" });
  if (!res.ok) throw new Error("Could not load /posts/posts.json");
  const posts = await res.json();
  // newest first by date string (YYYY-MM-DD sorts correctly)
  return posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

function fmtDate(d) {
  if (!d) return "";
  const date = new Date(d + "T00:00:00");
  if (isNaN(date)) return d;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

/* ---------- BLOG INDEX --------------------------------------------------- */
async function renderBlogIndex() {
  const listEl = document.getElementById("post-list");
  const searchEl = document.getElementById("post-search");
  const tagWrap = document.getElementById("tag-filter");
  let posts, activeTag = null;

  try { posts = await loadIndex(); }
  catch (e) {
    listEl.innerHTML = isFileProtocol ? FILE_HINT : `<p class="muted">${e.message}</p>`;
    return;
  }

  // tag chips
  const allTags = [...new Set(posts.flatMap(p => p.tags || []))].sort();
  tagWrap.innerHTML = allTags
    .map(t => `<span class="tag btn-tag" data-tag="${t}">${t}</span>`).join("");

  function draw() {
    const q = (searchEl.value || "").toLowerCase().trim();
    const shown = posts.filter(p => {
      const inTag = !activeTag || (p.tags || []).includes(activeTag);
      const hay = (p.title + " " + (p.summary || "") + " " + (p.tags || []).join(" ")).toLowerCase();
      return inTag && (!q || hay.includes(q));
    });
    listEl.innerHTML = shown.length ? shown.map(p => `
      <a class="post-card" href="/${encodeURIComponent(p.slug)}/">
        <div class="post-card__meta">${fmtDate(p.date)}</div>
        <div class="post-card__title">${p.title}</div>
        <p class="post-card__summary">${p.summary || ""}</p>
        <div>${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </a>`).join("")
      : `<p class="muted">No posts match your search.</p>`;

    tagWrap.querySelectorAll(".btn-tag").forEach(el =>
      el.classList.toggle("active", el.dataset.tag === activeTag));
  }

  searchEl.addEventListener("input", draw);
  tagWrap.addEventListener("click", e => {
    const t = e.target.dataset.tag;
    if (!t) return;
    activeTag = (activeTag === t) ? null : t;
    draw();
  });
  draw();
}

/* ---------- SINGLE POST -------------------------------------------------- */
// The slug is the post's folder name, e.g. /orbital-composition-analysis/ .
// (A legacy ?p=slug query is still accepted, so old links keep working.)
function currentSlug() {
  const q = new URLSearchParams(location.search).get("p");
  if (q) return q;
  const segs = location.pathname.split("/").filter(Boolean);
  let last = segs[segs.length - 1] || "";
  if (last === "index.html") last = segs[segs.length - 2] || "";
  return last;
}

async function renderPost() {
  const headEl = document.getElementById("post-header");
  const bodyEl = document.getElementById("post-body");
  const slug = currentSlug();

  if (!slug) { bodyEl.innerHTML = `<p class="muted">No post specified.</p>`; return; }

  let meta = {};
  try {
    const posts = await loadIndex();
    meta = posts.find(p => p.slug === slug) || {};
  } catch (e) { /* metadata optional */ }

  let md;
  try {
    const res = await fetch(`/posts/${slug}.md`, { cache: "no-cache" });
    if (!res.ok) throw new Error();
    md = await res.text();
  } catch (e) {
    bodyEl.innerHTML = isFileProtocol ? FILE_HINT
      : `<p class="muted">Sorry, this post could not be found.</p>`;
    return;
  }

  // Strip an optional front-matter block (--- ... ---) if present.
  md = md.replace(/^---[\s\S]*?---\s*/, "");

  document.title = (meta.title || slug) + " · Zhe WANG";
  headEl.innerHTML = `
    <a href="/blog.html" class="mono faint">&larr; all posts</a>
    <h1>${meta.title || slug}</h1>
    <div class="post-meta">${fmtDate(meta.date)} ${meta.tags ? "· " + meta.tags.map(t=>`<span class="tag">${t}</span>`).join("") : ""}</div>`;

  marked.setOptions({
    highlight: (code, lang) => {
      if (window.hljs && lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return window.hljs ? hljs.highlightAuto(code).value : code;
    },
  });
  bodyEl.innerHTML = marked.parse(md);

  // Math (KaTeX) — supports $inline$ and $$display$$.
  if (window.renderMathInElement) {
    renderMathInElement(bodyEl, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      throwOnError: false,
    });
  }
}

/* ---------- HOME: latest posts table ------------------------------------ */
async function renderLatestPosts(targetId, n = 3) {
  const el = document.getElementById(targetId);
  if (!el) return;
  try {
    const posts = (await loadIndex()).slice(0, n);
    el.innerHTML = posts.map(p => `
      <tr>
        <td>${fmtDate(p.date)}</td>
        <td><a href="/${encodeURIComponent(p.slug)}/">${p.title}</a></td>
      </tr>`).join("");
  } catch (e) { el.innerHTML = `<tr><td colspan="2" class="muted">No posts yet.</td></tr>`; }
}
