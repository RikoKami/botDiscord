const Discord = require("discord.js");
require('dotenv').config();
// const BOT_TOKEN = require("./config");
// const WebSocket = require("ws");

// const ip = "ws://192.168.1.100:80";
// // let ws = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
// let ws = new WebSocket(ip);

// // let socket = new WebSocket(ip);
// // socket.onopen = (e) => {
// //   console.log({e});
// // };

// ws.on("open", function open() {
//   alert("[open] Connection established");
//   alert("Sending to server");
//   ws.send("something");
// });

// ws.on("message", function incoming(data) {
//   console.log(data);
// });

// ws.on("error", function error(data) {
//   console.log({ data });
//   ws.send("af");
// });
// discord abaixo

const client = new Discord.Client();

const prefix = "!";

let year = new Date().getFullYear();
const idade = {
  cris: year - 1995,
  diego: year - 1991
}
const getAge = (idade) => {
  return `${idade}`
}

console.log("\x1b[42m\x1b[30m", "Start", '\x1b[0m');

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


  const commandBody = message.content.slice(prefix.length);

  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if(command === "luz"){
    return message.reply("Não to afim");
  }

  if (command === "queromonza") {
    return message.reply("Não vai ter não vacilao");
  }

  if (command === "on") {
    return message.reply("A lampadinha ligou!");
  }

  if (command === "off") {
    return message.reply("Lamp desligada");
  }

  if (command === "idadekira") {
    return message.reply(`O Kira tem ${getAge(idade.diego)} anos 👨‍🦳`);
  }

  if(command === "start"){
    console.log(message.member)
    return message.reply(`Oi @${message.member.user.username}`)
  }

  if(message.member.user.id === '207307343464103938' && command === "idadecris"){
    return message.reply("Quase um senhor 👴🏿")
  }
  if(command === "idadecris" && message.member.user.id !== '207307343464103938'){
    return message.reply("O 25 anos 👴🏿")
  }

  return message.reply("Ta de sacanagem né?")
  

});

client.login(process.env.BOT_TOKEN);
