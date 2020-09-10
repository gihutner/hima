const Discord = require('discord.js');

module.exports = {
    name: 'journal',
    description: 'egg journal',
    execute(client, message, args) {
        if((args.length > 0) && message.author.id === '660869780634468393') {

            const journal_entry = args.slice(1).join(' ');

            const d = new Date( timestamp );
            j_date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();

            const journals = new Discord.MessageEmbed()
            .setTitle(`${j_date} Entry`)
            .setDescription(journal_entry)
            .setColor('#36393f')

            message.delete()
            client.channels.cache.get('753663451901198386').send(journals)
        } else {
            return 'hello'
        }
    },
};