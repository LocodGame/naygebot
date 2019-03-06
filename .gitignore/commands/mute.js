const Discord = require("discord.js");

const ms = require("ms");



module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let args1 = message.content.trim().split(/ +/g) 
  let argu1 = args1[1]
  let argu2 = args1[3]
  if(!argu1) return message.reply("merci de mettre la mention du joueur !");
  if(!tomute) return message.channel.send(argu1 + " est introuvable ! Merci de mettre son pseudo en mention !");
  if (tomute.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.reply("vous ne pouvez pas mute ce membre !")
  if (tomute.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || tomute.id === message.guild.ownerID) return message.reply("Je ne peux pas mute ce membre !")
  let muterole = message.guild.roles.find(`name`, "muted");
  if(!muterole){

    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
         SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });

    }catch(e){
      console.log(e.stack);
    }

  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("Vous n'avez pas spécifié de durée !");
  await(tomute.addRole(muterole.id));
  tomute.removeRole("547094967684825088");
  if(!argu2) argu2 = "Aucun motif déclarer !"
  message.reply(`<@${tomute.id}> a bien été muté pour encore ${ms(ms(mutetime))} et pour motif : ` + argu2);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    tomute.addRole("547094967684825088");
    message.channel.send(`<@${tomute.id}> a été unmute !`);
  }, ms(mutetime));


}

module.exports.help = {

  name: "tempmute"

}