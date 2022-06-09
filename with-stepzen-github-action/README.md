## With the StepZen Github Action

This is an example of a StepZen project using the StepZen Github Action to deploy the schema on StepZen.

To try it out for yourself, do a [sparse checkout](https://git-scm.com/docs/git-sparse-checkout) of this folder, move the contents of `action.yml` to your `.github/workflows folder` in a new `action.yml` file, make a minor change (say, to this README), and push it to trigger the workflow. 
### Required Secrets

To use the deployment action, [add these two Github repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository):

```
SZ_ACCOUNT
SZ_ADMIN_KEY
```

If you don't have a StepZen account, [sign up for StepZen](https://stepzen.com/signup) to obtain an account name and admin key for these values. 

`GITHUB_WORKSPACE` is another environment variable in the `entrypoint.sh` script for the Docker file. It is provided [by default](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables).