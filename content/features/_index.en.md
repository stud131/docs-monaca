---
title: Features
weight: 45
---

<div class="container">
    <div class="item">
        <a href="push">
            <h3>Push Notification</h3>
            <p>Adding push notification feature to your app using popular push notification services such as OneSignal, Firebase, etc</p>
        </a>
    </div>
    <div class="item">
        <a href="sns">
            <h3>SNS Authentication</h3>
            <p>Authenticating your users using popular SNS services such as Twitter, Facebook, etc</p>
        </a>
    </div>
    <div class="item">
        <a href="https://medium.com/the-web-tub/creating-google-maps-sample-app-with-angularjs-and-onsen-ui-c1325139781e">
            <h3>Google Maps</h3>
            <p>Adding Google maps to your app using Google Maps JavaScript API</p>
        </a>
    </div>
    <div class="item">
        <a href="https://medium.com/the-web-tub/adding-payment-service-to-cordova-app-with-square-304bea8ad1f7">        
            <h3>Payment</h3>
            <p>Adding payment feature to your app using Squre service</p>
        </a>
    </div>
    <!-- <div class="item">
        <a href="/en/tutorials/">        
            <h3>Social Sharing</h3>
            <p>Adding share feature to your app using Cordova Social Sharing plugin</p>
        </a>
    </div> -->
    <div class="item">
        <a href="https://medium.com/the-web-tub/integrating-monaca-with-api-ai-f9f294c5382a">
            <h3>Chat</h3>
            <p>Adding a chat bot feature using Google's api.ai</p>    
        </a>
    </div>
    <div class="item">
        <a href="/en/sampleapp/samples/admob/">
            <h3>Ads</h3>
            <p>Adding ads to your app using mobile ads networking called AdMob with Monaca</p>
        </a>
    </div>
    <div class="item">
        <a href="database">
            <h3>Database</h3>
            <p>Adding a database into your app using Monaca Backend, Web SQL, etc</p>
        </a>
    </div>
    <div class="item">
        <a href="/en/sampleapp/samples/sample_rss_reader/">
            <h3>RSS</h3>
            <p>Adding RSS feature to your app with jQuery Mobile</p>
        </a>
    </div>
    <div class="item">
        <a href="https://medium.com/the-web-tub/love-pok%C3%A9mon-go-create-your-own-ar-app-in-monaca-with-wikitude-4fe8dbcacc5d">
            <h3>Augmented Reality (AR)</h3>
            <p>Adding AR feature into your app with Cordova Wikitude plugin</p>
        </a>
    </div>
    <div class="item">
        <a href="/en/tutorials/in-app_purchase/">
            <h3>In-app Purchase</h3>
            <p>Adding in-app purchase feature to your app using Cordova In-app Purchase plugin</p>
        </a>
    </div>
</div>

<style>
    div.container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: start;
    }
    
    div.item {
        width: 320px;
        margin: 20px 20px 0 0;
        padding: 10px;
        height: 150px;
        display: block;
    }

    div.item a > p {
        margin: 0;
        color:  #333333;
        font-size: 12px;
        font-weight: 400;
        text-align: left;
    }

    div.item a > h3 {
        margin: 15px 0;
        color:  #35527c;
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        border: none;
    }
    
    div.item:hover {
        box-shadow: 0 2px 1px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        cursor: hand;
        transition-duration: 200ms;
        transition-property: transform, box-shadow, margin, opacity, width;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        background: rgb(250,250,250);
    } 

    #body-inner > footer {
        display: none;
    }
</style>