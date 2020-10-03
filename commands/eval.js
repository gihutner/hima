const Discord = require('discord.js');
const { ownerID } = require('../config.json');
const { inspect } = require('util');


module.exports = {
    name: 'ev',
    description: 'eval??',
    aliases: ['eval'],
    execute(client, message, args) {
        if (message.author.id !== ownerID) {
            const member = message.mentions.users.first() || message.author;

            message.reply(no_perms);
        } else {

            try {

            const evaluated = eval(toEval)

             message.channel.send(inspect(evaluated));
                console.log(inspect(evaluated));

        } catch (error) { 
            console.error(error); // log the error to console
            message.channel.send(error); // send a message in the channel stating there was an error
        }
    }
}
        };
