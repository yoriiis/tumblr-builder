# Getting started

## Installation

First, install the library from [npm](https://www.npmjs.com/package/tumblr-builder).

::: tip Package manager
In the following example we will use `npm` but `yarn` also work :heart:
:::

```bash
npm install tumblr-builder --save-dev
```

## Get an API Key <Badge type="warning" vertical="middle" text="Mandatory"/>

TumblrBuilder use [Tumblr API v2](https://www.tumblr.com/docs/en/api/v2), to use it you must have an API key. The API key is a unique identifier that is used to authenticate requests associated with your project.

First, [register your application](https://www.tumblr.com/oauth/register) and get the API key.

You must include the API key with the `apiKey` parameter in the [Javascript instanciation](how-it-works.html#instanciation).
