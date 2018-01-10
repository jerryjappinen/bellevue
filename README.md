# Bellevue

**Bellevue** is a full-featured frontend project template for modern single-page applications built on Vue.js and Webpack.

- Demo: [bellevue.netlify.com](https://bellevue.netlify.com/demo)
- Documentation: [eiskis.gitbooks.io/bellevue](https://eiskis.gitbooks.io/bellevue/)
- Source and issues: [github.com/Eiskis/bellevue](https://github.com/Eiskis/bellevue)

Bellevue is based on the official `vuejs-templates/webpack` template, but extends it with many additional tooling features such as preconfigured SCSS support, SVG sprites, more full-featured linting and centralised configuration.

But while the official template is only a _Hello world_, Bellevue's goal is to set you up with a well-documented, [thought-out application structure](https://eiskis.gitbooks.io/bellevue/app/overview.html) with all the patterns you need for building a complex application including routing, state management, persistence, localisation and more (see [feature comparison](https://eiskis.gitbooks.io/bellevue/overview/comparison.html)).

## Requirements

1. The Node version defined in [.nvmrc](./nvmrc)

**Protip:** manage node versions easily with [nvm](https://github.com/creationix/nvm).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# serve with hot reload at custom port
PORT=1234 npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build:report

# run unit tests
npm run unit

# run unit tests and show coverage report
npm run unit:coverage

# run unit tests and with hot reload (`jest --watch`)
# NOTE: You have more options in the terminal after you run this command
# NOTE: You can change this to `--watchAll` in `package.json` in case of issues
# NOTE: See https://github.com/facebook/jest/issues/4883
npm run unit:watch

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
