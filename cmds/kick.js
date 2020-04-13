const Discord = require('discord.js')
module.exports = class kick {
    constructor(){
            this.name = 'kick',
            this.alias = ['kick'],
            this.usage = '?kick {@user} {reason}'
    }

    async run(client, message, args) {
      var mentioned = message.mentions.users.first();
      var member = message.guild.member(mentioned);
      const kickEmbed = new Discord.MessageEmbed()
      .setColor('#220f99')
      .setAuthor('SimonBot', client.user.displayAvatarURL())
      .setDescription(`${mentioned} has been kicked.`)
      .setImage('https://i.makeagif.com/media/6-24-2015/t7ppez.gif')
      .setTimestamp()
      .setFooter('Made with <3 by Clumsy', client.user.displayAvatarURL());

      message.channel.send(kickEmbed);
      member.kick()
    } catch(eek){
      console.log(eek)
    }

}
