const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const Enmap = require('enmap');
const suggest = new Enmap('suggestions');
const mod_cases = new Enmap('mod cases');
const currentModCaseCount = mod_cases.count

mod_cases.set(mod_cases.count + 1, {
})

client.autoresponders = new Enmap ("autoresponders")
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

module.exports = { client }

const cooldowns = new Discord.Collection();

client.once('ready', async () => {
	console.log('i\'m on beech!');
	client.user.setActivity(`too busy being eggu\'s favorite bot!`)
	await suggest.defer;
	await mod_cases.defer;
	// this loads up enmap to real time cache
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	/**
	 * @param client {import('disocrd.js').Client}
	 * @param message {import('discord.js').Message}
	 **/

	const ar = client.autoresponders.get(message.content.toLowerCase())

	if(ar){
		message.channel.send(ar.response)
	}

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (message.channel.type == "dm") return;

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}
	/**
	 * @param client {import('discord.js').Client}
	 * @param message {import('discord.js').Message}
	 * @param args {array<string>}
	 * @returns {void}
	 **/

	const { autoresponders } = client;

	const splitArgs = args.join(" ").split("|")
	const trigger = splitArgs[0].trim()
	const response = splitArgs.slice(1).join(" ").trim()

	const existsAlready = autoresponders.get(trigger)

	if(existsAlready){

		return message.reply(`trigger oredi exists :naniok:`)

	}

	autoresponders.set(trigger.toLowerCase(), {
		trigger,
		response
	})

	return message.reply(`k done dumbo`)

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;


	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});




// app token to log into discord
client.login('Njk3MTk1NzcyOTE5NDE0ODg0.XozwKQ.5w2TAeew4YV3MHLJwzzTvK2LYrU');