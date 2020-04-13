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
    member.ban();
  }
  
}
