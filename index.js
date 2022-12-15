// We define Things we will occupy
const { Intents, Client, Collection } = require(`discord.js`); 
const intents = new Intents(32767); 
const client = new Client({ intents });
const fs = require("node:fs") 
const path = require(`node:path`) 
const config = require("./config.json")
 client.commands = new Collection() 
// Command Handler
 const commands = fs.readdirSync(path.join(__dirname, `commands`)) 
 for (const folders of commands) { 
         const folder = fs.readdirSync(path.join(__dirname, `commands`, folders)) 
         for (const file of folder) { 
                 const cmd = require(path.join(__dirname, `commands`, folders, file)) 
                 client.commands.set(cmd.name, cmd); 
         } 
 } 
// Event Handler
const events = fs.readdirSync(path.join(__dirname, `events`)) 
 for (const file of events) { 
         const event = require(path.join(__dirname, `events`, file)) 
         client.on(event.name, async (...args) => event.run(client, ...args)); 
 }


client.login(config.token) // turn on a bot