let fetch = require('node-fetch')
let nando = 'https://telegra.ph/file/1a215aee5e7dfcaf08198.jpg'
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(nando)).buffer(), `
*PRICELIST MOBILE LEGENDS RISHAKII*

*PAKET SEMI FAST A* 

MOBILE LEGEND 
π14= Rp 4.500 
π42= Rp 11.000 
π70= Rp 17.000
π140= Rp 33.400
π284= Rp 63.500
π355= Rp 78.270
π427= Rp 92.800
π716= Rp 155.300
π1446= Rp 311.300
π2976= Rp 621.720

Stock: *OPEN* β
------------------------------------------------------
*KETERANGAN*

- Open selama grup open
- Proses 10 - 30 menit max 24 jam

------------------------------------------------------
------------------------------------------------------

*PAKET SEMI FAST B*

113π   :Rp 24.785
168π   :Rp 37.802
226π   :Rp 51.000
336π   :Rp 74.704
460π   :Rp 98.500
573π   :Rp 124,100
628π   :Rp 136,450
920π   :Rp 197,700
1427π 	:Rp 291,750
1887π 	:Rp 391,750
2398π 	:Rp 491,705
3596π 	:Rp 720,750
5256π 	:Rp1.090,750
6038π 	:Rp 1,220,750
9634π 	:Rp 1,941.750
12076π 	:Rp 2,445,500
SL/TWβ­ : Rp.110.000
Starlight π : Rp.220.000

Stock: *READYβ* (UNLIMITED)
_________________________

Proses: *10-60 Menit Max 3-24 Jam*
Rules : *Jam Layanan : 09.00 AM - 19.00 PM*
Kesalahan Input Nickname/User ID, Bukan tanggung jawab kami
Stock: *READYβ* (UNLIMITED)

`.trim(), watermark, 'PEMBAYARAN', '.payment', m)
handler.help = ['dml2']
handler.command = /^(dmml2|dmmlsemifast)$/i

module.exports = handler
