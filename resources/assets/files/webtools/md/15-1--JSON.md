Die JSON-Datei heißt `homepage.json` und sieht so aus:
``` json
{
	"data": [
		{
			"article-class": false,
			"article-header": true,
			"article-h1": "Websites are always individual. Websites are build with different tools. But the setup of websites should always be the same ...",
			"article-h2": "Use PG to give your projects a simple but scalable structure.",
			"article-md": "resources/data/pages/index.md"
		}
	]
}
```

Wenn man diese Daten nun benutzen möchte, geht das sehr einfach:

``` hbs
{{#homepage.data}}
		{{partial "_article" }}
{{/homepage.data}}
```