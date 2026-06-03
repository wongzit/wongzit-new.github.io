/* ==========================================================================
   pubs.js — renders the publications / reviews / covers pages.
   --------------------------------------------------------------------------
   You never edit this file. To add or change a publication, edit
   data/publications.json (see GUIDE.md). Each page calls
   renderPublications("paper" | "review" | "cover").
   ========================================================================== */

// Order action buttons are shown in (left → right).
const BTN_ORDER = ["DOI", "ABS", "BIB", "HTML", "PREPRINT", "PDF", "CODE", "SI"];

// Data is loaded via <script src="data/publications.js"> as window.PUBLICATIONS.
// (Using a script tag instead of fetch() means the pages also work when opened
//  directly from disk, not only over http.)
function loadPubs() {
  if (!Array.isArray(window.PUBLICATIONS)) {
    throw new Error("data/publications.js did not load. Check it is included and has no syntax error.");
  }
  return window.PUBLICATIONS;
}

function pubButtons(p, uid) {
  const out = [];
  const links = p.links || {};
  const has = k => links[k] && links[k] !== "";

  if (has("DOI"))                     out.push(`<a class="pub-btn" href="${links.DOI}" target="_blank" rel="noopener">DOI</a>`);
  if (p.abstract)                     out.push(`<button class="pub-btn" onclick="togglePanel('abs-${uid}')">ABS</button>`);
  if (p.bibtex)                       out.push(`<button class="pub-btn" onclick="togglePanel('bib-${uid}')">BIB</button>`);
  ["HTML", "PREPRINT", "PDF", "CODE", "SI"].forEach(k => {
    if (has(k)) out.push(`<a class="pub-btn" href="${links[k]}" target="_blank" rel="noopener">${k}</a>`);
  });
  // any custom link keys not already handled
  Object.keys(links).forEach(k => {
    if (!BTN_ORDER.includes(k) && has(k))
      out.push(`<a class="pub-btn" href="${links[k]}" target="_blank" rel="noopener">${k}</a>`);
  });
  return out.join("");
}

function pubMetrics(p) {
  if (!p.doi) return "";
  return `<div class="pub__metrics">
      <div class="altmetric-embed" data-badge-type="2" data-badge-popover="right" data-doi="${p.doi}"></div>
      <span class="__dimensions_badge_embed__" data-doi="${p.doi}" data-style="small_rectangle"></span>
    </div>`;
}

function pubHTML(p, idx) {
  const uid = (p.type || "p") + idx;
  return `
  <div class="pub" data-search="${(p.title + " " + (p.authors||"") + " " + (p.venue||"") + " " + p.year).replace(/"/g,"").toLowerCase()}">
    <img class="pub__thumb" src="${p.image || ""}" alt=""
         onerror="this.style.opacity=.25;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22></svg>'">
    <div>
      <p class="pub__title">${p.title}</p>
      <p class="pub__authors">${p.authors || ""}</p>
      <p class="pub__venue">${p.venue || ""}</p>
      <div class="pub__btns">${pubButtons(p, uid)}</div>
      ${p.abstract ? `<div class="pub__panel" id="abs-${uid}">${p.abstract}</div>` : ""}
      ${p.bibtex ? `<div class="pub__panel" id="bib-${uid}"><pre>${escapeHTML(p.bibtex)}</pre></div>` : ""}
      ${pubMetrics(p)}
    </div>
  </div>`;
}

function escapeHTML(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function togglePanel(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("open");
}

function renderPublications(type) {
  const listEl = document.getElementById("pub-list");
  const yearNavEl = document.getElementById("pub-year-nav");
  const filterEl = document.getElementById("pub-filter");

  let all;
  try { all = loadPubs(); }
  catch (e) { listEl.innerHTML = `<p class="muted">${e.message}</p>`; return; }

  const items = all.filter(p => (p.type || "paper") === type)
                   .sort((a, b) => b.year - a.year);

  if (!items.length) { listEl.innerHTML = `<p class="muted">Nothing here yet.</p>`; return; }

  // Year navigation links
  const years = [...new Set(items.map(p => p.year))].sort((a, b) => b - a);
  if (yearNavEl) {
    yearNavEl.innerHTML = `<b>List by Year:</b> ` +
      years.map(y => `<a href="#y${y}">${y}</a>`).join(`<span class="sep">/</span>`);
  }

  function draw(q = "") {
    q = q.trim().toLowerCase();
    let globalIdx = 0;
    const html = years.map(year => {
      const inYear = items.filter(p => p.year === year)
        .filter(p => !q || (p.title + " " + (p.authors||"") + " " + (p.venue||"")).toLowerCase().includes(q));
      if (!inYear.length) return "";
      const body = inYear.map(p => pubHTML(p, globalIdx++)).join("");
      return `<div class="pub-group" id="y${year}">
                <span class="pub-year-mark">${year}</span>${body}
              </div>`;
    }).join("");
    listEl.innerHTML = html || `<p class="muted">No publications match your search.</p>`;
    if (window._dimensions_embed) window.__dimensions_embed.addBadges();
  }

  if (filterEl) filterEl.addEventListener("input", e => draw(e.target.value));
  draw();
}
