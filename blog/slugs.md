---
layout: none
---
dirt simple page, because filenames ≠ actual urls and it's probably only a matter of time before I get that messed up

<table>
	<thead><tr><th>date</th><th>name + link</th><th>slug</th></tr></thead>
	<tbody>{%assign posts = site.posts|sort:date%}{%for post in posts%}<tr>
		<td><small>{{post.date|date:"%Y-%m-%d"}}</small></td>
		<td><a href="{{post.url}}">{{post.title}}</a></td>
		<td><b>{{post.slug}}</b></td>
	</tr>{%endfor%}</tbody>
</table>

[← back to blog index](./)

<style>table{font-family:monospace; font-size:1.15em;} td{padding:.25em;} small{color:#808080;} a{color:inherit; text-decoration-color:#dfdfdf; text-decoration-thickness:.15em;} a:hover,a:focus,a:active{text-decoration:none; color:#808080;} td:last-child,th:last-child{padding-left:.5em;}
th{text-align:left; padding:0 .25em; color:#808080;}</style>