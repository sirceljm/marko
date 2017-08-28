'use strict';
const fs = require('fs');
const path = require('path');
const buildDir = require('./util').buildDir;
const babelOptions = {
    "plugins": [
        [
            "minprops", {
                "matchPrefix": "___",
                "prefix": "",
                "suffix": "_",
                "hello": "world",
                "context": "marko"
            }
        ],
        [
            "transform-define", {
                "MARKO_DEBUG": false
            }
        ],
        [
            "minify-dead-code-elimination", {
                "keepFnName": true,
                "keepFnArgs": true,
                "keepClassName": true
            }
        ]
    ]
};

buildDir('src', 'dist', {
    babelExclude: [
        '/taglibs/async/client-reorder-runtime.min.js'
    ],
    babelOptions
});

var buildConstants = {
    isDebug: false
};

fs.writeFileSync(
    path.join(__dirname, '../dist/build.json'),
    JSON.stringify({ isDebug: false }, null, 4),
    { encoding: 'utf8' });

buildDir('test', 'test-dist', {
    babelExclude: [
        '**/inline/**',
        '*expected*.*',
        'input.js*'
    ],
    exclude: [
        '/generated',
        '*.marko.js',
        '*.skip',
        '*.generated.*',
        '*actual*.*',
        'actualized-expected.html*'
    ],
    babelOptions
});
