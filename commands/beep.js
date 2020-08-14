module.exports = {
	name: 'beep',
	description: 'Boop!',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};