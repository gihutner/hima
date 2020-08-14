module.exports = {
	name: 'user-info',
	description: 'info about user',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};