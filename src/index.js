// Definitions 
const { Intents, Client, Collection } = require(`discord.js`);
const intents = new Intents(32767);
const client = new Client({ intents });
require("dotenv").config()
const fs = require("node:fs")
const path = require(`node:path`)
client.commands = new Collection()

// Command Handler
const commands = fs.readdirSync(path.join(__dirname, `commands`)) // search a folder 'commands'
commands.forEach(cmd => {
    const file = require(path.join(__dirname, `commands`, file))
    client.commands.set(file.name, file)
}) // Register commands

// ready event
client.on("ready", () => console.log("ready"))

// command event
client.on("messageCreate", (message) => {
    // checks
    if (message.channel.type === `dm`) return;
    if (message.author.bot) return;
    
    // prefix and checks
    let prefix = `p!`
    if (!message.content.startsWith(prefix)) return;

    // create command
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

    // Command Handler
    if (cmd) {
        cmd.run(client, message, args)
    }
})

client.login(process.env.token)