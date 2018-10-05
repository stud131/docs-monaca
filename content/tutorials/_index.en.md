---
title: Tutorials
weight: 20
---

## Products Tutorials   

<div class="container">
    <div class="item">
        <a href="monaca_ide">
            <h3>Monaca Cloud IDE</h3>
            <p>Step-by-step tutorials for Monaca Cloud IDE starting from creating a project to deploying your app</p>
        </a>
    </div>
    <div class="item">
        <a href="monaca_localkit">
            <h3>Monaca Localkit</h3>
            <p>Step-by-step tutorials for Monaca Localkit starting from creating a project to deploying your app</p>
        </a>
    </div>
    <div class="item">
        <a href="monaca_cli">
            <h3>Monaca CLI</h3>
            <p>Step-by-step tutorials for Monaca CLI starting from creating a project to deploying your app</p>
        </a>
    </div>
</div> 

## Plugins Tutorials 

<div class="container">
    <div class="item">
        <a href="sqlite">
            <h3>Cordova Sqlite Storage Plugin</h3>
            <p>Adding a Web SQL database to your app using Cordova Sqlite Storage plugin</p>
        </a>
    </div>
    <div class="item">
        <a href="google_analytics">
            <h3>Cordova Google Analytics Plugin</h3>
            <p>Adding Google analytics feature to your app using Cordova Google Analytics plugin</p>
        </a>
    </div>
    <div class="item">
        <a href="firebase">
            <h3>Cordova Firebase Plugin</h3>
            <p>Adding push notification & Google analytics features to your app using Cordova Firebase plugin</p>
        </a>
    </div>
    <div class="item">
        <a href="in-app_purchase">
            <h3>Cordova In-App Purchase Plugin</h3>
            <p>Adding in-app purchase feature to your app using Cordova in-app updater plugin</p>
        </a>
    </div>
    <div class="item">
        <a href="app_version">
            <h3>Cordova AppVersion Plugin</h3>
            <p>Adding AppVersion plugin to your app</p>
        </a>
    </div>
    <div class="item">
        <a href="ionic_keyboard">
            <h3>Cordova Ionic Keyboard Plugin</h3>
            <p>Adding Ionic keyboard to your app</p>
        </a>
    </div>
    <div class="item">
        <a href="social_sharing">
            <h3>Cordova Social Sharing Plugin</h3>
            <p>Adding social sharing feature to your app</p>
        </a>
    </div>
    <div class="item">
        <a href="phonegap_push">
            <h3>Phonegap Push Plugin</h3>
            <p>Adding push notification feature to your app using Phonegap Push plugin</p>
        </a>
    </div>
</div> 

<style>
    div.container {
        margin-top: 50px;
        width: 100%;
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: space-between;
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