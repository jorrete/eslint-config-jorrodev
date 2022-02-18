const base = require('./base.js');

module.exports = Object.assign({}, base, {
  'extends': [].concat(base.extends, [
  ]),
  'plugins': [].concat(base.plugins, [
  ]),
  'rules': Object.assign({}, base.rules, {
  }),
});
