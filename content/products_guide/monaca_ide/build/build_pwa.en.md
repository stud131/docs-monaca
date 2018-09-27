---
title: Building for PWA
weight: 20
---

##  Step 1: Configure App

1.  From the Monaca Cloud IDE menu, go to {{<menu menu1="Configure" menu2="App Settings for PWA">}}.
2.  Fill in the necessary information of your app:

    - Application information:

        <table class="small">
            <tr>
                <td width="25%">Name</td>
                <td>The application name.</td>
            </tr>
            <tr>
                <td>Short Name</td>
                <td>The name is used in places where there is not enough space to display the full name (such as home screen).</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>General description of the application.</td>
            </tr>
            <tr>
                <td>Language</td>
                <td>The language to use for <code> name </code> members and <code> short_name </code> members.</td>
            </tr>
            <tr>
                <td>Text Direction</td>
                <td>The writing direction of the text.</td>
            </tr>
            <tr>
                <td>Scope</td>
                <td>
                Define the navigation range of the website. With this setting you can restrict which web pages can be displayed. If the user accesses outside the range, it will transition to the normal web page.
                </td>
            </tr>
            <tr>
                <td>Start URL</td>
                <td>The URL to be loaded when launching the application.</td>
            </tr>
        </table>

        {{<img src="/images/monaca_ide/manual/build/pwa/app_setting.png">}}

    -   Application Display Preference

        <table class="small">
            <tr>
                <td width="20%">Display</td>
                <td>The display mode of the application. The default is <code> standalone </code> to display like a native app.</td>
            </tr>
            <tr>
                <td>Orientaion</td>
                <td>The display orientation of the screen.</td>
            </tr>
            <tr>
                <td>Background Color</td>
                <td>The background color of the splash screen.</td>
            </tr>
            <tr>
                <td>Theme Color</td>
                <td>The color of the status bar.</td>
            </tr>
        </table>

    -   App Icon

        You can set the application icon. Each size Icons are automatically generated from one image. The icons are used as displayed on the home screen or as displayed on the splash image.


3.  After finishing the configurations, click {{<guilabel name="Save">}}.

## Step 2: Start Building

1.  From the Monaca Cloud IDE menu, go to `Build` &rarr; `Build App for PWA`.
2.  Select appropriate type of build you want and click {{<guilabel name="Start">}} Build.
    {{<img src="/images/monaca_ide/manual/build/pwa/build_start.png">}}

3.  It may take several minutes for the build to complete. Please wait.
    Once the build is completed, your built app is ready to be
    downloaded/distributed. See below screenshot as an example:
    {{<img src="/images/monaca_ide/manual/build/pwa/build_result.png">}}
