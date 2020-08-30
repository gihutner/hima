const Discord = require('discord.js');
const client = require('../index.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute: function (message, args) {
		const response_latency = Date.now() - message.createdTimestamp + "ms"
		const api_latency = Math.round(client.ws.ping) + "ms"
		const ping_embed = new Discord.MessageEmbed()
			.setColor(`#FFFEC8`)
			.setTitle('Pong!')
			.setDescription(`・ **Response** Latency is: **${response_latency}** \n ・ **API** Latency is: **${api_latency}**`)

		message.reply(ping_embed);
	},
};



