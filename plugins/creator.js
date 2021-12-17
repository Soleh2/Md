const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Adul Alhy;;;'
                    + 'FN:Adul Alhy\n' // full name
                    + 'ORG:Adul Alhy;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281390199407:+62 812-5284-8955\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Nando', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
