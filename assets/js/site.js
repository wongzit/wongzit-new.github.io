/* ==========================================================================
   site.js — shared header, footer, navigation and theme toggle.
   --------------------------------------------------------------------------
   This is the ONE place to edit your name, the navigation menu, your social
   links and the footer. Whatever you change here updates EVERY page at once.
   ========================================================================== */

const SITE = {
  // Shown at the top-left of every page (the "logo").
  brand: "Zhe&nbsp;WANG<span class='dot'>.</span>",

  // ---- Navigation menu --------------------------------------------------
  // To add a page: add { label, href }.  The current page is highlighted
  // automatically. "children" turns an item into a dropdown.
  nav: [
    { label: "home",         href: "index.html" },
    { label: "cv",           href: "cv.html" },
    { label: "research",     href: "research.html" },
    {
      label: "publications", href: "publications.html",
      children: [
        { label: "original papers",    href: "publications.html" },
        { label: "accounts & reviews", href: "reviews.html" },
        { label: "cover pictures",     href: "covers.html" },
      ],
    },
    {
      label: "programs", href: "programs.html",
      children: [
        { label: "py.Aroma",   href: "programs.html#pyaroma" },
        { label: "uv.Plotter", href: "programs.html#uvplotter" },
        { label: "scripts",    href: "programs.html#scripts" },
        { label: "mol.Viewer", href: "programs.html#molviewer" },
      ],
    },
    { label: "teaching", href: "teaching.html" },
    { label: "links",    href: "links.html" },
    { label: "blog",     href: "blog.html" },
  ],

  // ---- Footer -----------------------------------------------------------
  footerQuote: "Unless we change directions, we will end up where we are headed.",
  footerLine: 'Zhe WANG, Ph.D. · Graduate School of Engineering, The University of Osaka.',
};

/* ---- Theme (dark default, remembers your choice) ----------------------- */
(function applyThemeEarly() {
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
})();

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = cur === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  document.querySelectorAll(".theme-toggle").forEach(b => b.textContent = next === "light" ? "🌙" : "☀");
}

/* ---- Build the navbar -------------------------------------------------- */
function buildNav() {
  const here = location.pathname.split("/").pop() || "index.html";
  const isLight = document.documentElement.getAttribute("data-theme") === "light";

  const linkHTML = SITE.nav.map(item => {
    const active = item.href.split("#")[0] === here ? "active" : "";
    if (item.children) {
      const sub = item.children.map(c => `<a href="${c.href}">${c.label}</a>`).join("");
      return `<div class="nav-drop">
                <a href="${item.href}" class="${active}">${item.label} ▾</a>
                <div class="nav-drop__menu">${sub}</div>
              </div>`;
    }
    return `<a href="${item.href}" class="${active}">${item.label}</a>`;
  }).join("");

  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.innerHTML = `
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="index.html">${SITE.brand}</a>
      <button class="nav-burger" aria-label="menu" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
      <div class="site-nav__links" id="navLinks">
        ${linkHTML}
        <button class="theme-toggle" aria-label="toggle theme" onclick="toggleTheme()">${isLight ? "🌙" : "☀"}</button>
      </div>
    </div>`;
  const slot = document.getElementById("site-header");
  (slot || document.body).prepend(nav);
}

/* ---- Build the footer -------------------------------------------------- */
function buildFooter() {
  const year = new Date().getFullYear();
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <span class="quote">${SITE.footerQuote}</span>
      <span>© ${year} ${SITE.footerLine}</span>
    </div>`;
  const slot = document.getElementById("site-footer");
  (slot || document.body).append(footer);
}

document.addEventListener("DOMContentLoaded", () => { buildNav(); buildFooter(); });
