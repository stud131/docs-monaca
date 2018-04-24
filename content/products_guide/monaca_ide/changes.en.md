---
title: Changes in the New Cloud IDE
weight: 20
aliases: /en/monaca_ide/manual/changes/
---
Recently, we are just rolling out the new Monaca Cloud IDE. Even though it is not the default Cloud IDE yet, you can switch between the new and current Cloud IDE. 

The new Monaca Cloud IDE provides developers with some special features that allow them to easily develop applications and improve the user development experience. So, the important question is, what are these new amazing features? The most important ones are the following:

- Integrated terminal: transpiling feature in the Cloud IDE
- Golden Layout: adapting the Cloud Interface as you prefer
- Multiple previewers: speeding up testing efficiency
- Monaco Editor: better code editor to speed up your development process
- New Monaca Backend: better GUI for Monaca Backend

## Integrated terminal

The integrated terminal is the most important change in the Cloud IDE. It expands your ability to create, manage and develop transpilable projects such as React, VueJS, Angular, and more. Not only does it transpile but the Previewer is also launched from the embedded terminal. In other words, projects with hot-loading support is also available in the Cloud IDE. For more information about the Integrated Terminal and its usage, please refer to [Integrated Terminal](../terminal).

{{<figure src="/images/monaca_ide/manual/changes/terminal.png" >}}

## Golden Layout

Taking into the account the importance of developer experiences, we have been adding and changing various features and user interfaces in the IDE.

One of those features is the new flexible layout. In the current IDE, all panels are fixed on a specific layout. Unlike the current IDE, all panels can be dragged and placed on any positions. Each panel can also be maximized/minimized with ease. As a result, you can arrange the layout as you prefer. This new layout is made by [Golden layout](http://golden-layout.com/) which a multi-screen layout manager for webapps.

{{<figure src="/images/monaca_ide/manual/changes/1.png" >}}

Golden Layout is a multi-window javascript layout framework manager for web apps, providing us with a flexible layout IDE. Unlike the old IDE, where all panels were fixed in a specific layout, in the new one, all panels can be moved wherever you want and be maximized/minimized; letting you adapt the interface to your style and preferences.

Therefore, the current version is more modern, making the programming experience even easier for developers. Just take a look at the previous Golden Layout picture, don’t you think that the new interface is better?

## Multiple Previewers

In addition to the flexible layout, the ability to preview your app in various devices’ layout at the same time is also added. Rather than having only one Preview window at a time, the new IDE allows you to have multiple Preview windows at the same time. 

For this reason, developers who usually work on developing multiplatform and responsive applications will get hooked on this feature, but especially if you have never tried another cloud IDE which provides the user a real-time previewer for mobile apps.

{{<figure src="/images/monaca_ide/manual/changes/2.png">}}

## Monaco Editor

A majority of time for app development is spent on writing code. Therefore, using the right code editor would speedup the development time and efficiency. For this reason, we are replacing Ace editor (used in the current IDE) with [Monaco](https://microsoft.github.io/monaco-editor/) which fits very well with Monaca for various reasons such as:

- A more robust auto-completion system that can be expanded with the use of a Language Server. Some languages we will provide right out of the box are TypeScript, HTML, JavaScript and Onsen UI. And more to come such as React and Vue.

- Basic syntax colorization

- Rich intelliSense & validation

{{<figure src="/images/monaca_ide/manual/changes/3.png">}}

With this replacement, the following shortcut keys are changed. For a complete list of the shortcut keys for both old and new IDE, please refer to [Editor Shortcuts](../code_editor/editor/).

| Description |	Windows/Linux | Mac |
|-------------|---------------|-----|
| Redo | `Ctrl + Y` |	`Shift + Command + Z` or `Command + Y` |
| Replace |	`Ctrl + F` |	`Command + Alt + F` |
| Comment Out |	`Ctrl + /` |	`Command + /` |
| Comment In |	`Ctrl + /` |	`Command + /` |

## New Monaca Backend

Last but not least, the new IDE will unveil an entirely new look for Monaca Backend! The new Monaca Backend will be on a separated window with a complete new look! All backend components such as User, Collection, Push notification and Mail template are much more easier to manage. The navigation between them are also becoming more user-friendly.

{{<figure src="/images/monaca_ide/manual/changes/4.png">}}


## Other Changes

Some menu items are changed such as:

-   Monaca Backend tab from the File Tree panel has been moved to header menu and labeled as `Backend`.
-   `Editor Configuration` menu item has been moved under `View` menu.
-   `Version Control` and `Share` menu item has been moved under `Project` menu.
-   `Preview` and `Run on Device` menu item has been moved under `Run` menu.