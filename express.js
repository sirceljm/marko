var isDebug = require('./env').isDebug;
var target = isDebug ? '@awly/marko/src/express' : '@awly/marko/dist/express';

module.exports = module.parent ?
    module.parent.require(target) :
    require(target);
