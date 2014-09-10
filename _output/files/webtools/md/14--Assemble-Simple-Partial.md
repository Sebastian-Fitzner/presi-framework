Dies sind zwei Varianten, wie ein Partial aussehen kann:

*Simple Partial*
``` html
---
component: sitemap
---

{{! USED IN:
	* pages/index.hbs
}}
<ul>
	<li>
		<a href="#">{{title}}</a>
	</li>
</ul>
```

*Advanced Partial*
``` html
---
component: Generic Article Component
---

<article class="article {{article-class}}">

	{{#if article-header}}
		{{partial "_article__header"}}
	{{/if}}

	{{#if article-figure }}
		{{partial "_figure" }}
	{{/if}}

	<div class="article__content">
		{{#if article-summary}}
			{{{truncate article-content article-summary "..." }}}
		{{else}}
		{{! Use md files (md article-md) or json content (article-content) or both}}

			{{{ article-content }}}
			{{md article-md}}

		{{/if}}
	</div>

	{{#if article-morelink}}
		{{partial "_article__read-more" }}
	{{/if}}

</article>
```