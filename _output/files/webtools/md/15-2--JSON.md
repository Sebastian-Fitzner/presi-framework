Um Inhalte per `each` durchzugehen und auszugeben, benutzen wir den Block-Helper `{{#each}}{{/each}}`.

Ein einfaches Anwendungsbeispiel sieht so aus:

*JSON-Datei: homepage.json*

``` json
{
	"data": [
		{
			"article-h1": "Build your website with PG",
			"article-content": "<p>testcontent</p>"
		},
		{
			"article-h1": "Build your website with PG 2",
			"article-content": "<p>testcontent 2</p>"
		},
		{
			"article-h1": "Build your website with PG 3",
			"article-content": "<p>testcontent 3</p>"
		}
	]
}
```

*Partial: _simple-article.hbs*

``` hbs
<div class="teaser">
	<h1>{{article-h1}}</h1>
	<div class="content">
		{{{article-content}}}
	</div>
</div>
```

*Page: index.hbs*

``` hbs
---
title: testseite
---
{{#homepage}}
	{{#each data}}
		{{partial "_simple-article" }}
	{{/each}}
{{/homepage}}
```