_"Custom helpers and Lo-Dash mixins are so easy to use with Assemble, the possibilities are truly limitless."_

Eigene Helper lassen sich relativ einfach erstellen. Um den Funktionsumfang von Assemble zu erweitern, reicht es, einen eigenen Helper im helpers-Ordner abzulegen.

PG bringt standardmäßig 3 Block-Helper mit:

**Schleifen**
``` html
{{#times 3}}

	<li class="carousel__items__item">
		{{partial "_carousel__content" }}
	</li>

{{/times}}
```

```
{{#for 0 10 2}}

	<li class="carousel__items__item">
		{{partial "_carousel__content" }}
	</li>

{{/for}}
```

**Limitierung von Output**

```
{{#limit 0 3 data}}

	<li class="carousel__items__item">
		{{partial "_carousel__content" }}
	</li>

{{/limit}}
```