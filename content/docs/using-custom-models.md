---
path: /help/developers/using-custom-models
title: Using Custom Models
collection: Developers
published: true
---

Custom models are used to make your business data accessible in Gather. Records are usually synced with a custom model via the API and then explored by creating a view connected with the model.

In this brief guide, we'll be using as an example a B2B food delivery company that delivers lunches to offices. We want to allow their CS team to view orders for each account. We'll be:

1.  Creating the `Orders` custom model
2.  Syncing orders with the model via the API
3.  Syncing Stripe charges with the model
4.  Creating a view for the model

Let's get started.

## Creating the custom model

First, go to [data models](https://app.gatherdata.cohttps://app.gatherdata.co/request-demo/settings/team/models) in settings. Then click `Add New Model` in the top-right corner:

<video autoplay loop controls>
    <source src="/assets/using-custom-models/create-orders-model.mp4" />
</video>

- For the `name`, enter `Orders`
- For the `Model Type`, choose `Custom`
- For the `ID Field`, enter `id`. The ID field is used when syncing data with the model and refers to the field that uniquely identifies a record within the model. In our case, our orders all will have a unique field called `id`.

Make a note of the `Model ID` for the model as we'll need that when syncing data via the API.

## Syncing orders via the API

Now we have created our Orders model, let's sync data from our system to the model.

First grab your API key from the [developer settings](https://app.gatherdata.cohttps://app.gatherdata.co/request-demo/settings/team/developer).

To sync a record with the model, we'll use the `records` API:

```
$ curl https://api.gatherdata.co/models/{MODEL_ID}/records \
   -H Authorization: Token {API_KEY} \
   -d id="1234" \
   -d amount=75 \
   -d stripe_charge_id=ch_4567 \
```

Replace:

- `{MODEL_ID}` with the ID of the orders model
- `{API_KEY}` with your developer API key

In the payload, the only required field is `id` as when we created the model, we specified `id` as the name of the unique field for the order. We can provide any other fields in the payload that we want to see in Gather. In this simple example, we'll provide an `amount` and `stripe_charge_id`. We provided the `stripe_charge_id` so we can aggregate our orders with Stripe charges, which we'll do in the next step.

## Syncing Stripe charges

Some integrations in Gather allow you to sync data from the integration to a custom model. With Stripe, we can sync charges with our orders model so we can view the Stripe charge right alongside it. We can then filter, sort, and search by both our order data and each order's Stripe charge.

To sync Stripe charges, we need to create an integration task. Integration tasks are background jobs that sync data from an integration. When added, they do an initial sync to backfill data and then set up the necessary webhooks to keep it up-to-date.

Go to [integrations](https://app.gatherdata.cohttps://app.gatherdata.co/request-demo/settings/team/integrations) in settings, click the `...` for your Stripe integration and then choose `Edit Tasks`.

<video autoplay loop controls>
    <source src="/assets/using-custom-models/add-stripe-task.mp4" />
</video>

Add a new task and choose `Sync Stripe Charges`. You'll be asked for two options:

- **Model ID** - This is the ID of our Orders model
- **Stripe Charge ID Field** - This is the name of the field that contains the Stripe Charge ID in each of our order model's records. In our case, it's simply `stripe_charge_id`.

After we've created the task, it will sync your Stripe charges the orders we've already added to the model.

## Creating the view

The last step is to create a view to see our model's data. To do so, go to [views](https://app.gatherdata.cohttps://app.gatherdata.co/request-demo/views) and click `Add View`. Choose a name and our order model from the drop-down.

<video autoplay loop controls>
    <source src="/assets/using-custom-models/add-view.mp4" />
</video>

That's it. Go to your Orders view and you'll see all the data from the model, with each record containing your custom data and the Stripe charge.

## Next Steps

In this guide we created a custom model, synced records to it via the API and joined that with charges from Stripe. We then created a view that allows us to easily view, filter, search, and sort through our models.

To explore more, check out our [API docs](https://api.gatherdata.co/docs)
