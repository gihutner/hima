module.exports = {
	name: 'user',
	description: 'info about user',
	aliases: ['shei'],
	execute(Client, message, args) {
		const user = message.author || message.mentions.users.first() || message.guild.members.get(args[0]);
		const user_avatar = user.displayAvatarURL({ dynamic: true, size: 256});
		const user_id = user.id;
		const tag = user.tag;
		const createdate = user.createdAt;
		const createdate_time = user.createdTimestamp;
		const status = user.presence.status;
		const joinedat = user.joinedAt;

		const user_info = new Discord.MessageEmbed()
			.setDescription(user_id);

		message.channel.send(user_info);

	},
};