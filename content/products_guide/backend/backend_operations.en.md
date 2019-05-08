---
title: Backend Operations
weight: 20
aliases: /en/backend/manual/control_operations/
---

Monaca Backend has 4 main operations which can be done through Backend Control Panel such as:

- [User Management](#user-management)
- [Collection Management](#collection-management)
- [Push Notification Management](#push-notification-management)
- [Mail Template Management](#mail-template-management)


##  User Management

In Backend Control Panel, you can manually manage users data.

### Adding a New User

1.  From Backend Control Panel, go to `User`. Then, click on {{<guilabel name="Add user">}}.

    {{<img src="/images/backend/backend_operations/1.png">}}

2.  Enter the new user's information such as Username, Password, and Properties. Then, click on {{<guilabel name="Add">}} button.

    {{<img src="/images/backend/backend_operations/2.png">}}

3. If the new user is successfully added, a new record will appear.

    {{<img src="/images/backend/backend_operations/3.png">}}

4. By default, only 5 required columns of a record are shown such as: `Oid`, `Username`, `Password`, `Created at` & `Updated at`. If you want to show other column(s), click on {{<guilabel name="+">}} icon.

    {{<img src="/images/backend/backend_operations/4.png">}}

5. Select the column you want to be shown and click {{<guilabel name="Add">}}.

    {{<img src="/images/backend/backend_operations/5.png">}}

6. After that, the additional column(s) will be shown. 

    {{<img src="/images/backend/backend_operations/6.png">}}

### Updating a User's Properties

1.  Select on a user's record you want to edit. Then, the selected user record's dialog will appear.

    {{<img src="/images/backend/backend_operations/7.png">}}

2.  Now, you can update the user's properties by using correct JSON notation. Then, click {{<guilabel name="Update">}} after you are done. 

{{<note>}}
    The properties can only be added/updated but not deleted. System properties which begin with <code>_</code> (such as <code>_createdAt</code>, <code>_id</code>, ...) cannot be modified, except <code>_username</code>.
{{</note>}}

### Deleting a User

1.  Tick the checkbox of user's record(s) you want to delete.

2.  Then, click {{<guilabel name="Delete users">}}.

    {{<img src="/images/backend/backend_operations/8.png">}}

{{<warning>}}
    Data cannot be recovered once deleted. Therefore, please be careful when deleting the data.
{{</warning>}}

##  Collection Management


A Collection refers to a group of data. You can manage the appropriate
data used within an application based on permissions you granted to each
user. User permissions you can grant to each user are `create`,
`access`, `edit`, `delete` or `read-only`.

In this section, an example of how to manage a `Fruits` Collection is
illustrated. In this example, `_id`, `name`, `color` and `taste` are
used as fields of the properties. Each row of data (such as: lemon,
yellow, sour) is called `collection item`. A unit comprising of all of
these items is called a `Collection`. To put it as database terminology,
a Collection is a table, and Collection Items are records.

Collection item has several system properties that start with an
underscore (`_`). For example, `_Oid` is, one of system properties,
unique ID of an item.

| _Oid | name | color | taste |
|-----|------|-------|-------|
| 00001abc | apple | red | sweet |
| 00002def | orange | orange | sour-sweet |
| 00003ghi | lemon | yellow | sour |

### Creating a New Collection

1.  From Backend Control Panel, click on Add Collection icon (as shown below).

    {{<img src="/images/backend/backend_operations/9.png">}}

2.  Then, New Collection dialog will appear. Fill in necessary
    information for your Collection such as:

    -   `Collection name`: name of the Collection
    -   `Collection security`: tick {{<guilabel name="Allow JavaScript API to insert data">}} to allow your application to insert data into this Collection.
    -   `Default permission of new item`: check `read` and/or `write` to grant all users the read and/or write permission for the new item.

    {{<img src="/images/backend/backend_operations/10.png">}}

3. Then, click {{<guilabel name="Add">}} button. 

### Adding a New Collection Item

After creating a Collection, we can now start adding Collection items to it as follows:

1.  From Backend Control Panel, select a Collection you want to add an
    item. Then, click {{<guilabel name="Add an item">}}.

    {{<img src="/images/backend/backend_operations/11.png">}}

2.  Entering the new Collection Item's information in JSON format. Then,
    click on {{<guilabel name="Add">}} button. Continue to add the other two items as shown in the table above.

    {{<img src="/images/backend/backend_operations/12.png">}}

3.  If the new item is successfully added, a new record will appear. By default, only system properties of a record are shown. If you want to show/hide other columns, please refer to [Show/Hide Columns of Records](../control_panel/#show-hide-columns-of-records)

    {{<img src="/images/backend/backend_operations/13.png">}}

### Updating a Collection Item

1. Select on an item's record you want to edit. Then, the selected item's dialog will appear.

2. Now you can update this item's properties by using correct JSON format. In this example, let's edit the `lemon` item by changing its name from `lemon` to `banana` and from `sour` to `sweet`, respectively.

    {{<img src="/images/backend/backend_operations/14.png">}}

{{<note>}}
    The properties can only be added/updated but not deleted. System properties which begin with <code>_</code> (such as <code>_createdAt</code>, <code>_id</code>, ...) cannot be modified.
{{</note>}}

### Deleting a Collection Item

1.  Tick the checkbox of the record(s) you want to delete.

2.  Then, click {{<guilabel name="Delete items">}}. Then, you will be asked to confirm the deletion.

    {{<img src="/images/backend/backend_operations/15.png">}}

{{<warning>}}
    Data cannot be recovered once deleted. Therefore, please be careful when deleting the data.
{{</warning>}}

### Changing User Permissions of a Collection Item

You can change the permissions for each Collection item for specific type of users. There are two type of users:

1.  `Owner`: refers to the user who create the Collection. Owner will
    always be granted read and write permissions.

2.  `Public`: refers to all users who are not logged in. By default, they
    are not granted the read or write permissions.

In order to change the user's permission for each Collection item, please do as follows:

1.  Click on `Permission` icon of the item you want to change the permission setting. Then, the Permission dialog will appear.

    {{<img src="/images/backend/backend_operations/16.png">}}

2.  You can change the permissions for each Collection item for specific type of users. You can also set specific permission for a specfic user. If your Backend has more than one user, a list of users will appear in the combo box for you to choose from.

    {{<img src="/images/backend/backend_operations/17.png">}}

3.  Click {{<guilabel name="Save">}}.

### Deleting a Collection

1.  From Backend Control Panel, right-click on the Collection you want to delete and choose `Delete this Collection`.

    {{<img src="/images/backend/backend_operations/18.png">}}

2.  Then, you will be asked to confirm the deletion.

##  Push Notification Management

Please refer to [Push Notification](/en/products_guide/push_notification/overview).

##  Mail Template Management

You can edit/create the template for emails sent to your app's users.

1.  From Backend Control Panel, select `Mail Template`.

2.  You can then add/edit the mail template in this page.

    {{<img src="/images/backend/backend_operations/19.png">}}

3.  Click {{<guilabel name="Apply">}} after you finish editing/creating the template.

{{<note>}}
    Mail templates can only be edited/created from the Monaca Cloud IDE.
{{</note>}}
