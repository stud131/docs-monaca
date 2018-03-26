---
title: "Part 3: Setting up Monaca Backend"
weight: 3
aliases: /en/monaca_ide/tutorial/adding_backend/
---

## Step 1: Attaching Backend to Your Project

1.  From Monaca Cloud IDE, click on `Cloud` icon above the file tree menu
    to go to the Backend Control Panel. Then, click on {{<guilabel name="Start Using Backend">}}
    button.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/3.png">}}

2.  The following dialog will appear. You can create a new Backend, or
    select an existing one which is used in a different project. Then,
    click {{<guilabel name="Apply">}} to attach the Backend to your project.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/4.png">}}

3.  After attaching the Backend, your Backend Control Panel will look similar to this:

    {{<img src="/images/monaca_ide/tutorial/adding_backend/5.png">}}

## Step 2: Creating a New Collection

Collection is a general purpose storage to keep data in the Backend.

1.  From Backend Control Panel, click on `Options Menu` icon. Then, choose
    {{<guilabel name="New Collection...">}}.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/6.png">}}

2.  Then, `New Collection` dialog will appear. Fill in the name for your
    Collection. Then, click on {{<guilabel name="Add">}} button.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/7.png">}}

{{<note>}}
    Please remember to enable {{<guilabel name="Allow JavaScript API to insert data">}} if you want to insert data from your app. For more details about collection management, please refer to {{<link href="/en/products_guide/backend/control_operations/#collection-management" title="Collection Management">}}.
{{</note>}}

After you follow the above steps, you can now start creating your own
applications with Backend support. [Backend Memo](/en/sampleapp/samples/backend_memo) demonstrates
a step-by-step instruction on how to manipulate Monaca Backend in an
application. Please refer to it and start coding your app with Monaca
Backend.

See Also:

- [Starting a Project](../starting_project/)
- [Running Monaca Debugger with Monaca Cloud IDE](../testing_debugging/)
- [Building Monaca App](../building_app/)
- [Publishing Monaca App](../publishing_app/)
- [Sample Apps & Templates](/en/sampleapp/samples)
