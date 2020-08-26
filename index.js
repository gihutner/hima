const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const Enmap = require('enmap');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', async () => {
	console.log('i\'m on beech!');
	client.user.setActivity(`too busy being eggu's favorite bot!`)
});

client.on('message', message => {
})
// app token to log into discord
client.login(token);