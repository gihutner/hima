const Discord = require('discord.js');
const { prefix } = require('../config.json');
const normal_helpemb = new Discord.MessageEmbed()
.setColor('#FFFEC8')
.setTitle('Himawari\'s Help Center')
.addFields(
    { name: '**<a:hima_music:734252375052910633> | My commands**', value: '`h.avatar` \n `h.pet [pet name]`' },
    { name: '**<a:hima_music:734252375052910633> | Extra Info**', value: '[invite me!](https://discord.com/api/oauth2/authorize?client_id=697195772919414884&permissions=0&scope=bot)'}
)
.setFooter('by eggu#0001')

const manager_helpemb = new Discord.MessageEmbed()
.setColor('#FFFEC8')
.setTitle('Himawari\'s Help Center')
    .setDescription('`[ ]` - **Mandatory** || `< >` - **Optional**')
.addFields(
    { name: '**<a:hima_music:734252375052910633> | My commands**', value: '`h.avatar` \n `h.pet [pet name]`' },
    { name: '**<a:hima_music:734252375052910633> | Moderator Commands**', value: '`h.kick [user] <reason>` \n `h.ban [user] <reason>` \n `h.delete [# of messages]` ', inline: true},
    { name: '\u200B', value: '\u200B' },
    { name: '**<a:hima_music:734252375052910633> | Extra Info**', value: '[invite me!](https://discord.com/api/oauth2/authorize?client_id=697195772919414884&permissions=0&scope=bot)'}
)
.setFooter('by eggu#0001')


module.exports = {
    name: 'help',
    description: 'help me beech, list my commands',
    aliases: ['commands'],
    usage: ['command name'],
    cooldown: 5,
    execute(message, args) {
        if (message.guild.members.cache.get(message.author.id).hasPermission('MANAGE_CHANNELS')) {
            return message.reply(manager_helpemb);
        } else {
            return message.reply(normal_helpemb);
        }
    }
};
