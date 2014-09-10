**Yeoman basiert auf NodeJS und wird als globales Modul installiert.**

Mit Yeoman kann man sich Projekte je nach Art und Umfang automatisch aufbauen lassen. 
Yeoman kann durch Sub-Generatoren erweitert werden.

In Projekten mit Einsatz von Yeoman sollte es eine *yo-rc.json* geben. Diese enthällt alle wichtigen Daten zum Aufbau des Projektes.
D.h., Yeoman dient zum initialen Aufsetzen von Projekten und hat danach nichts mehr mit dem Projekt zu tun. 

Wichtigste Befehle:
* Installieren von Yeoman: `npm install -g yo`
* Weitere Generatoren installieren: `npm install –g generatorname`
* Generator starten: `yo generatorname`
