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

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        const stats_embed = new Discord.MessageEmbed()
            .setColor('#FFFEC8')
            .setTitle('<:hima_chickheart:735262386893750302>・Stats!・')
            .setDescription(`. . . . . . . . . . . . . . . . . . . . . . . . \n **Uptime** ・ ${uptime} \n **Version** ・ 1.0.0 \n **Created on** ・ Tue Apr 07 2020`)
            .setFooter('© eggu#0001', 'https://cdn.discordapp.com/avatars/697195772919414884/734abe1afbb98ad3f140fcff8da84416.png')

        message.reply(stats_embed);

    },
};