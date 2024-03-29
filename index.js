const fs = require("fs");
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
// token and prefix taken from the config file, it doesn't go in index for reason, luv xx

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log(`i'm on beech!`);
    let memberCount = client.guilds.cache.get("747096663037837453").memberCount;
    client.user.setActivity(`the garden..and ${memberCount} members..`, {
        type: 3,
    });
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
        client.commands.get(commandName) ||
        client.commands.find(
            (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );
    const member = message.mentions.users.first() || message.author;

    if (!command) return;
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
        const command_error = new Discord.MessageEmbed().setDescription(
            "`I was running through meadows and fell on my face..`"
        );
        message.reply(command_error);
    }
});

client.login(token);
