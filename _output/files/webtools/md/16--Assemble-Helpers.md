Wie schon anfänglich erwähnt, bringen Handlebars.js und Assemble eigene Helper-Bibliotheken mit sich. Den `each`-Helper haben wir mittlerweile schon kennengelernt.

Um beispielsweise bestimmte Elemente ein- bzw. auszublenden, kann man `if`- oder `is`-statements defineren.

*if* - Dieser Block-Helper prüft nur, ob ein Element definiert ist.
``` html
{{#if title}}
	<h1>{{title}}</h1>
{{/if}}
```

*is* - Dieser Block-Helper prüft, ob ein Element einen bestimmten Wert hat.
``` html
{{#is title "Home"}}
	<h1>{{title}}</h1>
{{/is}}
```

Leider gibt es keine Möglichkeiten `else is` zu benutzen.

*parseJSON* - Dieser Helper ist sehr mächtig, da er uns die Möglichkeit gibt, variable Daten direkt dem Partial zu übergeben.

``` html
{{#parseJSON
'{
	"carousel-id": "gallery-02",
	"carousel-autoscroll": "true",
	"carousel-pagination": true,
	"carousel-type": "figure",
	"carousel-class": "custom-figure-class",
	"limit-start": "0",
	"limit-end": "5"
}'
}}

	{{partial "_carousel" ../this}}

{{/parseJSON}}
```