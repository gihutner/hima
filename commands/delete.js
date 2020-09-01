const { Client, GuildMember } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
	name: 'delete',
	description: 'prune that thang',
	execute(Client, message, args) {
		if (message.guild.members.cache.get(message.author.id).hasPermission('MANAGE_CHANNELS')) {
			const amount = parseInt(args[0]) + 1;
			if (isNaN(amount)) {
				return message.reply('that doesn\'t seem to be a valid number.');
			} else if (amount <= 1 || amount > 100) {
				return message.reply('you need to input a number between 1 and 99.');
			}
	
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to prune messages in this channel!');

			});
		} else {
			const no_perms = new Discord.MessageEmbed()
.setColor('#FFFBC0')
.setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
.setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
.setDescription('It seems like you don\'t have the correct permissions to use this command!')
            message.reply(no_perms);
		}
	}
		}
			