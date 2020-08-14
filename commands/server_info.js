const Discord = require('discord.js');
const serverinfo_Embed = new Discord.MessageEmbed()
.setTitle(`This Server\'s Info`)
module.exports = {
	name: 'server',
	description: 'Server info',
	execute(message, args) {
		message.channel.send(serverinfo_Embed)
	},
};