---
title: Test Post
author: "ankt"
description: "Testing functionality of mdx and if my css works"
banner: {
    url: "../../imgs/blog/abstract(0)-studio.png",
    alt: "banner of a marble sculpture of a head. render by ankt"
}
pubDate: 2024-05-19
tags: ["meta", "website", "test"]
postOrder: 0
---

## This is an H2

### Hello, H3

Here are some lines yapping about something that doesn't even matter in the grand scheme of things like how a guy cut me off in traffic today or how a girl smiled at me today.

Here is another line about how I think the universe will end.

## Heading h2

### Sub-Heading h3

#### Sub-Sub Heading h4

Here is an unordered list

- first item
- second item
- third item

Here is a nested list

1. One
    - Item One
    - Item Two
2. Two
    1. Item Zero
    2. Item One

> This is a blockquote.

`This is some random text in code fences`

ref: <https://github.com/HiDeoo/starlight-obsidian>
> [!NOTE] This is an attempt at a callout like in Obsidian

![pixel art of a tower in the forest night scene](../../imgs/blog/test-img.png)

[[welcome to the website]]

## Table

| Serial | Name | Sigma Score |
| ---    | ---  | ---         |
| 0 | Linus Torvalds | 10/10 |
| 1 | Alonso DaGoat | 10/10 |
| 2 | Rothschild | 10/10 (pls dont kill) |

some weak ass python code

```python
print("Hello World")
```

LaTeX?!!

*Fermat's Last Theorem* (sometimes called Fermat's conjecture, especially in older texts) states that no three positive integers $a$, $b$, and $c$ satisfy the equation $a^n + b^n = c^n$ for any integer value of $n \gt 2$

## Notes

1. LaTeX does not work (bc i don't have the remark plugin yet)
2. table alignment issues
3. Obsidian Like Callouts don't work
    - look weird
4. internal linking like [[blog post]]
    - requires mdx
    - slug is from root so broken (slug is called id as of Astro v5. Kinda retarded breaking change from v4 to v5 imo. package conflicts and solving breaking conflicts broke me)
