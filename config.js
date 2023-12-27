const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'botwhatsapp204@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira Rathnayaka' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhaKzRDZmVZVk5mcWM2SDFpUGhsUUJ4K1hNL1ZEQVdQWDZSSXA1Z0oyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURVRHFUeVVrcjk0aWUxejNKSWc5ZzB3Y0tvWDJ3YjVVT0daY3gvLzlpdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UHVTa2JVTUhrZHZNbnlyVGdnRlkvc3R1ME9uZEZyOFQ4Ri9WL2wyaFVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwYUI2WjlqQjI1L2YxSE85SkRodDdmalMxNzM2amxZdWFTTkQyNmM5SHhnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFbFA0QmxBRkthSWxIcGtRVTFuV3paalNKZ0pmVE9FclVKN2IvNTRsa009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhaTEM1TkVSS0NyZEdSL0RwLy9JUzE3TmN3bXZheUp2cWtCZE9RVHFKMUU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJocU13MDlCTEpCOW5KckRpbm1pdW9XTEhMSkxhRUR4TVBZZGZSeW1VL3dEb1JLaExQdzdOS2RWakNsYzJmQXNpZGc3dGplMUZKdFJ3Z0F6MjV2cHNBZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjk2LCJhZHZTZWNyZXRLZXkiOiJrSUFsc2U5YnZ3WjlpbjZEWmlzWnVoRjR1SlFEVzd0b3JMYjFGMHdHRXN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2VHF0YUh4dlFsdWJ2YVJwTEphT1hnIiwicGhvbmVJZCI6IjkwOWFkMjhkLTQyMjItNDNjMS1iNTMyLWU5ZmJlYzRjNDBkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiTiswL1d3WkptaStaRzdVUk1vcFdaNEhjNVk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZTRkk5RVNEWVQ5RU02SUlUV0RzTWdOS2RaUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUM2dNc0hFT1Nlc0t3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxaeFJxM1VwU2JiK09ERDhQaDAxbzZEVUFwQk9TMkJSVE1lZG9zMnc4VFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imh0QldUZWRaeWlzYnVORzMwLzhrUnh5RFJIbkxieVlXTEFYSi9abkgwUUc0TytmZGlsMFpTeHAzMXJzZHY1QXJzTWZKaUo5V1ZISEZhdjR3VmI1bEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxeU10NWprcHJBUE1heERYanhtY0ZKYjRpeWF1NGxKTDNtc2diUEtFTUVRVHpCa051RTdjTHhaSG5XQ0FPa3ZnOVB1bnArRWoxNDJuOGxXcUQ0RXRCdz09In0sIm1lIjp7ImlkIjoiOTQ3NTE2MzI3MjM6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLYXZpeWEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTE2MzI3MjM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTMmNVYXQxS1VtMi9qZ3cvRDRkTmFPZzFBS1FUa3RnVVV6SG5hTE5zUEUxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzNjc3Nzk5fQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Vajira-Rathnayaka' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Vajira-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
