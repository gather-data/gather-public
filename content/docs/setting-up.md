---
path: /help/getting-started/setting-up
title: Setting Up
category: Getting Started
published: true
---

This article will help you set up and configure Connections, Views, Modules and Magic Actions as well inviting your team members. Set up should only take about 15 minutes for connections and most automations will take only 5 minutes each but some could take longer.

You might need a developer to help with set up. Don't worry - this is the only stage where they would need to be involved and we will cover everything they need to know.

## Starting out

Think about which Connections you need and what automations you’d like to prioritize.

## Step 1: Connections

### Adding connections

**Database**\
You will need an API key to connect to your database(s).

**Chargify**\
You will need an API key to connect to your Chargify account.

**All other integrations**\
Make sure you have account and login details for the connection you want to add. All you have to do is click the “Connect” button. If you don't have login details to the 3rd party service, you might have to ask whoever is the admin it to help.

### Invite your developer

On the left side navigation bar, go to Team Settings > Members. Then click "Invite New Member". You should see their name and email pop up in the Invites section.

<video autoplay loop>
    <source src="/assets/invite-user.mp4" />
</video>

## Step 2: Views

### Adding Views

On the left side navigation bar, head over to "All Views". Click the "Add View" button in top right corner.

A window will pop up:

![](/assets/screen-shot-2018-07-09-at-10.37.49-pm.png)

Just enter the name for the View (ex. Customers, Payments, Partners, Users, etc.) and select the data source from the Connections you've already added.

Repeat this step as needed for each View you want to see.

### Editing and Deleting Views

On the left side navigation bar, head over to "All Views". Find the View you want to edit or delete and click the "..." to access the drop down menu.

### Configuring Views

From "All Views", click into the selected View from the list. Once you're in the View you want to configure, click "Configure" button in the top right corner.

A window will pop up:

![](/assets/screen-shot-2018-07-09-at-3.05.57-pm.png)

You can add new fields, reorder them by dragging the tags and delete the fields by clicking the "x".

<video autoplay loop>
    <source src="/assets/edit-list-fields.mp4" />
</video>

You can add searchable fields by entering them in "Search Fields" to make it easier to navigate to the right item in the view.

<video autoplay loop>
    <source src="/assets/search-list-fields.mp4" />
</video>

## Step 3: Modules

In order to add or modify a Module, you have to be in "Configure" mode. Navigate to an View that you want to add more detail to (for example, a Customer page) then click the "Configure" button in the top right corner. Once the Configure button switches to green, you are in "Configure" mode, which allows you to modify Modules and Actions.

### Adding Modules

Click the "Add Module" button on the page below all of your current active Modules.

A window will pop up:

<video autoplay loop>
    <source src="/assets/add-module.mp4" />
</video>

Just enter the name for the Module (ex. Customer Contact Information, Orders, Payments, Salesforce Account Information, etc.) and select the data source from the Connections you've already added.

Repeat this step as needed for each Module you want to see on each View.

### Configuring Modules

Be sure you're in the "Configure" mode. Within the Module, a green edit icon will appear in the top right corner. Click the icon.

A window will pop up:

<video autoplay loop>
    <source src="/assets/configure-modules.mp4" />
</video>

You can add new fields, reorder them by dragging the tags and delete the fields by clicking the "x".

## Step 4: Magic actions

**Adding actions**\
For 3rd party services that you have account details for, you can build actions yourself using our easy step-by-step Builder. If your actions involve your database or internal API, you will need to get help from your developer team. This could include actions like extending a trial, resetting passwords, etc. The developer just needs to create an API endpoint and hook it up to an action that triggers it. It can be as simple or as complex as your team wants it to be.

**Configuring actions through Builder**\
In order to add and modify Actions, you have to be in "Configure" mode. Navigate to the View or List you want to create an action for.

Within the Actions module, click the "Create new action" button.

A window will pop up:

<video autoplay loop>
    <source src="/assets/add-action.mp4" />
</video>

Type what you want the Action to be called and what category of actions you want it to be grouped into and click "Next" to take you to the Builder tab.

In the builder tab, we can start to build our action. For this example, we simply want to be able to extend a free trial. We already have an internal API that allows us to extend the free trial for a customer, so Gather simply needs to post a request to that API.

Actions are composed of one or more steps, each of which can use information from the customer the action is being run on. For now, we have a single step which is called `http`, which allows us to send an HTTP request to a URL. So here we just add that step and configure it to send along the user ID for the customer we're extending the trial for.

<video autoplay loop>
    <source src="/assets/configure-action.mp4" />
</video>

## Invite your team

**Invite team members**\
On the left side navigation bar, go to Team Settings > Members. Then click "Invite New Member". You should see their name and email pop up in the Invites section.

<video autoplay loop>
    <source src="/assets/invite-user.mp4" />
</video>
