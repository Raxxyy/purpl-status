const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const token = "mfa.2k7h_qYxeW9QfWCvRmlfKom6io4rvXa3hNkkCQqJ-SKBpl0kzF658sEAAzvJOvF8Wm7Y-Dnt0Asqwb7jnXhz";

client.on('ready', () => {
  console.log(`Selfbot started on user ${client.user.tag}!`);
  console.log(`The prefix is: ${prefix}`);
});

client.on('message', async message => {
  const args = message.content.split(' ').slice(1)
  if(message.author.id != client.user.id) return;
  if(message.content.startsWith(`${prefix}playing`)) {
    message.delete();
    client.user.setActivity(args.join(' '));
  } else if(message.content.startsWith(`${prefix}watching`)) {
    message.delete();
    client.user.setActivity(args.join(' '), { type: 'WATCHING'});
  } else if(message.content.startsWith(`${prefix}listening`)) {
    message.delete();
    client.user.setActivity(args.join(' '), { type: 'LISTENING'});
  } else if(message.content.startsWith(`${prefix}streaming`)) {
    message.delete();
    client.user.setGame('lo', "https://www.twitch.tv/jahmahd");
  } //lol
});

client.login(token);