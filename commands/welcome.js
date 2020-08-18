const Discord = require('discord.js');
const { client } = require('../index.js');

client.on("guildMemberAdd", () => {
    client.channels.cache.get('709112115176276074').send('welcome!')
})