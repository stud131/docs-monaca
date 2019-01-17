---
title: Features in the  Monaca Cloud IDE
weight: 20
aliases: /en/monaca_ide/manual/changes/
---

The Monaca Cloud IDE provides developers with some special features that allow them to easily develop applications and improve the user development experience. The main features are as follows.

- Integrated Terminal: transpiling feature in the Cloud IDE
- Golden Layout: adapting the Cloud Interface as you prefer
- Multiple previewers: speeding up testing efficiency
- Monaco Editor: better code editor to speed up your development process
- New Backend: better GUI for Monaca Backend

## Integrated Terminal

The integrated terminal expands your ability to create, manage and develop transpilable projects such as React, VueJS, Angular, and more. Not only does it transpile but the Previewer is also launched from the embedded terminal. In other words, projects with hot-loading support is also available in the Cloud IDE. For more information about the Integrated Terminal and its usage, please refer to [Integrated Terminal](../terminal).

{{<figure src="/images/monaca_ide/manual/changes/terminal.png">}}

## Golden Layout

Taking into the account the importance of developer experiences, we have been adding and changing various features and user interfaces in the IDE.

One of those features is the flexible layout. In the Monaca Cloud IDE, all panels can be dragged and placed on any positions. Each panel can also be maximized/minimized with ease. As a result, you can arrange the layout as you prefer. This layout is made by [Golden layout](http://golden-layout.com/) which a multi-screen layout manager for webapps.

{{<figure src="/images/monaca_ide/manual/changes/1.png" >}}

## Multiple Previewers

In addition to the flexible layout, the ability to preview your app in various devices’ layout at the same time is also added. Rather than having only one Preview window at a time, the IDE allows you to have multiple Preview windows at the same time. 

For this reason, developers who usually work on developing multiplatform and responsive applications will get hooked on this feature, but especially if you have never tried another cloud IDE which provides the user a real-time previewer for mobile apps.

{{<figure src="/images/monaca_ide/manual/changes/2.png">}}

## Monaco Editor

A majority of time for app development is spent on writing code. 
The Monaca Cloud IDE uses [Monaco](https://microsoft.github.io/monaco-editor/) for the following reasons.

- A more robust auto-completion system that can be expanded with the use of a Language Server. Some languages we will provide right out of the box are TypeScript, HTML, JavaScript and Onsen UI. And more to come such as React and Vue.

- Basic syntax colorization

- Rich intelliSense & validation

{{<figure src="/images/monaca_ide/manual/changes/3.png">}}

For the Monaca Cloud IDE shortcut keys, see [Editor Shortcuts](../code_editor/editor/).

## Monaca Backend

The Monaca Backend will be on a separated window. All backend components such as User, Collection, Push notification and Mail template are easier to manage. The navigation between them are also becoming more user-friendly.

{{<figure src="/images/monaca_ide/manual/changes/4.png">}}

