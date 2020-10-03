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
  
            const code = args.join(" ");
            let evali = eval(code);
            

        const evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {code:"xl"});
                console.log(clean(evaled));
            // also send the same output to console. You don't have to do this but you could keep it this way if you keep console open cause eval can get lengthy and sometimes not
            // go through as channel message(message may have max. 2000 characters, console has no limit)

        } catch (error) { // if trying failed, do the following instead (if you catch an error):
            console.error(error); // log the error to console
            message.channel.send(error); // send a message in the channel stating there was an error
        }
    }
}
        };
