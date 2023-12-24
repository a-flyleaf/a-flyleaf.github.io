---
layout: plaintext2
title: a few notes on privacy
css: "small{display:inline-block; margin:.5em 0 0 1em;} del{opacity:.35;} #update{border:.05em dotted; border-radius:.5em; padding:0 1em;} #update p{font-size:.85em;} .lnk{text-transform:uppercase;}"
---
**This is not a Privacy Policy**; I am not a lawyer.

I am not interested in your data, and thus do not use analytics, statcounters, link tracking, advertisements, or anything of that sort. You can double check this in [the repository](https://github.com/a-flyleaf/a-flyleaf.github.io) if you’d like.

That said, it is **possible** that relevant services collect visitor information anyway. None of this goes to me, but in the interest of transparency:

## GitHub
This site is hosted on [GitHub Pages](https://pages.github.com/). The following note used to be on the GitHub Privacy&nbsp;Statement page:

> Please note that GitHub may collect [Technical Information](https://web.archive.org/web/20190427235834/http://help.github.com/en/articles/github-privacy-statement#categories-of-personal-information) from visitors to your GitHub Pages website, including logs of visitor IP addresses, to maintain the security and integrity of the website and service.

This changed at some point, and as of March 2023 the [Privacy&nbsp;Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement) ([archived](https://web.archive.org/web/20230306182554/https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)) only discusses "Enterprise Marketing Pages." This is sure as hell not a GitHub marketing site, so I'm not sure if the info-collection still applies.

## Google
Not my favorite megacorporation in the world, but I'm stuck in its omnipresent chokehold nonetheless. I try to minimize its influence here, but for the record:

- Pages from before November&nbsp;2021 may use [Google&nbsp;Fonts](https://www.brycewray.com/posts/2020/08/google-fonts-privacy/). As of July&nbsp;2022, it's been replaced with [local embeds](https://gwfh.mranftl.com/fonts) on [the old default layout](https://github.com/a-flyleaf/a-flyleaf.github.io/search?q=layout%3A+default) and [a discontinued project's pages]({{site.url}}/projects/tfe), but I&nbsp;haven't gotten around to swapping it out elsewhere.
- Art pages may have YouTube embeds, because I am not immune to convenience and occasionally work with video.

## Nitter? Piped?
Alternative frontends to Twitter and YouTube, respectively. I try to link the official instances ([nitter.net](https://nitter.net/) and [piped.video](https://piped.video/))~~, but also use [notabird.site](https://notabird.site/) and [piped.garudalinux.org](https://piped.garudalinux.org)~~\*. **These links are interchangeable**, in the event of one instance not loading or if you want to access the original tweet/video:
- <code>nitter.net/<span class="lnk">link</span></code> ~~= <code>notabird.site/<span class="lnk">link</span></code>~~ = <code>twitter.com/<span class="lnk">link</span></code>
- <code>piped.video/<span class="lnk">link</span></code> ~~= <code>piped.garudalinux.org/<span class="lnk">link</span></code>~~ = <code>yewtu.be/<span class="lnk">link</span></code>\*\* = <code>youtube.com/<span class="lnk">link</span></code>

<div id="update" markdown="1">
\* update August 2023: piped.garudalinux kept redirecting to a Cloudflare DDoS page, so I've stopped using it altogether. Meanwhile, notabird.site is down wholesale, and Nitter struggles intermittently as Twitter-not-Twitter flips the bird to guests and goes continually downhill in general.

\*\*update 2, December 2023: Piped *in general* has been spitting up errors lately. I haven't changed older links, but I've been using [Invidious](https://yewtu.be/) instead.

*Modern internet is hell.*
</div>

### "Frontend"? "Instance"?? What the hell are you talking about???
Ever wanted to browse Twitter/YouTube with none of the ads, recommendations, or other bloat? *Bam*, enjoy ;V These websites essentially serve as giant embeds, and frankly I don't know enough tech talk to explain how else it works.

But I *do* know Twitter and YouTube are relentless data-munchers, and I like [open&nbsp;source](https://itsfoss.com/what-is-foss/) projects like these on principle. The downside is that, because these sites are much smaller and entirely reliant on the host continuing to behave as expected, sometimes they just don't load---hence the note above about link interchangeability. A small price to pay for not getting unsolicited recs shoved in your face, IMO.