const Discord = require('discord.js');

module.exports = class avatar {
    constructor(){
            this.name = 'avatar',
            this.alias = ['avi'],
            this.usage = '?avatar - shows your avatar'
    }

    async run(client, message, args) {
      if(message.mentions.users.first()) {
        const mentioned = message.mentions.users.first()
        const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#220f99')
        .setAuthor('SimonBot', client.user.displayAvatarURL())
        .setDescription(`This is ${mentioned}'s avatar. Look p cool <3`)
        .setImage(mentioned.displayAvatarURL())
        .setTimestamp()
        .setFooter('Made with <3 by Clumsy', client.user.displayAvatarURL());

        message.channel.send(avatarEmbed);
      }else {
        const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#220f99')
        .setAuthor('SimonBot', client.user.displayAvatarURL())
        .setDescription('This is your avatar. Look p cool <3')
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter('Made with <3 by Clumsy', client.user.displayAvatarURL());

        message.channel.send(avatarEmbed);
      }

    }
}
