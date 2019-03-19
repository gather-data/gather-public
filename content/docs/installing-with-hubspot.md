---
path: /help/installation/hubspot
title: Installing via HubSpot
collection: Installation
category: Install
published: true
---

This quick installation guide will take you through syncing your customer data with Gather via HubSpot.

## Before you start

Gather requires all accounts and users to have a unique ID that is consistent across all the integrations you use. This is because Gather needs to know how to link an account or user from one service with an account or user from another. [Read more about account and user IDs](//installation/choosing-account-and-user-ids)

Your `companies` and `contacts` in HubSpot therefore **must have a property that contains a unique ID that will be present in any other apps you want to use with Gather**.

## Step 1 - Add the integration

Go to [Integrations in Gather](https://app.gatherdata.co/settings/integrations) and click `Add New Integration` and choose `HubSpot`

## Step 2 - Configure the ID fields

For both the `companies` and `contacts` in HubSpot, there must be a field that will contain a unique ID.

#### Using an internal ID

If your developers have configured HubSpot in such a way that each `company` and `contact` contains a property that contains the internal ID from your application database, then you should provide the name of that property here. This is often the case if your application backend creates new HubSpot companies/contacts when they're added to your system or if you're using HubSpot's live chat in your web app.

- For `Account ID`, enter the name of the company property that contains your internal ID
- For `User ID`, enter the name of the contact property that contains your internal ID

#### Using the HubSpot `companyId` and contact `vid`

If HubSpot is the central source of customer data in your application, you may want to use the HubSpot `companyId` and contact's `vid` as your unique IDs. Bear in mind, this will require your developers to use this HubSpot ID throughout your application and any other SaaS apps you use, otherwise Gather won't be able to connect you customer data into a single unified record.

- For `Account ID`, enter `companyId`
- For `User ID`, enter `vid`

#### User ID - Using an email address

Often an email address is the easiest ID to use to uniquely identify your end users. If you store you customer email addresses in your own system and those email addresses are used in all the other apps you'd like to connect to Gather, enter `email` as the property name in the `User ID` field.

## Step 3 - Connect your HubSpot account

Next, click `Add`. This will open up a new window that asks you to allow Gather to access your HubSpot account. Once you've authenticated, Gather will start syncing your companies and contacts from HubSpot with your accounts and users. The syncing rules are as follows:

- If an existing account or user cannot be found, a new one is created
- If an existing account or user is found, its updated with the properties from HubSpot

For `Account`s, the following properties are synced:

- `name`
- `city`
- `country`

For `User`, the following properties are synced:

- `first_name`
- `last_name`
- `email`
- `city`
- `country`

## Need Help?

If you're not sure how you've set up HubSpot or you're not able to connect it properly to Gather, drop us a line at [support@gatherdata.co](mailto:support@gatherdata.co) and we'll help you get set up.
