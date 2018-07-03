---
slug: quick-start
title: Quick Start
category: Getting Started
---
Getting started with Gather is super simple and will only take a few minutes. Let's get started.

### Requirements:

* To follow along, you'll need a Gather account. [Sign up here](https://app.gatherdata.co/signup).
* You'll also need credentials for a database to pull data from. You may need to ask a developer for this.

### Step 1 - Add a database connection

To begin with, we need to add a database connection that Gather can pull data from to power your views. Go to [Team Settings](https://app.gatherdata.co/signup) and then choose `Connections`. From there select `Add New Connection` and choose `Database`. Enter your credentials and click `Create`. Gather will now automatically create views for every table in your database and intelligently link them all together.

![]()

### Step 2 - Customize your views and add a module
With the connection added and your views created, click `All Views` in the sidebar and select on of your views and then choose one of the rows in the view. To customize the view, click `Configure` top-right. 

By default Gather adds a module that display all the data from the view, but often you want to show only a subset of the fields. To edit the list of displayed fields, click the compose icon top-right of the module. To remove a field, click the `x` icon. Fields can also be added via the search box or reordered by dragging them.

Often you also would want to group fields from the view entity into separate modules, not just one. To do that click `Configure` again and click `Add Module`. Give it a name and then choose `Use data from current view`. By default you'll see all the fields, and like before you can add, remove, or reorder the displayed fields.

![]()

### Step 3 - Add Magic Actions to automate your work
Now we have views for all the tables in your database, all linked together, and with modules configured just how we want them, we can add Magic Actions to automate support processes. 

Magic Actions are step-by-step flows that run a series of steps, for example, refunding a Stripe payment or changing a Shopify order address. Gather has support for many different third-party applications, and with the ability to run operations against any API, you can create ations to automate nearly anything.

### Next steps
That's it! Now that you have your views set up and know about how actions can help you automate your work, [check out our in depth guides to learn more about Gather]()

If you need any assistance or have any questions, check out our [FAQ]() or [get in touch](mailto:support@gatherdata.co), we're happy to help.
