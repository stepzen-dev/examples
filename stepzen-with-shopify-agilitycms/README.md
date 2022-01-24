# StepZen modified Next.js Commerce

This is a modified version of Next.js commerce for combining Shopify's e-commerce platform with Agility CMS's headless CMS. You can read more about this real-world example here: [Tutorial: Building an eCommerce Solution with AgilityCMS, Shopify, and StepZen. Part 2](https://agilitycms.com/resources/posts/tutorial-building-an-ecommerce-solution-with-agilitycms-shopify-and-stepzen)

## StepZen Features

- Easily deployed to [Vercel](https://vercel.com/)
- Custom StepZen query editor on localhost allows you to inspect and create queries quickly
- Pre-connected to [Shopify](https://www.shopify.com/) and [Agility](https://agilitycms.com/) in one secure endpoint

## Next.js Features

- Performant by default
- SEO Ready
- Internationalization
- Responsive
- UI Components
- Theming
- Standardized Data Hooks
- Integrations - Integrate seamlessly with the most common ecommerce platforms.
- Dark Mode Support

## Integrations

StepZen Commerce integrates out-of-the-box with Shopify and AgilityCMS. They plan to support all major ecommerce backends. With StepZen, you'll be able to quickly connect whatever ecommerce backends you have in mind, deployed to one GraphQL API.

## Spinning Up the StepZen Endpoint

Prerequisites:
You'll need to go to the StepZen account, https://stepzen.com/account, and install the StepZen CLI. https://stepzen.com/docs/cli

1. Go into the StepZen subfolder.

```
$ cd stepzen
```

2. Add your AgilityCMS and Shopify Configurations to the `config.yaml` file. You should already have your products set up in AgilityCMS and Shopify. If you do not, refer to the blog, [Tutorial: Building an eCommerce Solution with AgilityCMS, Shopify, and StepZen. Part 2](https://agilitycms.com/resources/posts/tutorial-building-an-ecommerce-solution-with-agilitycms-shopify-and-stepzen).

Reminder: Make sure config.yaml is in your .gitignore

```
/stepzen/config.yaml
```

Copy that sample to a new config.yaml like so:

```
$ cd stepzen

$ cp config.yaml.sample config.yaml
```

And now edit the config.yaml file, inserting your API keys and credentials where appropriate:

```
configurationset:

  - configuration:

      name: agility_config

      header.Apikey: <agility defaultpreview Apikey>

      instance: <agility instance>

  - configuration:

      name: shopify_config

      Authorization: Basic <basic auth header>

      store_name: <shopify store name>

  - configuration:

      name: shopify

      header.X-Shopify-Access-Token: <shopify-access-token>

      store_name: <shopify store name>
```

The name for each of these configurationsets represents how they are referenced in your schemas.

### Agility Configuration

Under `agility_config`, we enter configuration data that tells StepZen how to talk to the Agility CMS API

- header.Apikey, which is where you’ll put your Agility CMS defaultpreview Apikey. Go to settings in your Agility CMS instance and copy the defaultpreview API key.
- instance, specifying the Agility instance number. Go to settings and copy the Instance GUID under Global Security.

### Shopify REST API Configuration

Under `shopify_config` we have configuration data that tells StepZen how to talk to the Shopify REST API:

- Authorization: Basic, which is where you’ll put your Shopify RestAPI authorization key.
  - Under Apps in Shopify, select the link “Manage Private Apps”
  - Enable Private App Development and Create Private App
  - Name and provide Admin API Permissions to the App. The more read, write permissions you provide, the fewer permission errors to debug.
  - Check “Allow this app to access your storefront data using the Storefront API” and Save.
  - To generate a Base64 Basic API Key, go to Base64 Online, and paste the APIKey and Secret like so, Apikey:Secret. Click the Encode button, and paste the result in this config, Authorization: Basic. Phew, done!
- store_name for the Shopify store name.
  - Example: testcanonicalstore

### Shopify GraphQL API Configuration

Under shopify we have configuration data that tells StepZen how to talk to the Shopify GraphQL API:

- header.X-Shopify-Access-Token, which is where you’ll put your Admin API Shopify secret from above. Do not put your Shopify access token, this a bit tricky, but how Shopify wants it. We’ll use the STOREFRONT_ACCESS_TOKEN for the .env file.
- store_name for the Shopify store name

Note that we need both REST and GraphQL API connections to Shopify because the storefront id for the checkout process is only available via the GraphQL API.

Once you have edited config.yaml to contain the required information to connect to your accounts at Agility and Shopify, we’re ready to upload the configuration to StepZen.

### Upload Configuration

We upload the configuration using the StepZen CLI. We can install that easily by running the following command in your terminal:

```
$ npm install -g stepzen
```

Note: Windows support for the CLI is currently in beta. We recommend using WSL on Windows.

You’ll need node to run this command as well.

Now log in to StepZen using:

```
stepzen login -a {ACCOUNT}
```

When prompted for your admin key, enter your admin key from your My Account page.

3. Run StepZen start

```
$ stepzen start
```

3. Once successfully deployed, copy the stepzen endpoint generated in your terminal to obtain your `NEXT_STEPZEN_API_URL` variable.

```
// Example

https://account.stepzen.net/vercel/stepzen/__graphql
```

You'll need this to fill in your local variables in your .env, for example:

```
COMMERCE_PROVIDER=shopify

NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=yourstore.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here
NEXT_STEPZEN_API_KEY=api_key_from_your_account_here
NEXT_STEPZEN_API_URL=https://account.stepzen.net/vercel/stepzen/__graphql
```

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [Github Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
