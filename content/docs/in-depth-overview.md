---
path: /help/in-depth-overview
title: In-depth Overview
category: Guides
---

If you're new to Gather, try the [Quickstart](quickstart). After that, come back to get an in-depth overview of Gather.

### Views

Simply put, views are windows into data. For example, a customer view will allow you to list all of your customers, filter them by location, search them by name, or view all the data for an individual customer.

CUSTOM_TABLE_GIF.

You could then add a view for your orders and Gather will intelligently link your customer view with your order view, allowing your to seamlessly navigate through your most important data.

ORDER_GIF_LINKED_WITH_CUSTOMER

Views can also be added for third-party connections like Stripe. For example with a couple clicks, you can create a view that shows you all Stripe payments that have been made, again with the ability to filter and search to find the payment you need and automatically linked with the right customer using Gather’s intelligent linking functionality.

STRIPE_VIEW_GIF

Views are the powerhouse of Gather. No matter how your data is structured, views can be created and configured to display the information you need.

### Modules

When looking at an individual entity within a view (like an individual customer), you often want to see associated information about that entity. For example, when looking at an individual customer you probably need to see their Stripe account information or their latest order in Shopify. Modules are how you pull in that associated data.

SHOW_MODULE_IMAGE

Modules can display any data supported by an connection in Gather, from Stripe payments, to Chargify subscriptions, to Shopfiy orders. You just add a module to a view for any associated data you need with a couple of simple clicks. You can easily customise each module so that it shows you only the fields you need to see.

SHOW_MODULE CUSTOMISATION_GIF

### Magic actions

Day-to-day customer support operations involve countless actions that have to be performed to help your customers, from refunding payments, to resetting passwords. For most companies, completing these actions requires reps to navigate through many different apps each with their own complex interfaces. Not only does this increase the time it takes to help a customer, it makes the like of a support rep tiring and laborious. That’s where Gather’s Magic Actions come in. Magic Actions allow you to automate all of these automated processes using a simple step-by-step builder, allowing you to easily create a one-click button to handle any customer request. The best part? Most actions don’t require involvement from the dev team! For actions that do require communicating with your API, developers will find it super easy to build a Magic Action that performs an operation via their API.

### Connections

In order for Gather pull data from a third-party source or to perform an operation in another app, you need to add a connection. Connections in Gather have two main functions: providing data to views and modules and providing operations that can be used in Magic Actions. For example, the database connection can be used to create views that show all your customers or their order data. And the Stripe connection provides operations like creating refunds that can be used as steps in Magic Actions. All credentials and sensitive information about a connection are stored fully encrypted in Gather.

### Next steps

As always, if you have any questions or requests, talk to us [support@gatherdata.co](mailto:support@gatherdata.co)
