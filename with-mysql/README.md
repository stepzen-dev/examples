# Overview 

This project builds a GraphQL API connected to your MySQL database using StepZen. We will use the @dbquery directive to generate our GraphQL schema. 

## Getting Started

```bash
git clone https://github.com/stepzen-samples/stepzen-mysql.git
cd stepzen-mysql
```

## Deploy a Database on Heroku

Download MySQL workbench [before you start](https://dev.mysql.com/downloads/). You should also have MySQL installed on your machine in order to use the workbench.

Sign up for [a Heroku account](https://signup.heroku.com/). It can be on the free tier, but you'll need to add a credit card to your account to use the add-ons that you need (it won't be charged as a part of this tutorial). Once you've done that, you can proceed.

1. Go to your dashboard and click 'New', then 'Create New App'.
2. Type in your app name and hit 'Create App'. 
3. Click on the 'Resources' tab and search for 'ClearDB MySQL' under 'Add-ons'.
4. Click on it and select the 'Ignite-Free' plan and then 'Submit Order Form'. 
5. Click 'Settings' and 'Reveal Config Vars'.

For the value of `CLEARDB_DATABASE_URL` you should see a string formatted like `mysql://USERNAME:PASSWORD@HOSTNAME/DB_NAME`. You'll use this info for setting up a new connection in your MySQL Workbench in the next few steps.

>NOTE: in the `DB_NAME`, leave off the `?` and everything after it.

## Seeding your database from MySQL Workbench

Open up MySQL workbench.

1. Click the home icon at the top left corner.
2. Next to 'MySQL Connections' click the + button, then name your connection whatever you want
3. Enter the `USERNAME` and `HOSTNAME` from your heroku account. You can leave the port as it is.  
4. Click 'Store in Keychain' and add your `PASSWORD`.
5. Click 'Test Connection'. You won't need a default schema. 
6. Once you hit 'OK' on the notification that your connection was successful, hit 'OK' again. 
7. Click on your connection to open it. 

Click the 'schemas' tab on the top left. Double click the name of your schema on the left to make sure it is selected, and copy and paste this code:

```sql
CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `isPseudonym` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
);

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `originalPublishingDate` date NOT NULL,
  `authorID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
);

INSERT INTO `authors` 
VALUES 
(1,'Agatha Christie',0),
(2,'Sir Arthur Conan Doyle',0),
(3,'Edgar Allan Poe',0);

INSERT INTO `books` 
VALUES 
(1,'Murder on the Orient Express','1934-01-01', 1),
(2,'The Mysterious Affair at Styles','1920-10-01', 1),
(3,'The Adventure of the Three Garridebs','1924-10-25', 2),
(4,'The Murders in the Rue Morge','1841-04-04', 3);
```

Make sure it is either 1) all selected or 2) not selected at all and click the little lightning bolt under the Query 1 tab. This will run the SQL code that seeds your database.

Query the database to verify the seed data was entered:

```sql
SELECT * FROM authors
```

<img width="600" alt="sql-query-response" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ytpjr9pqtppntjcvv8x.png">

## StepZen Setup

Open your terminal and install the [install the StepZen CLI](https://stepzen.com/docs/quick-start):

```bash
npm install -g stepzen
```

You need to login here using the command:

```bash
stepzen login
```

### Create .gitignore file

```bash
touch .gitignore
```

You'll use this to protect sensitive information later. 

## Connect MySQL

In the same folder as this project, run:

```bash
touch config.yaml
```

Then add `config.yaml` to your .gitignore as well. It's private info! :key:

This is what you'll place in it: 

```yaml
configurationset:
  - configuration:
      name: MySQL_config
      dsn: USERNAME:PASSWORD@tcp(HOSTNAME)/DB_NAME
```

This provides StepZen the information it needs to connect to your database. Now you need to upload and deploy to StepZen.

## The StepZen GraphiQL Query Editor

In your terminal you can now you run:

```bash
stepzen start
```

Name your endpoint, and then `stepzen start` will open up a GraphiQL query editor connected to your database! 

Paste this code into your the query editor:

```graphql
{
  book(id: 1) {
    id
    author {
      id
    }
  }
}
```

And you should get a result like: 

<img width="600" alt="GraphQL-query-response" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/puq3k1sgjczsq4i0tv8o.png">

## Creating a local database with Docker

The best way to run this MySQL Database is by using our Docker script. This requires you to have Docker installed (no prior knowledge needed) and using ngrok to create a TCP tunnel so you can link it to StepZen.

### Prerequisites

- [Docker (Mac/Windows)](https://www.docker.com/products/docker-desktop)
- [ngrok account](https://ngrok.com/)
- [ngrok installed (Mac/Window)](https://ngrok.com/download)

### Getting Started:

Make sure you have an account for [ngrok](<(https://ngrok.com/)>) and have linked your authtoken by running:

```bash
ngrok authtoken [YOUR_AUTH_TOKEN]
```

After doing so start the Docker container with the MySQL database from this directory:

```bash
docker-compose up -d
```

This will start the container with the MySQL server, makes it available on port `3306` and prepopulates it with the data from `./init.sql`.

To make this database available to other services outside your private network, you need to create a TCP tunnel. For this ngrok will be used:

```bash
ngrok tcp 3306
```

Ngrok will return the forwarding address for the local MySQL database, which will looks something like this: `tcp://0.tcp.ngrok.io:15650`.

You need to add this to the file `./config.yaml` where you need to replace `NGROK_TUNNEL` with (in example) `0.tcp.ngrok.io:15650`:

```yaml
configurationset:
  - configuration:
      name: mysql_config
      dsn: stepzen:stepzenpasswd@tcp(0.tcp.ngrok.io:15650)/stepzen_demo
```
