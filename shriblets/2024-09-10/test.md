---
layout: none

lines: #who face dialogue
  - w: r
    f: [b1,e1,m2]
    d: "Hello, world?"
  - w: b
    f: [b2,e2,m1]
    d: "'Sup."
---
<html>
<head>
	<title>talksprite test thign</title>
	<link rel="stylesheet" href="css.css">
	<style>code{display:block; margin-top:.25em;}</style>
</head><body>

{%for l in page.lines%}<div class="dlg {%if l.w=="r"%}red{%else%}blue{%endif%}">
	<div class="face">{%for f in l.f%}
		<div class="fc {{f}}"></div>
	{%endfor%}</div>
	<b>{%if l.w=="r"%}Red{%else%}Blue{%endif%}</b>: {{l.d}}
	
	<code>[{%for f in l.f%}{%unless forloop.first%},{%endunless%}{{f}}{%endfor%}]</code>
</div>{%endfor%}

</body>
</html>