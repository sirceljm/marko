require('./env');

var parentModule = module.parent;

if (MARKO_DEBUG) {
    module.exports = parentModule.require('marko/src/express');
} else {
    module.exports = parentModule.require('marko/dist/express');
}
