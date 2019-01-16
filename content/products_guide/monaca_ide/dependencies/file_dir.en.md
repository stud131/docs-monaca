---
title: File and Folder Structure
weight: 10
aliases: /en/monaca_ide/manual/dependencies/file_dir
---

{{%excerpt%}}
<!-- using full HTML code for other shortcodes otherwise `excerpt` shortcode will break them -->

## Cordova Version

With a different Cordova version, the file and folder structure of a Monaca project is configured differently. 

### For Cordova 6.2 and 6.5

| File/Folder Name | Description |
|------------------|-------------|
| [plugins/](#plugins-folder) | Storage folder for additional plugins |
| `res/` | Resources folder for Android, iOS and Winrt |
| [www/](#www-folder) | Storage folder for the main body of the application |
| [config.xml](#config-xml-file) | Application configuration file |

### For Cordova 7.1

| File/Folder Name | Description |
|------------------|-------------|
| [plugins/](#plugins-folder) | Storage folder for additional plugins |
| `res/` | Resources folder for Android, iOS and Winrt |
| [www/](#www-folder) | Storage folder for the main body of the application |
| [config.xml](#config-xml-file) | Application configuration file |
| `package.json` | Cordova plugins management file |

### www Folder

Files of the application's main body are stored here. Files and folders
can be arranged freely within this `www` folder, but the following files
and folders have special significance.

| File/Folder Name | Description |
|------------------|-------------|
| `index.html` | 	The first page to be displayed when the application starts up. The startup file can be changed. |
| [components/](#components-folder) | The folder created by Monaca for all JS/CSS components used in the project. | 

### components Folder

The folder `www/components/` is for all JS/CSS components used in the
project. However, the following two files exist in that folder by
default regardless of what kinds of components you have added for your
project.

| File Name | Description |
|-----------|-------------|
| `loader.js` | 	A JavaScript file used by Monaca to load JavaScript libraries |
| `loader.css` | 	A style sheet file used by Monaca to load CSS libraries |

The `loader.js` and `loader.css` files must be read from an HTML file.

Each component will create its own folder within (one level below)
`www/components/` folder.

<div class="admonition note">    
    <code>loader.js</code> file also loads <code>cordova.js</code> file.
</div>

### plugins Folder

If you import a Cordova plugin using ZIP file, it will be stored inside this folder. However, if you import the plugin using package URL/Plugin ID, the plugin file will be downloaded during build.

### config.xml File

The `config.xml` file is a settings file controlling various settings of Cordova. Please refer to the following documentations regarding how to edit `config.xml` file for Android and iOS:

-   [config.xml for Android]({{<ref "android_configuration.en.md#config-xml">}})
-   [config.xml for iOS]({{<ref "ios_configuration.en.md#config-xml">}})

<div class="admonition note">
    For Cordova 6.2 or higher, <code>config.xml</code> file is also used to config either Android or iOS application settings. Please refer to <a href="/en/reference/third_party_phonegap/custom_config/">
    Cordova Custom Config Plugin</a>.    
</div>

See Also: 

- [Third-party Cordova Plugins](/ja/reference/third_party_phonegap/)
- [Core Cordova Plugins](/ja/reference/cordova_6.5/)

{{%/excerpt%}}