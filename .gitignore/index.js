const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const bot = new Discord.Client({disableEveryone: true})
const fs = require("fs");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

let cooldown = new Set()
let cdseconds = 5;

const adapter = new FileSync('database.json');
const db = low(adapter)

    db.defaults({ count_message: []}).write()

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")

  if(jsfile.length <= 0){
    console.log("Aucune commande trouvé !");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} chargé !`);
    bot.commands.set(props.help.name, props);

  });

});



bot.on("ready", async() => {
    console.log(bot.user.username + " a demarré !")
})

bot.on('message', message => {


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  
  var msgauthor = message.author.id;

  if(message.author.bot) return;

  if(!db.get("count_message").find({user: msgauthor}).value()) {
      db.get("count_message").push({user: msgauthor, count_message: 1}).write();
  } else {
      var usermsgdb = db.get("count_message").filter({user: msgauthor}).find('count_message').value();
      var usermsg = Object.values(usermsgdb)
      db.get("count_message").find({user: msgauthor}).assign({user: msgauthor, count_message: usermsg[1] += 1}).write();
  }

    if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)) {
        message.delete();
        return message.reply('attender 5 secondes pour refaire un commande !')
    }
  if(!message.member.hasPermission('ADMINISTRATOR')) {
      cooldown.add(message.author.id)

  }

  setTimeout(() =>  {
      cooldown.delete(message.author.id)
  }, cdseconds * 1000)
})


bot.login(process.env.TOKEN);
