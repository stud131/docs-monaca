---
weight: -999999
Hidden: true
---

[Monaca Debugger](/en/products_guide/debugger/) is an application for testing and debugging your Monaca apps on real devices in real-time. When developing Monaca apps on your local PC, assuming that your local PC is successfully paired with Monaca Debugger, all changes made to your project files will be pushed into your Monaca Debugger as soon as you save those changes.

Let's get started with Monaca Debugger as follows:

1.  Install Monaca Debugger app on your device from Google Play or AppStore.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
    {{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

    {{<note>}}
    If you want to install Monaca Debugger on Android emulator, please refer to {{<link href="/en/products_guide/debugger/installation/debugger_emulator/" title="Monaca Debugger for Android Emulator">}}.
    {{</note>}}

2.  Launch Monaca Debugger app and sign in with your Monaca account. Make sure you are using the same account for Monaca CLI.

    {{<img src="/images/migration/debugger.png" width="350px">}}

3.  Before starting to debug, you need to pair Monaca Debugger with the local PC first. Prior to the pairing, please pay attention to the following points:

    - Monaca Debugger and the local PC have to connect to the same network connection (LAN or Wi-Fi).
    - Disable the local PC’s firewall.

4.  After the above points are confirmed, we can now start pairing. In the terminal, navigate to the project directory and type `monaca debug`.
    {{<highlight bash>}}
    $ cd <project dir>
    $ monaca debug{{</highlight>}}

1.  Then, a popup message prompting you to pair the debugger with the local PC will appear inside Monaca Debugger.

    {{<img src="/images/monaca_cli/tutorial/testing_debugging/2.png" width="350">}}

2.  If your pairing is successful, your local project name will appear under `Local Projects` in Monaca Debugger. However, if you fail the pairing, please refer to [Fail to Pair Monaca Debugger](/en/products_guide/debugger/troubleshooting/#fail-to-pair-monaca-debugger).

    {{<img src="/images/migration/debugger_cli.png" width="350">}}

3.  To run a project, simply tap on the project name in Monaca Debugger (as shown in the above picture).

4.  Your project should now be running in the debugger. Go ahead and try out the various operations of your project! After that, try making some code changes and save them. Then, you should see the changes reflected in the debugger.

{{<note>}}
In order to stop debugging and unpair the debugger, press <code>Ctrl+c</code>.
{{</note>}}
