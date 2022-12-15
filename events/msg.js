module.exports = { 
   name: `messageCreate`, // Name of event
   run(client, message) { // in (client, message) is the args for event example messageCreate => message InteractionCreate => interaction
  
     if (message.channel.type === `dm`) return; // if message is in DM don't retuen anything 
     if (message.author.bot) return; // if message author is bot don't return anything
  
     let prefix = `example!` // You can change a prefix in `` for other prefix ezample p!
  
     if (message.content.startsWith(prefix)) { 

       const args = message.content.slice(prefix.length).trim().split(/ +/g); //We define Args
       const command = args.shift().toLowerCase(); // We define Cmds 
  
      // Handler de cmds 
  
       let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command)); 
      // Found commands for execute with name and alias
        
  
       if (cmd) { // if there is cmd
         cmd.execute(client, message, args) // run this
       } 
       
     } 

     } 
  
   } 
}