---
path: /help/getting-started/concepts
title: Concepts
category: General
published: true
---
## Introduction

Gather has 4 key concepts:

* Views
* Modules
* Actions
* Integrations

This article will explain what they are and how you can use them to help supercharge your team.

## Views

Views are windows into data. For example, a customer View will allow you to list all of your customers, filter them by location, search them by name, or view all the data for an individual customer.

<video autoplay loop>
    <source src="/assets/list-view.mp4" />
</video>

You could then add a view for your orders and Gather will intelligently link your customer View with your order View, allowing your to seamlessly navigate through your most important data.

<video autoplay loop>
    <source src="/assets/linked-data.mp4" />
</video>

Views can also be added for third-party integrations like Salesforce. For example with a couple clicks, you can create a view that shows you all the Salesforce accounts you have - with the ability to filter and search to find the account you need, automatically linked with all the customers belonging to that account using Gather’s intelligent linking functionality.

<video autoplay loop>
    <source src="/assets/third-party-linking.mp4" />
</video>

Views are the powerhouse of Gather. No matter how your data is structured, views can be created and configured to display the information you need.

## Modules

When looking at an individual entity within a View (like an individual customer), you often want to see associated information about that entity. For example, when looking at an individual customer you probably need to see their Stripe account information or their latest order in Shopify. Modules are where that associated data get displayed and can display any data supported by an integration in Gather.

![null](/assets/third-party-module.png)

## Magic Actions

Step-by-step automations created in Builder. Create a single button to handle repetitive internal processes for customer requests like refunding payments and resetting passwords.

<video autoplay loop>
    <source src="/assets/configure-action.mp4" />
</video>

## Integrations

In order for Gather to pull data from a third-party source or to perform an operation in another app, you need to add an Integration. Integrations in Gather have two main functions: providing data to Views and Modules and providing operations that can be used in Magic Actions. For example, the database Integration can be used to create Views that show all your customers or their order data while the Stripe Integration provides operations like creating refunds that can be used to build Magic Actions. All Integration credentials are securely encrypted.

For our current list of integrations, [see this list](/integrations).
