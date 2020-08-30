const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(client, message, args) {
		const response_latency = Date.now() - message.createdTimestamp + "ms"
		const api_latency = Math.round(client.ws.ping) + "ms"
		const p_embed = new Discord.MessageEmbed()
			.setColor('#FFFEC8')
			.setTitle(`Don't ping me!`)
		const ping_embed = new Discord.MessageEmbed()
			.setColor(`#FFFEC8`)
			.setTitle('Pong!')
			.setDescription(`・ **Response** Latency is: **${response_latency}** \n ・ **API** Latency is: **${api_latency}**`)

		message.channel.send(p_embed)
			.then((msg) => {
				setTimeout(function(){
					msg.edit(ping_embed);
				}, 100)})
	},

};



