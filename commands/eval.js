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

            try {


            const toEval = args.join(" ")
            const evaluated = eval(toEval)

            let embed = new Discord.MessageEmbed()
                .setColor('#FFFEC8')
                .setTimestamp()
                .setDescription(inspect(evaluated))

            await message.channel.send();
                let js;
                console.log(inspect(evaluated), { code: js });
            // also send the same output to console. You don't have to do this but you could keep it this way if you keep console open cause eval can get lengthy and sometimes not
            // go through as channel message(message may have max. 2000 characters, console has no limit)

        } catch (error) { // if trying failed, do the following instead (if you catch an error):
            console.error(error); // log the error to console
                let embed = new Discord.MessageEmbed()
                    .setColor("#FFFEC8")
                    .setDescription(error)

                await message.channel.send(embed); // send a message in the channel stating there was an error
        }
    }
}
        };
