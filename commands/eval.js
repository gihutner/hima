const Discord = require('discord.js');
const { ownerID } = require('../config.json');
const { inspect } = require('util');


module.exports = {
    name: 'ev',
    description: 'eval??',
    aliases: ['eval'],
    async execute(message, args) {
        if (message.author.id !== ownerID) {
            const user = message.mentions.users.first() || message.author;

const no_perms = new Discord.MessageEmbed()
.setColor('#FFFBC0')
.setAuthor(`${user.username}#${message.author.discriminator}`, `${user.displayAvatarURL()}`)
.setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
.setDescription('It seems like you don\'t have the correct permissions to use this command!')
            message.reply(no_perms);
        } else {

        let evaled; // create an evaled variable
        try { // try to do the following:
            evaled = await eval(args.join(' '));
            // wait for the eval function to execute the code. This is done within the base of javascript. As parameter, we pass through all arguments and paste them together with a space.
            // So "test 1 2 3" will be pasted in like it should, as args is an array(["test", "1", "2", "3"]), it'll become "test 1 2 3", get it? Awesome

            message.channel.send(inspect(evaled));
            // send the output of the evaluation in the channel through the inspect function built into the utils.
            // More about the function here cause it's lengthy: https://nodejs.org/api/util.html#util_util_inspect_object_options

            console.log(inspect(evaled));
            // also send the same output to console. You don't have to do this but you could keep it this way if you keep console open cause eval can get lengthy and sometimes not
            // go through as channel message(message may have max. 2000 characters, console has no limit)

        } catch (error) { // if trying failed, do the following instead (if you catch an error):
            console.error(error); // log the error to console
            message.reply('there was an error during evaluation.'); // send a message in the channel stating there was an error
        }
    }
}
        };
