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

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`

        message.reply('```md \n ・Stats!・ \n ------ \n Uptime ・ \\`${uptime}\\` \n Version ・ 1.0.0 \n Owner ・ eggu#0001```');

    },
};