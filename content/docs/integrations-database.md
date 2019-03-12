---
path: /help/integrations/database
title: Database Integration
collection: Integrations
published: true
---

The Gather `database` integration allows you to connect your relational database to Gather, allowing you to:

- Build models that dynamically pull from a table in your database
- Sync a table from your database to a custom model

| Database    | Dynamic Models | Sync Tables | SSL Authentication | SSH Tunnel |
| ----------- | -------------- | ----------- | ------------------ | ---------- |
| PostgresSQL | Yes            | Yes         | Yes                | Yes        |
| MySQL       | Yes            | Yes         | No                 | Yes        |
| SQL Server  | Yes            | Yes         | No                 | Yes        |

## Step 1: Choose a connection method

If your database is publicly accessible over the internet, you can [directly connect it to Gather](#step-2a-direct-connection). If your database resides in a VPC and is not publicly accessible, you'll need to connect it to Gather [via an SSH Tunnel](#step-2b-ssh-tunnel).

#### Whitelist Gather's IP addresses

Irrespective of the connection method, Gather will connect to your database via a set of external static IP addresses, which you'll need to whitelist in your firewall. Whitelist the following IPs before continuing:

- 104.198.46.108
- 35.192.7.98
- 35.194.42.15

## Step 2a: Direct connection

To directly connect to your publicly accessible database, go to [integrations](https://app.gatherdata.cohttps://app.gatherdata.co/request-demo/settings/team/integrations), then:

1.  Click **Add New Integration**
2.  Choose **Database** from the list
3.  Provide a nickname for the database
4.  Choose the appropriate **Database Type**
5.  Enter the `host`, `port`, `username`, `password`, and `database name`
6.  Click **Create**

## Step 2b: SSH tunnel

To connect to your private database, you'll need to have a public accessible bastion running an SSH server. Gather can connect to your database via your bastion server using an SSH tunnel.

#### Create an SSH user for Gather

On your bastion server, you'll need to create an SSH user for Gather using our public key:

1.  Create a **gather** group and user:

    `sudo groupadd gather && sudo useradd -m -g gather gather`

2.  Switch to **gather**:

    `sudo su - gather`

3.  Create an SSH directory and set permissions:

    `mkdir ~/.ssh && chmod 700 ~/.ssh && cd ~/.ssh`

4.  Create **authorized_keys** and set permissions:

    `touch authorized_keys && chmod 600 authorized_keys`

5.  Add the Gather public key

    Using a text editor, paste the public key below, ensuring it's all on one line:

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmHhoMgLKG77v0fULT6e3Wz0C+5cUQizz1wDF+K3MXiJsb3pMb3Cmp3sMVl8VsbVdUp8fxgWW57qRg2RcaTzs5tykdUNWkKxpzW/ijKpcOG/Xn036zaP9qs1uqPxE64W0C17o1a77ar7RA+3onNPA+38pcoUfpCsIfENBVuBo74dlO8Af3V5RpZqYKhuDpsH25hpFEUZEAF/a6UZtF4ok8LrWM6CF+5bapVM6Namo6hS6BXmGw7aonVQzR/oTfOvZiOOxJt2sotvjNZW/xMSkDpT8mU76v2LWu0wwcjChFD2G+9Kgkhid6auzK6AqbaqFYoyHvXA7RlL4s9FfF7iZH prod@gather
```

#### Add the integration in Gather

Go to [integrations](https://app.gatherdata.cohttps://app.gatherdata.co/request-demo/settings/team/integrations), then:

1.  Click **Add New Integration**
2.  Choose **Database** from the list
3.  Provide a nickname for the database
4.  Choose the appropriate **Database Type**
5.  Enter the `host`, `port`, `username`, `password`, and `database name`
6.  Select **SSH Tunnel**
7.  Enter the `SSH Host`, `SSH Port`, and `SSH User`
8.  Click **Create**

## Next Steps

Behind the scenes, Gather will introspect your database tables to build dynamic models for each table and build the relationships between them. After this has done, you'll then be able to add Views for your models.
