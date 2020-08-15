const Discord = require('discord.js');


module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 0,
	execute: function (message, args) {
		const {client} = require("../index");
		const response_latency = Date.now() - message.createdTimestamp + " ms"
		const api_latency = Math.round(client.ping) + "ms`"
		const ping_embed = new Discord.MessageEmbed()
			.setColor(`#FFFEC8`)
			.setTitle('Pong!')
			.setDescription(`・ **Response Latency** is: ${response_latency} \n ・ **Api Latency** is: ${api_latency}`)
			.setTimestamp()

		message.reply(ping_embed);
	},
};



