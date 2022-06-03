/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6287719424487','6281382420312','6288292024190']
global.premium = ['6287719424487']
global.packname = 'Sachi-Botzz え'
global.author = 'A้ึg้ีuี้nิัgีัxี้ え'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Lu Admin 😏',
    botAdmin: 'Bot Harus Menjadi Admin Dulu 😑',
    owner: 'Lu Owner Emang 😏',
    group: 'Fitur Hanya Bisa Untuk Group!!',
    private: 'Fitur Hanya Bisa Untuk Private Chat!!',
    bot: 'Khusus Pengguna Nomor Bot',
    wait: 'Wait...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
