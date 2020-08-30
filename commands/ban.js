const Discord = require('discord.js');
const { Client, GuildMember } = require("discord.js");
const mod_cases = require('../index.js');
const currentModCaseCount = require('../index.js');

module.exports = {
	name: 'ban',
    description: 'ban someone beech',
    guildOnly: true,
	execute(message, args, Client) {
		const { client } = require("../index.js");
		if (message.guild.members.cache.get(message.author.id).hasPermission('BAN_MEMBERS') && args.length > 0) {
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
			
            if (!member) {
				const not_member = new Discord.MessageEmbed()
				.setDescription('Mention someone that\'s actually in this server, please..')
				
				return message.reply(not_member);

			} else if(!member.bannable) {
				const no_ban_perms = new Discord.MessageEmbed()
				.setDescription('I\'m unable to ban this user. Make sure they don\'t have a role higher than mine, and check my permissions!')

                message.reply(no_ban_perms);

				return;
            }
			let reason = args.slice(1).join(' ') || 'None';

            member.ban()

                .catch();

			let ban_log = new Discord.MessageEmbed()
			.setColor('#ff9f9f')
			.setAuthor('𝐡𝐢𝐦𝐚𝐰𝐚𝐫𝐢 — ･ﾟ', `https://cdn.discordapp.com/attachments/726708672272531519/742047829006221373/hmawari.jpg`)
			.setTitle(`Case #${currentModCaseCount} | Ban`)
			.setDescription(`${member.user} has been banned by ${message.author}.`)
			.addFields(
				{ name: '**Reason**', value: `${reason}`}
			)
			.setTimestamp()

			client.channels.cache.get('726723128142594098').send(ban_log);
        } else if (!message.guild.members.cache.get(message.author.id).hasPermission("BAN_MEMBERS")) {
            const no_perms = new Discord.MessageEmbed()
.setColor('#FFFBC0')
.setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
.setTitle('**Oh no!** ')
.setDescription('It seems like you don\'t have the correct permissions to use this command!')
			message.reply(no_perms);
		} else {
			const wrong_ban = new Discord.MessageEmbed()
            .setDescription(`That was the incorrect usage. Try \`;ban [user] [reason]\`.`)
			message.reply(wrong_ban)
		}
    },
};