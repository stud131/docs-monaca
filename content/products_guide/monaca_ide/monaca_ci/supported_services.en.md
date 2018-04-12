---
title: Deploy Services
weight: 20
aliases: 
    - /en/monaca_ide/manual/monaca_ci/supported_services
    - /en/manual/monaca_ci/supported_services
---

## Currently Supported Deploy Services

### DeployGate

[DeployGate](https://deploygate.com/) makes it easy to share your
in-development iOS and Android apps, allowing developers to seamlessly
progress through the prototyping, development, testing, and marketing
stages of app distribution.

####  How to Get API Key

1.  Register and log into [DeployGate](https://deploygate.com/).

2.  Go to `Account Settings`.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/1.png">}}

3.  Then, a Profile page will be shown. You will be able to find the API
    key at the end of the page.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/2.png" width="600">}}

#### Parameters

You can use the following parameters in the JSON recipe script for Monaca CI. For more information, please refer to [DeployGate API documentation](https://deploygate.com/docs/api).

| Param | Description | Remark |
|-------|-------------|--------|
| `token` | Your API key. If you are going to use the API for automated build in your organization, you may want to use organization’s API key which shown on the organization page to upload the app independent from member/role management. | Stored in deploy service settings. Automatically populated. |
| `file` | App file binary |	Automatically populated |
| `message` | [Optional] Push message | |                       
| `distribution_key` | [Optional] Target Distribution Key | |                       
| `release_note` | [Optional] Distribution message | |                        
| `disable_notify` | [Optional]\(`iOS only`\) If you set yes as a value, disable notify via email. | |
| `visibility` | [Optional] Set a new application’s privacy setting by specifying `private` (default) or `public`. If you are using Personal Free account, you have to specify `public` to upload a new app since it doesn’t have a slot for private app. No effect when updating. | | 

### HockeyApp

[HockeyApp](https://hockeyapp.net/) brings mobile DevOps to your apps
with beta distribution, crash reporting, user metrics, feedback, and
powerful workflow integrations.

####  How to Get API Key

1.  Register and log into [HockeyApp](https://hockeyapp.net/).

2.  Go to `Account Settings`.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/3.png">}}

3.  In the `Account Settings` page, go to `API Tokens` tab. In this page,
    you can find all of your API tokens or create a new one. Assuming
    you haven't created an API token yet, let's create one as shown in
    the screenshot below:

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/4.png">}}

4.  Once the API token is successfully created, you will be able to see
    it at the bottom of the page.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/5.png">}}

#### Parameters

You can use the following parameters in the JSON recipe script for Monaca CI. For more information, please refer to [HockeyApp API documentation](https://support.hockeyapp.net/kb/api/api-apps).

<table>
    <tr>
        <th>Param</th>
        <th>Description</th>
        <th>Remark</th>
    </tr>
    <tr>
        <td><code>ipa</code></td>
        <td>File data of the <code>.ipa</code> for iOS, <code>.app.zip</code> for OS X, or <code>.apk</code> file for Android.</td>
        <td>Automatically populated</td>
    </tr>
    <tr>
        <td><code>dsym</code></td>
        <td>[Optional] file data of the <code>.dSYM.zip</code> file (iOS and OS X) or <code>mapping.txt</code> (Android). Please note that the extension has to be <code>.dsym.zip</code> (case-insensitive) for iOS and OS X and the file name has to be <code>mapping.txt</code> for Android.</td>
        <td></td>
    </tr>
    <tr>
        <td><code>notes</code></td>
        <td>[Optional] release notes as Textile or Markdown (after 5k characters note are truncated)</td>
        <td></td>
    </tr>
    <tr>
        <td><code>notes_type</code></td>
        <td>[Optional] type of release notes:
            <ul>
                <li><code>0</code> for Textile</li>
                <li><code>1</code> for Markdown</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>notify</code></td>
        <td>[Optional] notify testers (can only be set with full-access tokens):
            <ul>
                <li><code>0</code> to not notify testers</li>
                <li><code>1</code> to notify all testers that can install this app</li>
                <li><code>2</code> to notify all testers</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>status</code></td>
        <td>[Optional] download status (can only be set with full-access tokens):
            <ul>
                <li><code>1</code> to not allow users to download the version</li>
                <li><code>2</code> to make the version available for download</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>tags</code></td>
        <td>[Optional] restrict download to comma-separated list of tags</td>
        <td></td>
    </tr>
    <tr>
        <td><code>teams</code></td>
        <td>[Optional] restrict download to comma-separated list of team IDs. For example:
            <ul>
                <li><code>teams=12,23,42</code>with 12, 23 and 42 being the database IDs of your teams</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>users</code></td>
        <td>[Optional] restrict download to comma-separated list of user IDs. For example:
            <ul>
                <li><code>users=1224,5678</code>with 1224 and 5678 being the database IDs of your users</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>mandatory</code></td>
        <td>[Optional] set version as mandatory:
            <ul>
                <li><code>0</code> for not mandatory</li>
                <li><code>1</code> for mandatory</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>release_type</code></td>
        <td>[Optional] set the release type of the app:
            <ul>
                <li><code>0</code> for beta [default]</li>
                <li><code>1</code> for store</li>
                <li><code>2</code> for alpha</li>
                <li><code>3</code> for enterprise</li>
            </ul>
        </td>
        <td></td>
    </tr>
</table>

### Appetize.io

[Appetize.ios](https://appetize.io/) allows you to run Android and iOS apps on your browser. 
By using this service, it is possible to check the operations of the application without iOS certificates or provisioning profiles.

Let's try experiencing Appetize.io's services with [this demo](https://appetize.io/demo).

{{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/appetize_demo.png">}}

#### How to Get API Key

1. Register and log into [Appetize.io](https://appetize.io/).

2. Enter your email in the [Request an API token form](https://appetize.io/docs#request-api-token) and click on {{<guilabel name="Request">}} button to acquire the API token.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/appetize_get_api_token.png" width="450">}}


#### Parameters

You can use the following parameters in the JSON recipe script for Monaca CI. For more information, please refer to [Appetize.io documentation](https://appetize.io/docs#creating-apps).

Parameter | Type | Description
----------|-------------|-------------
`platform` | string | [Required] Must be `ios` or `android`.
`timeout`| number | The number of seconds to wait until automatically ending the session due to user inactivity. Must be `30`, `60`, `90`, `120`, `180`, `300` or `600`. (Default is `120`)
`disableHome` | boolean | Disables the home button on the iOS simulator.
`disabled` | boolean | Disables streaming for this app.
`useLastFrame` | boolean | Show the last image on the screen in the simulator after session ends.
`buttonText` | string | Customize the message prompting the user to start the session. (Default is `Tap to play`)
`postSessionButtonText` | string | Sustomize the message prompting the user to restart the session. (Default is `Tap to play`)
`launchUrl` | string | Specify a deep link to bring your users to a specific location when your app is launched.
`note` | string | A note for your own purposes, will appear on your management dashboard.
`appPermissions` | JSON object | Values can be `authenticated`, `public`, or null to reset to default. Keys can be:<ul><li>`run`: run your app</li><li>`networkProxy`: specify a network proxy when running app</li><li>`networkIntercept`: use Appetize.io's intercepting proxy when running the app</li><li>`debugLog`: view your app's NSLog or Logcat output</li><li>`adbConnect`: debug your app by connecting ADB to the hosted emulator</li><li>`androidPackageManager`: allow the installation of additional APK's while your app is running</li></ul>
## Upcoming Supported Deploy Services

In addition to the above services, we are planning to add more deployment services. Currently, we are working the following service:

-   [Test Flight](https://developer.apple.com/testflight/)

See Also:

- [Monaca CI Overview](../overview)
