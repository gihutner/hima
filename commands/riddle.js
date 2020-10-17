const Discord = require("discord.js");

module.exports = {
    name: "riddle",
    description: "just for riddle day",
    execute(client, message, args) {
        if (args.length > 0) {
            const user = message.author;
            const riddle = args.slice(0).join(" ");

            const riddle_emb = new Discord.MessageEmbed()
                .setColor("#2f3137")
                .setDescription(riddle);

            message.delete();
            client.channels.cache
                .get("747096663390421107")
                .send(`riddle answer from ${user},`, riddle_emb);
        } else {
            const wrong_usage = new Discord.MessageEmbed().setDescription(
                "`that was the wrong usage. try ;riddle [answer]`"
            );
            message.channel.send(wrong_usage);
        }
    },
};
