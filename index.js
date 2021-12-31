const express = require('express');
const app = express()
const port = 8080

var mc = require('minecraft-protocol');
var server = mc.createServer({
  'online-mode': true,   // optional
  encryption: true,      // optional
  host: '0.0.0.0',       // optional
  port: 25565,           // optional
  version: '1.18.1'
});
const mcData = require('minecraft-data')(server.version)
