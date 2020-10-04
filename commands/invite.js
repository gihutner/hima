const Discord = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  execute(client, message, args) {
    const invuwu = new Discord.MessageEmbed()
      .setColor("#2f3137")
      .setDescription(
        "you wanted to invite me??? me???? [click here uwu](https://discord.com/api/oauth2/authorize?client_id=747230852047437825&permissions=0&scope=bot)"
      );
    message.channel.send(invuwu);
  },
};
