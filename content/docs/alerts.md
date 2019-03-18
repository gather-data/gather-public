---
path: /help/product-guide/alerts
title: Alerts
collection: Product Guide
published: true
---

Alerts are notifications that are sent when account metrics hit a predetermined threshold or a certain condition moves from true to false. Alerts are helpful in monitoring account metrics and surfacing key signals that indicate churn.

Alerts have three levels:

- `Info` (less important)
- `Warning` (important
- `Critical` (highly important)

## Configuring alerts

Some alerts come already set up with Gather, but we will show you how to add a new alert, edit an existing one and manage your notifications here.

### Adding a new alert rule

From `Settings > Alerts`, click on the “New Alert” button.

A modal will pop up:

![Configuring a new alert](/assets/add-rule.png 'Configuring a new alert')

Select the trait you want to set an alert on, the severity level and lastly, set the trigger condition.

Triggers conditions can be anything from when the trait hits an absolute value or can be a week over week percentage increase.

Notifications can be sent to email or a Slack channel. For Slack notifications, please note the integration must first be enabled. See integrations.

Finally, hit the “Create” button to save your new rule. New alerts will automatically be set as “Enabled.”

### Editing an existing alert rule

From Settings > Alerts, find the rule within the table that you would like to edit. Hit the “...” button and click “Edit”.
