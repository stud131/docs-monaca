---
title: Database
weight: 30
---

<div class="container">
    <div class="item">
        <a href="/en/sampleapp/samples/backend_memo/">
        <h3>Monaca Backend</h3>
        <p>A sample application allowing a user to create a memo app using Monaca Backend API</p>
    </div>
    <div class="item">
        <a href="/en/tutorials/sqlite/">
            <h3>Web SQL</h3>
            <p>Adding a Web SQL database to your app using Cordova Sqlite Storage plugin</p>
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
