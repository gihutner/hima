const Discord = require('discord.js');

module.exports = {
    name: 'journal',
    description: 'egg journal',
    execute(client, message, args) {
        if((args.length > 0) && message.author.id === '660869780634468393') {

            const journal_entry = args.slice(0).join(' ');

            const d = new Date();
            j_date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();

            const journals = new Discord.MessageEmbed()
            .setTitle(`${j_date} Entry`)
            .setDescription(journal_entry)
            .setColor('#2f3137')

            message.delete()
            client.channels.cache.get('753663451901198386').send(journals)
        } else {
            
            message.reply()
        }
    },
};