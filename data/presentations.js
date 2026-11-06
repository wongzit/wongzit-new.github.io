/* ==========================================================================
   data/presentations.js — every conference talk and poster, yours and your
   students'. Shown on presentations.html (Publications ▸ presentations);
   talks given by students also appear on team.html.

   One entry per presentation:
     { date: "YYYY-MM-DD", presenter: "Zhe Wang", type: "Oral" | "Poster" | "Invited",
       title: `…`, meeting: `…`, place: "…", award: "…" },

     presenter   your own name is shown in bold; a student's name (as written in
                 data/team.js) links to their card on the team page
     award       optional, shown with 🏆

   ⚠️  The entries below are EXAMPLES (example: true) — replace them with real ones.
   • Order does not matter — sorted by date, newest first.
   • Write text between backticks ` … ` so quotes and apostrophes need no escaping.
   • Comma after every entry except the last one.
   ========================================================================== */
window.PRESENTATIONS = [
  { date: "2026-09-18", presenter: "Taro Sample", type: "Poster", example: true,
    title: `Example poster title`, meeting: `Example Symposium on Physical Organic Chemistry`, place: "Osaka",
    award: "Best Poster Award" },
  { date: "2026-03-20", presenter: "Zhe Wang", type: "Oral", example: true,
    title: `Example talk title`, meeting: `Example Annual Meeting`, place: "Tokyo" },
  { date: "2025-11-02", presenter: "Hanako Example", type: "Oral", example: true,
    title: `Example oral presentation title`, meeting: `Example Conference on Structural Organic Chemistry`, place: "Kyoto" }
];
