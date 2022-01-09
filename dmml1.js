let fetch = require('node-fetch')
let nando = 'https://telegra.ph/file/1a215aee5e7dfcaf08198.jpg'
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(nando)).buffer(), `
🔰 Rishakii 🔰
*LIST HARGA DM MOBILE LEGENDS*

*PAKET FAST A*
86💎	Rp19.000
172💎	Rp38.000
257💎	Rp57.000
344💎	Rp76.000
429💎	Rp95.000
514💎	Rp114.000
600💎	Rp133.000
706💎	Rp152.000
878💎	Rp190.000
963💎	Rp209.000
1050💎	Rp228.000
1220💎	Rp266.000
1412💎	Rp304.000
2195💎	Rp455.000
3073💎	Rp645.000
3688💎	Rp755.000
4032💎	Rp835.000
5532💎	Rp1.135.000
6238💎	Rp1.285.000
9288💎	Rp1.890.000

Starlight/TWILIGHT  🌟=Rp127.000
Starlight+🌟=Rp287.000
*PROSES 1-5 MENIT*
*STOK READY ✅ (UNLIMITED)*
▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰

*ML PAKET FAST B*

39 💎 = 9.500
65 💎 = 15.000
92 💎 = 20.500
133 💎 = 29.000
266 💎 = 58.000
400 💎 = 85.000
534 💎 = 117.000
670 💎 = 145.000
1342 💎 = 288.000
2700 💎 = 565.000
4150 💎 = 850.000
7050 💎 = 1.385.000
Proses 1-20 MENIT,Max 24JAM Jika Event

*TANYAKAN STOCK SEBELUM MEMESAN*
`.trim(), watermark, 'PEMBAYARAN', '.payment', m)
handler.help = ['dml1']
handler.command = /^(dmml1|dmmlfast)$/i

module.exports = handler
