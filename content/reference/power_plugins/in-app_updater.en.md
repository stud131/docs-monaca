---
title: Monaca In-App Updater
weight: 20
---

This plugin updates HTML5 assets contained in the app without rebuilding
and packaging the app. You need a Web server to host the update files
which will be accessed from the app.

{{<note>}}
    In order to use this plugin, you are required to subscribe to a valid plan. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

## Supported Platforms
-   Cordova 6.2 or higher
-   iOS 8 or later
-   Android 4 or later

## Adding the Plugin in Monaca Cloud IDE

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Configure" menu2="Cordova Plugin Settings">}}.

2.  Under *Available Plugins* section, hover over the the `InAppUpdater` plugin and click {{<guilabel name="Enable">}} button.

    {{<img src="/images/reference/power_plugins/inapp_updater/8.png">}}

3.  Next, you need to configure necessary information for this plugin.
    Find your newly added plugin under the *Enable Plugins* section.
    Then, hover the plugin and click {{<guilabel name="Configure">}} button.

    {{<img src="/images/reference/power_plugins/inapp_updater/9.png">}}

4.  Input the [CheckUpdate URL](#checkupdate-url) and [Download URL](#download-url) appropriately. Then, click {{<guilabel name="OK">}} button.

    {{<img src="/images/reference/power_plugins/inapp_updater/10.png" width="500">}}

## Usage

This plugin updates the HTML5 asset for the version of the target application.
When updating the HTML5 asset, set a new update number in the update file on the web server side.

For the update file on the Web server side, see [CheckUpdate URL](#checkupdate-url).


###  Plugin Configuration

In this section, we will talk about how to create the two web API you
will need to use this plugin: [CheckUpdate URL](#checkupdate-url) and [Download URL](#download-url).

###  CheckUpdate URL

Check the update version on the server side.

**Request Parameters**

Parameter | Data Type | Description
----------|-----------|---------------------
`project_id` | String | Unique project ID
`my_update_number` | String | [optional] The current update number of the app
`os` | String | [optional] The type of OS to receive the update
`build_type` | String | [optional] The type of build
`app_version` | String | [optional] The version of the app
`plugin_version` | String | [optional] The version of the InAppUpdater plugin

**Response Parameters**

Here is an example of a successful response:

{{<highlight javascript>}}
{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/ios-v2.1.0.zip" // This parameter is optional.
      }
    }
  }
}
{{</highlight>}}

If you use static files, then the information of all update versions
will be included in the response as follows:

{{<highlight javascript>}}
{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/1/ios-v2.1.0.zip" //  This parameter is optional.
      },
      "2": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/2/ios-v2.1.0.zip" //  This parameter is optional.
      }
    },
    "2.2.0": {　// app version
      "1": { // update number
        "date": 20170210,
        "url": "https://hogehoge.com/app/1/ios-v2.2.0.zip" //  This parameter is optional.
      }
    }
  }
}
{{</highlight>}}

As shown in the above example, the value of the update number is an JSON
object consists of the update information such as `date`, `url` and so
on. It can be obtained by the `updateInfo` parameter of a JSON object
returned by the Promise of [getServerVersion()](#getserverversion) method.
 
### Download URL

Download the zip file (update package file).

{{<note>}}
    You can omit this preference if you set a download URL with {{<link title="download()" href="#download">}}.
{{</note>}}

**Request Parameters**

Parameter| Data Type | Description
---------|-----------|-------------------
`update_number` | String | The update version number to be downloaded
`project_id` | String | Unique project ID
`my_update_number` | String | [optional] The current update number of the app
`os` | String | [optional] The type of OS to receive the update
`build_type` | String | [optional] The type of build
`app_version` | String | [optional] The version of the app
`plugin_version` | String | [optional] The version of the InAppUpdater plugin

**Response Parameters**

A successful response contains a ZIP file of InAppUpdater resource.

## API Reference

The easiest way to use this plugin is to only use [autoUpdate()](#autoupdate) which will
download the update files (as configure in [Plugin Configuration](#plugin-configuration)) and
update the app automatically.

On the other hand, if you want to customize the update process, you can
use various available methods such as [getServerVersion()](#getserverversion), [download()](#download), [updateAndRestart()](#updateandrestart) and so on.

Here is the list of all available methods for this plugin:

Methods                    | Description
---------------------------|------------------------------------------------------------
[getServerVersion()](#getserverversion) | Get the information of files to be updated from the server.
[forceStopGetServerVersion()](#forcestopgetserverversion) | Force [getServerVersion()](#getserverversion) to stop.
[getLocalVersion()](#getlocalversion) | Get the currect version of the app.
[download()](#download) | Download the update files.
[forceStopDownload()](#forcestopdownload) | Force [download()](#download) to stop.
[updateAndRestart()](#updateandrestart) | Deploy and mount the downloaded update files, and then restart the app.
[status()](#status) | Get the current status of the plugin.
[showAlertDialog()](#showalertdialog) | Show a dialog with a title and a message. Only one dialog is shown at a time.
[dismissAlertDialog()](#dismissalertdialog) | Close the Alert dialog.
[showProgressDialog()](#showprogressdialog) | Show a Progress dialog indicating the update progress.
[changeProgressDialog()](#changeprogressdialog) | Change the Progress dialog.
[dismissProgressDialog()](#dismissprogressdialog) | Close a Progress dialog.
[networkStatus()](#networkstatus) | Check the network status (Wifi, 3G/LTE, or disconnected).
[terminateApp()](#terminateapp) | Terminate/Shut down the app.
[autoUpdate()](#autoupdate) | Update automatically if necessary, by using methods such as getServerVersion, download, etc.

###  getServerVersion()

Get the information of files to be updated from the server.

{{<highlight javascript>}}
monaca.InAppUpdater.getServerVersion([args: JSON object]): Promise
{{</highlight>}}

**Parameter (JSON Object)**

Property | Data Type | Description
-----|-----------|------------------
`connectDelay` | Integer | A delay time in milliseconds before starting to connect to the server
`connectTimeout` | Integer | (Android only) A time-out duration in milliseconds for connecting to the server
`readTimeout` | Integer  | (Android only) A time-out duration in milliseconds for receiving all responses from the server
`timeoutForRequest` | Integer | (iOS only) A time-out duration in milliseconds for sending a request to the server. When the time-out happens, the request will be resent automatically without any errors.
`timeoutForResponse` | Integer | (iOS only) A time-out duration in milliseconds for receiving all responses from the server

**Return Value (Promise)**

- Success callback receives a JSON object as shown below:

    Property | Data Type | Description
    -----|-----------|------------------
    `needsUpdate` | Boolean | It indicates whether or not the version of the app should be updated.
    `updatable` | Boolean | It indicates whether or not there are new files for update on the server.
    `latestVersion` | String | The latest version of the app
    `myVersion` | String | The current version of the app
    `latestUpdateNumber` | String | The latest update number for the current version of the app
    `myUpdateNumber` | String | The current update number for the current version of the app
    `updateInfo` | JSON Object | The update information returned by the server after the update number. For example, if the server side response is as follows: {{<highlight javascript>}}{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/ios-v2.1.0.zip" // This parameter is optional.
      }
    }
  }
}{{</highlight>}}Then, the value of updateInfo will be: {{<highlight javascript>}}updateInfo = {
  "date": 20170113,
  "url": "https://hogehoge.com/app/ios-v2.1.0.zip"
}{{</highlight>}}

- Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.getServerVersion().then(
    function(json) {
        alert( JSON.stringify(json) );
        targetVersion = json.myVersion;
        targetUpdateNumber = json.latestUpdateNumber;
        url = json.updateInfo.url;
        alert( targetVersion );
        alert( targetUpdateNumber );
        alert( url );
    } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

###  forceStopGetServerVersion()

Force `getServerVersion()` to stop.

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopGetServerVersion(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopGetServerVersion().then(
    function(str) { alert("stop success"); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

###  getLocalVersion()

Get the currect version of the app.

{{<highlight javascript>}}
monaca.InAppUpdater.getLocalVersion(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.getLocalVersion().then(
    function(json) { alert( JSON.stringify(json) ); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

###  download()

Download the update files.

{{<highlight javascript>}}
monaca.InAppUpdater.download(args: JSON object): Promise
{{</highlight>}}

**Parameter (JSON Object)**

Name | Data Type | Description
-----|-----------|----------------------
`version` | String | The target app version
`updateNumber` | Integer | The update number
`bufferSize` | Integer | (Android only) Buffer size in bytes. The default value is `8192`.
`url` | String | The URL where you download the ZIP file from. If this value is not existed, the value of [Download URL](#download-url) (`monaca:updater_DownloadUrl` in `config.xml`) is used instead.
`connectDelay` | Integer | A delay time in milliseconds before starting to connect to the server
`connectTimeout` | Integer | (Android only) A time-out duration in milliseconds for connecting to the server
`readTimeout` | Integer | (Android only) A time-out duration in milliseconds for receiving all responses from the server
`timeoutForRequest` | Integer | (iOS only) A time-out duration in milliseconds for sending a request to the server. When the time-out happens, the request will be resent automatically without any errors.
`timeoutForResponse` | Integer | (iOS only) A time-out duration in milliseconds for receiving all responses from the server

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.

-   Fail callback receives a JSON object indicating the error(s).

-   Progress callback receives a JSON object indicating the progress of download as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `count` | Integer | The total size of the files that have been downloaded so far
    `total` | Integer | The total size of the all expected download files

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.download( { version : targetVersion, updateNumber : targetBuildNumber, url : url } ).then(
    function(json) { alert( JSON.stringify(json) ); } ,
    function(fail) { alert( JSON.stringify(fail) ); } ,
    function(json) { console.log( json.count + "/" + json.total + " are done." ); }
);
{{</highlight>}}

###  forceStopDownload()

Force `download()` to stop.

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopDownload(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopDownload().then(
    function(str) { alert("stop success"); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

###  updateAndRestart()

Deploy and mount the downloaded update files, and then restart the app.

{{<highlight javascript>}}
monaca.InAppUpdater.updateAndRestart(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.

-   Fail callback receives a JSON object indicating the error(s).

-   Progress callback receives a JSON object indicating the progress of the deployment as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `count` | Integer | The total size of the files that have been deployed so far
    `total` | Integer | The total size of the all update files to be deployed

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.updateAndRestart().then(
    function() { },
    function(fail) { alert( JSON.stringify(fail) ); },
    function(json) { console.log( json.count + "/" + json.total + " are done." ); }
);
{{</highlight>}}

###  status()

Get the current status of the plugin.

{{<highlight javascript>}}
monaca.InAppUpdater.status(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `running` | Boolean | Returns `true` if the plugin is in use.
    `status` | String | The information on what kind of task the plugin is working on right now.

-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.status().then(
    function(json) { alert( JSON.stringify(json) ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### showAlertDialog()

Show a dialog with a title and a message. Only one dialog is shown at a
time.

{{<highlight javascript>}}
monaca.InAppUpdater.showAlertDialog(args: JSON object): Promise
{{</highlight>}}

**Parameter (JSON Object)**

Name | Data Type | Description
-----|-----------|----------------------
`title` | String | Title of the dialog
`message` | String | Message content
`button` | JSON Object | A button in the dialog consists of 2 elements such as: <ul><li>`label`: [String] The label of the button</li><li>`handler`: A function to be called when the button is clicked.</li></ul>Example: {{<highlight javascript>}}{
    label : "OK",
    handler : function() { alert("OK is clicked"); }
}{{</highlight>}}
`cancel` | JSON Object | A cancel button in the dialog consists of 2 elements such as : <ul><li>`label`: [String] The label of the cancel button</li><li>`handler`: A function to be called when the cancel button is clicked.</li></ul>Example: {{<highlight javascript>}}{
    label : "Close",
    handler : function() { alert("Close is clicked"); }
}{{</highlight>}}

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.showAlertDialog({
    title : "Title" ,
    message : "Message" ,
    button : { label : "OK" , handler : function() { alert( "OK is clicked"); } },
    cancel : { label : "Cancel" , handler : function() { alert( "Cancel is clicked"); } },
    dismiss : function() { alert("Dismissed!"); }
} ).then(
    function(btnLabel) { alert( "open" ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### dismissAlertDialog()

Close the Alert dialog.

{{<highlight javascript>}}
monaca.InAppUpdater.dismissAlertDialog(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
setTimeout( function() {
    monaca.InAppUpdater.dismissAlertDialog().then(
        function(json) { alert( "OK auto close" ); },
        function(fail) { alert( JSON.stringify(fail) ); }
    );
} , 1000 );
{{</highlight>}}

### showProgressDialog()

Show a Progress dialog indicating the update progress.

{{<highlight javascript>}}
monaca.InAppUpdater.showProgressDialog(args: JSON object): Promise
{{</highlight>}}

**Parameter (JSON Object)**

Name | Data Type | Description
-----|-----------|----------------------
`title` | String | Title of the dialog
`message` | String | Message content
`max` | Integer | The maximum value of a counter. When downloading files, it will be a total number of files.
`progress` | Integer | A value that indicates the progress. When downloading files, it will be a total number of files downloaded.
`cancel` | JSON Object | A cancel button in the dialog consists of 2 elements such as : <ul><li>`label`: [String] The label of the cancel button</li><li>`handler`: A function to be called when the cancel button is clicked.</li></ul>Example: {{<highlight javascript>}}{
    label : "Close",
    handler : function() { alert("Close is clicked"); }
}{{</highlight>}}
`dismiss` | Callback | A function to be called when a dialog is closed.

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.showProgressDialog(
    { title : "Title" ,
    message : "Message" ,
    max : 100 ,
    progress : 50 ,
    cancel : { label : "Cancel" , handler : function() { log("cancel handler"); } } ,
    dismiss : function() { log("dismissed."); }
    } ).then(
    function(json) {
    alert(JSON.stringify(json));
    },
    function(fail) {
    alert( JSON.stringify(fail));
    }
);
{{</highlight>}}

### changeProgressDialog()

Change the Progress dialog.

{{<highlight javascript>}}
monaca.InAppUpdater.changeProgressDialog(args: JSON object): Promise
{{</highlight>}}

**Parameter (JSON Object)**

Name | Data Type | Description
-----|-----------|----------------------
`progress` | Integer | A value of the progress to be changed/updated.

**Return Value (Promise)**

-   Success callback has no argument.
-   There is no fail callback.

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.changeProgressDialog( { progress: progress } ).then(
    function() {
    if (progress < 100) {
        setTimeout( function() { changeProgressDialog(progress+10); } , 500 );
    } else {
        monaca.InAppUpdater.dismissProgressDialog().then(
        function(json) { log("complete"); } ,
        function(error) { alert( JSON.stringify(error) ); }
        );
    }
    }
)
{{</highlight>}}

### dismissProgressDialog()

Close a Progress dialog.

{{<highlight javascript>}}
monaca.InAppUpdater.dismissProgressDialog(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
setTimeout( function() {
    monaca.InAppUpdater.dismissProgressDialog().then(
    function(json) { alert(JSON.stringify(json)); } ,
    function(error) { alert( JSON.stringify(error) ); }
    );
} , 1000 );
{{</highlight>}}

### networkStatus()

Check the network status (Wifi, 3G/LTE, or disconnected).

{{<highlight javascript>}}
monaca.InAppUpdater.networkStatus(): Promise
{{</highlight>}}

**Parameter**

- None

**Return Value (Promise)**

-   Success callback receives a JSON object as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `network` | Boolean | Return `true` if carrier network (i.e. Docomo, KDDI, …) is available.
    `wifi` | Boolean | Return `true` if Wifi is available.
    `mobile` | Boolean | Return `true` if a network connection (Wifi or carrier network) is available. Otherwise, return `false when there is no connection available.`

-   Fail callback receives a JSON object indicating the error(s).

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.networkStatus().then(
    function(json) { alert( JSON.stringify(json) ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

### terminateApp()

Terminate/Shut down the app.

{{<note>}}
This method is added for compatibility with the old <code>InAppUpdater</code> plugin ( v2.0.4 ) for Cordova 5.
{{</note>}}

{{<warning>}}
For iOS, this is equivalent to shutdown/crash so we do not recommend to use. Apple might reject your app because of this.
{{</warning>}}

{{<highlight javascript>}}
monaca.InAppUpdater.terminateApp()
{{</highlight>}}

**Parameter**

- None

**Return Value**

- None

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.terminateApp();
{{</highlight>}}

###  autoUpdate()

Download the update files and update the app automatically.

{{<highlight javascript>}}
monaca.InAppUpdater.autoUpdate(options: JSON object): Promise
{{</highlight>}}

**Parameter (JSON Object)**

Name | Data Type | Description
-----|-----------|----------------------
`connectDelay` | Integer | A delay time in milliseconds before starting to connect to the server
`dialogMessages` | JSON Object | A dialog to be displayed while updating the app. It has 3 variables such as: <ul><li>`confirm3G`: [String] A text to be shown when the user is using carrier network instead of Wifi connection while downloading the update.</li><li>`prepare`: [JSON Object] An object with 2 string variables such as `title` and `message` which will displayed while preparing to download the updates.</li><li>`download`: [JSON Object] An object with 2 string variables such as `title` and `message` which will displayed while downloading the updates.</li></ul>Example: {{<highlight javascript>}}{
    confirm3G : 'These updates will be downloaded with your mobile data.',
    prepare : {
        title : 'Preparing to Dowload the Updates',
        message : 'Now checking the server version ...'},
    download : {
        title : 'Dowloading the Updates',
        message : 'Now downloading ...'}
}{{</highlight>}}
`nextTask` | Callback | A function to be called when the update is done successfully.
`failTask` | Callback | A function to be called when the update is failed.

**Return Value**

- None

**Example**

{{<highlight javascript>}}
monaca.InAppUpdater.autoUpdate( {
    connectDelay : 0000,
    connectTimeout : 30000,
    readTimeout: 300000,
    nextTask : function(res) {
    if (res.requireRestart) {
        monaca.InAppUpdater.updateAndRestart().then(
        function() { },
        function(fail) { alert( JSON.stringify(fail) ); }
        );
    } else {
        alert("App is started!");
    }
    },
    failTask : function(res) {
    monaca.InAppUpdater.showAlertDialog(
        { title : "Error Code "+res.error.code ,
        message : res.error.message ,
        button : { label : "OK" , handler : function() { } }
        } ).then(
        function(json) {  },
        function(fail) { }
    );
    }
});
{{</highlight>}}

