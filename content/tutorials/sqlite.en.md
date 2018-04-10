---
title: "Cordova Sqlite Storage Plugin"
weight: 50
---

This Cordova/PhoneGap plugin opens and uses sqlite databases on Android, iOS and Windows with HTML5/Web SQL API.

- Repo: https://github.com/litehelpers/Cordova-sqlite-storage
- Plugin ID/Package Name: `cordova-sqlite-storage`
- Tested Version: 2.3.0

## Demo 

{{<import pid="5ac33652e78885cd208b4567" title="Sqlite Storage Plugin Demo">}}

{{< figure src="/images/samples/sqlite.png">}}

## Enable the Plugin in Monaca IDE

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.

2.  Click on {{<guilabel name="Import Cordova Plugin">}} button. Then, you can choose to import the plugin using a ZIP file or URL/Package Name. 

## Usage

After importing the plugin into the project, you can start initialize your database. Please make sure to call the plugin API after the Cordova is loaded. 

{{<highlight javascript>}}
var database = null;

document.addEventListener("deviceready", function(){
    // Initialize the database after the Cordova is ready.
    initDatabase();
});

function initDatabase() {
    database = window.sqlitePlugin.openDatabase({name: 'sample.db', location: 'default'});

    database.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE SampleTable (name, score)');
    });
}
{{</highlight>}}

## API References

In this page, we only describe some main APIs used in our [Demo](https://monaca.mobi/directimport?pid=5ac33652e78885cd208b4567). For a complete API references, please refer to [here](https://github.com/litehelpers/Cordova-sqlite-storage).

### Self-test functions

#### echoTest()

Verify that both the Javascript and native part of this plugin are installed in your application.

{{<highlight javascript>}}
window.sqlitePlugin.echoTest(successCallback, errorCallback);
{{</highlight>}}

**Return Value**

- `Promise`

#### selfTest()

Verify that this plugin is able to open a database, execute the CRUD (create, read, update, and delete) operations, and clean it up properly.

{{<highlight javascript>}}
window.sqlitePlugin.selfTest(successCallback, errorCallback);
{{</highlight>}}

**Return Value**

- `Promise`

### Opening a database

Open a database access handle object.

{{<highlight javascript>}}
window.sqlitePlugin.openDatabase({name: String, [location: String], [iosDatabaseLocation: String]}, [successCallback], [errorCallback]);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`name` | String | Name of the database
`location` | String | [optional] Location of the database
`iosDatabaseLocation` | String | [optional] iOS Database Location. Available options are: <ul><li>`default`: Library/LocalDatabase subdirectory - NOT visible to iTunes and NOT backed up by iCloud</li><li>`Library`: Library subdirectory - backed up by iCloud, NOT visible to iTunes</li><li>`Documents`: Documents subdirectory - visible to iTunes and backed up by iCloud</li></ul>

**Return Value**

- `Promise` 

**Example**

An example of opening a database access handle object with a default or a specified location:

{{<highlight javascript>}}
// use the default location
var database = window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'});

// use a specified location for iOS only
var database = window.sqlitePlugin.openDatabase({name: 'my.db', iosDatabaseLocation: 'Library'});
{{</highlight>}}

The successcb and errorcb callback parameters are optional but can be extremely helpful in case anything goes wrong. For example:

{{<highlight javascript>}}
window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'}, function(db) {
  db.transaction(function(tx) {
    // ...
  }, function(err) {
    console.log('Open database ERROR: ' + JSON.stringify(err));
  });
});
{{</highlight>}}

### SQL transactions

Execute SQL on the opened database.

{{<highlight javascript>}}
database.executeSql(SQL_STATEMENT: String, [] , [successCallback], [errorCallback]);
{{</highlight>}}

**Return Value**

- `Promise` 

**Example**

{{<highlight javascript>}}
database.transaction(function(transaction) {
    transaction.executeSql('SELECT count(*) AS recordCount FROM SampleTable', [], function(ignored, resultSet) {
        $('#result').text('RECORD COUNT: ' + resultSet.rows.item(0).recordCount);
    });
}, function(error) {
    alert('SELECT count error: ' + error.message);
});
{{</highlight>}}

{{<highlight javascript>}}
database.transaction(function(transaction) {
    transaction.executeSql('DELETE FROM SampleTable');
}, function(error) {
    alert('DELETE error: ' + error.message);
}, function() {
    alert('DELETE OK');
});
{{</highlight>}}

### Deleting a Database

Delete a database access handle object.

{{<highlight javascript>}}
window.sqlitePlugin.deleteDatabase({name: String, [location: String], [iosDatabaseLocation: String]}, [successCallback], [errorCallback]);
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`name` | String | Name of the database
`location` | String | [optional] Location of the database
`iosDatabaseLocation` | String | [optional] iOS Database Location. Available options are: <ul><li>`default`: Library/LocalDatabase subdirectory - NOT visible to iTunes and NOT backed up by iCloud</li><li>`Library`: Library subdirectory - backed up by iCloud, NOT visible to iTunes</li><li>`Documents`: Documents subdirectory - visible to iTunes and backed up by iCloud</li></ul>

**Return Value**

- `Promise` 

**Example**

{{<highlight javascript>}}
// use the default location
window.sqlitePlugin.deleteDatabase({name: 'my.db', location: 'default'}, successcb, errorcb);

// use a specified location for iOS only
window.sqlitePlugin.deleteDatabase({name: 'my.db', iosDatabaseLocation: 'Library'});
{{</highlight>}}