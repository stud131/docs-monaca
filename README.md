# Monaca Docs

These docs are built using [Hugo](https://gohugo.io/). If you do not have it installed, follow the instructions on the Hugo site.

## Update Site flow

1. Fork a branch from the latest master, and name it dev_xxxx.  
2. Edit and commit your code.
3. Merge your branch into the master and see the change on the staging server. 
4. Merge master branch into production branch.
5. Add tag following the rule.   
  (Tag only if your updates affects the other content created in another language.)

```
xxx_language  // (e.g.: 1_en, 2_jp)   
```

  - xxx: sequential number  
  - language: en or ja

6. Draft a new release  
Describe your update points

## Development
Hugo comes with a built-in server which watches for file changes. To use it, just run:

```
hugo server
```

You can then access it in your browser at `http://localhost:1313`.

### Theme
The Monaca docs use a customised fork of the [DocDock theme](https://github.com/vjeantet/hugo-theme-docdock). The CSS for this theme is generated using SASS, which Hugo doesn't support as part of its build process. So, we need to watch and build it separately. First, install the dependencies by running `npm install`. Then you can watch it for changes by running:

```
npm run watch-sass
```

## Release
To build for release, just do the following:

```
npm run build-sass && hugo
```

This will build the docs into the `public` folder.

## Troubleshooting

### Table of contents shows "HAHAHUGOSHORTCODE"
This is caused by using shortcodes in a heading on the page. This causes Hugo to parse it incorrectly, and the result is a the table of contents entries containing the string "HAHAHUGOSHORTCODE". It is a [known issue](https://github.com/gohugoio/hugo/issues/4114).
