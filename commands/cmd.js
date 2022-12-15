const { MessageEmbed } = require(`discord.js`);  // We define Embe
  
 module.exports = { 
   name: "cmd-example", // Nombre del ccmd / Name of cmd
   alias: ["cmd", "example"], // otros nombres del cmd / others names of cmd
  
   async  execute (client, message, args) { 
  
      // code example / codigo


     message.reply("Hi, I am bot") // reply message of the user

     // Embed
     let embed = new Discord.MessageEmbed()
     .setTitle("Hi")
     .setDescription("I am Bot")

     // send the embed
     message.channel.send({ embeds: [embed] }) // response 
   } 
    
 }