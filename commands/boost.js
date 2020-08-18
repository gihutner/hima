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
                .setTitle(`New Boost! <a:hima_music:734252375052910633>`)
                .setDescription(`Thank you ${member} for boosting our server! blah blah sorry i need to do this so i can add the role here :naniok:`)

            client.channels.cache.get('726697159474282497').send(boost_embed);
        } else {
            const member = message.mentions.members.first();
            const no_perms = new Discord.MessageEmbed()
                .setColor('#FFFBC0')
                .setAuthor(`${member.username}#${message.author.discriminator}`, `${member.displayAvatarURL()}`)
                .setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
                .setDescription('It seems like you don\'t have the correct permissions to use this command!')
            message.reply(no_perms);
        }
    }
}