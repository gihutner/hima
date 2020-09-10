const Discord = require('discord.js');

module.exports = {
    name: 'application',
    description: '',
    execute(client, message, args) {
        const commands = message.content.split(' ')[0].substring(2);
        if((commands === "application") && (args.length > 0) && message.author.id === '660869780634468393') {

            const journal_entry = args.slice(1).join(' ');
            const the_users_name = message.mentions.users.first().username
            const the_users_id = message.mentions.users.first().id
            const the_users_discrim = message.mentions.users.first().discriminator
            const the_users_avatar = message.mentions.users.first().displayAvatarURL({ dynamic: true })

            const Enmap = require('enmap')
            const journal = new Enmap('applications')

            const currentEntryCount = journal.count


            journal.set(apps.count + 1, {
            })
            const d = new Date( timestamp );
            j_date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();

            const journals = new Discord.MessageEmbed()
            .setTitle(`${j_date} Entry`)
            .setDescription(journal_entry)
            .setColor('#36393f')

            message.delete()
            client.channels.cache.get('753663451901198386').send(journals)
        } else {
            return;
        }
    },
};