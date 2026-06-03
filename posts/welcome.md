# Welcome to the New Site

> This is a sample post. Delete it once you've added your own — or keep editing
> this file to learn how posts work.

Hello! This blog is written in **Markdown**, which means you can focus on the
text and let the site handle the styling. Here is everything you can use.

## Headings, text and links

Use `##` for a section heading and `###` for a sub-heading. You can make text
**bold**, *italic*, or add a [link to another page](research.html).

## Lists

- First point
- Second point
  - A nested point
- Third point

1. Numbered too
2. Like this

## Images

Put image files in the `assets/img/` folder and reference them with a leading
slash (so they resolve correctly from the post's URL folder):

```
![A caption for the image](/assets/img/example.png)
```

## Code blocks

Code is automatically syntax-highlighted:

```python
import numpy as np

def gaussian(x, mu, sigma):
    return np.exp(-((x - mu) ** 2) / (2 * sigma ** 2))
```

## Tables

| Method | Basis set | Energy (Hartree) |
| ------ | --------- | ---------------- |
| HF     | 6-31G*    | -76.01           |
| B3LYP  | 6-31G*    | -76.41           |

That's it. See **GUIDE.md** in the site folder for the two steps to publish a
new post.
