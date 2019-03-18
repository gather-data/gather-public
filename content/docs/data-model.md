---
path: /help/developers/data-model
title: Data Model Overview
collection: Developers
published: true
---

Gather is based on an extensible data model to allow organizations to easily make use of all the relevant business data spread across multiple systems, both your own internal systems and third party applications.

Gather's data model is made up of two types: [Standard Models](#standard-models) and [Custom Models](#custom-models)

## Definitions

First, let's go over some key definitions.

#### Model records

Models store and make accessible records (`JSON` objects) stored within them. A record is a `JSON` object with a unique `ID` field, zero or more required fields (as defined by the model), and any other arbitrary key:value fields.

#### Traits

Fields on a record are called `traits`. Traits are simply the name of an attribute stored on a model. For example the `first_name` and `last_name` that come with the `User` model.

#### Trait types

A model can define a data type for each trait stored on a model record (the default being `text`). Trait types are used by Gather to display its value correctly in the app, in health score configuration, and in Alert configuration. Although not strictly required, any trait should have a corresponding trait type configured.

#### Model relationships

Models can define relationships to other models. Relationships are used by Gather to allow you to easily navigate your custom models. For example, you can create a `Order` model that's associated with a `User`. Gather will automatically then display all orders for a given user in the app.

Relationships are simply defined by a `from` model, a `from` trait (essentially a foreign key), and a `to` model and a `to` trait.

## Standard Models

Out-of-the-box, Gather provides you with a default data model that powers a lot of the functionality of Gather. The standard models are:

- [Account](#account)
- [Customer](#customer)

The standard models come with a set of default traits that have to be provided when syncing records with the model, which are listed in the next section. Any record for a standard model can contain arbitrary traits beyond the default fields. [Please see the API docs on syncing Account and User model records for more information.](https://api.gatherdata.co/docs#tag/Accounts)

#### Account

The account model represents a company. The account model comes with these default traits:

- `name` (string) - a unique name for the company

#### User

The user represents an individual at a company. The user model comes with these default fields:

- `first_name` (string) - a user's first name
- `last_name` (string) - a user's first name
- `email` (string) - a unique email for the user
- `account_id` (string) - the ID of the account to associate the user with

#### How integrations work with Standard Models

Some integrations in Gather automatically sync relevant account and user data to their respective models when enabled. For example, enabling the Stripe integration will automatically sync account and user information from Stripe to the account and user model in Gather. To see what integrations sync data with the user model, please see [the relevant integration doc](/help/integrations/).

#### Syncing your customer data with the Account and User model

Most likely you have internal customer data stored in your database that you'd like to be synced with Gather's standard models. These can easily be done using the Gather API. Please see the [Account](https://api.gatherdata.co/docs#tag/Accounts) and [User](https://api.gatherdata.co/docs#tag/Users) API docs.

## Custom Models

Gather can be extended using custom models. Custom models should be created for any relevant business data you want to be accessible in Gather. Relationships can be created between the standard models and your custom models, allowing users to seamlessly navigate from an account or customer to your custom business data.

For example, if you're a B2B company that makes project management tools, you could create a custom model for your `Projects` and create a relationship from the standard account model and your custom project models. Your CS staff would then be able to easily navigate from the account to the projects created by that account.

Data is synced into a custom model in a similar way to accounts and users. [Please see the developer docs to learn more](https://api.gatherdata.co/docs#tag/Custom-Models).
