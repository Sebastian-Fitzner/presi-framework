Pages beinhalten den Inhalt einer Seite und können wie folgt aufgesetzt werden:

``` hbs
---
bodyclass: front
title: Prototype Deluxe
lead: Welcome to your own prototype!
---

<div class="slides">
	<h2> {{ lead }} </h2>
	<div class="loader"></div>
</div>

```

Folgendes ist hier wichtig:
* Pages können YML-Inhalte besitzen
* YML-Inhalte können im Layouts oder in der Page verarbeitet werden
* Pages können Layouts direkt ansprechen

``` hbs
---
bodyclass: front
title: Prototype Deluxe
lead: Welcome to your own prototype!
layout: tpl_seitentyp
---

<div class="slides">
	<h2> {{ lead }} </h2>
	<div class="loader"></div>
</div>

```