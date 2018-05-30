---
title: JS/CSS Components
weight: 20
aliases: /en/monaca_ide/manual/dependencies/components
---

{{%excerpt%}}
<!-- using full HTML code for other shortcodes otherwise `excerpt` shortcode will break them -->

JS/CSS components are JavaScript and CSS libraries you may need to
include to your project such as jQuery, jQuery mobile, Onsen UI and so
on.

In order to add a JavaScript/CSS library, please do as follows:

1.  From Monaca Cloud IDE, go to <span class="guilabel"><b>
Configure → JS/CSS Component Settings</b></span>.


2.  Then, `JS/CSS Components` page will be shown. You can see several libraries listed there. If you can't find the library you want, input the library's name in a search box to find it.

    <img src="/images/monaca_ide/manual/dependencies/components/components.png" width="" class="single_img">

3.  Assuming you are searching for Angular, a list of matched libraries will be shown after clicking on <span class="guilabel">Search</span> button.

    <img src="/images/monaca_ide/manual/dependencies/components/search_component.png" width="" class="single_img">

4. Click on <span class="guilabel">Add</span> button to include the library you prefer. Then, you can choose which version of the library to include in your project.

    <img src="/images/monaca_ide/manual/dependencies/components/select_version.png" width="500px" class="single_img">

5.  Next, select which files of the library you want to include and click <span class="guilabel">Save</span>.

    <img src="/images/monaca_ide/manual/dependencies/components/select_file.png" width="500px" class="single_img">

6.  After that, you will find your newly added library in the list. Click on <span class="guilabel">Configure</span> button when you want to change the library's version and selected file(s).

    <img src="/images/monaca_ide/manual/dependencies/components/configure_component.png" width="" class="single_img">

When a library is added, its files are added into `www/components`
folder. The following JavaScript and CSS files will also be
automatically updated. These files will always be presented regardless
of which libraries are added into your project.

| File Name | Description |
|-----------|-------------|
| `loader.js` | 	A JavaScript file used by Monaca to load JavaScript libraries |
| `loader.css` | 	A style sheet file used by Monaca to load CSS libraries |

<figure>
    <img data-action="zoom" src="/images/monaca_ide/manual/dependencies/components/component_files.png" width="" class="" style="">
    <figcaption>
    </figcaption>
</figure>

Therefore, libraries can be loaded by simply referencing the two files
(as shown above) in the HMTL file. More specifically, all you need to do
is include the following descriptors within the `<head>` tag of the HTML
file.

```html
<script src="components/loader.js"></script>
<link rel="stylesheet" href="components/loader.css">
```


<div class="admonition note">
    <code>loader.js</code> file also loads <code>cordova.js</code> file.
</div>

<div class="admonition note">
    If you would like to use images within your libraries, you can directly load those image files from the <code>components</code> folder.
</div>

{{%/excerpt%}}