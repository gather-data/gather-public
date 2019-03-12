---
path: /help/developers/setting-up-standard-models
title: Setting Up Accounts and Customers
collection: Developers
published: true
---

Setting up accounts and customers is straightforward and should only take a few minutes. If you haven't read [Data Model Overview](/help/developers/data-model), please read it before continuing.

## Syncing Accounts

Accounts are a standard model that represent a company for a B2B company. For example, if you are a food delivery company that delivers lunch to offices, the company that owns the office would be the account.

The account model comes with one default field:

- **name** - a unique name for the account

To sync records with an account, use the `records` API:

```
$ curl https://api.gatherdata.co/models/account/records \
   -H Authorization: Token {API_KEY} \
   -d name="Sterling Cooper" \
   -d size="50-100"
```

`name` is the only required field, but any other field can be stored on account - just pass it along in the payload.

## Syncing Customers

Customers are a standard model that represent an employee at a company or an individual customer. There are two default fields:

- **email** - a unique email address for the customer
- **account** - an account to link the customer with, if it exists. If not provided, the customer will not be linked with an account

## Updating an account or customer

The records API is idempotent, so to update a record for any model, just `POST` to the same endpoint. The payload provided will be merged with the existing record, with the payload taking precedence over any existing fields.

## Deleting records

To delete a record from the model, send a `DELETE` request to the record's detail endpoint:

```
$ curl https://api.gatherdata.co/models/account/records/Sterling%20Cooper \
   -H Authorization: Token {API_KEY} \
   -X DELETE
```

The ID should be the unique field for the model, so `name` for accounts and `email` for customers.

## Next steps

To learn more about the model records API, please see the [API Reference](https://api.gatherdata.co/docs)
