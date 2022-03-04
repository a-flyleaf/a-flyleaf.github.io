---
layout: post
title: "sitenotes"
date: 2022-03-03
slug: sitenotes
---
Went on an accessibility bingeread lately, because A) it's important, B) I can always do better, and C) it's been on the mind lately far as web-based visual storytelling is concerned.

This is not a project ramble, though. Mostly I'm posting this publicly as an accountability check; things I think(/hope) I'm doing well, and [reminders for future edits]({{site.url}}/blog/sitenotes#tldr).<!--more-->

## point-by-point review
Based on [the A11y Project's checklist](https://www.a11yproject.com/checklist/):

### content
- Convoluted language and informality is kind of inevitable given the way I talk, but since this is a personal site and not reference documentation for the general public, I'm not *too* concerned about that.
- At the time of writing I rarely use the <code>button</code> or <code>label</code> elements. I could probably be more careful about descriptive links.

### global code
- Haven't run anything through a validator lately.
- I *think* I use <code><html lang="en"></code> as a default, but it might not apply to older pages.
- Abuse of the <code>title</code> attribute was flagrant in the tumblr era and there are probably some holdovers on older pages. This is one of those weird gray areas where, if I were to fix it, I might as well recode the thing from scratch because there are probably more fundamental issues that need addressing; but also, as a stickler for archival, I'd want to leave the original as-is. Depends on how substantial the changes are...

### keyboard
- See "gray area" note above; should be good on recent pages, less great on older.

### images
- I have been lazy about the <code>alt</code> attribute on art pages. Part of this is sheer not-used-to-describing-drawings inertia; the other part is not being sure *how* to accurately convey whatever the drawing's trying to say in text alone, if that's even possible. But eh, this post ain't about that, I digress.
	- For what it's worth, <i>404</i> should have captions on each panel. They're only accessible via screenreader or code-snooping, which keeps the visual reading flow uninterrupted, but I'm wondering if visually-readable text captions would really be as big an "interruption" as I assume... </digression again>

### headings
- Like keyboad navigation, should be standard on all but the oldest pages. (Yes, I am being wishy-washy about the "old/new" breakpoint. Haven't checked.)

### lists
- [Description lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) are a thing I keep forgetting exist. Main thing I'd use this for is the [dragonotes glossary](https://a-flyleaf.github.io/dragonotes/ref/glossary), good to know regardless.

### controls
- All gray area stuff. I just went through all the non-shriblet pages on this main site, and everywhere on [/ygbtdm](https://a-flyleaf.github.io/ygbtdm), fixing the [external link issue](https://codersblock.com/blog/external-links-new-tabs-and-accessibility/); the latter should consistently use a class now, the former is plain markdown, and everywhere else is inconsistent at best.
- Anyway, definitely gotta remember the [skip link](https://www.a11yproject.com/posts/skip-nav-links/) visibility thing.

### tables
- [dragonotes](https://a-flyleaf.github.io/dragonotes/) uses a shitton of tables but I *think* that's an okay solution? at least until/unless I convert everything to spreadsheets. I'm not familiar with the <code>scope</code> or <code>caption</code> elements...

### forms
- Rarely use these. They've mostly only come up in the context of JavaScript tests, for which my #1 concern is just getting the dang code to work—though accessibility shouldn't be an afterthought, best practices, all that whatnot.

### media
- Something to revisit if I ever get around to making a custom video interface. Currently I use YouTube embeds, because unfortunately convenience and not having to deal with file sizes beat out privacy conerns. (For now, anyway.)

### video & audio
- Captions... yeah, I gotta figure out how to add those.

### appearance
- I use <code>em</code> units for the most part, though at some point I picked up that it's better to use <code>rem</code>s for layout. This makes some pages look like ass when I increase the font size. Need to mess with it more.
- Don't think I've ever tried checking anything with a specialized browsing mode.

### animations
- Not currently relevant; I use video or GIFs.

### color contrast
- Seeing as I went to school for graphic design I would *hope* this is generally good. Could probably stand to run some of the minor text (footers, captions, selections) through a contrast checker, though...

### mobile and touch
- *Should* be alright, minus old stuff again. I want to say I've been coding mobile-first longer than using HTML5, for whatever it's worth.

## TL;DR
things I could be more vigilant about:
- descriptive link text: no "this" or "here"
- HTML validation: Do It, at *least* on the base layout
- alt text/image descriptions: figure out how to handle these, if not universally forever then at *least* within the context of a page/project
	- similar vein: video captions, audio transcriptions
- do <strong style="text-transform:uppercase; font-weight:normal">not</strong> use <code>target="_blank"</code> unless it's very, *very* clearly indicated visually and/or in-text
	- if styling is a concern, slap a class on it
- "skip to content" links should be visible when focused
- be careful about using <code>em</code> and <code>rem</code> units
- contrast check minor/selected text