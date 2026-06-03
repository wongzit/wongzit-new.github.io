# How to edit your website

This site is plain HTML + Markdown — no build step. To update it you edit a
file and push it to GitHub; GitHub Pages serves it as-is.

---

## The 30-second mental model

| What you want to change            | File to edit                          |
| ---------------------------------- | ------------------------------------- |
| Your name, the menu, social links, footer | `assets/js/site.js` (top of file) |
| Colors and fonts                   | `assets/css/style.css` (top of file)  |
| Home page text / news              | `index.html`                          |
| CV                                 | `cv.html`                             |
| Research                           | `research.html`                       |
| Publications                       | `publications.html`                   |
| **Publications / reviews / covers** | `data/publications.js` (one file)  |
| Programs                           | `programs.html`                       |
| Teaching                           | `teaching.html`                       |
| Links                              | `links.html`                          |
| **Add / edit a blog post**         | `posts/` folder + `posts/posts.json`  |

In every `.html` file, the parts you edit are marked with a comment like:

```html
<!-- ==== EDIT YOUR CONTENT HERE ==== -->
```

You never touch the `<head>` or the `<script>` lines at the bottom.

---

## ✍️ Adding a new blog post (the important one)

Two steps. Say your post is titled *"My New Method"*.

**Step 1 — write the post.**
Create a new file `posts/my-new-method.md` and write in Markdown. The filename
(without `.md`) is the "slug". Use lowercase and hyphens, no spaces.

You can copy `posts/welcome.md` as a starting template — it shows every feature
(headings, lists, images, code, tables, math).

**Step 2 — list it.**
Open `posts/posts.json` and add an entry at the **top** of the list:

```json
[
  {
    "slug": "my-new-method",
    "title": "My New Method",
    "date": "2026-06-02",
    "tags": ["chemistry", "tutorial"],
    "summary": "One sentence shown on the blog index."
  },
  ... existing posts below ...
]
```

- `slug` must match the filename (without `.md`).
- `date` must be `YYYY-MM-DD` (this is how posts are sorted, newest first).
- `tags` become clickable filters on the blog page. Use as many or few as you like.

That's it. The post appears on `blog.html`, in the tag filters, and in the
"Latest posts" list on the home page — all automatically.

> ⚠️ Watch the commas in `posts.json`: every entry needs a comma after it
> **except the last one**. If the blog page goes blank, a missing or extra
> comma is almost always the cause.

### What you can write in a post

- **Headings:** `## Section`, `### Subsection`
- **Bold / italic:** `**bold**`, `*italic*`
- **Links:** `[text](https://...)`
- **Images:** put the file in `assets/img/` then `![caption](assets/img/file.png)`
- **Code:** fence it with triple backticks and a language for highlighting:
  <pre>```python
  print("hi")
  ```</pre>
- **Tables:** standard Markdown tables.
- **Math:** `$E = mc^2$` for inline, `$$ ... $$` for a centered equation
  (rendered with KaTeX — great for chemistry/physics).

---

## 📚 Adding a publication

All three publication pages — **original papers** (`publications.html`),
**accounts & reviews** (`reviews.html`) and **cover pictures** (`covers.html`)
— read from one file: `data/publications.js`. You only edit that file.

Open `data/publications.js`. Keep the first line `window.PUBLICATIONS = [` and
the final `];` untouched — just edit the list of `{ ... }` entries between them.
Add a new object to the list. The pages group entries by year automatically
(newest first), draw the big faded year number once per year, and build the
"List by Year" links for you.

```json
{
  "type": "paper",                          // "paper" | "review" | "cover"
  "year": 2026,
  "title": "Your paper title",
  "authors": "A. Author, <span class=\"me\">Zhe Wang</span>, C. Coauthor<sup>*</sup>",
  "venue": "<i>J. Am. Chem. Soc.</i>, <b>2026</b>, 148, 20974–20984.",
  "image": "assets/img/pubs/my-toc.png",   // TOC graphic, shown on the left
  "doi": "10.1021/jacs.xxxxx",             // optional: enables Altmetric + citation badges
  "links": {
    "DOI": "https://doi.org/10.1021/...",
    "HTML": "https://...",
    "PREPRINT": "https://...",
    "PDF": "assets/pdf/mypaper.pdf"
  },
  "abstract": "Shown when a reader clicks the ABS button.",
  "bibtex": "@article{key, ... }"
}
```

Notes:

- **`type`** decides which page it appears on. `paper` → publications,
  `review` → reviews, `cover` → covers.
- **`authors`**: wrap your own name in `<span class="me">Zhe Wang</span>` to
  underline it, and use `<sup>*</sup>` for the corresponding-author star.
- **TOC image**: drop the graphic in `assets/img/pubs/` and point `image` to it.
- **Buttons** appear automatically for every link you list, plus **ABS** if you
  give an `abstract` and **BIB** if you give a `bibtex` (these expand in place).
- **Badges**: the Altmetric "doughnut" and citation count appear only when you
  supply a real `doi`. Leave `doi` empty (`""`) to hide them.
- Same comma rule as the blog: comma after every entry **except the last**.

---

## Changing the menu or your name

Open `assets/js/site.js`. Near the top is a `SITE` object. To add a page to the
menu, add a line to the `nav` list:

```js
{ label: "talks", href: "talks.html" },
```

Then create `talks.html` (copy any existing page like `links.html` as a starting
point). Your social links and footer text live in the same `SITE` object.

---

## Changing colors

Open `assets/css/style.css`. The very top has a `:root { ... }` block with the
dark-theme colors and a `[data-theme="light"] { ... }` block for light mode.
Change `--accent` to recolor links/highlights across the whole site. You don't
need to read the rest of the file.

---

## Previewing locally

**Double-click `preview.command`** in this folder. It opens the whole site —
including the blog — in your browser at <http://localhost:8000>. Keep that
little Terminal window open while you browse; close it when you're done.

Why this is needed: the blog reads your Markdown posts with JavaScript, and
browsers block that when you open a file directly from disk (a `file://`
address). The publications and other pages work either way, but the blog needs
to be served. `preview.command` does that for you in one click.

> The first time, macOS may ask permission to run it: right-click the file →
> **Open** → **Open**. After that a double-click is enough.

(If you prefer the terminal: `python3 -m http.server 8000` in this folder does
the same thing.)

**On your live site this is a non-issue** — once you push to GitHub Pages,
everything works with no setup.

---

## Files you can ignore

`assets/js/site.js`, `assets/js/blog.js`, `assets/css/style.css`, `post.html`
and `.nojekyll` are the machinery. You'll rarely need to open them beyond the
clearly-marked settings at the top.
