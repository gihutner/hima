const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
// imports discord.js and imports the prefix and token from the config.json file


module.exports = {
    name: 'suggest',
    description: 'a simple suggestion command',
    execute(message, args, client) {
        const commands = message.content.split(' ')[0].substring(2);
        console.log(message);
        if((args.length > 0)) {
            // if the arguments length is above zero..
            const {client} = require("../index.js");
            // import the client token from the index.js file
            const Enmap = require('enmap')
            const suggies = new Enmap('suggestions')

            const currentSuggestionCount = suggies.count

// add a new suggestion into the db

            suggies.set(suggies.count + 1, {

            })

// then your new suggestion # could be currentSuggestionCount+1 and you can send it to your bootiful chnaannananel
            const suggest_emb = new Discord.MessageEmbed()
                .setColor('#DAA8FF')
                .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
                .setTitle(`Suggestion #${currentSuggestionCount + 1}`)
                .setDescription(args.join(" "))
                .setFooter(`User ID: ${message.author.id}`, `https://cdn.discordapp.com/avatars/697195772919414884/734abe1afbb98ad3f140fcff8da84416.png`)
                .setTimestamp(new Date().getTime())
            // create an embed..
            client.channels.cache.get('750186609801953321').send(suggest_emb).then(function (message) {
                message.react("750365998326218892");
                message.react("750366022996852807");
                /* get the channel with an ID of 709450782096883725, and send the suggest embed.
                AFTER it is sent, react with the two emotes.

                REMEMBER: you only need the emote IDs. not the full <:a:name:ID> thing.
                */

            }).catch(function () {
                return "blah blah";
            });

            // catch the function
        } else {
            const wrong_suggest = new Discord.MessageEmbed()
            .setDescription(`That was the incorrect usage. Try \`h.suggest [suggestion]\`.`)
            message.reply(wrong_suggest);
        }
        // if there are no arguments send the correct way to the same channel the user sent the message..

}
};