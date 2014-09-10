_Layouts are used for "wrapping" the content of individual pages with common elements, such as the `<head></head>` and footer sections, which usually contain necessities such as `<link>` and `<script>` tags._

Das einfachste Template sieht so aus:

```
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" class="no-js"> <!--<![endif]-->

<head>
	{{> _metadata }} <!-- standard partial -->
	{{> _styles }} <!-- standard partial -->
</head>

<body class="">

	{{> body }} <!-- reservierter partial -->

</body>
</html>
```

Wer mehr Infos zum Layouting in Assemble haben möchte:
* http://www.prototype-generator.com/templating-in-pg/template-layouts.html
* http://www.prototype-generator.com/templating-in-pg/template-layouts--extended.html