const {Client} = require("discord.js")
const Client = new Client 
global.config = require("./config.json" )
const {updatePlayerCount} = require("./utils/")
// https://discord.com/api/oauth2/authorize?client_id=756145248274743416&permissions=8&scope=bot
clientInformation.onLine("ready", () => {
    cosole.log(`Discord Bot logged in as ${client.user.tag}`)
    updatePlayerCount(client, 5)
})

client.login(config.token)