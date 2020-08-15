const Discord = require('discord.js');
const kitty = new Discord.MessageEmbed()
.setColor('#2f3137')
.setTitle(`⋆—◟ Here comes __Kitty__! :cloud: . . . ˃̵ᴗ˂̵`)
.addFields(
    { name: '━━┅━━━━━━┅━━', value: '**Stats**'},
    { name: '<a:luckyheart:740109054046765086>`HP:`', value: '▌ ▌ ▌ ▌ ▌ ▌| 60%' },
    { name: '`Relationships:`', value: '> ・*__Owner__*: 100% \n > ・*__Egg__*: 98% \n > ・*__Cari__*: 99%', inline: true },
    { name: '`Feeling:`', value: 'Quiet.' },
    { name: '━━┅━━━━━━┅━━', value: '**Inventory**'},
    { name: '`Equipped:`', value: '・Catnip'},
    { name: '`Items:`', value: '・Toy Mouse \n ・*50* Cat Snacks'}
)
.setThumbnail('https://cdn.discordapp.com/attachments/675955398540263424/740107278929231912/image0.jpg')

module.exports = {
    name: 'pe',
    description: 'the pet embeds',
    execute(message, args) {
        if (args.length) {
            if (args[0] === 'kitty') {
                message.channel.send(kitty);
            } 
        } else {
            let errormessage = `\nYou didn\'t put enough valid arguments, use the command: \`:pets [pet name]\`.`;
            return message.channel.send(errormessage);
        } 
    },
    
};