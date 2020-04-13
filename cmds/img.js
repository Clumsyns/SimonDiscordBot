const Discord = require('discord.js');

<<<<<<< HEAD
module.exports = class img {
=======
module.exports = class gis {
>>>>>>> 027f4b3dfac76bbd7c87f727d0f930542b9cef26
    constructor(){
            this.name = 'img',
            this.alias = ['image'],
            this.usage = '?img'
    }

<<<<<<< HEAD
    async run(client, message) {
      var gis = require('g-i-s');
      const filter = (reaction, user) => user.id === message.author.id &&(reaction.emoji.name === '⬅' || reaction.emoji.name === '➡');
=======
    async run(client, message, args) {
      var gis = require('g-i-s');
      const filter = (reaction, user) => user.id === message.author.id &&(reaction.emoji.name) === '⬅' || reaction.emoji.name === '➡');
>>>>>>> 027f4b3dfac76bbd7c87f727d0f930542b9cef26
      let page = 0
      let reactionTrigger = 0;
      let search = message.content.substring(message.content.indexOf(' ') + 1, message.content.length) || null;
      if(!search){
        return message.channel.send('You need to type something to seach for this command to work')
<<<<<<< HEAD
      };
      async function reactionCatcher(msg){
=======
      }
      async funtion reactionCatcher(msg){
>>>>>>> 027f4b3dfac76bbd7c87f727d0f930542b9cef26
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
<<<<<<< HEAD
      };

      async function generateReactions(msg){
=======

        async function generateReactions(msg){
>>>>>>> 027f4b3dfac76bbd7c87f727d0f930542b9cef26
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
<<<<<<< HEAD
        };

      async function updateImg(msg) {
=======
        }

        async function updateImg(msg) {
>>>>>>> 027f4b3dfac76bbd7c87f727d0f930542b9cef26
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
<<<<<<< HEAD
          };
        updateImg(null);
    }
};

=======
          }
        }
        updateImg(null);
      }
}
>>>>>>> 027f4b3dfac76bbd7c87f727d0f930542b9cef26
//Thx for help soos pretty much copied all the functions will likely redo this later on but thank <3
