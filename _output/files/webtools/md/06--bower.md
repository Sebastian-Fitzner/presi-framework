**Bower basiert auf NodeJS, wird als globales Modul installiert und benötigt Git.**

Mit Bower kann man Web-Pakete wie Foundation, Bourbon, AngularJS, Bootstrap und viele mehr verwalten. D.h., alle Abhängigkeiten werden automatisch mit heruntergeladen. 
In Projekten mit Einsatz von Bower sollte es eine bower.json oder component.json geben.

Ähnlich wie Grunt benutzt Bower eine JSON-Datei um seine Pakete für das Projekt zu verwalten.

Weiterhin kann man mit der *.bowerrc* den Speicherpfad der heruntergeladenen Bower-Komponenten bestimmen.

**Wichtigste Befehle:**
* Installieren von Bower: `npm install -g bower`
* Schon definierte Pakete installieren: `bower install`
* Paket via Bower installieren: `bower install package (--save-dev)`
* Pakete finden: `bower search package`


