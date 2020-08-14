const Discord = require('discord.js');
const { ownerID, prefix } = require('../config.json');

module.exports = {
    name: 'reload',
    description: 'reloads a command',
    execute(message, args) {
        if (message.author.id !== ownerID) {
            const user = message.mentions.users.first() || message.author;

            const no_perms = new Discord.MessageEmbed()
            .setColor('#FFFBC0')
            .setAuthor(`${user.username}#${message.author.discriminator}`, `${user.displayAvatarURL()}`)
            .setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
            .setDescription('It seems like you don\'t have the correct permissions to use this command!')

            message.reply(no_perms);

        } else {
        console.log(message.client.commands)

        const commandName = args[0].toLowerCase();

        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            const no_command = new Discord.MessageEmbed()
            .setDescription(`There is no such command with the name or alias \`${commandName}\`, ${message.author}.`)
        if (!command) return message.channel.send(no_command);

        delete require.cache[require.resolve(`./${commandName}.js`)];

        try {
            const newCommand = require(`./${commandName}.js`);

            message.client.commands.set(newCommand.name, newCommand);

            message.channel.send(`\The command \`${command.name}\` was reloaded, dummy`);
        } catch(error) {
            console.log(error)
            message.channel.send(`\`${error}\``);

            message.channel.send(`There was an error while reloading command \`${command.name}\`:\n\`${error.message}\``);
        }
        }
    }
};