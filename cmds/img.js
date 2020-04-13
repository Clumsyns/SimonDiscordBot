const Discord = require('discord.js');

module.exports = class img {
    constructor(){
            this.name = 'img',
            this.alias = ['image'],
            this.usage = '?img'
    }

    async run(client, message) {
      var gis = require('g-i-s');
      const filter = (reaction, user) => user.id === message.author.id &&(reaction.emoji.name === '⬅' || reaction.emoji.name === '➡');
      let page = 0
      let reactionTrigger = 0;
      let search = message.content.substring(message.content.indexOf(' ') + 1, message.content.length) || null;
      if(!search){
        return message.channel.send('You need to type something to seach for this command to work')
      };
      async function reactionCatcher(msg){
        var clearReactions = setTimeout(function(){
          msg.clearReactions();
        }, 60000)
        msg.awaitReactions(filter, {max: 1, time: 60000}).then(collected => {
          if(collected){
            if(collected.first().emoji.name === '➡'){
              page++
              clearTimeout(clearReactions);
              msg.clearReactions()
              updateImg(msg);
            }
            if(collected.first().emoji.name === '⬅'){
              page--
              clearTimeout(clearReactions);
              msg.clearReactions()
              updateImg(msg);
            }
          }
        });
      };
        async function generateReactions(msg){
          if(page+1 > 1 && page+1 <100){
            msg.react('⬅');
            setTimeout(function(){
              msg.react('➡');
            }, 750)
          } else if (page == 0) {
              msg.react('➡');
          } else if (page+1 == 100) {
              msg.react('⬅');
          }
          if(reactionTrigger !== 0){
              reactionCatcher(msg)
          }
        };

        async function updateImg(msg) {
          gis(search, logResults);
          function logResults(error, results) {
            if (error) {
              console.log(error)
            }
            else {
              if(msg == null) {
                var embed = new Discord.MessageEmbed()
                .setColor('#220f99')
                .setAuthor(`${search} - ${page+1}/${results.length} results`)
                .setImage(results[page].url)
                .setTimestamp()
                .setFooter('Made with <3 by Clumsy', client.user.displayAvatarURL());
                message.channel.send(embed).then(msg => {
                  generateReactions(msg);
                  reactionCatcher(msg);
                });
              } else {
                var embed = new Discord.MessageEmbed()
                .setColor('#220f99')
                .setAuthor(`${search} - ${page+1}/${results.length} results`)
                .setImage(results[page].url)
                .setTimestamp()
                .setFooter('Made with <3 by Clumsy', client.user.displayAvatarURL());
                msg.edit(embed)
                setTimeout(function() {
                  generateReactions(msg)
                  reactionCatcher(msg)
                }, 300)

              }
            }

            }
          }
          updateImg(null);
        }
      };

//Thx for help soos pretty much copied all the functions will likely redo this later on but thank <3
