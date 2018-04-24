---
title: Integrated Terminal
weight: 100
---

Monaca Cloud IDE is equipped with terminal consoles. This is mainly used for running a HTTP server for showing preview application (Previewer). It can also be used to provide access to the Linux container for your project.

In this section, we will guide you through how you can take advantages of the Integrated Terminal feature in Monaca Cloud IDE.

{{<note>}}
    Currently, this feature is available to all Monaca developers. However, Free plan users can enjoy this feature as a trial, and it will be restricted after Q3, 2018.
{{</note>}}

## Overview

Integrated Terminal is equipped with two console windows:

1. `Preview Log` tab: a terminal window for running HTTP service for providing content in Previewer

2. `Terminal` tab: a terminal window for executing arbitary commands (i.e. git, npm, cordova, monaca and most of the UNIX basic commands)

When the user starts Cloud IDE, a Linux container is created on demand. Containers are shared among multiple users, which means you cannot execute certain commands or operations that are restricted.

Container is destroyed soon after user closes Cloud IDE. Be sure to read the following section to prevent important files to be deleted.

### Storage & Directory

All files that are created in the container will be lost when the container is destroyed, except of the files located in the following directories:

- `/home/terminaluser`: user's home directory. This directory is shared among all projects

- `/project`: project root directory

## Using Integrated Terminal

### Starting Up

When the project is opened in Monaca Cloud IDE for the first time, it will perform the necessary configuration for the project under certain circumstances:

- When the project is equipped with `package.json`, it will execute `npm install` to install required NPM dependencies.

- When the project is configured as a transpilable project, it will execute `monaca reconfigure` to install build dependencies to your home directory.

### Preview Log and Preview Server

Preview Log tab shows the output from the Preview server for each project. By default, `monaca preview` command is used. You can change to your own Preview server by clicking the gear icon.

{{<figure src="/images/monaca_ide/manual/terminal/gear_icon.png" >}}

Previewer will connect to the Preview server once it is accepting HTTP request. The default port number is `8080` but it can be changed to any numbers between `8081-8084` in the configuration dialog.

{{<figure src="/images/monaca_ide/manual/terminal/settings.png" >}}

### Open New Terminal

To open a terminal, you can click the plus sign next to your tabs then choose {{<guilabel name="New Terminal">}}.

{{<figure src="/images/monaca_ide/manual/terminal/open_new_terminal.png" >}}

### Customizing the Terminal

Terminal is actually hosted by the terminal multiplexer called [Tmux](https://github.com/tmux/tmux/wiki). You can override the default Tmux configuration by editing `~/.tmuxrc`. 

Visual aspects of the terminal can be customized by going to {{<menu menu1="Configure" menu2="Workspace Configuration">}}.

{{< figure src="/images/monaca_ide/manual/terminal/terminal_configuration.png" >}}

### Scroll mode

You might notice that once you are scrolling inside the terminal console, a little message appeares at the top-right corner telling you the current scolling position of the pane. It indicates that you are in the `scroll mode`. When you scroll down to the buttom of the terminal pane, the `scroll mode` will be exited automatically. Otherwise, you can press `Ctrl-C` or `ESC` key to leave from the `scroll mode`.

{{<figure src="/images/monaca_ide/manual/terminal/scroll_mode.png" >}}

## FAQ/Troubleshooting

There are several known issues & limitations.

### Browser with Ad-Blocker Settings

Integrated Terminal feature is using third-party cookie. Therefore, some Chrome extensions (such as Ad-blockers) or browser's configuration might block the request to the terminal console. For this reason, please disable such extensions or configuration.

### Limitations

Certain commands and operations are restricted for security purpose. Please contact us if you find any issues.
