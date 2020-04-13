const Discord = require('discord.js');
const ytdl = require('yt-dl')
module.exports = class moosic {
  constructor(){
    this.name = 'music',
    this.alias = ['tunes'],
    this.usage = '?music - Shows help for music commands'
  }
  async run(client, message) {
    const embed = new Discord.MessageEmbed()
    .setColor('#220f99')
    .setAuthor('SimonBot', client.user.displayAvatarURL())
    .setDescription(`?play {url or search} \n ?pause - pauses music \n ?skip - skips song after so many ppl vote unless you are mod or alone in vc \n ?search - shows 3 options based off search`)
    .setTimestamp()
    .setFooter('Made with <3 by Clumsy', client.user.displayAvatarURL());

    message.channel.send(embed)
  }
  async function(bot, message, connection, video, callback){
    if(!servers[message.guild.id]){
      servers[message.guild.id] = {
        queue: [],
      };
    }

    var server = servers[message.guild.id]

    async
  }

};
