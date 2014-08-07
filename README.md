[![](https://david-dm.org/facadejs/facadejs-sample.svg)](https://david-dm.org/facadejs/facadejs-sample)

#Facade.js Sample Project

##Install on Heroku

Heroku has just released a new feature called **Deploy to Heroku** which (providing you have an account) will automatically clone and deploy a git repo on Heroku. Click the button below to get started.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

##Install Locally

To install locally first clone the repo from GitHub:

```bash
$ git clone git@github.com:facadejs/facadejs-sample.git;
```

Then install dependencies through both npm and bower.

**Note:** bower will run automatically after `npm install` is finished.

```bash
$ cd facadejs-sample/
$ npm install
```

Providing that you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed you can start the sample applications with this command:

```bash
$ foreman start
```

If not, then the server can also be run using this command:

```bash
$ node web.js
```
