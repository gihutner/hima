const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', async () => {
	console.log('i\'m on beech!');
	client.user.setActivity(`too busy being eggu's favorite bot!`)
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}

const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();
console.log(command)
if (command === 'ping') {
	message.channel.send('pong');
}
})

client.login(token);