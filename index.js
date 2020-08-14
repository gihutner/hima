const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ping Pong Bot Loaded!');
});

client.on('message', message => {
	if (message.content === 'Ping') {
		message.channel.send('Pong!');
	}
});

client.login('Njk3MTk1NzcyOTE5NDE0ODg0.XozwKQ.5w2TAeew4YV3MHLJwzzTvK2LYrU');