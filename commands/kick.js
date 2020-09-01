const Discord = require('discord.js');
const mod_cases = require('../index.js');
const currentModCaseCount = require('../index.js');

module.exports = {
	name: 'kick',
    description: 'a kick command.',
    guildOnly: true,
	execute(Client, message, args) {
		if (message.guild.members.cache.get(message.author.id).hasPermission('KICK_MEMBERS') && args.length > 0) {
			let member = message.mentions.members.first();

			if (!member) {
				const not_member = new Discord.MessageEmbed()
				.setDescription('Mention someone that\'s actually in this server, please..')
				
				return message.reply(not_member);

			} else if(!member.kickable) {
				const no_kick_perms = new Discord.MessageEmbed()
					.setDescription('I\'m unable to kick this user. Make sure they don\'t have a role higher than mine, and check my permissions!')

				message.reply(no_kick_perms);

				return;
			}
			let reason = args.slice(1).join(' ') || 'None';

			member.kick()

			.catch();

			const kick_log = new Discord.MessageEmbed()
			.setColor('#FF9F9F')
			.setTitle(`Case #${currentModCaseCount} | Kick`)
			.setDescription(`${member.user} has been kicked by ${message.author}.`)
			.addFields(
				{ "name": '**Reason**', "value": `${reason}`}
			)
			.setTimestamp()

			client.channels.cache.get('726723128142594098').send(kick_log);
		} else if (!message.guild.members.cache.get(message.author.id).hasPermission("KICK_MEMBERS")) {
            const no_perms = new Discord.MessageEmbed()
.setColor('#FFFBC0')
.setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
.setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
.setDescription('It seems like you don\'t have the correct permissions to use this command!')
			message.reply(no_perms);
		} else {
			const wrong_kick = new Discord.MessageEmbed()
				.setDescription(`That was the incorrect usage. Try \`h.kick [user] <\reason\>\`.`)
			message.reply(wrong_kick)
		}
	},
};