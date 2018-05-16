---
title: チュートリアル
weight: 20
---

## 製品 チュートリアル

<div class="container">
    <div class="item">
        <a href="monaca_ide">
            <h3>Monaca クラウド IDE</h3>
            <p>Monaca クラウド IDE のチュートリアルでは、プロジェクトの作成からアプリのデプロイまでを行います。</p>
        </a>
    </div>
    <div class="item">
        <a href="monaca_localkit">
            <h3>Monaca Localkit</h3>
            <p>Monaca Localkit のチュートリアルでは、プロジェクトの作成からアプリのデプロイまでを行います。</p>
        </a>
    </div>
    <div class="item">
        <a href="monaca_cli">
            <h3>Monaca CLI</h3>
            <p>Monaca CLI のチュートリアルでは、プロジェクトの作成からアプリのデプロイまでを行います。</p>
        </a>
    </div>
    <div class="item">
        <a href="monaca_vs">
            <h3>Monaca for Visual Studio</h3>
            <p>Monaca for Visual Studio のチュートリアルでは、プロジェクトの作成からアプリのデプロイまでを行います。</p>
        </a>
    </div>
</div> 

## Cordova プラグイン チュートリアル

<div class="container">
    <div class="item">
        <a href="sqlite">
            <h3>Cordova Sqlite Storage プラグイン</h3>
            <p>Cordova Sqlite Storage プラグインを使用して Web SQL データベースをアプリに追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="google_analytics">
            <h3>Cordova Google Analytics プラグイン</h3>
            <p>Cordova Google Analytics プラグインを使用してGoogle Analytics 機能をアプリに追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="firebase">
            <h3>Cordova Firebase プラグイン</h3>
            <p>Cordova Firebase プラグインを使用してアプリにプッシュ通知と Google analytics 機能を追加します。</p>
        </a>
    </div>
    <div class="item">
        <a href="in-app_purchase">
            <h3>Cordova In-App Purchase プラグイン</h3>
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
