const Discord = require('discord.js');

module.exports = {
    name: 'yoink',
    execute(message, args) {
        const commands = message.content.split(' ')[0].substring(2);
        if ((commands === "yoink") && (message.guild.members.cache.get(message.author.id).hasPermission('MANAGE_EMOJIS'))) {

        }
    }
}