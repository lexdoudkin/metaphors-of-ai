# Metaphors of AI

A map of **44 recurring metaphors of AI**, plotted by **potency** (weak → omnipotent)
and **threat** (non‑threatening → threatening), with a sourced bibliography of **53
references** and a companion essay.

Content after Charlie Stein, *Metaphors of AI* (2024); inspired by Disnovation.org.
By **Charlie Stein & Alexander Doudkin**, 2026.

![The map](render-2x.png)

## The four quadrants

|                       | Weak (low potency)            | Omnipotent (high potency)        |
| --------------------- | ----------------------------- | -------------------------------- |
| **Threatening**       | Inept tool                    | Menacing overlord                |
| **Non‑threatening**   | Humble servant                | Omnipotent protector             |

Each metaphor carries `[n]` citation brackets keyed to the bibliography, which is
printed on the poster itself and in the essay.

## What's here

| File | What it is |
|------|------------|
| `Metaphors-of-AI_matrix.pdf` | The poster (the diagram + on‑sheet reference list). |
| `Metaphors-of-AI_essay.pdf` | The companion essay (≈3,400 words) as A4. |
| `essay.md` | Essay source, with full bibliography + image credits. |
| `index.html` | The diagram renderer — open it in a browser (it reads `points.js`). |
| `points.json` | **Source of truth** — every metaphor (position, description, references, image + attribution) and the bibliography. |
| `points.csv` | The same data as a spreadsheet. |
| `points.js` | `window.MATRIX = {…}` so `index.html` works on a `file://` open. |
| `build.js` | Regenerates `points.js` + `points.csv` from `points.json`. |
| `images/cutout/` | The transparent cut‑outs shown on the board. |
| `images/photo/`, `images/*.png/jpg` | The original source images. |
| `tools/cutout.swift` | macOS Vision background‑remover used to make the cut‑outs. |
| `render-2x.png` | High‑res render of the diagram. |

## Per‑metaphor data fields (`points.json`)

`name`, `description`, `quadrant`, `position` (`nx` = potency, `ny` = threat),
`references` (bibliography numbers), `image_cutout`, and
`image_credit` / `image_license` / `image_source_url`.

## Rebuild

- **Data helpers:** `node build.js`
- **The diagram:** open `index.html` (served, or via `file://`). It lays the
  cut‑outs out by `nx`/`ny` and spaces them so nothing overlaps.
- **The cut‑out tool:** `swiftc -O tools/cutout.swift -o tools/cutout`, then
  `tools/cutout <source> images/cutout/<id>.png`.

## Licence

Code: MIT. Text: CC BY 4.0. Images: third‑party, each under its own licence —
see [`LICENSE`](LICENSE) and [`NOTICE.md`](NOTICE.md). A few meme cut‑outs are used
illustratively and are not freely licensed; clear them before commercial use.
