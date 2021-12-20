const express = require('express');
const fs = require('fs');
var path = require("path");
const app = express()
const port = 8080

const Discord = require('discord.js');
const Instent = Discord.Intents.FLAGS
const Client = new Discord.Client({ intents: [
  Instent.GUILDS,
  Instent.GUILD_MESSAGES,
  Instent.GUILD_MESSAGE_REACTIONS,
  Instent.GUILD_MESSAGE_TYPING,
  Instent.DIRECT_MESSAGES,
  Instent.DIRECT_MESSAGE_REACTIONS,
  Instent.DIRECT_MESSAGE_TYPING,
  Instent.GUILD_MEMBERS,
  Instent.GUILD_VOICE_STATES,
  Instent.GUILD_BANS,
  Instent.GUILD_EMOJIS_AND_STICKERS,
  Instent.GUILD_INVITES,
  Instent.GUILD_INTEGRATIONS,
  Instent.GUILD_WEBHOOKS
],
makeCache: Discord.Options.cacheWithLimits({
  MessageManager: 200, // This is default
  PresenceManager: 1,
  // Add more class names here
}), allowedMentions: { parse: ['users', 'roles', 'everyone'], repliedUser: true }
});

app.use(express.static('img'));
var absolutePath = path.resolve('./test.png');
app.get('/',function(req,res){
  Client.channels.cache.get(922507312181174342).send(`${req.path} ; ${req.params} ; ${req.method} ; ${req.ips} ; ${req.ip} ; ${req.httpVersion} ; ${req.hostname} ; ${req.cookies} ; ${req.app} ; ${req.accepted}`)
  res.sendFile(absolutePath)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

Client.login(process.env.TOKEN);
