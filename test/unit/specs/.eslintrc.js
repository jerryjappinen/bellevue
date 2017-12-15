var _ = require('lodash');
var base = require('../../../src/.eslintrc');

module.exports = _.merge(
  {},
  base,
  {
    env: {
      jest: true
    }
    // globals: {}
  }
);
