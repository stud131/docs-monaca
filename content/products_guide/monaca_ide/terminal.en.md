---
title: Integrated Terminal
weight: 100
---

Monaca Cloud IDE is equipped with terminal console. This is mainly used for running a HTTP server for showing preview application. It can be also used to provide access to the Linux container for your project.

In this section, we will guide you through how you can take advantage of the `integrated terminal` feature of the Monaca Cloud IDE.

{{<note>}}
    Currently this feature is available to all Monaca developers. However, Free plan users can enjoy this feature as a trial, and it will be restricted after Q3, 2018.
{{</note>}}

# Overview of Integrated Terminal

Integrated Terminal is equipped with two console window.

1. "Preview Log" tab that runs HTTP service for providing content in preview screen.
2. "Terminal" tab for executing arbitary commands (i.e. git, npm, cordova, monaca and most of the UNIX basic commands).

When the user starts Cloud IDE, a Linux container is created on demand. Containers are shared among multiple users, which means you cannot execute certain commands or operations that are restricted.

Container is destroyed soon after user closes Cloud IDE. Be sure to read the following section to prevent important files to be deleted.

## Storage & Directory

All files that are created in the container will be lost when the container is destroyed, except of the files located in the following directory:

- `/home/terminaluser`: User's home directory. This directory is shared among all projects.
- `/project`: Project root directory.

# Using Integrated Terminal

## Starting Up

When the project is opened in Monaca Cloud IDE for the first time, it will perform the necessary configuration for the project under certain circumstances.

When the project is equipped with `package.json`, it will execute `npm install` to install required NPM dependencies.

When the project is configured as transpilable project, it will execute `monaca reconfigure` to install build dependencies to your home directory.

## Preview Log and Preview Server

"Preview Log" tab shows the output from preview server for each project. By default, `monaca preview` command is used. You can change to your own preview server by clicking the gear icon.

Previewer will connect to the preview server once it is accepting HTTP request. The default port number is 8080, and you can change it to one of 8081-8084 in the configuration.

## Open New Terminal

To open the terminal, you can click the plus sign next to your tabs then choose "New Terminal".

{{< figure src="/images/monaca_ide/manual/terminal/open_new_terminal.png" >}}

## Customizing the Terminal

Terminal is actually hosted by the terminal multiplexer called [Tmux](https://github.com/tmux/tmux/wiki). You can override the default Tmux configuration by editing `~/.tmuxrc`. 

Visal aspects of the terminal can be customized by going to `Configure` -> `Workspace Configuration`.

{{< figure src="/images/monaca_ide/manual/terminal/terminal_configuration.png" >}}

## Scroll mode

You might notice that once you are scrolling inside the `Terminal` or `Preview Log` console, a little message appeared at the top right corner telling you the current scolling position of the pane. It indicates that you are in the `scroll mode`. Once you scroll down to the buttom of the terminal pane, the `scroll mode` will be exited automically. Otherwise, you can press `Ctrl-C` or `ESC` key to leave from the `scroll mode`.

{{< figure src="/images/monaca_ide/manual/terminal/scroll_mode.png" >}}

# FAQ/Troubleshooting

There are several known issues & limitations.

## Browser with Ad-Blocker Settings

Since this feature is using third-party cookie, ad-blockers mistakenly blocks the request to the terminal console. Please disable the feature if you install such extensions or browser configuration.

## Limitations

Certain commands and operations are restricted for security purpose. Please contact us if you find any issues.
