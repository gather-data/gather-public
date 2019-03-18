---
path: /help/installation/api
title: Installing via Gather API
collection: Installing & Configuring Gather
category: Install
published: true
---

This quick installation guide will take you through syncing your customer data and events with Gather through our API. This installation method is usually followed by a developer.

## Introduction

Installing Gather involves three steps:

1.  Syncing account-level data
2.  Syncing user-level data
3.  Sending activity events

Syncing accounts and users to Gather is done by `POST`ing to an endpoint any time the data changes. Events can be pushed to Gather via the `/events` endpoint.

## 1. Syncing account-level data

The `Account` model is the primary model in Gather, containing all of your customers. Accounts have a one-to-many relationship with the `User` model, so can have one or more users.

To sync accounts, use the [/models/account/records](https://api.gatherdata.co/docs#operation/Sync%20an%20account) endpoint:

```bash
curl https://api.gatherdata.co/models/account/records \
   -H Authorization: Token {API_KEY} \
   -d id="1234" \
   -d name="Lovelace, Inc" \
   -d size='50-100'
```

**Account syncing should happen any time customer data changes**

`id` and `name` are the only required traits, any additional fields provided in the request will be saved as traits on the account.

The `/models/account/records` endpoint is idempotent, meaning if an account with the given `id` already exists, fields in the request will be merged with the existing traits on the account, with the request fields taking precedence.

## 2. Syncing user-level data

The `User` model is used to store end-users for a given account. It has a many-to-one relationship with an account.

To sync users, use the [/models/user/records](https://api.gatherdata.co/docs#operation/Sync%20a%User) endpoint:

```bash
curl https://api.gatherdata.co/models/user/records \
   -H Authorization: Token {API_KEY} \
   -d id="4567" \
   -d account_id="1234" \
   -d first_name='Ada' \
   -d last_name='Lovelace' \
   -d email='ada@acme.com'
```

**User syncing should happen any time customer data changes**

`id`, `first_name`, `last_name`, and `email` are required traits, any additional fields provided in the request will be saved as traits on the user

The `/models/user/records` endpoint is idempotent, meaning if a user with the given `id` already exists, fields in the request will be merged with the existing traits for the user, with the request fields taking precedence.

## 3. Send activity events

Events are used to track activity for users or accounts. An event is defined by its `type`, `properties` and the account or user its associated with.

The event type can either be one of the [built-in types](https://api.gatherdata.co/docs#tag/Event-Types) or a custom event type to track events in your product.

To complete the Gather installation, the only type of event that needs to be sent is `page.viewed` for a user:

```bash
curl https://api.gatherdata.co/events \
   -H Authorization: Token {API_KEY} \
   -d user="4567" \
   -d type="page.viewed" \
   -d properties[title]="The Meaning of Life"
   -d properties[url]="https://meaning.life"
```

`page.viewed` events are used by Gather to determine sessions and other usage data for your customers. A `page.viewed` event should be sent with the properties `title` and `url`.

For more information on events in Gather, [click here](https://api.gatherdata.co/docs#tag/Events)

## Next Steps

To learn more about the Gather API, [read the documentation](https://api.gatherdata.co/docs)
