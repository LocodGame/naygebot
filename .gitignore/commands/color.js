const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !")

    let args1 = message.content.trim().split(/ +/g)

    let argu = args1[1]



    if(!argu) return message.channel.send("Cette couleur n'est pas dans mon registre mais vous pouver avoir votre couleur personnalisé sur https://htmlcolorcodes.com/fr/ !")



    if (args1[1].toLowerCase() === "rouge") {

        message.channel.send("Le code couleur de la couleur rouge est : **ff3333**")

    } else if (args1[1].toLowerCase() === "aqua") {

        message.channel.send("Le code couleur de la couleur aqua est : **339cff**")

    }else if (args1[1].toLowerCase() === "vert") {

        message.channel.send("Le code couleur de la couleur vert est : **83ff33**")

    }else if (args1[1].toLowerCase() === "rose") {

        message.channel.send("Le code couleur de la couleur rose est : **ff33f0**")

    }else if (args1[1].toLowerCase() === "bleu") {

        message.channel.send("Le code couleur de la couleur bleu est : **1e49de**")

    }else if (args1[1].toLowerCase() === "orange") {

        message.channel.send("Le code couleur de la couleur orange est : **fb980a**")

    }else if (args1[1].toLowerCase() === "blanc") {

        message.channel.send("Le code couleur de la couleur blanc est : **ffffff**")

    }else if (args1[1].toLowerCase() === "noir") {

        message.channel.send("Le code couleur de la couleur noir est : **000000**")

    }else if (args1[1].toLowerCase() === "gris") {

        message.channel.send("Le code couleur de la couleur gris est : **8a8a8a**")

    } else {

        message.channel.send("Cette couleur n'est pas dans mon registre mais vous pouver avoir votre couleur personnalisé sur https://htmlcolorcodes.com/fr/ !")

    }
}

module.exports.help = {

  name: "color"

}