const Discord = require("discord.js");
const { prefix, token } = require("../config.json");

module.exports = {
    name: "application",
    description: "",
    execute(client, message, args) {
        const commands = message.content.split(" ")[0].substring(2);
        if (
            commands === "application" &&
            args.length > 0 &&
            message.guild.members.cache
                .get(message.author.id)
                .hasPermission("ADMINISTRATOR")
        ) {
            const { client } = require("../index.js");

            const application_info = args.slice(1).join(" ");
            const the_users_name = message.mentions.users.first().username;
            const the_users_id = message.mentions.users.first().id;
            const the_users_discrim = message.mentions.users.first()
                .discriminator;
            const the_users_avatar = message.mentions.users
                .first()
                .displayAvatarURL({ dynamic: true });

            const Enmap = require("enmap");
            const apps = new Enmap("applications");

            const currentApplicationCount = apps.count;

            apps.set(apps.count + 1, {});

            const application_emb = new Discord.MessageEmbed()
                .setAuthor(
                    `${the_users_name}#${the_users_discrim}`,
                    `${the_users_avatar}`
                )
                .setTitle(`Application #${currentApplicationCount}`)
                .setColor(`#2f3137`)
                .setDescription(`${application_info}`)
                .setFooter(`User ID: ${the_users_id}`)
                .setTimestamp();

            client.channels.cache
                .get("742603951995879533")
                .send(application_emb);
        } else {
            const wrong_application = new Discord.MessageEmbed().setDescription(
                `That was the incorrect usage. Try \`;application [application info]\`.`
            );
            message.reply(wrong_application);
        }
    },
};
