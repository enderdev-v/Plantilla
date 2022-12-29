
const { Intents, Client, Collection } = require(`discord.js`); 
// Export features for use 
const intents = new Intents(32767); // We define intents 
const client = new Client({ intents }); // We define client 
const fs = require("node:fs") // define fs for handlers
const path = require(`node:path`) // define path for handlers
const config = require("./config.json") // export config for use in a code example prefix or token
 client.commands = new Collection() // Collection for commands
// Command Handler
 const commands = fs.readdirSync(path.join(__dirname, `commands`)) // search a folder of handler
 for (const file of commands) { // search in folder commands subfolders
      const cmd = require(path.join(__dirname, `commands`, file)) // define cmd
      client.commands.set(cmd.name, cmd); // set vollection with name and use 
         
 } 

// Message Event

client.on("messageCreate", (message) => {
       if (message.channel.type === `dm`) return; // if message is in DM don't retuen anything 
     if (message.author.bot) return; // if message author is bot don't return anything
  
     let prefix = `example!` // You can change a prefix in `` for other prefix ezample p!
  
     if (!message.content.startsWith(prefix)) return;

       const args = message.content.slice(prefix.length).trim().split(/ +/g); //We define Args
       const command = args.shift().toLowerCase(); // We define commands 
  
      // Handler cmds 
  
       let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command)); 
      // Found commands for execute with name and alias
        
  
       if (cmd) { // if there is cmd
         cmd.execute(client, message, args) // run this
       } 
       
     

})

client.login(config.token) // put your token in config.json in token_secret or in client.login