const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fortune = require ("./fortunes.json")
 
client.on("ready", () => {
  console.log("I am ready!");
  client.channels.get('503044022781083648').send("And I'm back");
});
prefix = config.prefix 
client.on("message", (message) => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if (command === "ping") {
    message.channel.send("pong!");
  }
  if (command === "greet") {
    message.channel.send("Hello World");
  }
  if (command === "fortune") {
    message.react('🤔')
    index = Math.floor(Math.random() * fortune.fortunes.length)
    selected = fortune.fortunes[index]
    message.channel.send('Your fortune is: ' +  selected)
  }
  if (command === "lottery") {
    //Generate 5 random number from 01 to 59, no 0's.
    //Put those number in order
    //Return those numbers, in a string
    lot = []
    lotstr = ""
    for(i=0;i<5;i++){
      draw = Math.floor((Math.random() * 59) + 1)
      while (lot.includes(draw)){
        draw = Math.floor((Math.random() * 59) + 1)
      }
      lot.push(draw)
    }
    console.log(lot)
    lot.sort(function(a, b){return a - b});
    console.log(lot)
    for(i=0;i<5;i++){
      lotstr += lot[i] + " "
    }
    message.channel.send("Your Lottery Numbers\n" + lotstr)
  }
  if (command === "break"){
    channel.send(randomsauce)
  }
});

client.login(config.token);