const Discord = require("discord.js");

module.exports = {
    name: "confess",
    execute(client, message, args) {
        const confession_msg = args.slice(0).join(" ");

        const Enmap = require("enmap");
        const confess_count = new Enmap("confess");
        const currentConfessCount = confess_count.count;

        confess_count.set(confess_count.count + 1, {});
        const confession_emb = new Discord.MessageEmbed()
            .setColor("#2f3137")
            .setTitle(`Confession #${currentConfessCount + 1}`)
            .setDescription(`${confession_msg}`);

        client.channels.cache.get("762209969000153090").send(confession_emb);
    },
};
