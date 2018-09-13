---
title: Push Notification
weight: 10
---

The following JavaScript API is used to handle the push notifications.

Method | Description
-------|-------------------
[monaca.cloud.Push.setHandler()](#push-sethandler) | Set JavaScript handler when receiving push notification


## Push.setHandler()

Set push handler which is called when an application receives a push
notification.

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(callback: Function) : void
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|------------------
`callback` | Function | Callback function to handle incoming push notification. Additional JSON data will be set at the first and third argument.

**Return Value**

- None

**Example**

The following code shows a simple function to display the data received from the push notification in the `console.log`.

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(function(data1, data2, data3) {
  // JSON data within push notification
  console.log(JSON.stringify(data1));
  console.log(JSON.stringify(data2));
  console.log(JSON.stringify(data3));
});
{{</highlight>}}

See Also: 

- [Send Push Notification using Monaca](/en/products_guide/push_notification/overview)
- [Push Notification API for Backend Management API](../../cloud_management/push)
- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)
