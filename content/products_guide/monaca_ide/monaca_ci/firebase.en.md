---
title: Deploy to Firebase
weight: 30
---

Deploy to Firebase is available only for PWA-built applications.

## Preparation
For deployment, you need to prepare `project ID` and` API token `.

### How to get Project ID

1. At [Firebase Console](https://console.firebase.google.com), Create new project.
2. The project ID is displayed in the red frame below.

    {{<img src="/images/monaca_ide/manual/monaca_ci/firebase/project_id.png" width="500">}}

### How to Get API Token

1.  Install Firebase CLI according to the [Firebase CLI Guide](https://firebase.google.com/docs/hosting/quickstart).
2.  After install Firebase CLI、Get the token with the following command.

    {{<highlight bash>}}firebase login:ci{{</highlight>}}

## Register Deploy Service

You are ready to add Firebase infomation to Monaca. Please do as follows:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Configure" menu2="Deploy Services">}}.

2.  Click on {{<guilabel name="Add Deploy Service">}}.

3.  Select `Firebase` and fill in the required information such as
    
    -   `Config Alias`: a unique identifier for each service.
    -   `API Token`: API Token provided by Firebase.
    -   `Project ID`: Project ID displayed on Firebase console.

4. Then, click on {{<guilabel name="Add">}}.

## Start Deployment

Using the registered deployment service, We can start deploying the build app to Firebase.

1. Please refer to [Building for PWA](/en/products_guide/monaca_ide/build/build_pwa/) for the build procedure.

2. After the build is completed, navigate to the build result page.

3. Execute the deployment from the build result page. Since the registered deployment services show up at the bottom of the page, click any services of your choices to start the distribution process.

    {{<img src="/images/monaca_ide/manual/monaca_ci/firebase/start_deploy.png" width="650">}}


See Also:

- [Building for PWA](/en/products_guide/monaca_ide/build/build_pwa/)