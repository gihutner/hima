const Discord = require('discord.js');

module.exports = {
    name: 'stats',
    description: 'status about the bot!',
    execute(message, args) {
        const { client } = require('../index.js');

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `${days} day, ${hours} hours, ${minutes} minutes and ${seconds} seconds`

        const stats_embed = new Discord.MessageEmbed()
            .setColor('#C8C9FF')
            .setTitle('𝐡𝐢𝐦𝐚𝐰𝐚𝐫𝐢 — ･ﾟ')
            .setDescription(`・ **Uptime:** ${uptime}. \n ・ **Server size:** ${client.guilds.cache.size} servers.
            \n ・ **Owner:** eggu#0001`)

        message.reply(stats_embed);
    },
};