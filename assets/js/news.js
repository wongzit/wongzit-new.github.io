/* ==========================================================================
   news.js — shows the items from data/news.js.
     renderNews("home-news", 5)   home page: the 5 newest, as table rows
     renderNewsPage("news-list")  news.html: everything, grouped by year
   You never need to edit this file; edit data/news.js instead.
   ========================================================================== */

const NEWS_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Newest first. Items with the same date keep their order in the file.
function newsItems() {
  if (!Array.isArray(window.NEWS)) {
    throw new Error("data/news.js did not load. Check it is included and has no syntax error.");
  }
  return window.NEWS.map((n, i) => ({ ...n, i }))
    .sort((a, b) => String(b.date).localeCompare(String(a.date)) || a.i - b.i);
}

// "2026-10-13" → "Oct 13, 2026"
function newsDate(d) {
  const [y, m, day] = String(d).split("-").map(Number);
  return m ? `${NEWS_MONTHS[m - 1]} ${day ? day + ", " : ""}${y}` : String(d);
}

function newsRow(n) {
  return `<tr><td>${newsDate(n.date)}</td><td>${n.text}</td></tr>`;
}

function renderNews(targetId, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  try {
    el.innerHTML = newsItems().slice(0, limit || Infinity).map(newsRow).join("");
  } catch (e) {
    el.innerHTML = `<tr><td></td><td class="muted">${e.message}</td></tr>`;
  }
}

function renderNewsPage(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  let items;
  try { items = newsItems(); }
  catch (e) { el.innerHTML = `<p class="muted">${e.message}</p>`; return; }
  if (!items.length) { el.innerHTML = `<p class="muted">No news yet.</p>`; return; }

  const years = [...new Set(items.map(n => String(n.date).slice(0, 4)))];
  el.innerHTML = years.map(y => `
    <div class="pub-group" id="y${y}">
      <span class="pub-year-mark">${y}</span>
      <table class="info-table">${items.filter(n => String(n.date).startsWith(y)).map(newsRow).join("")}</table>
    </div>`).join("");
}
