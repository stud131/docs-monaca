---
title: Integrated Terminal
weight: 25
---

Monaca Cloud IDE is equipped with terminal consoles. This is mainly used for running a HTTP server for showing preview application (Previewer). It can also be used to provide access to the Linux container for your project.

In this section, we will guide you through how you can take advantages of the Integrated Terminal feature in Monaca Cloud IDE.

{{<note>}}
    Terminal feature can be used from pay plan.
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

- When the `monaca:preview` script is missing from the `package.json` file, the update dialog is displayed and it will execute `monaca update` to update the project structure.

### Preview Log and Preview Server

Preview Log tab shows the output from the Preview server for each project. The Preview Server runs `monaca preview` command which executes `monaca:preview` script of the `package.json` file. As you can see in this picture that the preview server is running `browser-sync` as it is defined in the script. Previewer will connect to the Preview server once it is accepting HTTP request. The default port number is `8080` but you can change it by clicking the gear icon.

{{<figure src="/images/monaca_ide/manual/terminal/gear_icon.png" >}}

The port number is available between `8080-8084` in the configuration dialog.

{{<figure src="/images/monaca_ide/manual/terminal/settings.png" >}}

{{<note>}}
    When you change the port number in the Preview Server Settings dialog, you might as well need to change the port number in the package.json file and other config files manually.
{{</note>}}

### Open New Terminal

To open a terminal, you can click the plus sign next to your tabs then choose {{<guilabel name="New Terminal">}}.

{{<figure src="/images/monaca_ide/manual/terminal/open_new_terminal.png" >}}

{{<note>}}
    This feature is not available for free-plan users.
{{</note>}}

### Customizing the Terminal

Terminal is actually hosted by the terminal multiplexer called [Tmux](https://github.com/tmux/tmux/wiki). You can override the default Tmux configuration by editing `~/.tmuxrc`. 

Visual aspects of the terminal can be customized by going to {{<menu menu1="Configure" menu2="Workspace Configuration">}}.

{{< figure src="/images/monaca_ide/manual/terminal/terminal_configuration.png" >}}

### Scroll mode

You might notice that once you are scrolling inside the terminal console, a little message appeares at the top-right corner telling you the current scolling position of the pane. It indicates that you are in the `scroll mode`. When you scroll down to the buttom of the terminal pane, the `scroll mode` will be exited automatically. Otherwise, you can press `Ctrl-C` or `ESC` key to leave from the `scroll mode`.

{{<figure src="/images/monaca_ide/manual/terminal/scroll_mode.png">}}

## FAQ/Troubleshooting

There are several known issues & limitations.

### Browser with Ad-Blocker Settings

Integrated Terminal feature is using third-party cookie. Therefore, some Chrome extensions (such as Ad-blockers) or browser's configuration might block the request to the terminal console. For this reason, please disable such extensions or configuration.

### Fail to connect in Safari

If you are receiving the error message regarding cross-site tracking or cookie, please disable them in Safari's settings as follows:

1. From Safari, go to {{<menu menu1="Preferences" menu2="Privacy">}}.

2. The Privacy tab might look differently with different version. Please make sure that the cookies are unblocked and the cross-site tracking is allowed. Here is an example:

{{<figure src="/images/monaca_ide/manual/terminal/safari_1.png" title="Safari v. 11.1.X">}}

{{<figure src="/images/monaca_ide/manual/terminal/safari_2.png" title="Safari v. 11.0.X">}}

### Limitations

Certain commands and operations are restricted for security purpose. Please contact us if you find any issues.
