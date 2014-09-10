Mit Assemble kann man Daten und Inhalte auslagern und entsprechend referenzieren.

Die Referenzierung erfolgt durch Block-Helper, die den Dateinamen oder `{{#with my-data-file}}{{/with}}` nutzen.

Diese Datendateien werden im PG standardmäßig unter `resources/data` abgelegt.

Folgende Datenformate können dabei in Assemble benutzt werden:
* JSON-Dateien, wie my-data.json
* YAML-Dateien, wie my-data.yml
* YAML Front-Matter, direkt eingebunden auf den Seiten