---
title: Backend Control Panel
weight: 30
aliases: /en/backend/manual/control_panel/
---

Besides [backend operations](../backend_operations), various backend configuration and information can be found in the Backend Control Panel. 

## Changing the Backend

1.  From Backend Control Panel, click on the `navicon` icon and choose `Select a Backend`. The Backend dialog will appear.

    {{<img src="/images/backend/control_panel/1.png">}}

2.  You can either switch to another existing backend or create a new one. Then, click {{<guilabel name="Apply">}}.

    {{<img src="/images/backend/control_panel/2.png">}}

## Backend Security Settings

1. From Backend Control Panel, go to `Backend Settings`. Then, Backend Settings page will appear.

    {{<img src="/images/backend/control_panel/3.png">}}

2. In this page, you can:

    -   enable or disable automatic login, and change the expiration period.
    -   change the minimum character length required for password and username.
    -   set password reset token expiration period.

3. Click {{<guilabel name="Apply">}} to save the changes.

## Backend Management API Key & Endpoint URL

Backend Management API key and Endpoint URL are needed when you want to use Monaca Backend
Management API. This API allows you to manage your Monaca Backend from
your server rather than from Monaca Cloud IDE. For more information
about this, please refer to [Backend Management API](/en/reference/monaca_api/cloud_management).

In order to get Backend Management API key and Endpoint URL, please follow the
instruction below:

1. From Backend Control Panel, go to `Backend Settings`. Then, Backend Settings page will appear.

2.  In this page, go to `Management API` and click {{<guilabel name="Enable">}} button. 

    {{<img src="/images/backend/control_panel/4.png">}}

3. Then, various information related to Management API will be shown. You can find the **Endpoint URL** there. This URL will be used as `JSON-RPC Request URL` (See [Backend Management API](/en/reference/monaca_api/cloud_management)).

    {{<img src="/images/backend/control_panel/5.png">}}

4. Next, create the API key. You can create the API key in 2 ways:

    - Input IP address range: This will create an API key for a specific range of IP addresses.
    - Set blank (not recommended): This will create an API key for any IP addresses without any restriction.

    {{<img src="/images/backend/control_panel/6.png">}}

See Also:

- [Backend API](/en/reference/monaca_api/cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
