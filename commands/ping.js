const Discord = require('discord.js');
const default_color = require('../index.js')

module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
	execute: function (message, args) {
		const apiPing = Math.round(message.client.ping); // This will round the api ping of the client
		const responseTime = Math.round(Date.now() - message.createdTimestamp); // This will round the
		// response time between when the message was received and when the message was sent
// You can display as
		const ping_embed = new Discord.MessageEmbed()
			.setColor(`${default_color}`)
			.setTitle('Pong!')
			.setDescription(`**API Ping:** \`${apiPing}\`\n**Response Time:** \`${responseTime}ms\``)

		message.reply(ping_embed);
	},
};


