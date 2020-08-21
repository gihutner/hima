/*

const Discord = require('discord.js');
const { client } = require('../index.js');

module.exports = {
    name: 'addautoresponder',
    execute(message, args) {

        const { autoresponders } = client;

        const splitArgs = args.join(" ").split("|")
        const trigger = splitArgs[0].trim()
        const response = splitArgs.slice(1).join(" ").trim()

        const existsAlready = autoresponders.get(trigger)

        if(existsAlready){

            return message.reply(`it exists alweady dumi`)

        }

        autoresponders.set(trigger.toLowerCase(), {
            trigger,
            response
        })

        return message.reply(`okie done`)
    }
}
*/