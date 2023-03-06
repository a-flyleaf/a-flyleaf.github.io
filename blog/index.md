---
layout: plaintext2
title: Blog
css: "#blog hr{background:#efefef;} article{margin:.5em 0 1em;} .lnk{text-decoration:none;} .lnk:hover,.lnk:active,.lnk:focus{border-bottom:.1em solid #bfbfbf;} .date{font-family:consolas,monospace; padding-right:.25em;} .excerpt{font-size:.85em; color:#606060;} .excerpt p{margin:.5em 0;} .excerpt p:last-of-type{display:inline;} .more{display:inline-block;} aside{opacity:.65; margin-left:1em;} aside p{font-size:.85em;} @media (prefers-color-scheme:dark){#blog hr{background:#303030;} .excerpt{color:#dfdfdf;}}"
---
Wow! Much word, such ramble. As of 2023 I'm trying to use my own site more, so expect a new post at least once a month.

Page layouts are intentionally inconsistent.
{%assign cutoff = "1673413200"%}

## latest
<section id="blog">{%for post in site.posts%}{%assign check = post.date|date:"%s"%}{%if check>=cutoff%}<hr><article><a href="{{post.url}}" class="lnk"><small class="date">{{post.date|date:"%Y-%m-%d"}}</small> <b>{{post.title}}</b></a><div class="excerpt">{{post.excerpt}}{%if post.content contains "<!--more-->"%} <a href="{{post.url}}" class="more">{read more →}</a>{%endif%}</div></article>{%endif%}{%endfor%}</section>

## older
<ul>{%for post in site.posts%}{%assign check = post.date|date:"%s"%}{%if check<cutoff%}<li><a href="{{post.url}}" class="lnk"><small class="date">{{post.date|date:"%Y-%m-%d"}}</small> <b>{{post.title}}</b></a></li>{%endif%}{%endfor%}</ul>

I still have no idea how to handle the design of this page with excerpts and everything, so older post are getting clusterd down here. The cutoff is somewhat arbitrary; it marks the point where I started writing with the idea these would be Substantial Updates and not *just* random word-spilling. Random word-spilling might happen again anyway, though. We'll&nbsp;see.