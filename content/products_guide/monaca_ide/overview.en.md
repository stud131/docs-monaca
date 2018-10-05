---
title: Overview
weight: 10
aliases: /en/monaca_ide/manual/overview/
---

Monaca Cloud IDE is a browser-based development environment. Right from your Web browser, all of your Cordova development can be done without any setup.

In this page, we will explain the Graphic User Inteface (GUI) of Monaca Cloud IDE.

##  Menu Bar

{{<figure src="/images/monaca_ide/manual/overview/menu.png" >}}

In the menu bar, there are several main menus such as:

| Menu Item | Description |
|-----------|-------------|
| `File` | Shows [File](#file) sumbmenu. |
| `Edit` | Shows [Edit](#edit) submenu. |
| `View` | Shows [View](#view) submenu. |
| `Run `| Shows [Run](#run) submenu. |
| `Build` |	Shows [Build](#build) submenu. |
| `Project` | Shows [Project](#project) submenu. |
| `Configure` | Shows [Configure](#configure) submenu. |
| `Backend` |	Opens [Monaca Backend](/en/products_guide/backend) in a new window. |
| `Help` | Shows various ways you can find help during your development. |

###  File

| Menu Item | Description |
|-----------|-------------|
| New File |	Creates a new file. |
| Save |	Saves the file currently openeded. |
| Save All |	Saves all the files currently openeded. |
| Upload |	Uploads the files in the current folder. |

###  Edit

| Menu Item | Description |
|-----------|-------------|
| Undo | Undoes the latest action. |
| Redo | Redoes the previous action. |
| Search | Searches for a string in the currently opened file. |
| Replace |	Replaces a found string in the currently opened file. |
| Search All Files | Searches across all project files. |
| Comment |	Comments out/in the current line. |

###  View

| Menu Item | Description |
|-----------|-------------|
| Debugger Tab | Shows/Hides Debugger tab |
| Reset Layout | Resets the IDE's layout to the default arrangement. |

###  Run

| Menu Item | Description |
|-----------|-------------|
| Show Preview Tab | Opens Previewer. |
| Run on Device | Runs the project on Monaca Debugger. |
| Setup Monaca Debugger | Installs the Monaca Debugger on your device. |

### Build

| Menu Item | Description |
|-----------|-------------|
| Build App for Android |	Builds the app for Android device. |
| Build App for iOS |	Builds the app for iOS device. |
| Build App for Windows |	Builds the app for Windows device. |
| Build History |	Shows all build history of the current project. |
| CI History |	Shows all Continuous Integration history of the current project. |

### Project

| Menu Item | Description |
|-----------|-------------|
| Commit | Commits local changes. |
| Show Commit History |	Shows all commits history from Monaca Cloud IDE. |
| Pull | Pulls remote changes. |
| Push | Pushes local changes to remote server. |
| Show Remote History |	Shows all commits history in remote server. |
| VSC Configure	| Configures the remote repository. |
| [Share](#share) | Invites other Monaca users to join the project. |
| Export | Exports Monaca project. |
| Publish | Makes the current project public (see [Publish Project](#publish-project)). |
 
For more information to enable vision control on your project, please refer to [Version Control](../version_control).

###  Configure

| Menu Item | Description |
|-----------|-------------|
| App Settings for Android | Configures Android app’s information (see [Configure Android App](../build/build_android/#step-1-configure-android-app)). |
| App Settings for iOS | Configures iOS App’s information (see [Configure iOS App Settings](../build/ios/build_ios/#configure-ios-app-settings)). |
| App Settings for Windows | Configures necessary information to build a Windows app (see [Configure Windows App Settings](../build/build_winrt/#step-1-configure-windows-app-settings)). |
| Cordova Plugin Settings | Enables/Disables Cordova plugins in the current project (see [Cordova Plugins](../dependencies/cordova_plugin/)). |
| JS/CSS Component Settings | Adds/Removes JavaScript and CSS libraries to/from the current project (see [JS/CSS Components](../dependencies/components/)). |
| Service Integration Settings | Integrates various services to Monaca projects in the form of plugins (see [Service Integration](/en/reference/service_integration/)). |
| Continuous Integration | Automates building and deployment cycles (see [Monaca CI](../monaca_ci/)).|
| Deploy Service | Adds/Removes deployment services for Monaca CI (see [Deploy Services](../monaca_ci/supported_services/)). |
| Workspace Configuration | Configures the appearance of code editor. |

##  Publish Project

This feature allows you to make your project available to other users by
sharing the link generated after publishing your project. By accessing
the generated link, users can get a copy of their own in their account.
All changes made in the copies are not transferred to the original, so
there will be no fear of someone messing up the original.

Publishing your project is really easy and done by following the next
simple steps:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Project" menu2="Publish">}}.
2.  Click on {{<guilabel name="Publish" >}} button.

    {{<img src="/images/monaca_ide/manual/overview/14.png" >}}

3.  Use the generated link to share your project.

    {{<img src="/images/monaca_ide/manual/overview/15.png" >}}

{{<note>}}
    If you no longer wish for your project to be available, you can make it private again by clicking the {{< guilabel name="Make Private">}} button that appears after publishing your project.
{{</note>}}

## Direct Import

With this feature, we allow Monaca users to directly import published
Monaca projects or projects from a given URL directly by just accessing
a link. Upon accessing the link, the users will be forwarded to the
following screen (if signed in), whereby just clicking the import button
the project will be imported into their account.

{{<figure src="/images/monaca_ide/manual/overview/16.png">}}

## Debugger Tab

Once Monaca Debugger is connected with Monaca Cloud IDE, you can do
console debugging as well DOM inspection in this panel. For more
information, please refer to [Monaca Debugger with Monaca Cloud IDE](/en/products_guide/debugger/debug/#monaca-debugger-with-monaca-cloud-ide).

{{<figure src="/images/monaca_ide/manual/overview/debugger.png" >}}

## Preview Log Tab

Preview Log tab is a terminal window for running HTTP service for providing content in Previewer.

{{<figure src="/images/monaca_ide/manual/overview/preview_log.png" >}}

## Previewer

The Previewer provides an overview of your app in real-time. You can
also interact with the Previewer as if it is running on an actual device
with the limitation of executing the specific device’s functionality
(such as camera, contact and so on) and cross-origin network AJAX
request. Along with the Monaca Debugger, you will have effective and
efficient experiences during app development.

In this tab, you can:

-   refresh the Previewer.
-   change the display device's screen by clicking on the `Configure` icon
    in that tab. Then, you will see a drop-down list of different
    devices such as iPad, iPhone, and Nexus. You can change the
    orientation of the screen as well.
-   detach/attach the Previewer.

{{< figure src="/images/monaca_ide/manual/overview/previewer.png" >}}

###  Preivewer Limitations

When using Previewer, you should be aware of the the following
limitations:

-   Cordova Plugin APIs are not available.
-   Ajax requests will fail because of Cross-origin restriction.
    However, it can be done if server-side scripts return
    `Access-Control-Allow-Origin` Header (i.e., Cross-Origin Ajax
    Request is permitted).
-   Viewport appearance may differ from real devices.
-   Monaca Backend API and Push Notifications can not be initialized.

##  Share

{{<note>}}
    The usability of this function depends on your Monaca subscription plan. For more information, please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

The *Share* function allows you to:

-   manage the team: add/remove members to the shared project.
-   share the source code with multiple people (members are assigned as
    Developers). There are 3 ways to do this such as:
    1.  The easiest way is to use Monaca Cloud's Team Management
        function. Then, two or more people can open the same project in
        different Monaca Cloud IDEs. However, if there is any conflict
        while updating the project, the previous version of the project
        will be overwritten.
    2.  Another way is to set up a version control system and do the
        local development using [Monaca Localkit](/en/products_guide/monaca_localkit/) or
        [Monaca CLI](/en/products_guide/monaca_cli/). This requires a higher
        skill set, but more collaborative.
-   let multiple people to test the project (members are assigned as
    Testers).

{{<note>}}
    If you want to join a team and edit the project files, you need to subscribe to a valid plan. Otherwise, you can only join as a tester. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

### How to Share Project

In order to share and manage the members of your project, please do as follows:

1.  From Monaca Cloud IDE, go to {{<menu menu1="Project" menu2="Share">}}.

2.  The Share Project dialog will appear. To add a member,
    input the email(s) of your team member(s). Please enter one email
    address per line. You can also assign the role of each member as
    Developer or Tester by choosing from the drop-down menu. Then, click on
    {{<guilabel name="Add User">}}  button to send the invitation to them.

    {{<img src="/images/monaca_ide/manual/overview/invite_user.png" width="500">}}

3.  To remove a member from the project, you can just click on the `x` icon at the end of the row of that member's info as shown below:

    {{<img src="/images/monaca_ide/manual/overview/remove_user.png" width="500">}}


##  Code Editor

Monaca uses [Monaco editor](https://microsoft.github.io/monaco-editor/) because of various reasons such as:

- a robust auto-completion system that can be expanded with the use of a Language Server which provides support for TypeScript, HTML, JavaScript and [Onsen UI](https://onsen.io/). And more to come such as React and Vue.

- basic syntax colorization

- rich intelliSense & validation

{{<note>}}
    Please refer to {{<link href="/en/products_guide/monaca_ide/code_editor/editor/" title="Editor Shortcuts">}} for the list of all shortcuts available in Monaca code editor.
{{</note>}}

{{<figure src="/images/monaca_ide/manual/overview/code_editor.png" >}}

If you want to search within the current editor, press `cmd+f` or `Ctrl+f`. Then, the following dialog will appear:

{{<figure src="/images/monaca_ide/manual/overview/find.png" >}}