---
title: 機能
weight: 45
---

<div class="container">
    <div class="item">
        <a href="push">
            <h3>プッシュ通知</h3>
            <p>OneSignal、Firebase などのプッシュ通知サービスを使用してプッシュ通知機能をアプリに追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="sns">
            <h3>SNS 認証</h3>
            <p>Twitter、Facebook などの SNS サービスを使用してユーザーを認証します。</p>
        </a>
    </div>
    <div class="item">
        <a href="https://medium.com/the-web-tub/creating-google-maps-sample-app-with-angularjs-and-onsen-ui-c1325139781e">
            <h3>Google Maps</h3>
            <p>Google Maps JavaScript API を使用してアプリにGoogle マップを追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="https://medium.com/the-web-tub/adding-payment-service-to-cordova-app-with-square-304bea8ad1f7">        
            <h3>支払い</h3>
            <p>Square サービスを使用してアプリに支払い機能を追加します。</p>
        </a>
    </div>
    <!-- <div class="item">
        <a href="/ja/tutorials/">        
            <h3>Social Sharing</h3>
            <p>Adding share feature to your app using Cordova Social Sharing plugin</p>
        </a>
    </div> -->
    <div class="item">
        <a href="https://medium.com/the-web-tub/integrating-monaca-with-api-ai-f9f294c5382a">
            <h3>チャット</h3>
            <p>Google の api.ai を使用してチャットボット機能を追加します。</p>    
        </a>
    </div>
    <div class="item">
        <a href="/ja/sampleapp/samples/admob/">
            <h3>広告</h3>
            <p>Monaca で AdMob を使用してアプリに広告を追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="database">
            <h3>データベース</h3>
            <p>Monaca Backend、Web SQL などを使用してアプリにデータベースを追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="/ja/sampleapp/samples/sample_rss_reader/">
            <h3>RSS</h3>
            <p>jQuery Mobile で RSS 機能をアプリに追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="https://medium.com/the-web-tub/love-pok%C3%A9mon-go-create-your-own-ar-app-in-monaca-with-wikitude-4fe8dbcacc5d">
            <h3>拡張現実 (AR)</h3>
            <p>Cordova Wikitude プラグインを使用してアプリに AR 機能を追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="/ja/tutorials/in-app_purchase/">
            <h3>アプリ内課金</h3>
            <p>Cordova In-App Purchase プラグインを使用してアプリにアプリ内購入機能を追加します。</p>
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