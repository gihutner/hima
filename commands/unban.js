/*const Discord = require('discord.js');
const { Client, GuildMember } = require("discord.js");

module.exports = {
	name: 'unban',
    description: 'unban someone beech',
    guildOnly: true,
	execute(message, args, Client) {
        if (message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) {
            const { client } = require("../index.js");
        
            let member = message.mentions.members.first().id || message.members.cache.get(args[0]) || message.mentions.members.first().id ||
             client.members.resolve(args[0]);
            let reason = args.slice(1).join(" ");
            let ban =  message.guild.fetchBans();
            let member_s = client.users.fetch(unbanned);

            message.guild.members.unban(id)
            
            

        
        let unban_log = new Discord.MessageEmbed()
        .setColor('#FF9F9F')
        .setAuthor('𝐡𝐢𝐦𝐚𝐰𝐚𝐫𝐢 — ･ﾟ', `https://cdn.discordapp.com/attachments/726708672272531519/742047829006221373/hmawari.jpg`)
        .setTitle('Member Unbanned!')
        .setDescription(`${member.user} has been unabnned by ${message.author}.`)
        .addFields(
            { name: '**Reason**', value: `${reason}`}
        )
        .setTimestamp()

        client.channels.cache.get('726966603077648464').send(unban_log);
        }

        if (!message.guild.members.cache.get(message.author.id).hasPermission("ADMINISTRATOR")) {
            const no_perms = new Discord.MessageEmbed()
.setColor('#FFFBC0')
.setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
.setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
.setDescription('It seems like you don\'t have the correct permissions to use this command!')
            message.reply(no_perms);
        } 
    },
};
*/