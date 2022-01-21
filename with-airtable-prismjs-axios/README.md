# Stickers Page

Here's some of the code behind our [StepZen stickers page](https://stepzen.com/stickers)! 

You can watch our demo here: https://www.youtube.com/watch?v=2xTqzzb2iaA

## Getting Started
You'll need to create a [StepZen account](https://stepzen.com/request-invite) first. Once you've got that set up, [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) this repository onto your machine and open the working directory.

We used Airtable and Lob -- Airtable for storing the addresses, and Lob for verifying them. If you want to clone down this project and use it as a starting point for your own stickers page, you'll need to sign up for both services and use the keys to fill your `config.yaml`, which you'll make inside your working directory. It will look something like:

```yaml
configurationset:
  - configuration:
        name: airtable_config
        Authorization: Bearer PUT_YOUR_KEY_HERE
        baseid: PUT_YOUR_BASE_ID_HERE
  - configuration:
        name: lob_test_config
        Authorization: Basic PUT_YOUR_KEY_HERE
  - configuration:
        name: lob_live_config
        Authorization: Basic PUT_YOUR_KEY_HERE
  - configuration:
        name: lob_dummy_live_config
        Authorization: Basic PUT_YOUR_KEY_HERE
```
    
Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start). 
After you've followed the prompts (you can accept the suggested endpoint name-- in my case it was `api/happy-bunny`) and installed the CLI, run `stepzen start`.

A message similar to this will display:
```bash
Watching ~/demo-sticker for GraphQL changes
http://localhost:5000/api/happy-bunny
File changed: /Users/luciacerchie/demo-stickers/.git/config
Deploying to StepZen...... done
Successfully deployed api/happy-bunny at 9:00:07 AM
```
You'll see your StepZen Explorer pop up on your localhost:5000 address:

<img width="600" alt="Screen Shot 2021-07-01 at 9 08 20 AM" src="https://user-images.githubusercontent.com/54046179/124156000-f3a4d380-da4b-11eb-8f65-738a9cca6f8c.png">

Click the 'Explorer' tab to begin adding queries.

## Open up the UI in your browser
To run the development version:

- `npm install`
- `cp .env.sample .env.local`
- `npm run dev`

The stickers url: <http://localhost:3000/stickers>

To build and run the production version:

- `npm install`
- `npm run build`
- `npm start -p 3000`

Both will run at <http://localhost:3000>

## Learn More
You can learn more in the [StepZen documentation](https://stepzen.com/docs). Reach out to us in [Discord](https://discord.com/invite/9k2VdPn2FR ) if you need any help! 



