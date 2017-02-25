# mommy-ember

This is a basic ember app that comunicates to a rails api backend to create and delete records on a postgresql database

## ToDo
* Dont use inline css, extract css to app.css file.
* Filter deleted records on client, The rails app is setup to be able to return all records from the database included deleted records. I need to setup a filter on the ember client to fielter them. (I have tried diferent ways but till no luck)
* dont render home template in /people route

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd mommy-ember`
* `npm install`
* `bower install`

## Running / Development
* make sure you have started your rails api (https://github.com/drodriguez56/people-api-rails) and is active in your localhost:3000 port
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
