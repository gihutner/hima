const Discord = require('discord.js');
const { client } = require('../index.js');

client.on("guildMemberAdd", (message, member) => {
    client.channels.cache.get('709112115176276074').send('welcome!')
})