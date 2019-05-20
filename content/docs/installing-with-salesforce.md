---
path: /help/installation/salesforce
title: Installing via Salesforce
collection: Installation
category: Install
published: true
---

This installation guide will take you through syncing your customer data with Gather via Salesforce.

## Before you start

In order to sync Salesforce Accounts and Contacts to Gather Account and Users, Gather requires all accounts and users to have a unique ID that is consistent across all the integrations you use. This is because Gather needs to know how to link an account or user from one service with an account or user from another. [Read more about account and user IDs.](//installation/choosing-account-and-user-ids)

Therefore in Salesforce, **your `Account`s must have a field that can be used to uniquely identify the Gather Account and `Contact`s must have a field that can uniquely identify the Gather User**.

## Step 1 - Add the integration

Go to [Integrations in Gather](https://app.gatherdata.co/settings/integrations) and click `Add New Integration` and choose `Salesforce`

## Step 2 - Sync Accounts

There are two options for syncing Salesforce Accounts to Gather:

1. Create new Gather Accounts for every Salesforce Account
2. Update existing Gather Accounts that match a Salesforce Account

#### Create new Gather Accounts

In order for Gather to create Accounts for Salesforce Accounts, the Salesforce Account must have a field that can be used to uniquely identify the Account in Gather.

1. Select `Create new Gather Accounts` as the sync method
2. Choose the Salesforce Account field that should be used as the Gather Account ID

With this configuration, Gather will create a new Account for every Salesforce Account using the ID stored in the ID field you provided.

#### Update existing Gather Accounts

To only update existing Gather Accounts, there must be a trait on an existing Gather Account that contains a Salesforce Account ID that can be used to link them together.

1. Select `Only update existing Gather Accounts` as the sync method
2. Choose the Account trait that contains a Salesforce Account ID

With this configuration, Gather will only update existing Accounts that have a corresponding Salesforce Account.

#### Traits synced

The traits synced to a Gather Account from a Salesforce Account by default are:

- Name
- Phone
- Description
- Industry
- BillingAddress
- Website
- YearStarted
- NumberOfEmployees

Traits are automatically converted to snake_case, so `NumberOfEmployees` will become `number_of_employees`.

#### Syncing extra traits

To sync additional traits in addition to the default traits, select them in the `Extra traits` dropdown. Traits are converted to snake_case.

#### Only sync accounts that have a closed-won opportunity

Enabling this option will only sync accounts that have any opportunity that has a the status `Closed Won`.

#### Filter accounts that are synced

Gather can also be configured to only sync accounts that match one or more filters.

1. Select `Filter accounts`
2. Choose whether to require all conditions match or only 1 of them
3. Click Add Condition
4. Choose a Salesforce field to filter, a comparison method, and a value

Gather will no only sync an Account if the conditions match.

## Step 3 - Sync Contacts

There are two options for syncing Salesforce Contacts to Gather:

1. Create new Gather Users for every Salesforce Contact
2. Update existing Gather Users that match a Salesforce Contact

#### Create new Gather Users

In order for Gather to create Users for Salesforce Contact, the Salesforce Contact must have a field that can be used to uniquely identify the User in Gather.

1. Select `Create new Gather Users` as the sync method
2. Choose the Salesforce Contact field that should be used as the Gather User ID

With this configuration, Gather will create a new User for every Salesforce Contact using the ID stored in the ID field you provided. Gather will automatically inspect the Salesforce relationships to correctly link the User to its Account.

#### Update existing Gather Users

To only update existing Gather Users, there must be a trait on an existing User that contains a Salesforce Contact ID that can be used to link them together.

1. Select `Only update existing Gather Users` as the sync method
2. Choose the User trait that contains a Salesforce Contact ID

With this configuration, Gather will only update existing User that have a corresponding Salesforce Contact.

#### Traits synced

The traits synced to a Gather User from a Salesforce Contact by default are:

- Id
- FirstName
- LastName
- Email
- Phone

Traits are automatically converted to snake_case, so `FirstName` will become `first_name`.

#### Syncing extra traits

To sync additional traits in addition to the default traits, select them in the `Extra traits` dropdown. Traits are converted to snake_case.

#### Filter contacts that are synced

Gather can also be configured to only sync contacts that match one or more filters.

1. Select `Filter contacts`
2. Choose whether to require all conditions match or only 1 of them
3. Click Add Condition
4. Choose a Salesforce field to filter, a comparison method, and a value

Gather will no only sync a Contact if the conditions match.

## Optional - Step 4 - Sync additional objects

In addition to Accounts and Users, Gather can be configured to sync any of the other objects in Salesforce to a dedicated model in Gather. All that's required is to choose the Salesforce Object to sync along with which field should be used as its ID.

1. Click Add custom object
2. Select the object from the dropdown
3. Select the field that should be used as the ID of the synced record **NOTE: We currently have a bug that requires you press space in the ID field dropdown in order to display the available fields**
4. Choose a name for the model that the object records will be synced to - Gather will create this model for you after you save the configuration
5. Optional: In the same as you can for Accounts and Contacts, you can optionally only sync records in the object that match one or more conditions

## Need Help?

If you're not sure how you've set up Salesforce or you're not able to connect it properly to Gather, drop us a line at [support@gatherdata.co](mailto:support@gatherdata.co) and we'll help you get set up.
