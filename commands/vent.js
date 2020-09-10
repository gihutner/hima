const Discord = require('discord.js');

module.exports = {
    name: 'vent',
    description: 'vents',
    execute(client, message, args) {
        if((args.length > 0)) {

            const vent = args.slice(0).join(' ');

            const venti = new Discord.MessageEmbed()
            .setAuthor(message.author)
            .setDescription(vent)

            message.delete()
            client.channels.cache.get('749962821114134590').send(venti);
        }
    },
};