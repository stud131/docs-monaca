---
title: Usage
weight: 60
---

### Tell me about the steps to develop applications for mobile devices using Monaca.

For your flexibility and convenience during app development process,
Monaca provides 3 different development environments such as:

- [Monaca Cloud IDE](/en/products_guide/monaca_ide)
- [Monaca Localkit](/en/products_guide/monaca_localkit)
- [Monaca CLI](/en/products_guide/monaca_cli)

You can choose your desired platform and start building your
application. The following steps are the mobile app development steps
using Monaca:

-   Register a user in [Monaca](https://monaca.mobi/en/signup).
-   Write HTML5/CSS3/JavaScript in your desired platform.
-   If needed, check application operations using Monaca Debugger.
-   Configure your target device build settings and start building the
    application.
-   Download and install the built application file (`.app`/`.apk`) in a
    smartphone device.

Moreover, note that in order to install the built application on iPhone
or iPad, you need to register iOS Developer Program. For more details,
please refer to [Building an iOS App](/en/products_guide/monaca_ide/build/ios/build_ios).

### Can I create my own project template?

We do not offer a template function for the projects.

### The Code Editor's cursor on the Monaca Cloud IDE is shown to be off in its alignment. What should I do?

The Code Editor on the Monaca Cloud IDE may not be able to handle the
scale from the display function of your browser. Please use the Monaca
Cloud IDE without using the browser's enlarge/reduce functions. (In many
browsers, you can reset with `Ctrl+0`.)

### I don't know how to write the program.

As references for app development using Monaca, we have prepared a
tutorial, introductory guide, and sample apps. Each of these reference
materials provides descriptions on how to write specific codes, so
please do take a look. ([Third-party Cordova Plugins](/en/reference/third_party_phonegap) and [Samples & Tips](/en/sampleapp))

### Please tell me how to do team development with Monaca.

Using the Monaca cloud IDE team management function, you can share a project among members registered in Monaca. For details, please check the [Share](https://docs.monaca.io/en/products_guide/monaca_ide/overview/#share).

In addition, it is possible to develop team using various version management tools through Monaca Cloud IDE, GitHub, Git SSH linkage function, Monaca Localkit, Monaca CLI, etc.


The usability of this function depends on your usage plan with Monaca.

If your plan is Gold, Platinum or Enterprise, team development allows
you to:

1.  Manage the team: add/remove members to the shared project.
2.  Share the source code with multiple people (members are assigned as
    Developers):

    -   The easiest way is to use Monaca's built-in `share` feature. Then, two or more people can open the same project in the IDE. However, if there is any conflict, the previous version will be overwritten.
    -   The last option is to use Monaca for Visual Studios. In this case, the files can be managed by VS's built in Team Explorer functionality. Git, TFS, Visual Studio Online and other supported version control system can be used in this case.

3.  Let multiple people to test the project (members are assigned as
    Testers): Use Monaca's built-in `share` feature, and share the
    project with the test members.

However, if your usage plan is Basic or Personal, you can only join a
team as a Tester. For more information of the usage plan and its
limitation, please refer to [Monaca Usage Plan](https://monaca.io/pricing.html).

### In Monaca, how is the security of development assets maintained?

Currently, for general use, each user's resources are controlled by each
account on the same server. We can handle on an individual basis of
strengthening the security such as having an independent location of
each resource or enforcing source IP restrictions for access (fee-based). Please contact us [here](https://monaca.io/support/inquiry.html).

### Are there any keyboard shortcuts or keybindings that can be used on the Monaca Cloud IDE?

Shortcuts that can be used on Monaca Cloud IDE are listed in [Editor Shortcuts](/en/products_guide/monaca_ide/code_editor/editor). Also, Monaca can use keybindings like `vim`. You can
set the keybinding from the Environment Settings of the File menu on the
top of the page of Monaca Cloud IDE.

### I want to change the background color of the Splash screen.

For the changes to the Splash screen, you can configure from the `Splash Screen Settings` in [Configure iOS App Settings](/en/products_guide/monaca_ide/build/ios/build_ios/#configure-ios-app-settings) and [Configure Android App](/en/products_guide/monaca_ide/build/build_android/#step-1-configure-android-app) for iOS and Android, respectively.

### Splash screen is not showing on Monaca Debugger.

Splash screen can only appear properly on a build app. It may not appear
properly on Monaca Debugger. Therefore, please test the splash screen on
a build app only.

### Can I use a GIF image as splash screen?

Currently, you can only PNG file as a splash screen image in Monaca.

### Project list is not showing properly in Monaca Localkit.

If Monaca Localkit's project list is not displayed properly, please try
resetting Monaca Localkit as follows:

1.  Uninstall Monaca Localkit.
2.  Open the user's home directory. Fore example:

    -   Windows: `C:/Users/user` home directory
    -   Mac: `/Users/user` home directory

3.  Rename the `localkit.db` file (For example: `localkit.db_bak`) in the `.cordova` folder.
4.  Restart the PC.
5.  Install the latest version of Monaca Localkit.
6.  Start Monaca Localkit. At this time, a new `localkit.db` file is created.

{{<note>}}
    Resetting Monaca Localkit will clear the project list that had been imported to Monaca Localkit earlier. Therefore, you need to import all projects again.
{{</note>}}
