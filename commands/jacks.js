const Discord = require("discord.js");

module.exports = {
    name: "sing",
    execute(client, message, args) {
        const sing = new Discord.MessageEmbed().setDescription("iara stinks");
        message.channel.send(sing);
    },
};
