const Discord = require('discord.js');
const { prefix } = require('../config.json');
const normal_helpemb = new Discord.MessageEmbed()
.setColor('#fcd9ce')
    .setDescription('`[ ]` - **Mandatory** || `< >` - **Optional**')
.setTitle('Himawari\'s Help Center')
.addFields(
    { name: '**My commands**', value: '`;avatar` \n `;suggest [suggestion]`' },
)
.setFooter('© eggu#0001')

const manager_helpemb = new Discord.MessageEmbed()
.setColor('#fcd9ce')
.setTitle('Himawari\'s Help Center')
    .setDescription('`[ ]` - **Mandatory** || `< >` - **Optional**')
.addFields(
    { name: '**My commands**', value: '`;avatar` \n `;suggest [suggestion]`' },
    { name: '**Moderator Commands**', value: '`;kick [user] <reason>` \n `;ban [user] <reason>` \n `;delete [# of messages]` ', inline: true},
    { name: '\u200B', value: '\u200B' },
)
.setFooter('©️ eggu#0001')


module.exports = {
    name: 'help',
    description: 'help me beech, list my commands',
    aliases: ['commands'],
    usage: ['command name'],
    execute(Client, message, args) {
        if (message.guild.members.cache.get(message.author.id).hasPermission('MANAGE_CHANNELS')) {
            return message.reply(manager_helpemb);
        } else {
            return message.reply(normal_helpemb);
        }
    }
};
