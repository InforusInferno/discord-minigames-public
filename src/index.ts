import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';

// :)

dotenv.config()

const prefix = "M-"


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("Bot is online")
})

client.on('messageCreate', (message) => {
    if (message.content === `${prefix}ping`) {
        message.reply({
            content: (`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
        })
    }
})

client.login(process.env.TOKEN)