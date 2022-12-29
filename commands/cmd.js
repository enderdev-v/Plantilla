module.exports = { 
  name: "cmd-example", // Name of cmd
  alias: ["cmd", "example"], // others names of cmd
  
  async execute (client, message, args) { // execute
  
      // code example 
     message.reply("Hi, I am bot") // reply message of the user

   
 }
}