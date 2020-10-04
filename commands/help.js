const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
    name: "help",
    description: "help me beech, list my commands",
    aliases: ["commands"],
    usage: ["command name"],
    execute(Client, message, args) {
        const helpemb = new Discord.MessageEmbed()
            .setColor("#2f3137")
            .setTitle("Help Center")
            .setThumbnail(
                "https://cdn.discordapp.com/avatars/747230852047437825/d4036f4de3aa58bcb7b9b8bacc9a2b1c.webp?size=256"
            )
            .setDescription("`[ ]` - **Mandatory** . `< >` - **Optional**")
            .addFields(
                {
                    name: "**General Commands**",
                    value: "`;avatar` \n `;suggest [suggestion]`",
                    inline: true,
                },
                {
                    name: "**Moderation**",
                    value:
                        "`;kick [user] <reason>` \n `;ban [user] <reason>` \n `;delete [# of messages]` \n `;vent [content]` ",
                }
            )
            .setFooter("©️ eggu#0001");

        message.channel.send(helpemb);
    },
};
