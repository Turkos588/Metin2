const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*!*";

client.login("NTA4ODAwMjUyMTQ1MzAzNTcz.DsEhgw.ojfqeFePs3I3C-HThRhQ9I62Je8");

client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setActivity("Bot World War");
});

client.on('message', message => {

    if(message.content === 'Hello WorldWar'){
        message.reply('Salutation au STAFF./Greetings to the STAFF.');
        console.log('Le bot dit bonjour/The bot says hello');
    } 

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Voici donc de quoi je suis capable de faire./So here's what I'm able to do. :cyclone: ")
        .setThumbnail(message.author.avatarURL)
        .setDescription("__***Je suis le BOT de WorldWarMT2 !/I am the BOT of WorldWarMT2 !***__")
        .addField("Faite !aide pour voir les commandes./Type !aide to display the commands.", "__***Pour voir les commandes !/To View Orders !***__")
        .addField("Bonjour/Bonsoir Membre de World War/Hello Member of World War", "__***Le bot vous répond !/The bot answers you !***__")
        .addField("Taper !infos donne les informations du Discord :ok_hand: ", "__***Donne des Infos a propos du serveur WorldWar.***__")
        .addField("Taper !kick pour exclure un Utilisateur :ok_hand: ", "__***Kick l'utilisateur***__")
        .addField("Taper !ban pour bannir un Utilisateur :ok_hand: " , "__***Ban l'utilisateur***__")
        .addField("Taper !clear pour supprimés des messages :ok_hand: ", "__***Supprime le nombre de message indiqué***__")
        .addField("Taper !mute pour muté un utilisateur :ok_hand: ", "__***Mute la personne en question***__")
        .addField("Taper !unmute pour démuté l'utilisateur :ok_hand: ", "__***Démute la personne en question***__")
        .setFooter("Menu d'aide/Help menu, EditBy [STAFF]Kaneki")
        message.channel.sendMessage(help_embed);
        console.log("Une personne a effectué la commande d'aide./A person used the help commands.")
    }

    if(message.content === prefix +"infos") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#669933")
        .setTitle("Voici les infos sur moi et le serveur !")
        .addField(" :robot: Nom :", `__***${client.user.tag}***__`, true)
        .addField("Descriminateur du bot :hash:", `__***#${client.user.discriminator}***__`)
        .addField("ID client :id: ", `__***${client.user.id}***__`)
        .addField("Nombre de membres :100: ", message.guild.members.size)
        .addField("Nombre de catégories et de salons :100: ", message.guild.channels.size)
        .setFooter("Informations - WorldWar/Edit By[STAFF]Kaneki")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande d'infos !")
    }

    if(message.content === prefix +"worldwar") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#000066")
        .setTitle("__***Salut à tous et bienvenu sur WorldWarMT2 !***__")
        .addField("Taper !aide pour voir toutes les commandes possible :ok_hand: ", "__***Voir toutes les commandes***__")
        .addField("Venez découvrire le Discord de WorldWarMT2", "__***Le serveur sera ON en fin d'année***__")
        .setFooter("**Informations - WorldWar/Edit By[STAFF]Kaneki**")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué une commande")
    }

    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.sendEmbed("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("__***Vous devez mentionner un utilisateur ! :ok_hand:***__")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("__***Je ne sais pas si l'utilisateur existe. :thinking:***__")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }

        kick.kick().then(member => {
            message.channel.send(`__***${member.user.username} a étais Kick par ${meesage.author.username} !***__`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permissions !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("__***Vous devez mentionner un utilisateur :ok_hand: !***__");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.content.sen("Je n'ai pas la permission pour ban");
        }
        ban.ban().then(member => {
            message.channel.send(`__***${member.user.username} a étais Ban par ${message.author.username} !***__`)
        }

        )

    }

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("**Vous n'avez pas la permission !**");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("**Tu doit préciser un nombre de message à supprimer !**")
        message.channel.bulkDelete(args[0]).then(() => { 
            message.channel.send(`__***${args[0]} message ont été supprimés !***__`);
        })
    }
    
    if (message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('__***Vous devez mentionner un utilisateur :ok_hand: !***__');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'est pas trouvé l'utilisateur ou il n'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: false}).then(member => {
            message.channel.send(`__***${mute.user.username} est mute !***__`);
        })
    }

    if (message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('__***Vous devez mentionner un utilisateur :ok_hand: ! ***__');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("**Je n'est pas trouvé l'utilisateur ou il n'existe pas !**");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("**Je n'ai pas la permission !**");
        message.channel.overwritePermissions(mute, { SEND_MESSAGE: true}).then(member => {
            message.channel.send(`__***${mute.user.username} n'est plus mute !***__`);
        })
    }
  
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) { 
        case "stats":
        
        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#FF0000")
        .setTitle(`__Statisque du joueur : ${message.author.username}__`)
        .addField(`__ID de l'utilisateur :id:__`, msgauthor, true)
        .addField("**Date de création de l'utilisateur :**", userCreateDate[1] + ' ' + userCreateDate[2] + ' '+ userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("__***Tu peut regardé t'es message privé, tu a reçu tes stats./You can check your private message, you got your stats.***__")
        message.author.send({embed: stats_embed});
        break;
    }

});
