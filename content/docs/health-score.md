---
path: /help/product-guide/health-score
title: Health Score
collection: Product Guide
published: true
---

An account health score in Gather is calculated on a scale of 0 - 100 and is an indication of the overall health of an account. It’s a weighted average based on important metrics related to activity, key feature usage, sentiment, financial factors, issues that have arisen and subjective relationship factors.

These metrics are expressed as traits and grouped into categories, which are then weighted to make up the overall health score.

The health score is shown as a traffic light color:

- Red - a health score between 0 - 33
- Yellow - a health score between 34 - 67
- Green - a health score between 68 - 100

#### Why it’s important

The account health score is a snapshot summary of how likely your customer is to churn. Customers with health scores in the red zone are more likely to churn than customers with health scores in the green zone.

## Configuring the health score

Let’s start by heading to “Settings” on the left navigation bar and then clicking on “Health Score” underneath “Data” on the left-hand side.

#### Definitions

Before we start, let’s explain some definitions.

- **Traits** - Attributes of an account that can contribute towards the health score, for example `average_time_per_day`. _Traits need to be mapped to a scale of 0 - 100._
- **Categories** - Groups of traits, with each trait within a category averaged together to get a single 0 - 100 value for the category. Categories are weighted and added together to get the final health score.

## Step 1: Adding a category

First step is to add a category and name it. Stuck? How about Key Feature Usage, Sentiment, Financial, Issues and Relationship as a start? You can also rename it later.

![Adding a category](/assets/add-category.png 'Adding a category')

## Step 2: Adding a Trait

Next step is to add traits to the category you just created. As mentioned, traits are attributes of each account. Traits can be simple attributes like `name`, `country`, etc or they can be traits automatically created by Gather based on other data like `average_time_per_day`. They can also be custom traits configured by your developer.

Within the Category you just created, click the “Add Trait” button and choose a trait from the dropdown.

<video autoplay loop controls>
    <source src="/assets/add-trait.mp4" />
</video>

**Mapping values**

After selecting the trait, we need to determine what the upper and lower bounds are for your Trait. Essentially we're answering the question: at what point would you expect a Trait value of 0 and a Trait value of 100?

Depending on the data type of trait you've selected (minutes, true/false, etc) you'll see appropriate options for the mapping.

**Time periods**

For some traits, you'll want to look at its value over a period of time. To do that, change the `when` value from `absolute` to `average`. Enter in the number of days you’d like to average over for this Trait (i.e. 7 days).

You can also compare the average value of the time period to the previous average for the time period before that (for example week-over-week change in average minutes per day). Just change `is at or below` to either `has decreased by` or `has decreased by percentage`.

**Review your mapping**

After configuring the trait, you'll see charts that show a real-time distribution of accounts falling into each band of red, yellow and green, incorporating only the values of the accounts for this individual Trait and the upper and lower mapping you’ve provided. This is a tool to help you map your values into appropriate buckets by showing you the actual distribution of values to prevent extreme skews in your score.

It's helpful to play around with value until you get a distribution that feels right.

<video autoplay loop controls>
    <source src="/assets/health-score-graph.mp4" />
</video>

## Step 3: Weighting Categories

After you’ve gone through and added and mapped all of the traits that you’d like to incorporate into your health score and grouped them into categories, you can continue to the next step.

Category weightings can be adjusted to place more importance on one category vs. another. The higher the weighting, the higher the contribution that category will make towards the overall account health score.

**Make sure your total adds up to 100%**

<video autoplay loop controls>
    <source src="/assets/configure-health-score-weights.mp4" />
</video>

## Finish

Once you've configured the the traits, their categories, and the weightings, hit `Save`. Behind the scenes, the health score is now being calculated for each of your accounts based on your configuration. It should only take a few seconds. Navigate to your Accounts list and you should see your newly created Health Score trait on each of your account.

Something not quite right? Chat to us via Live Chat in Gather or email us at [support@gatherdata.co](mailto:support@gatherdata.co) and we'll help you get it set up.
