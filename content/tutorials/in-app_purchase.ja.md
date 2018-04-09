---
title: "Cordova In-app Purchase Plugin"
weight: 100
---

A Cordova/PhoneGap plugin to perform In-App Purchase for Cordova on iOS, Android and Windows.

- Repo: https://github.com/j3k0/cordova-plugin-purchase
- Plugin ID/Package Name: `cc.fovea.cordova.purchase`

## Demo 

{{<import pid="5ac6e55ee788855e368b4567" title="In-app Purchase Plugin Demo">}}

{{< figure src="/images/samples/in-app_purchase.png">}}

## Enable the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## Usage

The store API is mostly events based. As a user of this plugin, you will have to register listeners to changes happening to the products you register.

The core of the listening mechanism is the `when()` method. It allows you to be notified of changes to one or a set of products using a query mechanism:

{{<highlight javascript>}}
store.when("product").updated(refreshScreen);
store.when("full version").owned(unlockApp);
store.when("subscription").approved(serverCheck);
store.when("downloadable content").downloaded(showContent);
etc.
{{</highlight>}}

The `updated` event is fired whenever one of the fields of a product is changed (its `owned` status for instance).

This event provides a generic way to track the statuses of your purchases, to unlock features when needed and to refresh your views accordingly.

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5ac6e55ee788855e368b4567). For a complete API references, please refer to [here](https://github.com/j3k0/cordova-plugin-purchase).

### store.verbosity

The `verbosity` property defines how much you want `store.js` to write on the console. Available values are as follows:

- `store.QUIET` or `0` to disable all logging (default)
- `store.ERROR` or `1` to show only error messages
- `store.WARNING` or `2` to show warnings and errors
- `store.INFO` or `3` to also show information messages
- `store.DEBUG` or `4` to enable internal debugging messages.

{{<highlight javascript>}}
store.verbosity
{{</highlight>}}

**Example**

{{<highlight javascript>}}
// Enable maximum logging level
store.verbosity = store.DEBUG;
{{</highlight>}}

### store.register()

Add or register a product to the store before you can use them in your code.

{{<highlight javascript>}}
store.register(product);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`product` | JSON Object | Production options

**Example**

{{<highlight javascript>}}
store.register({
    id:    'consumable1', // id without package name!
    alias: 'Extra Life',
    type:   store.CONSUMABLE
});
{{</highlight>}}

### store.refresh()

Load product data from the servers and restore whatever already have been purchased by the user.

{{<highlight javascript>}}
store.refresh();
{{</highlight>}}

**Example**

{{<highlight javascript>}}
// ...
// register products and events handlers here
// ...
//
// then and only then, call refresh.
store.refresh();
{{</highlight>}}

### store.get(id/alias)

Retrieve a product by its `id` or `alias`.

{{<highlight javascript>}}
store.get(id/alias)
{{</highlight>}}

Name | Type | Description
-----|------|-------------
`id` | String | Product ID 
`alias` | String | Product Name

**Example**

{{<highlight javascript>}}
var product = store.get("consumable1");
{{</highlight>}}

### store.when(query, event, callback)

Register a callback for a product-related event. For more details about this api, please refer to [here](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/api.md#storewhenquery)

{{<highlight javascript>}}
store.when(query, event, callback)
{{</highlight>}}

**Return Value**

- `Promise`

**Example**

{{<highlight javascript>}}
store.when("subscription1", "approved", function(product) { 
    console.log("Subscription approved!");
});
{{</highlight>}}

### store.error(callback)

Register an error handler.

{{<highlight javascript>}}
store.error(callback);
{{</highlight>}}

**Example**

{{<highlight javascript>}}
store.error(function(e){
    console.log("ERROR " + e.code + ": " + e.message);
});
{{</highlight>}}


### store.ready(callback)

Register the callback to be called when the store is ready to be used.

If the store is already ready, callback is executed immediately. `store.ready()` without arguments will return the `ready` status.

{{<highlight javascript>}}
store.ready(callback)
{{</highlight>}}

**Example**

{{<highlight javascript>}}
store.ready(function() {
    console.log("Store is ready");
});

{{</highlight>}}


