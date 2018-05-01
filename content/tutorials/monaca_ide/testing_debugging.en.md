---
title: "Part 2: Running Monaca Debugger with Monaca Cloud IDE"
weight: 2
aliases: /en/monaca_ide/tutorial/testing_debugging/
---

[Monaca Debugger](/en/products_guide/debugger/) is a powerful
application for testing and debugging your Monaca applications on real
devices in real-time.

When developing Monaca apps in the Cloud IDE, all changes made to your project file(s) will be synced with your Monaca Debugger in real-time as soon as you save them. 

## Before Getting Started

Please install Monaca Debugger on your device.

{{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
{{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}


{{<note>}}
    Please refer to {{<link href="/en/products_guide/debugger/installation/" title="Monaca Debugger Installation">}} for other platforms.
{{</note>}}

## Step 1: Running a Project on Monaca Debugger

1. Launch Monaca Debugger app and sign in with your Monaca account. Make sure you are using the same account for Monaca Cloud IDE.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/1.png" width="300">}}

2. The list of projects will appear. All Monaca Cloud IDE projects are listed under `Monaca.io Projects`. To run a project, simply tap on the project name in Monaca Debugger or select {{<menu menu1="Run" menu2="Run on Device">}} in Monaca Cloud IDE.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/2.png" width="300">}}

3. Your project should now be running in the debugger. 

4. Go ahead and try out the various features of the demo app!  

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/4.png" width="300">}}

    {{<note>}}
    To go back to the Project List screen, go to Debugger Menu and tap on the <i>Back</i> button.
    {{</note>}} 

    {{<multi_figures>}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/3.png" width="300">}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/6.png" width="300">}}  
    {{</multi_figures>}}

    

## Step 2: Real-time Updates between Monaca Cloud IDE and Debugger

By now, you should be able to get your Monaca project running on the debugger. Next, let’s try to make changes to this project and see how it is reflected in the debugger.  


1. Run the project on the debugger.

2. On Monaca Cloud IDE, let's open `index.html` and change the title of the front page from `Monaca Memo` to `My Memo`. Then, save the change.

    {{<img src="/images/monaca_ide/tutorial/testing_debugging/7.png" >}}

3. As soon as you save your new changes, Monaca Debugger will automatically refresh itself. (You can also tap on *Reload* button to manually retrieve the latest updates of your app, in case the changes are not reflected.) 

    {{<multi_figures>}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/5.png" width="300">}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/8.png" width="300">}}  
    {{</multi_figures>}}

{{<note>}}
    Please refer to {{<link href="/en/products_guide/debugger/features/" title="Debugger Functionalities">}} to explore the other functions provided by Monaca Debugger.
{{</note>}}

{{<note>}}
    You can also use USB debugging with Monaca CLI. Please refer to {{<link title="USB Debugging with Monaca" href="/en/products_guide/debugger/debug/#monaca-debugger-with-monaca-local-development-tools">}}.
{{</note>}}

That’s it! That’s how easy it is to use Monaca Debugger. Please try to make more changes to your project and see how it runs on the debugger. Enjoy developing with Monaca!

**Next**: 

- [Part 3: Building Monaca App](../building_app/)
