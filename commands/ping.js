const Discord = require('discord.js');


module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 0,
	execute: function (message, args) {
		const {client} = require("../index");
		const ping_embed = new Discord.MessageEmbed()
			.setColor(`#FFFEC8`)
			.setTitle('Pong!')
			.addField(
				{ name: '**Uptime:**', value: client.uptime}
			)
			.setDescription(`beep boop`)

		message.reply(ping_embed);
	},
};



