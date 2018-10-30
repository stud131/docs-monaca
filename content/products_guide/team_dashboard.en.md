---
title: Team Dashboard
weight: 85
---

## Monaca Dashboard

There are two types of dashboards in Monaca:

1. Developer Dashboard: is used by Developer accounts to develop and manage projects.

    {{<figure src="/images/team_dashboard/developer_dashboard.png" title="Example of Developer Dashboard">}}

2. Team Dashboard: is used by Administrator accounts to manage developer team and various licenses as well as tickets in a company. 

    {{<figure src="/images/team_dashboard/team_dashboard.png" title="Example of Team Dashboard">}}

{{<note>}}
In order to access the Team Dashboard, you are required to subscribe to a valid plan. Please refer to {{<link title="Pricing" href="https://monaca.io/pricing.html">}}.
{{</note>}}

## Account Types

There are two types of Enterprise or Business accounts:

1. Administrator account

    - This is an account for managing developer accounts and licenses, plugin licenses, support & CI tickets and contract information. 

    - It is used for management only, independent of the general Monaca developer accounts. In other words, it can only be used to log into [Team Dashboard](https://enterprise.monaca.mobi/en/). 

    - If your account is both Developer and Administrator account, you can access Team Dashboard directly from [Developer Dashboard](https://monaca.mobi/en/dashboard) and vice versa.

2. Developer account

    - This is an account for logging into [Developer Dashboard](https://monaca.mobi/en/dashboard) and developing Monaca projects.

    - In the dashboard, the plan name is displayed as `Enterprise (company name)` or `Business (company name)`.

    - Enterprise users can use any [Power plugins](/en/reference/power_plugins/) for FREE while Business users need to pay for each Power plugin. The plugins can be acquired through Team Dashboard (please refer to [Purchasing Plugin Licenses](#purchasing-plugin-licenses)).

## Overview of Team Dashboard

In a company, administrators can log into the Team Dashboard to perform various tasks such as managing a developer team, purchasing and assigning developer licenses, purchasing and using support tickets, changing contract type and so on.

In the Team Dashboard, administrators are mainly doing the following tasks:

- Developer management: invite/remove developers to/from the team.

- Licenses management: purchase and manage developer and Power plugin licenses.

- Ticket management: purchase and manage support and CI (Continuous Integration) tickets, view ticket usage history and check the remaining number of tickets.

- Access restriction management: limit the access to Team and Developer Dashboard by using IP address restriction.

- Contract management: view/update contract information, change contract type and delete the team.

- Support request: contact Monaca support team for various assistances.

## Prerequisites

Once you have successfully registered and logged in as an Administrator in the Team Dashboard, you should complete the following tasks first before you can start using the Team Dashboard properly:

1. [Register the company's information](#team-information)
2. [Invite developer(s) into the team](#managing-developer)

## Undestanding Top page

{{<figure src="/images/team_dashboard/top_page_en.png" title="Top page in the Team Dashboard">}}

In this page, you will be able to see the summary of the whole administration tasks such as current contract type, number of licenses and tickets, orders in progress and so on.

There are 5 main parts of this top page:

1. showing contract type of the administrator

2. navigation menu

3. displaying information about numbers of developer licenses, Power plugin licenses, support & CI tickets and other usages

4. displaying information about various orders in progress. This is available when orders are made using billing method. In other words, it shows how many orders are still waiting for the payment to be settled/completed. 

## Team Account

In this page, you can manage developers and administrators in your team. 

{{<figure src="/images/team_dashboard/manage_team_account_en.png">}}

### Managing Developer

In order to add a developer into your team, click on {{<guilabel name="Invite a developer">}} button. Then, you will be asked to input the email of new member. 

{{<figure src="/images/team_dashboard/add_developer.png" title="Inviting a developer to the team">}}

The new member could be one of the following types of users:

1. the member is a Free Monaca user: this member can be added to the team right away.

2. the member is a paid Monaca user: this member will need to cancel his currently contracted plan first before adding to the team.

3. the member is not a Monaca user: an email will be sent to the member to register with Monaca first and then being added to the team. 

After adding a developer to the team, the added developer will be automatically in a trial state of the same plan as the administrator. For example, if the administrator is under a Business plan, the added developer will be in a trial state of the Business plan. 

{{<note>}}
    While in a trial state, the developer can use any Monaca services belonged to the assigned plan except building a release build.
{{</note>}}

### Managing Administrator

In order to add an admin into your team, click on {{<guilabel name="Add an administrator">}} button. Then, you will be asked to input the following information about the new admin. 

{{<figure src="/images/team_dashboard/add_admin.png" title="Adding an admin to the team">}}

{{<note>}}
    For Business plan user, you can not add any administrator because only one administrator is allowed in this plan. However, Enterprise user can have multiple administrators. 
{{</note>}}

## Developer License

In this page, you can manage developer license for your team. There are 3 types of Developer licenses:

1. Bundled licenses: full licenses coming with your contract

2. Trial licenses: trial licenses for evaluation purposes

3. Purchased licenses: additional licenses that you purchase

{{<figure src="/images/team_dashboard/manage_licenses.png" title="Example of Manage License page">}}

### Modifying License Key Usage

In this page, you can modify the usage of each license key:

- assign/remove licenses to/from developers
- modify the auto-renewal option for the license key
- modify the license period


{{<note>}}
    Only developers who are already belonged to the team can be assigned here. Otherwise, you will need to invite them to the team first. Please refer to {{<link title="managing developer" href="#managing-developer">}}
{{</note>}}

{{<figure src="/images/team_dashboard/modify_license.png" title="Modifying a license usage">}}

### Purchasing Additional Licenses

You can purchase additional developer licenses separately. Each license period is handled separately from the contract term. The usage period is counted after the purchasing is completed. 

In order to purchase additional licenses, click on {{<guilabel name="Purchase developer license">}} button. Then, you will be asked to input the following information. After that, follow the purchasing wizard to complete the process. 

{{<figure src="/images/team_dashboard/purchase_license.png" title="Example of the Purchase additional licenses page">}}

## Power Plugin License

For Business plan users, you can use Power plugins by purchasing the plugin license. However, Enterprise users can use Power plugins for free. 

If there are valid Power plugin licenses, all developers within the team can use the plugins (for a trial period). However, only the developer who actually has been assigned the plugin license to can build a release build. 

{{<figure src="/images/team_dashboard/plugin_list.png" title="Power Plugin License page">}}

### Plugin Settings

In order to assign the plugin license to a developer, please do as follows:

1. Click on {{<guilabel name="Configure">}} button of the plugin you want to assign to open the Plugin Settings page. 

2. Then, you will be able to select a developer from the Developer list.

3. After that, select the project which you want to assign the plugin license to. 

4. Click {{<guilabel name="Register">}} button to complete this assigning process.

{{<figure src="/images/team_dashboard/plugin_setting.png" title="Plugin Setting page">}}

### Purchasing Plugin Licenses

If you are on trial, you cannot buy plugin license. Please register a full contract first. 
Moreover, each plugin license is valid for one year after a complete purchasing.

{{<figure src="/images/team_dashboard/purchase_plugin_license.png" title="Purchasing Plugin License">}}

## Support & CI Tickets

In this page, you will be able to see various information related to support and CI tickets such as number of available tickets, expiration date of the tickets and usage history of each ticket. 

{{<figure src="/images/team_dashboard/manage_tickets.png" title="Support & CI Tickets page">}}

### Purchasing Additional Tickets

After a valid contract registration, a certain numbers of support and CI tickets are awarded monthly. However, you can purchase additional tickets and use them separately. 

{{<figure src="/images/team_dashboard/purchase_support_ticket.png" title="Purchasing Additional Support Tickets">}}

{{<figure src="/images/team_dashboard/purchase_ci_ticket.png" title="Purchasing Additional CI Tickets">}}

## Access Restriction 

In this page, you can limit accesses to either Developer Dashboard or Team Dashboard by using IP address restrictions. By default, there is no access restriction to both dashboards. 

{{<figure src="/images/team_dashboard/access_restriction.png" title="Access Restrictions page">}}

### Chaning Access Restrictions

You can change the access restriction to each dashboard as follows:

1. Click on {{<guilabel name="Change">}} button. 

2. Select `Filter by IP address range` option.

3. Input the IP addresses which you want to allow to access the dashboard. You can input one IP address per line. You can also specify IP address range. Any texts after the white space will be considered as the note/description (see the example below).

    {{<figure src="/images/team_dashboard/limit_access.png" title="Changing Access Restrictions">}}

{{<note>}}
    For Team Dashboard's access restriction, you are required to input your current IP address in addition to other IP addresses. This is to prevent restricting yourself.
{{</note>}}

## Team Information

In this page, you can view and update your team information. 

{{<note>}}
    <b>Remarks</b> column is used to store some information for Monaca Support team such as invoice request.
{{</note>}}

{{<figure src="/images/team_dashboard/team_info.png" title="Team Information page">}}

## Contract Information

In this page, you can view and update your contract information. 

If you are on trial, you will be able to see your trial period in the top page of the dashboard.

{{<figure src="/images/team_dashboard/contract_trial.png" title="Contract information when you are on trial">}}

### Registering the Contract

You can either end the trial or wait until it is over to start registering for a full contract. When registering a full contract, you will be asked to fill in the following information:

{{<figure src="/images/team_dashboard/register_contract.png" title="Contract Registration page">}}

After filling in the contract information, you will need to fill in the payment information:

{{<figure src="/images/team_dashboard/payment_info.png" title="Payment Information page">}}


{{<note>}}
    If you choose <code>Credit Card</code> as your payment method, your contract plan will be effective immediately after completing the registration. However, if you choose <code>Invoice Payment</code>, your contract plan will be effective after the payment is settled/completed.
{{</note>}}

Once a valid payment information is filled, you will be asked to confirm your contract registration one last time before completing the process. Then, your Contract Information page will look something like this:

{{<figure src="/images/team_dashboard/contract_info_en.png" title="Contract Information page">}}

## Invoice & Receipt

In this page, you can view the history of your previous settlements. You can also issue and download invoices of each settlement. 

{{<warning>}}
    When issuing an invoice, you will be asked to specify the receipt address. This address can not be changed later. Therefore, please fill in the right receipt address.
{{</warning>}}

{{<note>}}
    Invoices can only be issued from credit card settlement. 
{{</note>}}

{{<figure src="/images/team_dashboard/invoice.png" title="Invoice & Receipt page">}}

## Support Inquiry

If you have any questions about the usage of the Team Dashboard, contract registration, changing payment method and so on, please contact us directly from this Support Inquiry page.

{{<figure src="/images/team_dashboard/support.png" title="Support Inquiry Form">}}

