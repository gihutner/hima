const Discord = require('discord.js');
const { client } = require('../index.js');

module.exports = {
    name: 'boost',
    aliases: ['nitro'],
    guildOnly: true,
    execute(message, args) {
        if (message.guild.members.cache.get(message.author.id).hasPermission('MANAGE_CHANNELS')) {
            const { client } = require('../index.js');
             const member = message.mentions.members.first();
            const boost_embed = new Discord.MessageEmbed()
                .setColor('#DAA8FF')
                .setTitle('New Boost! <:hima_music:734252375052910633>')
                .setDescription(`Thank you ${member} for boosting our server! blah blah sorry i need to do this so i can add the role here :naniok:`)

            client.channels.cache.get('726697159474282497').send(boost_embed);
        }
    }
}