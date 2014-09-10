Assemble benutzt Handlebars.js als Template-Sprache. Die Syntax sieht dabei wie folgt aus:

*Simple Expression*
```
{{ title }}
```

*Full Expression with complete Mark Up*
```
{{{ title }}}
```

*Standard Partials*
```
{{> _metadata }}
```

*Advanced Partials*
```
{{partial "_metadata" }}
```

*Block Helper*
```
{{#if }}{{/if}}
```

*Comments*
```
{{! comment }}
```

