# laravel-elixir-react

Simple extension to *laravel elixir* to precompile Facebook React JSX templates into javascript.

## Install

```
npm install --save-dev laravel-elixir-react
```

## Usage

### Example *Gulpfile*:

```javascript
var elixir = require("laravel-elixir");

require("laravel-elixir-react");

elixir(function(mix) {
    mix.react("app.jsx");
});

```
First argument is the entry point of your application _(default directory is resources/assets/js)_. In third argument you could pass react options. In production bundle will be compressed.

#### Advanced example

```javascript
elixir(function(mix) {
    mix.react("app.jsx", {
    	output: "app.js",
        sourceMap: false,
        harmony: false,
        sourceFilename: "app.js.map",
        stripTypes: false
    });
});
```
