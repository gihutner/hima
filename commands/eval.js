const Discord = require("discord.js");
const { ownerID } = require("../config.json");
const { inspect } = require("util");

module.exports = {
  name: "ev",
  description: "eval??",
  aliases: ["eval"],
  execute(client, message, args) {
    if (message.author.id !== ownerID) {
      message.reply(no_perms);
    } else {
      try {
        const toEval = args.join(" ");
        const evaluated = eval(toEval);

        message.channel.send(inspect(evaluated), { code: "css" });
        console.log(inspect(evaluated));
      } catch (error) {
        // if trying failed, do the following instead (if you catch an error):
        console.error(error); // log the error to console
        message.channel.send(error, { code: "css" }); // send a message in the channel stating there was an error
      }
    }
  },
};
