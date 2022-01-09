let fetch = require('node-fetch')
let nando = 'https://telegra.ph/file/1a215aee5e7dfcaf08198.jpg'
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(nando)).buffer(), `
*PRICELIST MOBILE LEGENDS RISHAKII*

*PAKET SEMI FAST A* 

MOBILE LEGEND 
💎14= Rp 4.500 
💎42= Rp 11.000 
💎70= Rp 17.000
💎140= Rp 33.400
💎284= Rp 63.500
💎355= Rp 78.270
💎427= Rp 92.800
💎716= Rp 155.300
💎1446= Rp 311.300
💎2976= Rp 621.720

Stock: *OPEN* ✅
------------------------------------------------------
*KETERANGAN*

- Open selama grup open
- Proses 10 - 30 menit max 24 jam

------------------------------------------------------
------------------------------------------------------

*PAKET SEMI FAST B*

113💎   :Rp 24.785
168💎   :Rp 37.802
226💎   :Rp 51.000
336💎   :Rp 74.704
460💎   :Rp 98.500
573💎   :Rp 124,100
628💎   :Rp 136,450
920💎   :Rp 197,700
1427💎 	:Rp 291,750
1887💎 	:Rp 391,750
2398💎 	:Rp 491,705
3596💎 	:Rp 720,750
5256💎 	:Rp1.090,750
6038💎 	:Rp 1,220,750
9634💎 	:Rp 1,941.750
12076💎 	:Rp 2,445,500
SL/TW⭐ : Rp.110.000
Starlight 🌟 : Rp.220.000

Stock: *READY✅* (UNLIMITED)
_________________________

Proses: *10-60 Menit Max 3-24 Jam*
Rules : *Jam Layanan : 09.00 AM - 19.00 PM*
Kesalahan Input Nickname/User ID, Bukan tanggung jawab kami
Stock: *READY✅* (UNLIMITED)

`.trim(), watermark, 'PEMBAYARAN', '.payment', m)
handler.help = ['dml2']
handler.command = /^(dmml2|dmmlsemifast)$/i

module.exports = handler
