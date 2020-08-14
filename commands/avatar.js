const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		const user = message.mentions.users.first() || message.author;
		const oneavatarEmbed = new Discord.MessageEmbed()
        .setTitle(`Your Avatar`)
        .setColor('#2f3137')
		.setImage(message.author.displayAvatarURL());
		
		const multi_avatarEmbed = new Discord.MessageEmbed()
		.setTitle(`${user.username}\'s Avatar`)
		.setColor('#2f3137')
		.setImage(user.displayAvatarURL());

		if (!message.mentions.users.size) {
			return message.channel.send(oneavatarEmbed);
		} else if (message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;}))
			return message.channel.send(multi_avatarEmbed)
	},
};
