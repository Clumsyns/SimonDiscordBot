const Discord = require('discord.js')
module.exports = class ban {

  constructor(){
    this.name = 'ban',
    this.alias = ['ban'],
    this.usage = '?ban {@user} {reason}'
  }

  async run(client, message, args) {
    var mentioned = message.mentions.users.first();
    var member = message.guild.member(mentioned);

    const banEmbed = new Discord.MessageEmbed()
    .setColor('#220f99')
    .setAuthor('SimonBot', client.user.displayAvatarURL())
    .setDescription(`${mentioned} has been banned.`)
    .setImage('https://media3.giphy.com/media/MEw0inp5gAlzO/source.gif')
    .setTimestamp()
    .setFooter('Made with <3 by Clumsy', client.user.displayAvatarURL());

    message.channel.send(banEmbed);

    member.ban();
  }

}
