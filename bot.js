const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "+";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});



client.on('message', async message => {
    if(message.content.startsWith(prefix + "bcall")) {
      let i = client.users.size;
      if(message.author.id !== '411255565499629579') return message.channel.send(':negative_squared_cross_mark: » هذا الأمر مخصص لصاحب البوت فقط');
      var args = message.content.split(' ').slice(1).join(' ');
      if(!args) return message.channel.send(':negative_squared_cross_mark: » يجب عليك كتابة الرسالة')
      setTimeout(() => {
        message.channel.send(تم الارسال لـ ${i} شخص)
      }, client.users.size * 500);
      client.users.forEach(s => {
        s.send(args).catch(e => i--);
      });
    }
    });


client.login(process.env.BOT_TOKEN);
