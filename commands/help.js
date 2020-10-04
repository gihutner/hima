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
