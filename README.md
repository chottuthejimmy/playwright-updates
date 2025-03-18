![TestDriver.ai](https://github.com/dashcamio/testdriver/assets/318295/2a0ad981-8504-46f0-ad97-60cb6c26f1e7)

# TestDriver.ai Web Quickstart

GitHub actions workflow files that generate and run end-to-end regression tests on website.

---

**What is TestDriver?**

Next generation autonomous AI agent for end-to-end testing of web & desktop applications

[Website](https://testdriver.ai) | [Docs](https://docs.testdriver.ai) | [GitHub Action](https://github.com/marketplace/actions/testdriver-ai) | [Join our Discord](https://discord.gg/a8Cq739VWn)

---

## Setup

First, [fork this repository](https://github.com/testdriverai/quickstart-web/fork).

Next, [create a GitHub secret](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#creating-configuration-variables-for-a-repository) named `TESTDRIVER_API_KEY` using your API key from the testdriver dashboard.

> TestDriver is currently in limited private beta. [Apply for an  API key here](https://o9w85nshvub.typeform.com/to/llG1wNkE).

In the forked repository, [add a GitHub variable](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#creating-configuration-variables-for-an-environment) named `TESTDRIVER_WEBSITE`. The value should be the root domain of the website you want to test (ex `https://example.com`).

## Test Generation

1. Run the `TestDriver.ai / Generate / Explore` workflow
   - TestDriver will explore your website and open a new pull request with test plans
   - Merge this PR into `main`
2. Run the `TestDriver.ai / Generate / Regression` workflow
   - TestDriver will execute the test plans and generate regression tests
   - Review each regression test and merge them into main
3. Regression tests will run on every PR and merge to main 
