const ping = {
    name: "ping", // name command
    alias: ["pong"], // aliases
    run: async (client, message, args) => {
        message.reply("Pong!")
    }
}

module.exports = ping
// Por si lo quieres pasar a esmodules