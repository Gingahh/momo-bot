const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client();
const config = require("./config.json")

// startup
client.on('ready', () => {
	console.log('Logged in as ${client.user.tag}');
	client.user.setActivity(';help')
});

client.login(token);

//on join
client.on("guildCreate", guild => {
	console.log('Joined: ${guild.name} (id: ${guild.id}');
}

//on delete
client.on("guildDelete", guild => {
	console.log('Removed: ${guild.name} (id: ${guild.id}');
}

// command code below
client.on('message', msg => {
	//lol
	if(msg.toLowerCase() == 'whatever dude') {
			msg.channel.send('I\'m over it')
		}
		
	//real commands
	if(msg.content.substring(0,1) == prefix){
		var args = msg.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		
		//direct messages a list of commands
		if (cmd == 'help') {
			msg.author.send({
				files: [
					"Momo.png"
				]
			});
			msg.author.send('**List of commands for Momo-bot:**\n' +
							'```;gabe - posts a random image of gabriel paul davis\n' +
							';roll <optional range> - rolls a number from 1 to a specified range (default is 100)```');
		}
		
		//simple roll number command
		if(cmd == 'roll') {
			if (!(args[0] == null)) {
				var range = args[0];
				if (range < 1) {
					range = 1;
				}
			} else {
				var range = 100;
			}
			msg.channel.send(Math.floor(Math.random() * range) + 1);
		}
		
		//supposed to retrieve user's avatar [BROKEN]
		/*if (cmd == 'avatar') {
			msg.channel.send(message.author.avatarURL);
		}*/
		
		//roles commands [BROKEN]
		/*if(cmd == 'setroles') {
			if(!(msg.member.hasPermissions(MANAGE_ROLES))) {
				msg.channel.send('Insufficient permissions.');
			} else {
				msg.channel.send('working properly I think');
			}
		}
		
		if(cmd == 'addrole') {
			if (args[0] == null) {
				msg.channel.send('No role specified. Correct syntax is \';addrole <role>.\'');
			} else {
				//vae
				//var rolerequested = args[1].permissions;
				//var role
				//message.member.addRole(args.join(" ").slice(22));
				//if(
			}
		}*/
		
		//very important command
		if(cmd == 'gabe') {
			var randfile = "./gabe/" + Math.floor(Math.random() * 20) + ".jpg";
			msg.channel.send(/*'gabe post',*/ {
				files: [
					randfile
				]
			});
		}
	}
});