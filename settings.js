/*
Credit Pairing NdXz
Sc by : Deku Ganz
*/

const fs = require('fs');
const chalk = require('chalk');

// NO YANG MAU DI PAIRING
global.nopairing = "62895332438125"

//owmner v card
global.ytname = "Yt: Me SALSA OFC" //ur yt chanel name
global.socialm = "IG: Tidakada" //ur github or insta name
global.location = "Indonesia" //ur location

global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autorecord = true
global.autoswview = false //auto status/story view
global.autoread = false
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat
global.pesanon = false //show pesan on bot

global.ftreply = [
"https://files.catbox.moe/n9dq8n.jpg",
"https://files.catbox.moe/z1qpyr.jpg",
"https://files.catbox.moe/h80k2k.jpg",
"https://files.catbox.moe/gnykvj.jpg",
"https://files.catbox.moe/4u7utd.jpg"
]

//new
global.botname = 'BoTsalsa' //ur bot name
global.ownernumber = ['6283833371747'] //ur owner number, dont add more than one
global.ownername = 'salsa' //ur owner name
global.ownername2 = 'salsa' //ur owner name
global.websitex = ""
global.wagc = "https://whatsapp.com/channel/0029VaslWI123n3oeBlWgS0O"
global.saluran = "120363354072592609@newsletter"
global.jidgroupnotif = '120363370018717500@g.us'
global.saluran2 = "120363354072592609@newsletter"
global.jidgroup = '120363370018717500@g.us'
global.jidch = '120363354072592609@newsletter'
global.themeemoji = '🪀'
global.wm = "salsa ʙᴏᴛᴢ"
global.botscript = '' //script link
global.packname = "salsa ʙᴏᴛᴢ"
global.author = "ʙʏ: Mesalsa"
global.creator = "6283833371747@s.whatsapp.net"
global.xprefix = '.'
global.tiktokname = 'Tidakada' //name tiktok owner
global.tiktokname2 = 'Tidakada' //name tiktok2 owner
global.tiktokname3 = 'Tidakada' //name tiktok3 owner
global.linkch = "https://whatsapp.com/channel/0029VaslWI123n3oeBlWgS0O"
global.linkgc = "https://chat.whatsapp.com/LOmFMwV1Y4nFBzqtmPwZik"
global.linksosmed = "https://youtube.com/@salsaBoTz-Md"
global.version = "v20"

global.premium = ["6283833371747"] // Premium User
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
global.sessionName = 'session'

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://dapxzprib.serverpanell.biz.id"
global.apikey = "ptla_Sp587hIO3tqqah1846RcA7ROxnoKOLHL8zUBzP3bLSL" //ptla
global.capikey = "ptlc_8yJkNNiqnnubdoVLA4G6IrSIQorp1dweMoyvN4Vr7I2" //ptlc


//bot sett
global.typemenu = 'v7' // menu type 'v1' => 'v4'
global.typemenulist = 'v5' // menu type 'v1' => 'v4'
global.typereply = 'v6' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.ftyuta = [
"https://telegra.ph/file/67def6817bede6ba3cdf1.jpg",
]

global.ftsc = [
"https://files.catbox.moe/7l39zv.jpg",
]

global.fotofl = [
fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')
]

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 0,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: '*[ ᴇʀʀʀᴏʀ ]* Error',
	nsfw: '*[ ɴsғᴡ ]* Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done',
	loading: '*[ ʟᴏᴀᴅɪɴɢ ]* Please Wait....'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});