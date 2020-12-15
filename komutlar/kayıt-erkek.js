const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  

  
//------------------------------------KANALLAR-----------------------------------\\
const tag = "ゞ"; 
  
const kayıtlı = message.guild.roles.find(r => r.id === "775470185233776681"); // ERKEK
const unregister = message.guild.roles.find(r => r.id === "787391767007723572"); // UNREGİSTER
  
//------------------------------------KANALLAR-----------------------------------\\ 
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ 
  
  const log = message.guild.channels.find(c => c.id === "787405177958694922"); // KAYIT KANAL
  const genelchat = message.guild.channels.find(c => c.id === "787405177958694922"); // GENEL SOHBET
  if(!message.member.roles.array().filter(r => r.id === "775766156384272395")[0]) { // KAYIT YAPAN
    
//------------------------------------KANALLAR-----------------------------------\\ 
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\ 
    
    return message.channel.send("Kayıt Yapabilmek İçin `Kayıt Sorumlusu` Rolüne Sahip Değilsiniz.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const ms = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    ms.setNickname(`${tag} ${nick} | ${yas}`)
    ms.addRole(kayıtlı)
    ms.removeRole(unregister)
    ms.setNickname(`${tag} ${nick} | ${yas}`)
    ms.addRole(kayıtlı)
    ms.removeRole(unregister)
   
//------------------------------------------------ROL-VERME-----------------------------------------------\\
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`Kayıt Tamamlandı !`)
    .setDescription(`**Kayıt Eden: <@${message.author.id}>**\n\n**Verilen Roller: <@&${kayıtlı.id}>**\n\n**Yeni İsmin: \`${tag} ${nick} | ${yas}\`**`)
    .setColor("Black")
    log.send(embed)
    
        const agla = new Discord.RichEmbed()
        genelchat.send(`<@${ms.user.id}> Aramıza Hoş Geldin, Keyifli Vakitler Geçirmeni Dileriz.`)      

    
    const embed2 = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)     
    .setTitle(`Mosu Kayıt `) 
    .addField(`Kayıt Eden`,  `<@${message.author.id}>`, true)
    .addField(`Kayıt Edilen`,  `<@${ms.user.id}>`, true)
    .addField(`Yeni İsmi`,  `${tag} ${nick} | ${yas}`, true)
    .addField(`Verelin Roller`,  `<@&${kayıtlı.id}>`, true)
    .addField(`Kayıt Edilen Kanal`,  `${message.channel.name}`, true)
    .setTimestamp()
    .setFooter(`Mosu Code`)
    .setColor("Black")

    

//------------------------------------------------MESAJ-----------------------------------------------\\ 

  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e", "erkek", "boy"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
   