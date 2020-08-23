const Discord = require('discord.js');
const { Client, GuildMember } = require("discord.js");

module.exports = {
    name: 'thana',
    description: 'unban someone beech',
    execute(message, args, Client) {
        if (message.author.id === '123953671024148484') {
            const role = guild.roles.cache.find(role => role.name === 'Supreme Eggu');
                const member = message.mentions.members.first() || message.author.id;
                    member.roles.add(role);
        }
    }
}