const Discord = require('discord.js');

module.exports = {
	name: 'user',
	description: 'info about user',
	aliases: ['shei'],
	execute(Client, message, args) {
		let user = message.guild.members.get(args[0]);
		let member = message.guild.member(user);
		const user_avatar = user.displayAvatarURL({ dynamic: true, size: 256});
		const user_id = user.id;
		const tag = user.tag;
		const createdate = user.createdAt;
		const createdate_time = user.createdTimestamp;
		const status = user.presence.status;
		const joinedat = member.joinedAt;

		const user_info = new Discord.MessageEmbed()
			.setColor('#fcd9ce')
			.setAuthor(tag, user_avatar)
			.setThumbnail(user_avatar)
			.addFields(
				{ name: 'Joined Here', value: joinedat},
				{ name: 'Created Account', value: `${createdate}`, inline: true},
				{ name: 'User Status', value: status, inline: true},
			)
			.setFooter(`User ID: ${user_id}`)

		message.channel.send(user_info);

	},
};