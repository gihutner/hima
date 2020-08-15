module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
	execute(message, args) {
		const apiPing = Math.round(message.client.ping); // This will round the api ping of the client
		const responseTime = Math.round(Date.now() - message.createdTimestamp); // This will round the// response time between when the message was received and when the message was sent

// You can display as
		message.channel.send(`**API Ping:** \`${apiPing}\`\n**Response Time:** \`${responseTime}ms\``)
	},
};


