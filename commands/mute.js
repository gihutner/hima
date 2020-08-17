const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'a mute command!',
    execute(message, args) {
        let member = message.guild.member(message.mentions.users.first());
        let muterole = message.guild.roles.cache.find(role => role.name === 'mooted');

        let time = args[2];

        if(!time) {

            // Reply with this message.
            message.reply("You need to specify a time in the second argument!");

            // Stop.
            return;
        }

        member.roles.add('726951826162843658');

        const mute_log = new Discord.MessageEmbed()
            .setColor('#ff9f9f')
            .setDescription()
    }
}