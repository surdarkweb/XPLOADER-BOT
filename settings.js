  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || "XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0IxTDJSMVh0ei9LQTdOdUlDRnYyVm9nL3VUeE5Ccnl5UWZpNTg5MkgxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2k2UWt4STYyenBhZnRMRzIyUXhOMU5WMGVpaXFMTThNYXBtb3ZIa0JXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRmFaZGU1RFdpVW8wck9iK3UrdHdjeWxKNEtqcXdoZVpJVG1xcEVMTkgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoOWREQ3p0bnR0TjU5Y291V1l5UDZUNTFOcXNoTWFwdEljSGx4dkJPaWlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIR1dsMktIY0Z2dXpRUDdkRk1MeGxPcVVlc25ldU50VjNYUlZNc1Nibmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImROclQxYytEYUl1L2tRdHFuTlY5bUJjMEdQcWJweEpjM04wa1NCQjlRaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFjVDh0NjFKLzEyeGl4UGZhZHZzSTZWK1c0NlgwM2hjeFlYRlhYcUswQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHQ4UklVVlV2S3pEUk5Nbm5XZStNTW1uczNzQXNVVlQxTmVLblUxb0pCMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImsvdVJUb3Y3V1BEUkVxQXE3SDhsL0p2T0RDQ05pbVNacStMbzRrMWNxZTR5TEVMWGxsMjNIVVNKWkVUWUw3dFFRRERtSmVkdUJMK0JkZVJPUldnS2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJyelBYL3Bod0dnS1E5RTh4cGJFU1MydEEyRDNYZlJ2Nmd2c1h2bnp1d0JJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1SjNkdHcyUFJPU2cyZW1YRy1nU2VRIiwicGhvbmVJZCI6IjQwMTA2YzVkLTBiNjItNDI4Mi1iYzQyLTBjY2Q0MTUxMjZhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLaDRWQStaQlZPRDBXTStzOEh6aUJLT09GUG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmRROTMxTGdXK1V6U0ZxS1JBU2IrbkNDZFprPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY5UEFXWTNTIiwibWUiOnsiaWQiOiIyMzQ4MTAxNjk5MzQwOjU4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTcwMTkzODU0MDE0NTA6NThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJU3RzSXNERU55N3Y3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzbnMxZTIrOFlpUG00akp4c1B6dytGZTdXRHA0OUhzaCsrL09SL2dEQjM4PSIsImFjY291bnRTaWduYXR1cmUiOiIvOWtLdFRxMzRzU0Q2YStzVFpzbUhWN0Q0Z2lhMk9KMC9SaEFYV3lEMDJ4MHBncStubTN0a0hsQU1MN1YwUVZrQXhSLy9SVVlSZm9leVhCMFZnT0tCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVFIybmR1d21BbFFVWE9TZ3pOa2dqemxyZUhPaXdhbnZJZXZqakFWZnZEdUJyUU1uZmpud2s4YllLZkJpeXlZcURvU1habGQvNGthZ3Bib1F4di9YZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTAxNjk5MzQwOjU4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJKN05YdHZ2R0lqNXVJeWNiRDg4UGhYdTFnNmVQUjdJZnZ2emtmNEF3ZC8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzODQ1NTR9" 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'DarkBot' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '2348101699340' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'CYBERTAG' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "Xploader" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "Bot" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'private';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autostatusreact = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🥰'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
