let fetch = require('node-fetch')
let nando = 'https://telegra.ph/file/1a215aee5e7dfcaf08198.jpg'
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(nando)).buffer(), `
*LIST PAYMENT BANK & WALLET*

✅ *DANA:* 082210295366 An. Ratna Susilawati
✅ *SHOPEEPAY:* 082210295366 An.Rishakii       
✅ *QRIS:* MINTA PC ADMIN
✅ *OVO:* 082210295366 An. MUHAMMAD CHAIRI
✅ *GOPAY:* 082210295366 An. Ratna Susilawati
✅ *BANK:* Mandiri 1770015710608 An. Risna Ari Fitria
`.trim(), watermark, 'Kembali Ke list', '.dmml1', m)
handler.help = ['payment']
handler.command = /^(payment)$/i

module.exports = handler
