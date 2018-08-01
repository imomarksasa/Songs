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



const Music = require('discord.js-musicbot-addon');
client.login(`NDczODQ0Nzc4MzYyOTk0Njg5.DkMbRQ.JZTiybCEG3qHh70f-aZOBeogXIQ`)
client.on('ready', ()=> {
    console.log('Ready!')
})
 Music.start(client, {
    prefix: "+", // البرفكس هنا
    youtubeKey: 'AIzaSyDIv8O9OwZdoTaghK3_SQmyGcQFzkXMW6E', //هنا ال yt v3 api key
    global: true, // يكون للسيرفرات ؟ خليه false, يكون queue مشترك خليه true            
    maxQueueSize: 50, // اقصى حجم لل queue        
    playCmd: 'play', // امر التشغيل
    volumeCmd: 'vol',     // امر الصوت
    thumbnailType: 'high',
    leaveCmd: 'stop',    // امر المغادرة
    anyoneCanSkip: true, // تبي الكل يقدر يسوي skip? true > yep, false > nope
    disableLoop: false, // تبي يكون فيه اعادة؟ , true > yep, false > nope
    searchCmd: 'search', //امر البحث 
    requesterName: true, 
    inlineEmbeds: false,     
    queueCmd: 'queue', // امر القائمة
    pauseCmd: 'pause', // امر الايقاف المؤقت
    resumeCmd: 'resume', // امر الاستمرار
    skipCmd: 'skip', // امر السكب
    loopCmd: 'loop', // امر الاعادة
    enableQueueStat: true,
  });

client.on('message', msg => {

    if (msg.content == '+ادخل') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
})

client.login(process.env.BOT_TOKEN);
