---
path: /help/product-guide/roles
title: Roles & User Management
collection: Product Guide
published: true
---

Roles are used to group your team members into groups based on what they need to do, allowing you to customize what someone in your team can access and do.

Gather comes with some default roles for you to use, but you can create your own roles too.

## Inviting team members

To invite members to your team, go to [Settings -> Members](https://app.gatherdata.co/settings/members) and click `Add Member`.

![Adding a new member](/assets/add-member.png 'Adding a new member')

- Add their first and last name and their email
- The role you select will be the role they're given when they sign up, but it can be changed at anytime

## Roles & permissions

Each role comes with a set of permissions that determines what someone in that role is able to do. Gather's default roles and their respective permissions are:

| Role          | Description                                                                                                                                       | Permissions |     |     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --- | --- |
| **Owner**     | This is a special role reserved for the creator of the account. There can only be one owner and they are the only user able to delete an account. | `superuser` |     |     |
| **Admin**     | Admins are able to access all functionality                                                                                                       | `superuser` |     |     |
| **Developer** | Developers are able to access all functionality needed for integrating Gather                                                                     | `superuser` |     |     |
| **Success**   | Customer success members are able to access all non-configuration functionality. They cannot access billing information.                          |             |     |     |
| **Support**   | Customer support members are able to access all non-configuration functionality. They cannot access billing information.                          |             |     |     |

## Custom roles

In addition to the default roles, you can create custom roles each with their own permissions. Typically you'd do this if you have a team in your company that needs specific access, like a fraud team for example.

To create a custom role, go to [Settings -> Roles](https://app.gatherdata.co/settings/roles) and click `Add Role`.

![Adding a new role](/assets/add-role.png 'Adding a new role')

1. Choose a name for your role
2. Select one or more permissions to grant members of this role

Members can be assigned this role either when inviting them or by changing an existing member's role.

## Changing a member's role

To change a member's role, go [Settings -> Members](https://app.gatherdata.co/settings/members) and click the `...` of the member you'd like to change and click `Edit`.

![Changing a member's role](/assets/change-role.png "Changing a member's role")

## Removing a member

To remove a member from your team, go [Settings -> Members](https://app.gatherdata.co/settings/members) and click the `...` of the member you'd like to change and click `Delete`.

Removed members won't be able to log in to your team or access any data at all, but metadata about that user's actions within Gather are still available.
