---
title: Monaca CLI Commands
weight: 20
aliases: /en/monaca_cli/manual/cli_commands
---

| Commands |	Description |
|----------|----------------|
| [monaca login](#monaca-login/) |	Sign in to Monaca Cloud. |
| [monaca logout](#monaca-logout/) |	Sign out from Monaca Cloud. |
| [monaca update](#monaca-update/) |	Update projects created with CLI 2.x to the latest Monaca project structure. |
| [monaca init](#monaca-init/) |	Initialize projects created using other CLI tools to be able to execute with Monaca. |
| [monaca signup](#monaca-signup/) |	Register a new Monaca account. |
| [monaca create](#monaca-create/) |	Create a new local Monaca project from a template. |
| [monaca clone](#monaca-clone/) |	Clone a project from Monaca Cloud. |
| [monaca import](#monaca-import/) |	Import a project from Monaca Cloud. |
| [monaca download](#monaca-download/) |	Download a project from Monaca Cloud. |
| [monaca upload](#monaca-upload/) |	Upload a project to Monaca Cloud. |
| [monaca signing](#monaca-signing/) | Manage signing configurations for iOS and Android builds. |
| [monaca remote build](#monaca-remote-build/) |	Build a project on Monaca Cloud. |
| [monaca remote config](#monaca-remote-config/) |   Open the project configuration on Monaca Cloud. |
| [monaca preview](#monaca-preview/) |	Run a local web server for preview .|
| [monaca debug](#monaca-debug/) |	Run app on device using Monaca Debugger. |
| [monaca transpile](#monaca-transpile/) |	Transpile project source code. |
| [monaca config](#monaca-config/) |	Manage Monaca CLI configuration. |
| [monaca plugin](#monaca-plugin/) |	Manage Cordova plugins of a project. |
| [monaca docs](#monaca-docs/) |	Display docs for Monaca CLI, Onsen UI and Tutorials. |

## monaca login

Signs in to Monaca Cloud. You will be prompted to input your Monaca
account information (username and password).

{{<highlight javascript>}}
$ monaca login [options]
{{</highlight>}}

**Options**

- `email`: Email address used to login to Monaca Cloud.

**Example**

Here is an example of how to login to Monaca Cloud with Monaca CLI:

{{<highlight javascript>}}
$ monaca login
$ monaca login me@monaca.io
$ echo "mypass" | monaca login me@monaca.io
{{</highlight>}}

## monaca logout

Signs out from Monaca Cloud and removes stored login token.

{{<highlight javascript>}}
$ monaca logout
{{</highlight>}}

**Example**

Here is an example of how you logout from Monaca Cloud with Monaca CLI:

{{<highlight javascript>}}
$ monaca logout
Signing out from Monaca Cloud...
You have been signed out.
Removed Monaca Debugger pairing information.
{{</highlight>}}

## monaca update

This command is available from Monaca CLI 3.x. It is used to update old projects created with Monaca CLI 2.x.

**Non-transpile Project**

The `package.json` will be created/modified with the following changes:

- A `monaca:preview` command will be added to the `script` property.
- A `dev` command will be added to the script unless it already exists.
 - `"dev": "browser-sync start -s www/ --watch --port 8080 --ui-port 8081"`
- `Browser-sync` and `Cordova` will be added as `devDependencies`.

**Transpile Projects**

The `package.json` will be modified with the following changes:

- `monaca:preview`, `monaca:transpile` and `monaca:debug` commands will be added to the `script` property.
- `dev`, `build`, and `watch` commands will be added to the script unless they already exist.
- Required packages including `Webpack` and `Cordova` will be added as `devDependencies`.

{{<highlight javascript>}}
$ monaca update [options]
{{</highlight>}}

**Options**

- `--force`: Accept default.
- `--createPackageJson`: Create a basic package.json file with name and description for project doesn't have `package.json` file.

**Example**

Here is an example of how to use this command:

{{<highlight javascript>}}
$ monaca update
$ monaca update --force --createPackageJson
{{</highlight>}}

## monaca init

This command is available from Monaca CLI 3.x. Initialize projects created using other CLI tool to be able to execute it with Monaca (Monaca CLI, Monaca Cloud IDE, Monaca Localkit). The following resources will be added to the project.

- `www/components`: Monaca loaders needed to use the GUI page to include CSS/JavaScript libraries into the project.
- `config.xml`: global configuration file that controls many aspects of a cordova application's behavior.
- `res`: Android, iOS and Window Icons and Splashes (users can remove it after the init process).
- `cordova`: Cordova 7.1 is installed as a dev dependency in case the project does not have it.
- `.monaca/project_info.json`: A JSON file with some information such as cordova version and framework_version.

{{<highlight javascript>}}
$ monaca init
{{</highlight>}}

**Example**

Here is an example of how to use this command:

{{<highlight javascript>}}
$ monaca init
{{</highlight>}}

## monaca signup

Signs up for Monaca Cloud. Will display a prompt that asks for user credentials.

{{<highlight javascript>}}
$ monaca signup [options]
{{</highlight>}}

**Options**

- `email`: Email address used to register in Monaca
    
**Example**

Here is an example of how you use this command:

{{<highlight javascript>}}
$ monaca signup
$ monaca signup me@monaca.io
{{</highlight>}}

## monaca create

Creates a new local Monaca project from a template at a specified path.
You will be asked to choose a project template from a list of available
templates provided by Monaca Cloud. The selected template will be
created at the specified location.

{{<highlight javascript>}}
$ monaca create [options]
{{</highlight>}}

**Options**

- `path`: Location where you want to store your project files
- `--url`: URL of a zip file containing a Monaca template
    
**Example**

Here is an example of how to login to Monaca Cloud with Monaca CLI:

{{<highlight javascript>}}
$ monaca create MyProject/Demo
$ monaca create MyProject/Demo --url http://github.com/me/myproject/archive/master.zip
{{</highlight>}}

##  monaca clone

Clones a project from the Monaca Cloud into your local PC at a specified
location. You will be asked to select a project from a list of all your
existing projects in Monaca Cloud and specify a location for the
downloaded project.

{{<note>}}
    If you clone a project into your local PC from Monaca Cloud, the cloned project keeps cloud synced information. In other words, if you make changes to this project locally and upload (using {{<link href="#monaca-upload" title="monaca upload">}}) them to Monaca Cloud, they will overwrite older files of the same project.
{{</note>}}

{{<highlight javascript>}}
$ monaca clone
{{</highlight>}}

**Example**

Here is an example of how to clone a project called `Memo Application` from Monaca Cloud into "CloneMemoProject" folder on your local PC.

{{<figure src="/images/monaca_cli/manual/cli_commands/clone.png" width="600">}}

##  monaca import

Imports a project from Monaca Cloud. You will be asked to select a
project from a list of all your existing projects in Monaca Cloud and
specify a location for the downloaded project.

{{<note>}}
    If you import a project into your local PC from Monaca Cloud, the imported project doesn’t keep cloud synced information. In other words, if you make changes to this project locally and upload (using {{<link href="#monaca-upload" title="monaca upload">}}) them to Monaca Cloud, this project will be uploaded as a new project in Monaca Cloud.
{{</note>}}

{{<highlight javascript>}}
$ monaca import
{{</highlight>}}

**Example**

Here is an example of how to import a project called `Memo Application` from Monaca Cloud into `ImportedMemoApplication` folder on your local PC.

{{<figure src="/images/monaca_cli/manual/cli_commands/import.png" width="600">}}

## monaca download

Downloads updates/changes (of the corresponding synced project) made in
Monaca Cloud into the local project.

{{<note>}}
    This command will overwrite the changes into the local project. If your local project does not exist in Monaca Cloud, you can’t use this command.
{{</note>}}

{{<highlight javascript>}}
$ monaca download [options]
{{</highlight>}}
    
**Options**

- `--delete`: Deletes local files which do not exist in Monaca Cloud.
- `--force`: Doesn't ask users for permission to continue.
- `--dry-run`: Simulates the downloading operation and provides details of which files will be downloaded. No actual downloading operation is done.
    
**Example**

Navigate to your project folder. Then, type `monaca download` command with various options and see how it works.

{{<figure src="/images/monaca_cli/manual/cli_commands/download.png" width="600">}}

## monaca upload

Uploads the current project files to Monaca Cloud. The project files
will be compared with the corresponding remote files so that only the
new and changed ones will be uploaded. The uploading process will be
done in one of the following ways:

1.  If the current project is a new/imported project, this command will
    upload the whole project as a new project in Monaca Cloud.
2.  If the current project is a cloned project, this command will
    overwrite the same existing project in Monaca Cloud. In other words,
    only changed and new files will be uploaded.

{{<note>}}
    For transpilable projects, <code>monaca upload</code> command will transpile the project before uploading them.
{{</note>}}

{{<highlight javascript>}}
$ monaca upload [options]
{{</highlight>}}

**Options**

- `--delete`: Deletes the project files in Monaca Cloud which do not exist locally.
- `--force`: Doesn't ask users for permission to continue the uploading process.
- `--dry-run`: Simulates the uploading operation and provides details of which files will be uploaded. No actual uploading operation is done.
    
**Example**

Navigate to your project folder. Then, type `monaca upload` command with various options and see how it works.

{{<figure src="/images/monaca_cli/manual/cli_commands/upload.png" width="600">}}

## monaca signing

Manages signing configurations for iOS and Android builds.

{{<highlight javascript>}}
$ monaca signing <action> <item>
{{</highlight>}}

**action**

- `generate`: can be used with `keystore` or `pkcsr`.
- `upload`: can be used with`keystore`, `pkcs12`, `certificate` or `provisioning`.
- `add`: can be used with `alias`.
- `remove`: can be used with `alias`, `pkcs12`, `certificate` or `provisioning`.
- `export`: can be used with `keystore` or `pkcsr`.

**item**

- `alias`: alias within a keystore file
- `keystore`: Android keystore
- `pkcsr`: CSR (Certificate Signing Request) file
- `pkcs12`: private key with certificate
- `certificate`: iOS certificate
- `provisioning`: iOS provisioning profile

{{<note>}}
    For more information on how to sign or create iOS and Android build settings (involving keystore, private key, certificate & provisioning profile), please refer to {{<link title="Configure iOS Build Settings" href="/en/products_guide/monaca_ide/build/ios/build_ios/#configure-ios-build-settings">}} and {{<link title="Configure Android Keystore" href="/en/products_guide/monaca_ide/build/build_android/#step-2-configure-android-keystore">}}, respectively. 
{{</note>}}
    
**Example**

Navigate to your project folder and try to use these commands:

{{<highlight javascript>}}
$ monaca signing generate keystore
$ monaca signing generate pkcsr
$ monaca signing add alias
$ monaca signing upload keystore
$ monaca signing upload pkcs12
$ monaca signing upload certificate
$ monaca signing upload provisioning
$ monaca signing export keystore
$ monaca signing export pkcsr
$ monaca signing remove alias
$ monaca signing remove pkcs12
$ monaca signing remove certificate
$ monaca signing remove provisioning
{{</highlight>}}

##  monaca remote build

Builds the project in Monaca Cloud. If your project does not exist in
Monaca Cloud yet, it will be automatically uploaded to the cloud first
before the build starts. However, if your project already exists in
Monaca Cloud, all its local updates/changes will be uploaded to the
cloud first before the build starts.

Please refer to [Build](/en/products_guide/monaca_ide/build) for more information on how to:

-   config build settings for each platform
-   types of build
-   build the application for each platform
-   get/install the built apps

{{<highlight javascript>}}
$ monaca remote build <platform> [options]
{{</highlight>}}

**Options**

- `platform`: Builds for a specific platform. It can be: `ios`, `android` or `windows`.
- `--build-type`: Chooses a build type. It can be:

    - `debug`: (for iOS, Android and Windows) It is the default option.
    - `test`: (for iOS only)
    - `release`: (for iOS and Android)

- `--output`: The path in which the built file will be stored (including the filename)
- `--android_webview`: (Android only) Chooses a type of webview. It can be: `default` or `crosswalk`.
- `--android_arch`: (Android only) Required if `--android_webview` is `crosswalk`. It can be: `x86` or `arm`.
- `--browser`: Opens the build process in a browser (see the screenshots below).
    
**Example**

Navigate to your project folder and try to use this command with different options:

{{<highlight javascript>}}
$ monaca remote build ios
$ monaca remote build ios --build-type=debug
$ monaca remote build android --build-type=debug --android_webview=crosswalk --android_arch=arm
$ monaca remote build --browser
{{</highlight>}}

{{<figure src="/images/monaca_cli/manual/cli_commands/build_window.png">}}

##  monaca remote config

Open the project configuration on Monaca Cloud. Once the configuration has been performed, execute `monaca download` to get the changes locally.

{{<highlight javascript>}}
$ monaca remote config
{{</highlight>}}

**Use Case**

Navigate to your project folder and try to execute these commands:

{{<highlight javascript>}}
$ monaca remote config
$ monaca download
{{</highlight>}}

## monaca preview

Starts a local web server that serves the `www` assets. The command will
watch the file system for changes and reload the browser when a change
occurs. It will execute `npm run monaca:preview` defined in package.json.

{{<note>}}
    For transpilable projects, <code>monaca preview</code> command will transpile the project in memory before launching the previewer. Additionally, if the preview is still running and you make a change, the transpile process should be triggered and the previewer will be served with the new files.
{{</note>}}

{{<highlight javascript>}}
$ monaca preview
{{</highlight>}}

**Example**

Navigate to your project folder and use `monaca preview` command. Then, a browser will be opened running your project.

{{<figure src="/images/monaca_cli/manual/cli_commands/preview.png" width="600">}}
{{<figure src="/images/monaca_cli/manual/cli_commands/preview_window.png" width="600" title="Preview Window">}}

{{<note>}}
    In order to stop <code>monaca preview</code> process, press <code>Ctrl+c</code>.
{{</note>}}

##  monaca debug

Debugs one or more applications on a device and receives code changes
instantly. This command starts a web server for Monaca Debugger to
connect to. It also starts broadcasting messages to tell debuggers in
the local network to connect to it. When a debugger is connected, it
will send file system changes to the debugger. It will execute `npm run monaca:debug` defined in package.json.

{{<note>}}
    For transpilable projects, <code>monaca debug</code> command will transpile the project before serving the files to Monaca Debugger. Additionally, if the debug is still running and you make a change, the transpile process should be triggered and the debugger will be served with the new files.
{{</note>}}

{{<highlight javascript>}}
$ monaca debug [options]
{{</highlight>}}

**Options**

- `paths`: List of directories. Omit it to serve the current directory.
- `--port`: HTTP port to listen to (default value is 8001)

**Example**

Navigate to your project folder and use `monaca debug` command.
Then, you should be able to see that project name in Monaca Debugger
under `Local Projects` section. Click on that project in order to
run it. Please try to make some changes to the project and save
them. You should be able to see those changes reflect instantly.

{{<highlight javascript>}}
$ cd MyProjectFolder/ImportRssProject
$ monaca debug
{{</highlight>}}

When running this command, you should be prompted to pair your
debugger with your local PC or see the notification of successful
network connection (see the screenshots). Otherwise, please refer to [Fail to Pair Monaca Debugger](/en/products_guide/debugger/troubleshooting/#fail-to-pair-monaca-debugger).

{{<multi_figures title="Pairing Dialog & Network Connection Notification">}}
{{<img src="/images/monaca_cli/manual/cli_commands/1.png" width="300">}}
{{<img src="/images/monaca_cli/manual/cli_commands/2.png" width="300">}}
{{</multi_figures>}}

{{<note>}}
    In order to stop <code>monaca debug</code> process, press <code>Ctrl+c</code>.
{{</note>}}

## monaca transpile

Transpiles projects that are transpilable such as ReactJS, VueJS and Angular
projects. It will execute `npm run monaca:transpile` defined in package.json.

{{<highlight javascript>}}
$ monaca transpile
{{</highlight>}}
    
**Example**

Navigate to your transpilable project folder and use `monaca transpile` command. Then, the transpiling will begin.

{{<highlight javascript>}}
$ monaca transpile

Running Transpiler...
Build completed in 71.835s

....
{{</highlight>}}

## monaca config

Manages proxy and API endpoint configuration.

{{<highlight javascript>}}
$ monaca config [options]
{{</highlight>}}

**Options**

- `proxy <url>`: If &lt;url&gt; is not set, the current proxy server will be displayed.
- `endpoint <url>`: If &lt;url&gt; is not set, the current API endpoint will be displayed.
- `--help`: Displays a config helper.
- `--reset`: Resets to the default value.
    
**Example**

Here are examples of how to use this command:

{{<highlight javascript>}}
$ monaca config --help
$ monaca config proxy
$ monaca config proxy http://my.proxy.com:8080
$ monaca config proxy --reset

$ monaca config endpoint
$ monaca config endpoint my.endpoint.com
$ monaca config endpoint --reset
{{</highlight>}}

## monaca plugin

Manages plugins of a project such as adding new plugins, listing and
removing installed plugins.

{{<highlight javascript>}}
$ monaca plugin [options]
{{</highlight>}}

**Options**

- `add <plugin>`: Adds a plugin.
- `rm <plugin>`: Removes a plugin.
- `ls|list`: Lists currently installed plugins.
- `search <query>`: Searches the plugin directory.

**Example**

Navigate to your project folder and type the command below and see how it works:

{{<highlight javascript>}}
$ monaca plugin add org.apache.cordova.camera
$ monaca plugin rm org.apache.cordova.camera
$ monaca plugin search keyboard
$ monaca plugin ls
{{</highlight>}}

## monaca docs

Displays docs for Monaca CLI, Onsen UI and Tutorials.

{{<highlight javascript>}}
$ monaca docs [options]
{{</highlight>}}

**Options**

- `onsen`: Opens Onsen UI documentation in a browser window.
- `tutorial`: Opens Onsen UI tutorial in a browser window.
- `usage`: Opens Monaca CLI documentation in a browser window.
    
**Example**

Here is an example of how to use this command:

{{<highlight javascript>}}
$ monaca docs onsen
$ monaca docs tutorial
$ monaca docs usage
{{</highlight>}}

{{<figure src="/images/monaca_cli/manual/cli_commands/monaca_docs.png" title="monaca docs tutorial">}}

See Also:

- [Monaca CLI Tutorial](../tutorial/)
- [Monaca CLI Overview](../overview/)
- [Project Dependencies](../dependencies/)
- [Pairing and Debugging](../pairing_debugging/)
- [Remote Building and Publishing](../build_publish/)
- [Troubleshooting Guide](../troubleshooting/)
