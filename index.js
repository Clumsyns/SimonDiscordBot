const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings/token.json');
const fs = require('fs');
const { CommandHandler } = require('djs-commands');
const CH = new CommandHandler({
  folder: __dirname + '/cmds/',
  prefix: ['?']
});

client.on('ready', () => {
  console.log(`${client.user.tag} is now online and running!`);
});

// client.on('guildMemberAdd', member => {
//   const channel = member.guild.channels.cache.find(ch => ch.name === 'Welcome');
//   if(!channel) {
//     member.guild.id.createChannel('Welcome', {type: 'text'});
//   }
//   channel.send(`Welcome to ${member.guild.name} ${member.name}, Enjoy your stay!`)
// })

client.on('message', (message) => {
  if(message.channel.type == 'dm') return;
  if(message.author.type == 'bot') return;
  let args = message.content.split(" ");
  let command = args[0];
  let cmd = CH.getCommand(command);
  if(!cmd) return;

  try{
    cmd.run(client, message, args)
  }catch(eek){
    console.log(eek)
  };
});

client.login(token.token);
