const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
// imports discord.js and imports the prefix and token from the config.json file
const { suggest } = require('../index.js')

module.exports = {
    name: 'suggest',
    description: 'a simple suggestion command',
    execute(message, args, client) {
        const commands = message.content.split(' ')[0].substring(2);
        console.log(message);
        if((commands === "suggest") && (args.length > 0)) {
            // if the command is suggest, and the arguments length is above zero..
            const { client } = require("../index.js");
            // import the client token from the index.js file

            const currentSuggestionCount = suggies.count

// add a new suggestion into the db

            suggest.set(suggest.count + 1, {
                user: {
                    id: message.author.id,
                    tag: message.author.tag
                },
                timestamp: new Date().getTime(),
                text: args.slice(1) // or whatever suggestion text it can save in the db
            })
            const suggest_emb = new Discord.MessageEmbed()
        .setColor('#DAA8FF')
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
        .setTitle(`Suggestion #${currentSuggestionCount+1}`)
        .setDescription(args.join(" "))
        .setFooter(`User ID: ${message.author.id}`, `https://cdn.discordapp.com/avatars/697195772919414884/734abe1afbb98ad3f140fcff8da84416.png`)
        .setTimestamp(new Date().getTime())
        // create an embed..
        client.channels.cache.get('726755017624911912').send(suggest_emb).then(function (message) {
            message.react("734251892938506310");
            message.react("734251901477978145");
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