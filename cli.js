#!/usr/bin/env node

var clipboardy = require('clipboardy'),
badgeurl = require('./App');
console.log('Copied !!')
clipboardy.writeSync(badgeurl(process.argv[2],process.argv[3],process.argv[4]));
