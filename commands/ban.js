const Discord = require('discord.js');
const { Client, GuildMember } = require("discord.js");


module.exports = {
	name: 'ban',
    description: 'ban someone beech',
    guildOnly: true,
	execute(message, args, Client) {
		const { client } = require("../index.js");
		if (message.guild.members.cache.get(message.author.id).hasPermission('BAN_MEMBERS')) {
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
			
            if (!member) {
				const not_member = new Discord.MessageEmbed()
				.setDescription('Mention someone that\'s actually in this server, please..')
				
				return message.reply(not_member);

			} else if(!member.bannable) {
				const no_ban_perms = new Discord.MessageEmbed()
				.setDescription('I\'m unable to ban this user. Make sure they don\'t have a role higher than mine, and check my permissions!')

                message.reply(no_ban_perms);
            } 
			let reason = args.slice(1).join(' ');
			
			if(!reason) {
				message.channel.send("No reason provided..estupido..");
			
			}	
            member.ban(reason)

                .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));

			let ban_log = new Discord.MessageEmbed()
			.setColor('#FF9F9F')
			.setAuthor('𝐡𝐢𝐦𝐚𝐰𝐚𝐫𝐢 — ･ﾟ', `https://cdn.discordapp.com/attachments/726708672272531519/742047829006221373/hmawari.jpg`)
			.setTitle('Member Banned!')
			.setDescription(`${member.user} has been banned by ${message.author}.`)
			.addFields(
				{ name: '**Reason**', value: `${reason}`}
			)
			.setTimestamp()

			client.channels.cache.get('726966603077648464').send(ban_log);
        } else if (!message.guild.members.cache.get(message.author.id).hasPermission("BAN_MEMBERS")) {
            const no_perms = new Discord.MessageEmbed()
.setColor('#FFFBC0')
.setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
.setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
.setDescription('It seems like you don\'t have the correct permissions to use this command!')
			message.reply(no_perms);
		} else if (args.length === 0) {
			const wrong_kick = new Discord.MessageEmbed()
            .setDescription(`That was the incorrect usage. Try \`h.kick [user] [reason]\`.`)
			message.reply(wrong_kick)
		}
    },
};