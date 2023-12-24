---
layout: plaintext2
title: blog
css: "#blog hr{background:#efefef;} article{margin:.5em 0 1em;} .lnk{text-decoration:none;} .lnk:hover,.lnk:active,.lnk:focus{border-bottom:.1em solid #bfbfbf;} .date{font-family:consolas,monospace; padding-right:.25em;} .excerpt{font-size:.85em; color:#606060;} .excerpt p{margin:.5em 0;} .excerpt p:last-of-type{display:inline;} .more{display:inline-block;} aside{opacity:.65; margin-left:1em;} aside p{font-size:.85em;} @media (prefers-color-scheme:dark){#blog hr{background:#303030;} .excerpt{color:#dfdfdf;}}"
---
Wow! Much word, such ramble.

Post layouts may vary.
<!--{/%assign cutoff = "1673413200"%}-->

<section id="blog">{%for post in site.posts%}<!--{/%assign check = post.date|date:"%s"%}{/%if check>=cutoff%}--><hr><article><a href="{{post.url}}" class="lnk"><small class="date">{{post.date|date:"%Y-%m-%d"}}</small> <b>{{post.title}}</b></a><div class="excerpt">{{post.excerpt}}{%if post.content contains "<!--more-->"%} <a href="{{post.url}}" class="more">{read more →}</a>{%endif%}</div></article><!--{/%endif%}-->{%endfor%}</section>