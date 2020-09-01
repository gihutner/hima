const Discord = require('discord.js');


module.exports = {
    name: 'suggest',
    description: 'a simple suggestion command',
    execute(client, message, args) {
        const commands = message.content.split(' ')[0].substring(2);
        if((args.length > 0)) {
            // if the arguments length is above zero..
            const Enmap = require('enmap')
            const suggies = new Enmap('suggestions')
            const currentSuggestionCount = suggies.count

// add a new suggestion into the db

            suggies.set(suggies.count, {

            })

// then your new suggestion # could be currentSuggestionCount+1 and you can send it to your bootiful chnaannananel
            const suggest_emb = new Discord.MessageEmbed()
                .setColor('#DAA8FF')
                .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
                .setTitle(`Suggestion #${currentSuggestionCount}`)
                .setDescription(args.join(" "))
                .setFooter(`User ID: ${message.author.id}`, `https://cdn.discordapp.com/avatars/697195772919414884/734abe1afbb98ad3f140fcff8da84416.png`)
                .setTimestamp(new Date().getTime())
            // create an embed..
            client.channels.cache.get('750186609801953321').send(suggest_emb).then(function (message) {
                message.react("747154437067374672");
                message.react("747196418917269545");
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
            .setDescription("That was the incorrect usage. Try `;suggest [suggestion]`.")
            message.reply(wrong_suggest);
        }
        // if there are no arguments send the correct way to the same channel the user sent the message..

}
};