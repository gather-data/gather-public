---
path: /help/installation/intercom
title: Installing via Intercom
collection: Installation
category: Install
published: true
---

This quick installation guide will take you through syncing your customer data with Gather via Intercom.

## Before you start

In order to sync Intercom Companies and Users, Gather requires all accounts and users to have a unique ID that is consistent across all the integrations you use. This is because Gather needs to know how to link an account or user from one service with an account or user from another. [Read more about account and user IDs](//installation/choosing-account-and-user-ids)

Therefore in Intercom, **Your `companies` must store your account ID in the `company_id` field and `users` must store your user ID in the `user_id` field.**.

## Step 1 - Add the integration

Go to [Integrations in Gather](https://app.gatherdata.co/settings/integrations) and click `Add New Integration` and choose `Intercom`

## Step 2 - Configure the sync method

As mentioned, Gather requires you use the `company_id` and `user_id` for any companies and users you want to sync to Gather. We do also support a sync method that only updates existing accounts/users, but we won't touch on that here.

1. For `Sync mode` choose "Create".
2. In `Intercom company field`, enter `company_id`
3. In `Intercom user field`, enter `user_id`

## Step 3 - Connect your Intercom account

Next, click `Add`. This will open up a new window that asks you to allow Gather to access your Intercom account. Once you've authenticated, Gather will start syncing your companies and contacts from Intercom with your accounts and users. The syncing rules are as follows:

- If an existing account or user cannot be found, a new one is created with the ID found in either `company_id` or `user_id`
- If an existing account or user is found, its updated with the properties from Intercom
- Events sent to Intercom via their SDKs are also synced with Gather and will be associated with the appropriate user

Any time a company or user in Intercom is changed, it's synced in real-time with the respective account or user in Gather.

For `Account`s, the following properties are synced:

- `name`

For `User`, the following properties are synced:

- `first_name`
- `last_name`
- `email`
- `phone`
- `city`
- `country`
- `timezone`

## Need Help?

If you're not sure how you've set up Intercom or you're not able to connect it properly to Gather, drop us a line at [support@gatherdata.co](mailto:support@gatherdata.co) and we'll help you get set up.
