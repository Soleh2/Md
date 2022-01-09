let fetch = require('node-fetch')
let nando = 'https://telegra.ph/file/1a215aee5e7dfcaf08198.jpg'
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(nando)).buffer(), `
🔰 *Rishakii* 🔰
*LIST HARGA DM MOBILE LEGENDS*

*PAKET FAST A*
86💎	Rp18.760
172💎	Rp37.520
257💎	Rp56.280
344💎	Rp75.040
429💎	Rp93.800
514💎	Rp112.560
600💎	Rp131.320
706💎	Rp150.100
878💎	Rp187.600
963💎	Rp206.360
1050💎	Rp225.800
1220💎	Rp264.600
1412💎	Rp300.400
2194💎	Rp446.270
3073💎	Rp633.880
3688💎	Rp743.900
4032💎	Rp818.500
5532💎	Rp1.118.700
6238💎	Rp1.266.400
7376💎 Rp1.495.960
8078💎 Rp1.642.000
9288💎	Rp1.861.100
10.166 💎 Rp2.050.000
11.064 💎 Rp2.238.400

Starlight/TWILIGHT  🌟=Rp123.816
Starlight+🌟=Rp281.400
*PROSES 1-5 MENIT*
*STOK READY ✅ (UNLIMITED)*
▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ 
*LIST HARGA MOBILE LEGEND PAKET FAST B*

39💎	Rp8.316
65💎	Rp13.860
92💎	Rp19.371
133💎	Rp27.720
266💎	Rp55.440
305💎	Rp63.756
400💎	Rp83.160
534💎	Rp110.880
670💎	Rp138.600
735💎	Rp152.460
803💎	Rp166.320
1342💎	Rp277.530
2700💎	Rp554.400
4150💎	Rp831.600
5400💎	Rp1.108.800
7050💎	Rp1.386.000

PROSES 3-15 MENIT
▰ ▰ ▰  ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰
KETERANGAN

- Open selama grup aktif
`.trim(), watermark, 'PEMBAYARAN', '.payment', m)
handler.help = ['dml1']
handler.command = /^(dmml1|dmmlfast)$/i

module.exports = handler
