const Discord = require('discord.js');

module.exports = {
	name: 'unban',
    description: 'unban someone beech',
    guildOnly: true,
	async execute(message, args, Client) {
        if (message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')) {

            let search = args.join(" ");
            if(!search) return message.channel.send("Please provide a valid ID or name.");
        
            try {
                let bans = await message.guild.fetchBans();
                let banned = bans.get(search) || bans.find(u => u.tag.toLowerCase().includes(search.toLowerCase()));
                
                if(!banned) return message.channel.send("I could not find a banned user by this ID or name.");
        
                await message.guild.unban(banned);
        
                message.channel.send(`${banned.tag} has been unbanned.`);
            } catch(e) {
                message.channel.send(`Unban failed: ${reason}`)
            }





        let unban_log = new Discord.MessageEmbed()
        .setColor('#FF9F9F')
        .setAuthor('𝐡𝐢𝐦𝐚𝐰𝐚𝐫𝐢 — ･ﾟ', `https://cdn.discordapp.com/attachments/726708672272531519/742047829006221373/hmawari.jpg`)
        .setTitle('Member Unbanned!')
        .setDescription(`${member.user} has been unabnned by ${message.author}.`)
        .addFields(
            { name: '**Reason**', value: `${reason}`}
        )
        .setTimestamp()

        Client.channels.cache.get('').send(unban_log);
        }

        if (!message.guild.members.cache.get(message.author.id).hasPermission("ADMINISTRATOR")) {
            const no_perms = new Discord.MessageEmbed()
.setColor('#FFFBC0')
.setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
.setTitle('**Oh no!** <a:notlikethis:740955629635502141>')
.setDescription('It seems like you don\'t have the correct permissions to use this command!')
            message.reply(no_perms);
        }
    },
};
