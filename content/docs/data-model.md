---
path: /help/developers/data-model
title: Data Model Overview
category: Developers
published: true
---

Gather is based on an extensible data model to allow organizations to easily make use of all the relevant business data spread across multiple systems, both your own internal systems and third party applications.

Gather's data model is made up of three types: [Standard Models](#standard-models), [Custom Models](#custom-models), and [Integration Models](#integration-models)

Models are the data providers in Gather and are used in combination with views, which make the data in a model accessible.

## Standard Models

Out-of-the-box, Gather provides you with a default data model that works automatically with all our integrations. The standard models are:

-   [Account](#account)
-   [Customer](#customer)

All of the standard models come with a set of default fields that have to be provided when syncing records with the model, which are listed in the next section. Any record for a standard model can contain arbitrary fields beyond the default fields. [Please see the API docs on syncing model records for more information.](https://api.gatherdata.co/docs#operation/Sync)

#### Account

The account model represents a company. The account model comes with these default fields:

-   `name` (string) - a unique name for the company

#### Customer

The customer represents an individual at a company. The customer model comes with these default fields:

-   `email` (string) - a unique email for the customer
-   `account` (string) - the name of the account to associate the customer with

#### How integrations work with Standard Models

Some integrations in Gather automatically sync relevant account and customer data to their respective models when enabled. For example, enabling the Stripe integration will automatically sync account and customer information from Stripe to the account and customer model in Gather. To see what integrations sync data with the customer model, please see [the integrations page](/integrations).

#### Syncing your customer data with the customer model

Most likely you have internal customer data stored in your database that you'd like to be synced with Gather's standard models. These can easily be done using the Gather API. [Please see the developer docs to set this up](https://api.gatherdata.co/docs#operation/Sync).

## Custom Models

Gather can be extended using custom models. Custom models should be created for any relevant business data you want to be accessible in Gather. Relationships can be created between the standard models and your custom models, allowing users to seamlessly navigate from an account or customer to your custom business data.

For example, if you're a B2B company that makes project management tools, you could create a custom model for your `Projects` and create a relationship from the standard account model and your custom project models. Your CS staff would then be able to easily navigate from the account to the projects created by that account.

Data is fed into a custom model via the sync API. [Please see the developer docs to learn more](https://api.gatherdata.co/docs#operation/Sync).

An advanced feature in Gather allows you to sync data to a custom model from an integration, allowing you to merge your custom business data with data from an integration. For example, a food delivery company could create a custom model for `Orders` and then sync Stripe Charges with the model to easily see the aggregated data. [See the custom model docs to learn more.](/help/developers/using-custom-models)

## Integration Models

All integrations in Gather also come with models for data in the integration. This allows data stored in other integrations to be accessible in Gather. For example, the Stripe integration will provide you with a Charge model that can be used to explore Stripe charges within Gather. Please see the [integrations](/integrations) page to see the available integration models.

As integration models are just like any other model within Gather, relationships can be created between standard or custom models and integration models. For example a relationship can be created from the Customer model and the Stripe Charge model allowing you to see Stripe charges for a customer.

Data for integration models are fetched on-demand and are not stored in Gather, unlike custom or standard models.
