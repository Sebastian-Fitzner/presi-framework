# Presentation Framework written in BackboneJS and RequireJS
This is just a simple framework which can be used to create nice and simple presentations.


## Install Requirements
The project is build in grunt. The only thing you have to do, is to install all the dependencies with:

´´´
npm install
´´´

## How to use
It uses a JSON file to store your slides.
You can find this file under __resources/data/data-sync/slides/webtools.json__.

## How it works
- You can use markdown files for writing your slides. (It will be rendered with marked.js)
- You can use snippet files (like css files, hbs files, js files etc.) and the code in your files will be displayed on the slide with syntax highlighting (I use highlight.js)