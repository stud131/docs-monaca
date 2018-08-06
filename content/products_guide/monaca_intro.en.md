---
title: Monaca Development Overview
weight: 10
---

## What is Monaca?

Monaca is a development environment for smartphone and tablet applications provided by Asial Corporation. Monaca does not only provide you with a development environment at your fingertips but also allows anyone to be able to develop smartphone applications easier.

Monaca makes HTML5 [hybrid mobile app](#characteristics-of-hybrid-apps) development with PhoneGap/Cordova simple and easy. Monaca is the most open hybrid app development platform avaiable and ready to be immediately plugged into your existing workflow and development environment. From Cloud IDE, CLI to debugger and remote online build, everything you need for your hybrid app development is here.

{{<figure src="/images/monaca_intro/overview.png">}}

## Why use Monaca?

Monaca's top 3 benefits are:

- Cloud-empowered Development: Our tools are designed to utilize the cloud to supercharge your app development in two ways. The complete cloud development environment gives you flexibility with no setup required. And the cloud-synced local development enables you to use your own environment but enjoy features like device live-sync and remote build. It’s the best of both worlds.

- Framework Agnostic: Our open source [Onsen Framework](http://onsen.io/) is tightly integrated with Monaca tools. However, you can use Monaca with any JavaScript frameworks. We support Angular 1, 2+, React and Vue.js, or you can bring your own favorite framework. There are many templates ready to use, so you can get started immediately.

- Mix-and-match as You Like: We’ve got you covered all the way from design, app development, backend development, testing & debugging to build & distribution. Monaca can be used as a whole or a piece, working with your favorite tools like Sublime Text or Git. Just pick what you need. We will seamlessly plug into your workflow.


## Monaca Development Tools

For your flexibility and convenience during app development process,
Monaca provides four different development environments as shown in the
following subsections.

{{<figure src="/images/monaca_intro/development_tools.png">}}

### Monaca Cloud IDE

Monaca Cloud IDE is a browser-based development environment. Right from your Web browser, all of your Cordova development can be done without any setup. From Cordova IDE, debugger to remote build, we've got everything you need in one place.

Monaca Cloud IDE provides a browser-based development environment as a
service. Right from your Web browser, all of your Cordova development is
done without any setup. Along with the [Monaca Debugger](../debugger), Live
Preview (built-in function in Monaca Cloud IDE) allows you to easily
check the progress of your apps during development. Noticeably, there
are neither Cordova plugins nor native functions in Live Preview.
Therefore, the app required those plugins and functions can't be
previewed properly. [Read more](../monaca_ide/)

{{<figure src="/images/monaca_intro/ide.png" title="Overview of Monaca Cloud IDE" >}}

### Monaca Localkit

Monaca Localkit is a local environment development support tool offered
through our app development platform, “Monaca”. You can achieve better
security and peace-of-mind from your own app development environment by
combining existing tools such as code editors and version management
system, with the versatile development support capabilities of Monaca.
With Monaca Localkit, Monaca users are able to setup their preferred
development environment on local PC. [Read more](../monaca_localkit/)

{{<figure src="/images/monaca_intro/5.png" title="Overview of Monaca Localkit" >}}


### Monaca CLI

Monaca CLI provides command line interface to use Monaca Cloud. It
features the debugger connection, inspector integration, project
creation and remote building. You can also import projects that exist in
the cloud when you want to switch your environment to local. [Read more](../monaca_cli/)


### Monaca for Visual Studio

{{<warning>}}
Monaca for Visual Studio has been discontinued and will no longer be supported or maintained. We are developing a new extension that will be for Visual Studio Code. We will inform you of the release date on our site and mailing list.
{{</warning>}}

Monaca for Visual Studio is another local development tool provided by
Monaca. With this tool, Monaca users are able to develop an app using
Visual Studio as the development environment. It’s free if you are a
Visual Studio Community user. [Read more](../monaca_vs/)


{{< figure src="/images/monaca_intro/vs.png" title="Overview of Monaca for Visual Studio" >}}


## Monaca Debugger

On top of the flexibility in the development environment, Monaca also
provides high development efficiency by using Monaca Debugger. Monaca
Debugger is an application used to test and debug your Monaca
applications on real devices without building the applications during
the development. It needs to be installed on your mobile devices. The
app will automatically sync all your development projects and run them
without the build process. [Read more](../debugger/)

{{<figure src="/images/monaca_intro/2.png" title="Monaca Debugger App" width="300">}}


Here is a table summarizing the debugging options between Monaca
Debugger and Monaca development tools. For more information, please
refer to [Debugging Monaca Apps](/en/products_guide/debugger/debug/).


<table class="small">
    <tr>
        <th width="22%">Monaca Development Tools</th>
        <th>Monaca Cloud IDE</th>
        <th width="38%">Monaca CLI/Monaca Localkit/Monaca for Visual Studio</th>
    </tr>
    <tr>
        <td><b>Requirement</b></td>
        <td>Internet connection</td>
        <td>Internet connection and pairing</td>
    </tr>
    <tr>
        <td><b>Monaca Debug Panel</b></td>
        <td>The OS of your device and PC isn’t a problem. You can use this debug option whether you have a Mac/Windows and your device can either be an iOS or Android.</td>
        <td>Not available</td>
    </tr>
    <tr>
        <td><b>USB Debugging</b></td>
        <td colspan="2">If you have an iOS device, you need a Mac because Safari (Safari remote debugging) is only available on Mac. If you have an Android device, you can use either a Mac/Windows as long as you have a Chrome Browser (Chrome DevTools).</td>
    </tr>
</table>

{{<figure src="/images/monaca_intro/6.png" title="Relationship between Monaca Debugger and Monaca Development Tools">}}

## Monaca Backend

Simple and easy backend service APIs are available for Cordova Apps. Push notifications, user management, remote database, email delivery and much more. Backend Management APIs is also provided for the access from your backend server. [Read more](../backend)

## Monaca Power Plugins

Power up your Cordova app. The Resource Encryption Plugin provides extra protection for your app. In-App Updater makes it easy to update without redeployment to the App Store. Additionally, In-App-Purchase, Secure Storage and Secure SQL Plugin and more are available. [Read more](/en/reference/power_plugins/)

## Monaca Subscription Plans

Monaca provides various account types to match with your needs ranging from free to enterprise plan. After registration, 14 days free trial starts. For detailed information of Monaca account types and theirs usages, please
refer to [Monaca Pricing](https://monaca.io/pricing.html).

### If you use Activation Code:

 -   If you want to upgrade plan or extend the expiration date, please
    contact us with preferred plan name and term of months.
-   On the expiration date, your plan will be switched to Free automatically.

## Characteristics of hybrid apps

- The apps consist of the Web and native characteristics. (See the picture below)
- Regardless of operating systems, hybrid apps run on a browser component (cross-platform support). In other words, they can run on iOS, Android, and other supported platforms since they run on WebView component of those platforms. Therefore, one source code can run on multiple supported platforms.

{{<figure src="/images/monaca_intro/4.png" title="Differences between Native, Hybrid, and Web Apps">}}


Required knowledge for hybrid app development:

- HTML and CSS for UI (User Interface) design
- JavaScript for implementing the app
- Cordova plugins for accessing the native functions of a device and additional plugins

