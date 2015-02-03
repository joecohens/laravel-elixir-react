# laravel-elixir-react

Simple extension to *laravel elixir* to precompile Facebook React JSX templates into javascript.

## Install

```
npm install --save-dev laravel-elixir-react
```

## Usage

### Example *Gulpfile*:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-react');

elixir(function(mix) {
    mix.react("bootstrap.jsx");
});

```
First argument is the entry point of your application _(default directory is resources/assets/js)_. Second argument is destination directory. In third argument you could pass react options. Two latest parameters are optional. In production bundle will be compressed.

#### Advanced example

```javascript
elixir(function(mix) {
    mix.react("bootstrap.js", "public/js", {
    	output: {
            filename: "bundle.js"
        }
    });
});
```
