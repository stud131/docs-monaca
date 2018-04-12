---
title: "Part 1: Starting a Project"
weight: 1
aliases: /en/monaca_ide/tutorial/starting_project/
---

## Step 1: Logging into Monaca

1.  Login to [Monaca](https://monaca.mobi/en/login).
2.  Enter your Monaca account information.

    {{<figure src="/images/monaca_ide/tutorial/starting_project/9.png" width="400">}}

## Step 2: Creating a New Project

After successfully signing in, you will be redirected to the Monaca Dashboard. You are now ready to create your first Monaca project! Let's do the following: 

1.  From the Monaca Dashboard, you can choose {{<guilabel name="Create Project">}} or {{<guilabel name="Import">}} to create a new Monaca project. If you select `Create Project`, you can create a new project based on various templates or from scratch. On the other hand, if you choose `Import`, you can create a new project from an existing Cordova/Monaca project in a number of different ways such as: 

    - import from URL (zip file) 
    - upload a project (zip file)
    - import from Git repository (see [Git SSH Integration]({{<ref "git_ssh_integration.en.md">}}))
    - or import from your existing GitHub repository (see [GitHub Integration]({{<ref "github_integration.en.md">}})).

    {{< figure src="/images/monaca_ide/tutorial/starting_project/11.png" title="Import Project Dialog" >}}
    {{< figure src="/images/monaca_ide/tutorial/starting_project/10.png" title="Create Project Dialog" >}}

2. For this tutorial, we will choose the `Create Project` option. In the Create Project dialog, under Sample Applications, select the `jQuery TODO App` template by clicking on its {{<guilabel name="Create New">}} button.

3. Simply click on the {{<guilabel name="Make Project">}} button.

    {{<figure src="/images/monaca_ide/tutorial/starting_project/3.png" >}}

4. You will then see your newly created project listed under the `Online` tab of the Dashboard. 

## Step 3: Previewing a Project

Monaca Cloud IDE allows you to preview your project through a Preview window without any real devices.

{{<note >}}
    Some functionalities of applications might not be previewed properly because the Preview window has several limitations on Ajax requests, Cordova plugin APIs, etc. For the full list of limitations, please refer to {{<link href="/en/products_guide/monaca_ide/overview#live-preivew-limitations" title="Usage and Limitation of Live Preview">}}. 
{{< /note >}}

1. From the Monaca Dashboard, open the project we just created. Then, Monaca Cloud IDE will be opened. The Preview window is at the right side of the IDE by default. 

    {{<figure src="/images/monaca_ide/tutorial/starting_project/5.png" >}}

2.  Try adding some TODO items in the Preview window.

    {{<figure src="/images/monaca_ide/tutorial/starting_project/6.png" >}}

## Step 4: Editing a Project

{{< note >}}
    All editable files are listed under {{<guilabel name="www/">}} folder.
{{< /note >}}

1. From the File Tree panel, choose a file to edit. Let’s make some changes in the `index.html` file using the code editor. For example, change the title of the app to something else.

2.  Save the changes, then you will be able to see the updates instantly
    in the Preview window. Feel free to edit the project as you wish.
    For a more detailed explanation about this template, please refer to
    [jQuery TODO App](/en/sampleapp/samples/todo/).

{{< note >}}
    For more information regarding the code editor in Monaca Cloud IDE,
    please refer to {{<link href="/en/products_guide/monaca_ide/overview/#code-editor" title="Code Editor">}}.
{{< /note >}}


**Next**: 

- [Part 2: Running Monaca Debugger with Monaca Cloud IDE](../testing_debugging/)
