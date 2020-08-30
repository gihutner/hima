const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', async () => {
	console.log('i\'m on beech!');
	client.user.setActivity(`too busy being eggu's favorite bot!`)
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') {
		return;
	}
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command = client.commands.get(commandName)
			|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		try {
			command.execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}
	});
const member = message.mentions.users.first() || message.author;
const no_perms = new Discord.MessageEmbed()
	.setColor('#FFFBC0')
	.setAuthor(`${member.username}#${message.author.discriminator}`, `${member.displayAvatarURL()}`)
	.setTitle('**Oh no!** <a:a_nonon:749435233354514516>')
	.setDescription('It seems like you don\'t have the correct permissions to use this command!')

client.login(token);