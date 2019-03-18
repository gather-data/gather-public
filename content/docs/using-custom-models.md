---
path: /help/developers/using-custom-models
title: Using Custom Models
collection: Developers
published: true
---

Custom models are used to make your business data accessible in Gather. Records are synced with a custom model via the API.

In this brief guide, we'll be using as an example a B2B food delivery company that delivers lunches to offices. We want to allow their CS team to view orders for each account. We'll be:

1.  Creating the `Orders` custom model and defining it's relationship to `Account`
2.  Syncing orders with the model via the API
3.  Exploring the data in the app

Let's get started.

## Creating the custom model

First, go to [data models](https://app.gatherdata.co/settings/models) in settings. Then click `Add New Model` in the top-right corner:

<video autoplay loop controls>
    <source src="/assets/using-custom-models/create-orders-model.mp4" />
</video>

- For the `name`, enter `Orders`
- For the `Model Type`, choose `Custom`

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

In the payload, the only required trait is `id`. We can provide any other traits in the payload that we want to see in Gather. In this simple example, we'll provide an `amount` and `product_name`, but in a real-world situation you'll likely sync many more traits.

## Exploring the data

The last step is to create a view to see our model's data. To do so, go to [views](https://app.gatherdata.cohttps://app.gatherdata.co/request-demo/views) and click `Add View`. Choose a name and our order model from the drop-down.

<video autoplay loop controls>
    <source src="/assets/using-custom-models/add-view.mp4" />
</video>

That's it. Go to your Orders view and you'll see all the data from the model, with each record containing your custom data and the Stripe charge.

## Next Steps

In this guide we created a custom model, synced records to it via the API and joined that with charges from Stripe. We then created a view that allows us to easily view, filter, search, and sort through our models.

To explore more, check out our [API docs](https://api.gatherdata.co/docs)
