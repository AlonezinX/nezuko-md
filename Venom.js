/*â­ââ[đ«đđđđđ đđ đđđđđđ«]ââââȘš

  đđđđ đđđđđ đđđ: đœđđđđ đŽđđđ
  
  đđđ đđđđđ: https://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ
  đđđ đđđđđđđđ: https://wa.me/559784388524
  đđđ đđđđđ: https://chat.whatsapp.com/LtjFqe7AEKtKMLeyyHWqrY
  đđđ đđđđ đđđđ đđđđ: https://venom-apis.herokuapp.com/api
  
  đđđđ đđđđ đđđ đđđđđ đđđđ đđđđ đ đđđđđđđđđđ 
  đđđ đđđđđđđ đđđđđ đđđ đđđđđđđ đđđ đđ đđđđ đđđđđđ
  đđđ 100% đđđđđđđđ đ đđđđđđđđ đđđđ đđđđđđđ
  đđđđ đđđ đđđđđ đđđđđđ đđđđđ đđ đđđđđđđđ đđ đđđđ đđ đđđđ
  đđđđ đđđ đđđđ đđđđđđđ đđđđđ đđđđ đđđđ đđ đđđđ
  đđđđđđ đđđđđđđđ đđ đđđđđ đđđđđđđđđđđ đđđđ đđđ đđđđđđ
  
  đđđđđ đđđđđđđ đđđđ đđđđđđđđđđ đđđ đđđđđđđ đđ đđđđ đđđđđđđ
  đđđđđđ đđ đđđđđđđ đ đđđđ đđ đđ đđđđđ đđđ đđđđđđ đđđđđ đđđđ đđ đđđ đđ
  đđđđ đđ đđđ đđđ đđđ đđđđđ đ
  
â°ââââââââââââȘš
*/
//UNICIAR CONEXAO COM O MULT DEVICE
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, WAProto, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia, Mimetype } = require("@Venom-Md/baileys-md")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const moment = require("moment-timezone") 
const os = require('os')
const crypto = require('crypto')
const speed = require('performance-now')
const encodeUrl = require('encodeurl')
const request = require('request');
const { color, bgcolor } = require("./lib/color");
const { performance } = require('perf_hooks')
const yts = require('yt-search')

const logos = require('textmaker-thiccy');

const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, fetchText, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')


const nomedobot =  'đœđđđđđ©đđ-đŽđ' //nom do bot
const prefa = ['/','!','.','*','#','$'] //prefixo
const  sp = 'â­'
const dono = ['559784388524','559784388524'] //dono
const venomapis = 'https://venom-apis.herokuapp.com/api' 
const apikey  = [ 'venom' ]

APIs = {
	zenz: 'https://venom-apis.herokuapp.com',
}

// Apikey Website Api
APIKeys = {
	'https://venom-apis.herokuapp.com': 'venom',
}

api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const {
 ytMp4,
 ytMp3,
 ytPlay
} = require('./lib/youtubev2')

const img = fs.readFileSync('./lib/Venom-Md.jpg') //imagem do menu


const mentions = (teks, memberr, id) => {
       (id == null || id == undefined || id == false) ? venom.sendMessage(m.chat, {text: teks.trim(), mentions: memberr}) : venom.sendMessage(m.chat, {text: teks.trim(), mentions: memberr})
        }
        const replyc = (txt) => {
 		      return venom.sendMessage('559784388524@s.whatsapp.net', 'bot on ', { text: txt }, { quoted: m })
     		}
//EXPORTA MODULOS DOIDEX E FUNCOES
module.exports = venom = async (venom, m, chatUpdate) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°âąÏĂ·ĂÂ¶âÂŁÂąâŹÂ„Âźâą+â_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°âąÏĂ·ĂÂ¶âÂŁÂąâŹÂ„Âźâą+â_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
      		const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
      		const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "sem nome"
        const isCreator = [venom.user.id, ...dono].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == venom.user.id ? true : false
        const text = q = args.join(" ")
      //  const insom = m.endsWith('@g.us')		
        const c = args.join(' ')
        const botNumber = venom.user.id.split(':')[0] + '@s.whatsapp.net'
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
       	const isMedia = /image|video|sticker|audio/.test(mime)
	
//CONST DERESPOSTAS	
	const resposta = {
    admin: 'Membro comum nĂŁo tem autoridade para usar este comando đ€Ł',
    dono: 'âSomente meu criador pode usar este comando đ',
    group: 'Este recurso sĂł funciona em grupos đ',
    aguarde: 'âAguarde enquanto isso tome um cafĂ©â',
    erro: 'acorreu um erro tente dnvđ§âđ§',
    marqueoarquivo: 'marque o arquivo Ă© use:',
    marquesticker: 'marque a figurinha'
    
}
        //DEFINICOES DE GRUPO
     const groupMetadata = m.isGroup ? await venom.groupMetadata(m.chat) : ''
	const groupName = m.isGroup ? groupMetadata.subject : ''
	const groupId = m.isGroup ? groupMetadata.id : ''
	const groupMembers = m.isGroup ? groupMetadata.participants : ''
	const groupAdmins = m.isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(m.sender) || false
	

//COLOUE SEU NUMERO
    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = venom.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return venom.relayWAMessage(po, {waitForAck: true})
        }             

        // STATUS DO BOT
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
       		const math = (teks) => {
				return Math.floor(teks)
		}
//		externalAdReply:{title:`prefix: ${prefix}`,body:"",mediaType:"2",thumbnail:getBuffer(img),mediaUrl:`${instagramkk}`

		//enviar fotos de perfil
				try {
		pporang = await venom.profilePictureUrl(`${m.sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://telegra.ph/file/5ec45a3342684235fb209.jpg'
		      }
		const pperfil = await getBuffer(pporang)
		//enviar
		const enviar = (txt) => {
 		     venom.sendMessage(m.chat, {text: txt, quoted: m, thumbnail: img, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{ advertiserName: "https://wa.me/559784388524" , mediaType: 0, thumbnail: pperfil, caption:"https://wa.me/559784388524"}}})
    		}		
		        

        const enviarArquivoDoLink = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return venom.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return venom.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return venom.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return venom.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return venom.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        
        
const mek = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `VenomBot-md`,"title": "hmm" }}}

        const enviarbutao = (from, text, footer, buttons) => {
            return venom.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons, quoted: m })
        }
        
const enviarButaoMsg = async (text, footer, button) => {
var list = WAProto.Message.fromObject({
buttonsMessage: WAProto.ButtonsMessage.fromObject({
contentText:text,
footerText: footer,
buttons: button,
headerType: 1
})
})

await venom.relayMessage(m.chat, list, {messageId: m.key.id})
}

const sendListMsg = async (title, description, textButton, sections) => {
var list = WAProto.Message.fromObject({
listMessage: WAProto.ListMessage.fromObject({title: title,
buttonText: textButton,
description: description,
listType: 1,
sections: sections
})
})
await venom.relayMessage(m.chat, list, {messageId: m.key.id})
}

//IA


        		//antispa
        
        // Public & Self
        if (!venom.public) {
            if (!m.key.fromMe) return
        }

        // Mensagem no console
        if (m.message) {
            console.log(chalk.black(chalk.magenta('|| MENSAGEM')),  chalk.black(chalk.green(budy || m.mtype)) + '' +chalk.black(chalk.magenta('\n|| TIPO')),  chalk.black(chalk.green(text || m.mtype)) + '' + chalk.magenta('\n|| Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat), + '' + chalk.magenta('\n|| DO NĂMERO'), chalk.green(pushname))
        }        
                     
      
       
		venom.sendReadReceipt(m.chat, m.sender, [m.key.id])
		venom.sendPresenceUpdate('available', m.chat)
		

        switch(command) {

	    case 'comprabot': {	    
                enviar(`Para comprar o bot, fale com o meu criador:\n\nhttps://wa.me/559784388524?text=quero+comprar+o+bot+VenomBot-md`)
            }
            
            break
//teste           
case 'tst' : {
enviarc(' ')
}
//đđđđđ đđ đđđđđ
            break
case 'marcar': {
if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
               // if (!m.isGroup) return enviar (resposta.grup)
//if (!isCreator) return enviar (resposta.dono)
              //  if (!isBotAdmins) throw resposta.botAdmin
           // if (!isAdmins) throw resposta.admin
let teks = `ââ *đ„membros!* ââ
 
 âČ *Mensagem: ${q ? q : 'Em Branco'}*\n\n`
                for (let mem of groupMembers) {
                teks += ` @${mem.id.split('@')[0]}\n`
                }
                venom.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
                }
                break
break
            case 'join': case 'entrar': case 'entrargp': case 'aceitarconvite': case 'joingp': {
            	    
		    		
                if (!isCreator) throw resposta.dono
                if (!text) throw 'Preciso do link do grupo!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Preciso de um link que seja do whatsapp!'
                enviar(resposta.aguarde)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await venom.acceptInvite(result).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
            case 'leave': case 'sair': case 'exit': case 'sairgp': case 'sairdogp': {
            	    
		    		
                if (!isCreator) throw resposta.dono
                await venom.groupLeave(m.chat).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
	case 'kick': case 'ban': case 'banir': case 'chutar': case 'tirardogp': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	case 'add': case 'adicionar': case 'addgp': case 'adicionarnogp': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	case 'promote': case 'promover': case 'daadm': case 'daradm': case 'addadmin': {
	
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	enviar(`usuĂĄrio se tornou um adm deste grupo`)
	}
	break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(`adicionando afeito ${command}`)
                let media = await venom.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return console.log(err)
                let buff = fs.readFileSync(ran)
                venom.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', 'ptt': true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Marque um audio com *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break	
	case 'demote': case 'rebaixar': case 'tiraadm': case 'tiraradm': case 'deladm': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
        enviar(`usuĂĄrio se tornou um membro comum`)
	}
	
	break
        case 'block': 	case 'bloquear': case 'dablock': case 'addblock': {
        	    
		    		
		if (!isCreator) throw resposta.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.updateBlockStatus(users, 'block').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
        case 'unblock': 	case 'desbloquear': case 'tirarblock': case 'delblock': {
        	    
		    		
		if (!isCreator) throw resposta.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.updateBlockStatus(users, 'unblock').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	    case 'setname': case 'setsubject': 	case 'mudarnome': case 'mudanome': case 'setnome': {
	    	    
		    		
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
                if (!text) throw 'Insira o nome por favor'
                await venom.groupUpdateSubject(m.chat, text).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
            case 'setprofile': case 'setpp': 	case 'mudarft': case 'mudarfotobot': case 'setppbot':{
            	    
		    		
                if (!isCreator) throw resposta.dono
                if (!quoted) throw 'Marque a imagem'
                if (/image/.test(mime)) throw `resposta.marqueoarquivo` + `*${prefix + command}*`
                let media = await venom.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotGroupAdmins && !isGroupAdmins) {
                    await venom.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await venom.updateProfilePicture(venom.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            
            break

            case 'ping': case 'botstatus': case 'statusbot': case 'status': {
            	    
		    		
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `đVelocidade de Resposta ${latensi.toFixed(4)}  _Segundos_\n\n\nâ°Tempo online : ${runtime(process.uptime())}`.trim()
                enviar(respon)
            }
            
            break
            
	    case 'sticker': case 's': case 'stickergif': case 'sgif': {
	    	    
		    		
		if (!quoted) throw 'marque a foto'
		enviar(resposta.aguarde)
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await venom.sendImageAsSticker(m.chat, media, m, { packname: 'Venombot-md', author: 'Venom' })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return enviar(resposta.mxm10s)
		    let media = await quoted.download()
		    let encmedia = await venom.sendVideoAsSticker(m.chat, media, m, { packname: 'Venombot-md', author: 'Venom' })
		    await fs.unlinkSync(encmedia)
		} else {
            	    throw resposta.errofigu
        	}
	    }
	    
	    break
//đ”đđđđ đđđđđ đđđđđđđđđđđ đđđ đđđđđ
break
	    case 'toimage': case 'toimg': {
	    	    
		    		
                if (!quoted) throw resposta.marquesticker
                if (!/webp/.test(mime)) throw `resposta.marqueoarquivo` + `*${prefix + command}*`
                enviar(resposta.aguarde)
                let media = await venom.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    venom.sendMessage(m.chat, { image: buffer, caption: mess.convertmsgimg }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            
            break	    
case 'attp':
try{ 
if (!c) return enviar(`preciso do text krl`)
url = encodeURI(`https://api.xteam.xyz/attp?file&text=${c}`)
venomkkk = await getBuffer(url)
venom.sendMessage(m.chat, {sticker: venomkkk}, {quoted: m})
} catch(e) {
console.log(e)
enviar('deu erro na api filho')
}
break
	    
            case 'owner': case 'creator': case 'criador': case 'dono': {
            	    
		    		
                let vcard = 'BEGIN:VCARD\n' // metadata do ctt
                    + 'VERSION:3.0\n' 
                    + 'N:;Venomđ.;;;'
                    + 'FN:Venomđ.\n' // nome todo
                    + 'ORG:Venomđ;\n' // organizaĂ§ĂŁo
                    + 'TEL;type=CELL;type=VOICE;waid=559784388524:+55 97 98438-8524\n' // WhatsApp ID + nĂșmero
                    + 'END:VCARD' // finalizaĂ§ĂŁo
                venom.sendMessage(m.chat, { contacts: { displayName: 'Venom ne vidađ.', contacts: [{ vcard }] } }, { quoted: m })
            }
            
            
           
            break
            tes
            case 'teste2': {            	    		    		
                enviar(resposta.aguarde)
                let buttons = [
                    {buttonId: 'ping', buttonText: {displayText: 'PING'}, type: 1}
                ]
                let buttonMessage = {
                    image: {url: 'https://telegra.ph/file/692385eb5225c1be33900.jpg' },
                    caption: `OlĂĄ @${m.sender.split("@")[0]}`,
                    footerText: 'đđŻđšđ„đźđ­đąđšđ§-đŠđ',
                    buttons: buttons,
                    headerType: 4
                }
                venom.sendMessage(m.chat, buttonMessage, { quoted: m })
            }            
            break
//đđđđđ đđ đđđđ đđ đđđ            
            case 'menu': {
            
venomkkk = `

đđ¶đđ ${pushname} đđđ đđđđđ đđ đđđđđđđđ-đđ


â­ââ[đ«đđđđđ đđ đđđđđđ«]ââââȘš

  đđđđ đđ đđđ đđđ đđđ đđđđđ đ
  
â°ââââââââââââȘš

â­ââââââââââââȘš
âđ§âđ§đđđđđđđ đđ đđđđđđđđ§âđ§
ââââ
 đđđđđđđđ: https://wa.me/559784388524
 đ”đđđ: đœđđđđ
 đđđ đđđđđ: https://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ
  đđđ đđđđđđđđ: https://wa.me/559784388524
  đđđ đđđđđ: https://chat.whatsapp.com/LtjFqe7AEKtKMLeyyHWqrY
  đđđ đđđđ đđđđ đđđđ: https://venom-apis.herokuapp.com/api
  
â­ââââââââââââȘš
âđ„łđđđđđđđđđđđđđđđ„ł
â đ kelly
â đ lago
â đ tobi
â đ sayo
â đ Dios Killerđ§ž
â đ skiller ofc
ââ[*_${nomedobot}_*]ââ
â°ââââââââââââȘš`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/Venom-Md.jpg') }, { upload: venom.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: venomkkk,
                            hydratedButtons: [{
                              
                                quickReplyButton: {
                                    displayText: 'â„đ­đŽđđđđ­',
                                    id: 'menu1'
                                }  
                                }, {                                
                                quickReplyButton: {
                                    displayText: 'â„âĄđœđđđđđđđđđâĄ',
                                    id: 'ping'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break
case 'menu1': {
            
venomkkk = `

đđ¶đđ ${pushname} đđđ đđđđđ đđ đđđđ đœđđđđđ©đđ-đŽđđđ đ«đđđđđ


â­ââ[âœđđđđâœ]ââââȘš
  đđđđ đđđđđđđđ đđ đđđđđ đđđđ đđđđđđ đđđđđđ đđ đđđ đđđđđ
  đđđ đđđđđđđđ đđđđđđđđđđđ đđđđ đđđ đđđđđđ đđđđ
  đ đđđ đđđđ đđ đđđđđ đđđđ đđđđđđ đđđ đđđđđ đđđđđđđ
  đđđđđđđ đđ đđđđđđđđđđđ đđđđđ đđ đđđđđđđ đđđ đđđđđđ
â°ââââââââââââȘš
â­âââââââââââ
â đđđđđđđđđ đđđđđđđ
âââââââââââââ
â­ââââââââââââȘš
â${prefix}adicionar (đđđđđđ)
â${prefix}kick (đđđđđđ@)
â${prefix}promote (đđđđđđ@)
â${prefix}demote (đđđđđđ@)
â${prefix}dono (đđđ đđ đđđđđ)
â${prefix}attp (đđđđđ)
â${prefix}sticker (đđđđđđ đ đđđđ)
â${prefix}setname (đđđđ)
â${prefix}setprofile (đđđđđđ đ đđđđ)
â${prefix}block (đđđđđđ)
â${prefix}unblok (đđđđđđ)
â${prefix}sair (đđđ đđđ đđ đđđđđ)
â${prefix}entrar (đđđđ đđ đđđđđ)
â${prefix}nick (đđđ đđđđ)
â°ââââââââââââȘš

â­âââââââââââ
â đ„đ«đđđđđđđđ
âââââââââââââ
â­ââââââââââââȘš
â${prefix}anime (đđđđđđđđđ)
â${prefix}pinterest (đđđđđđđđđ)
â${prefix}play (đđđđ đđ đđđđđđ)
â${prefix}metadinha 
â°ââââââââââââȘš
â­âââââââââââ
â đ€modficador de voz
âââââââââââââ
â${prefix}Bass
â${prefix}Blown
â${prefix}Deep
â${prefix}Earrape
â${prefix}Fast
â${prefix}Fat
â${prefix}Nightcore
â${prefix}Reverse
â${prefix}Robot
â${prefix}Slow
â${prefix}Smooth
â${prefix}Tupai
â°ââââââââââââȘš

â­âââââââââââ
âđ đłđđđđ đ đŹđđđđ
âââââââââââââ
â­ââââââââââââȘš
â${prefix}lava (đșđđ đ»đđđđ)
â${prefix}3dstone (đșđđ đ»đđđđ)
â${prefix}edit1 (đșđđ đ»đđđđ)
â${prefix}edit2 (đșđđ đ»đđđđ)
â${prefix}edit3 (đșđđ đ»đđđđ)
â${prefix}edit4 (đșđđ đ»đđđđ)
â${prefix}edit5 (đșđđ đ»đđđđ)
â${prefix}edit6 (đșđđ đ»đđđđ)
â${prefix}edit7 (đșđđ đ»đđđđ)
â${prefix}edit8 (đșđđ đ»đđđđ)
â${prefix}edit9 (đșđđ đ»đđđđ)
â${prefix}edit10 (đșđđ đ»đđđđ)
â${prefix}edit11 (đșđđ đ»đđđđ)
â${prefix}edit12 (đșđđ đ»đđđđ)
â${prefix}edit13 (đșđđ đ»đđđđ)
â${prefix}edit14 (đșđđ đ»đđđđ)
â${prefix}edi15 (đșđđ đ»đđđđ)
â${prefix}edit16 (đșđđ đ»đđđđ)
â${prefix}edit17 (đșđđ đ»đđđđ)
â${prefix}edit18 (đșđđ đ»đđđđ)
â${prefix}edit19 (đșđđ đ»đđđđ)
â°ââââââââââââȘš

â­ââââââââââââȘš
âđ§âđ§đđđđđđđ đđ đđđđđđđđ§âđ§
ââââ
 đđđđđ đđ đđđđđđđ: https://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ
 đđđđđđđđ: https://wa.me/559784388524
 đđđđ: đœđđđđ
 
â­ââââââââââââȘš
âđ„łđđđđđđđđđđđđđđđ„ł
â đ kelly
â đ lago
â đ tobi
â đ sayo
â đ Dios Killerđ§ž
â đ skiller ofc
ââ[*_${nomedobot}_*]ââ
â°ââââââââââââȘš`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/Venom-Md.jpg') }, { upload: venom.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: venomkkk,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'đđ©đđđ đđ',
                                    url: 'https://github.com/Venom-ofc/VenomBot-md'
                                }
                            }, {
                                callButton: {
                                    displayText: 'đ±đȘđđđ đđ đœđđđđ',
                                    phoneNumber: '+55 97 9843-88524'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'âœđȘđđđđ đđ đđđ đđ',
                                    id: 'ajuda'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'đ€đȘđđ đđ đđđđđ',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'đđ°đđđđđ đđ đđđđđ',
                                    id: 'menu2'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break         
//đđđđ đđ đđđđ đđđđ đđđđ            
case 'menu2':
const button = {
buttonText: 'â„đȘđđđđđ đđđđ đđđ',
 footerText: 'Â© đœđđđđđ©đđ-đŽđ',
 description: `âš *_bem vindo(a) ao menu ${pushname}_* âš`,
 sections: [
                     {
                      "title": `đ đ°đđđđđ đđ đœđđđđ đŽđđđđ `,
 rows: [
                          {
                              "title": "â„ïžêȘ¶ê« đđ Íą Íą đđđđđ đđđđ ê«ê«",
                              "rowId": `${prefix} imune1`                        
                           },
                           {
                              "title": "â„",
                              "rowId": "comando"
                           }
                        ]
                     }],
 listType: 1
}
sendListMsg(button.title, button.description, button.buttonText, button.sections)  
break
case 'command':
enviar('đŹđđđđđđđ đđđđđ đđ đđđđđ đđ đœđđđđ đŽđđđ'),
sender = `${pushname}`
 stod = `${sender}`
 listMsg = {
 buttonText: 'VEJA O MENU',  
 footerText: '_*Â© criado by Venom Mods*â­ăSpecial Para ă\nâ â Skiller ofc\nâ â Mhankbarbar \nâ â Venom modsâ â Iorran\nâ â tobi\nâ\nâ° FaĂ§a bom uso deste Botâš',
 description: `đ¶đđđ„ ${pushname} đđŹđđđđđđ đđ đđđđđ đđ đđđđđ đđđđđđ}`,
 sections: [
                     {
                      "title": `đșđđđđđ ${pushname} - đđđđđđ đđđđ đđđđđ đ đđđ`,
 rows: [                         
                           {                           
                             "title": "â„ïžêȘ¶ê« đđ Íą Íą đđđđđ đđđđ ê«ê«", 
                             "rowId": `${prefix} imune1`
                           }, 
                           {
                             "title": " đcanal do venomđ", 
                             "rowId": `${prefix} mycanal`
                           }
                        ]
                     }],
 listType: 1
}
venom.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:m})
break 
case 'imunes' : {
            enviar(' âœđłđđđđ đđ đđđđđđđđ đđđđđ đđ đœđđđđâœ\n\nđđđđđđ {1}đ\n\nđđđđđđ {2}đ \n\n Íą đłđđđ: https://www.mediafire.com/download/2sip0b2ghul4v3b\n\nđđđđđđ {3}đ \n\n Íą đłđđđ: https://www.mediafire.com/download/osakcxrh1y1bv3v\n\nđđđđđđ {4}đ \n\n Íą đłđđđ: https://www.mediafire.com/download/sfjfx3qriaucgfi\n\nđđđđđđ {5}đ \n\n Íą đłđđđ: https://www.mediafire.com/download/0q4lt0cgiphyo4s\n\nđđđđđđ {6}đ \n\n Íą đłđđđ: https://www.mediafire.com/download/5x55oxzc82yzxge\n\nđđđđđđ {7}đ \n\n Íą đłđđđ: https://mega.nz/file/DmQ3DKhb#mstPuYvkYv2eJmjV1EYIIW8H-6ThzaOCBwV23GPTmgE\n\nđđđđđđ {8}đ \n\n Íą đłđđđ: https://mega.nz/file/HrpSyCIA#LP9bmsKtQAeOTIPHu0kbLNagO2cE9dEHNrQN9637Lzs\n\nđđđđđđ {9}đ \n\n Íą đłđđđ: https://mega.nz/file/T2I0kLga#HbXTTbSn0iY4EU1rs2D9qz0m7QPJ8AZiI-L-WHdpm-g\n\nđđđđđđ {10}đ \n\n Íą đłđđđ: https://mega.nz/file/zn5lTCaL#pV4WTWz1gHBB933xDlzWtbYEYurzqRXJo4B-7kuIZxAđđŹđđđđđ đđđ đđđđđ đđđđđđ đđđ đđđđđđđ ')
            }               
            case 'ajuda' : {
            enviar(' đȘđđđ đđđđđ đđđ đđđ đđđđđ đđđđđđ đđđđđđđđđđ đđđđđđđđđđđđ đđ đđđđ đđ đđđ đđđđđđđđ đđđđđđđđđ đđđ đđđđđđđđ đđđđđ đ đđđđ đđ đđđđđđ đđ đđđđđđđđ đđđđđđ đđ đđ đđđđđ đđđđ đđ đđ đ đđđ đđđđđđđđ đđđ đđđ đđđ\n\nâœđđđđđđđđ đđ đđđđđđđđđđâœ\n\nđ§§{1}đȘđđđđđđ{} \n\ntermux-setup-storage\n\nđ§§{2}đȘđđđđđđ{}\n\napt update\n\nđ§§{3}đȘđđđđđđ{}\n\napt upgrade\n\nđ§§{4}đȘđđđđđđ{}\n\npkg install git -y\n\nđ§§{5}đȘđđđđđđ{}\n\npkg install nodejs -y\n\nđ§§{6}đȘđđđđđđ{}\n\npkg install ffmpeg -y\n\nđ§§{7}đȘđđđđđđ{}git clone https://github.com/Venom-ofc/VenomBot-md\n\nđ§§{8}đȘđđđđđđ{}\n\ncd VenomBot-md\n\nđ§§{9}đȘđđđđđđ{}\n\nnode index.js\n\n đ±đœđđđ đđđđđđđ đđđ đđđđ đđđđđđđ đđ đđđđ đđđ đ đđ đđđđ đđđ đđđ đđđđđđđ đđ đđđđđđ. đđ đđđđđđđđ đđđ đđđđđđ đđđđđđ đ đđđ đđ đđđ đđđđđđđđđ đđđđđđđđđđ đđ đđ đđđ đđđđđđđđ đđđđđđđđđ (đđđđ) đđđđđ đđ đđđđ đđđđ đđđđ đđđđđ đđđđ đđ đđđđ đđ đđđ đ đžđč đđđđđđ đđđđđ đđđđ đđđđ đđđ đ đđ đđđđđđđđđ đ đđđđđđ đœđđđđđ©đđ-đđ đđđđ đđđđđđ ' )
            }            
            break
//cases de play
      
//enviar botoes
          case 'imune1':  {
            	    
         		    		
            enviarbutao(m.chat, ` *nome do botao* `, `Selecione abaixo`,  [{ displayText: `đ  Api `, url : `https://mega.nz/file/DmQ3DKhb#mstPuYvkYv2eJmjV1EYIIW8H-6ThzaOCBwV23GPTmgE`},{ quickReplyButton: { displayText: `đ„đœđđđđ đ đđđđđ đđ đđđđđđđ„`, id: `${prefix}case` } }, { quickReplyButton: { displayText: `đ đŽđđđ đđđđđđđđđđ `, id: `${prefix}case` } }])
            
            }                        
            break            
//đđđđđ đđ đđđđđ đ đđđđ đđđđđ đđđ đđđđđ
case 'edit1': 
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break
case 'edit2':
                    //case by venom       
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break
case 'edit3':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
					venom.sendMessage(from, buffer, image, {quoted: m, caption: 'Evolution-bot fez sua edit'})
					break	
case 'edit4':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=22%25&text.0.size=20&text.0.color=241b1b&text.0.opacity=33&text.0.font.family=Rock%20Salt&text.0.font.style=italic&text.0.background.opacity=49`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break	
case 'edit5':
                   //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break
case 'edit6':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break	
case 'edit7':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break
case 'edit8':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					//venomk = await getvenomk(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=47%25&text.0.size=99&text.0.color=ff0000&text.0.opacity=50&text.0.font.family=Cookie&text.0.font.style=italic&text.0.background.opacity=92&text.0.outline.width=23&text.0.outline.blur=24&text.0.outline.opacity=87`)
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?w=640&h=640&text.0.text=Venom&text.0.position.gravity=north&text.0.position.y=53%25&text.0.size=96&text.0.color=ff0000&text.0.opacity=46&text.0.font.family=Shadows%20Into%20Light&text.0.font.style=italic&text.0.background.opacity=70&text.0.outline.width=9&text.0.outline.blur=52`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break																											
case 'edit9':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break
case 'edit10':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break
case 'edit11':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis11.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=60%25&text.0.size=64&text.0.color=0071ff&text.0.font.family=Old%20Standard%20TT&text.0.font.style=italic&text.0.background.opacity=55&text.0.outline.color=00d0ff&text.0.outline.width=19&text.0.outline.blur=30`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break	
case 'edit12':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break	
case 'edit13':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break		
case 'edit14':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break	
case 'edit15':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
					break	
case 'edit16':
                    //case by venom
					if (args.length < 1) return enviar('erro')
					teks = body.slice(7)
					if (teks.length > 10) return enviar('O texto Ă© longo, atĂ© 10 caracteres')
					enviar('*Estou fazendo, se der erro tente novamente â*')
					venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
					venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
			                break	
case 'edit17':
 //case by venom
if (args.length < 1) return enviar('Qual o nome?')
  enviar('fazendo edit aguarde fofsđ­đ')
  teks = body.slice(7)
anu = await fetchJson(`https://venom-apis.herokuapp.com/api/textmaker/alam?text=${teks}&theme=flower&=venom`)
venomk = await getBuffer(anu.result)
venom.sendMessage(m.chat, { image: venomk }, { quoted: m })
break
case 'edit18':              
              	    if (args.length < 1) return enviar('teksnya mana Tod?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return venom.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: m})
                    venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    venom.sendMessage(from, venomk, image, {quoted: m, caption: `${teks}`})			     	
					break             
case '3dstone':  

if(!q) throw respostarro_c
enviar(resposta.aguarde)
logos.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", c).then(async (data) => {
enviarArquivoDoLink(m.chat, data, c, m)})

break

case 'lava':  

if(!q) throw resposta.erro_c
enviar(resposta.aguarde)
logos.textpro("https://textpro.me/lava-text-effect-online-914.html",`${q}`,
["Breno"], ["Sayo"]).then(async (data) => {
enviarArquivoDoLink(m.chat, data, c, m)})

break
//cases de fotos
case 'nick': case 'styletext': {
	      //  if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		//db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Digite seu nick!'
                let anu = await styletext(text)
                let teks = `đ”đđđđ đđđđđđđ đđđ đđđđđđđ đđđđ= ${text}\n\n`
                for (let i of anu) {
                    teks += `â„đ­đđđđđ *${i.name}* : ${i.result}\n\n`
                }
                enviar(teks)
	    }
	    break
case 'anime': {
enviar(resposta.aguarde)
                if (!text) throw 'Digite o qu vc esta atrais amigo'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `anime ${text}`, buttonText: {displayText: 'đ Proxima Imagemđ '}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `â­ titulo : ${result.title}\nâ­ categoria : ${result.type}\nâ­ detalhe : ${result.source}\nâ­ Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `VenomBot-md`,
                    buttons: buttons,
                    headerType: 4
                }
                venom.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'pinterest': {
                enviar(resposta.aguarde)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                venom.sendMessage(m.chat, { image: { url: result }, caption: 'Url : '+result }, { quoted: m })
            }
case 'test':
if (args.length < 1) return enviar('Qual o nome?')
  enviar('teste do venomkkkk?')
  textokkk = body.slice(7)
anu = await fetchJson(`${venomapis}/textmaker/alam?text=${textokkk}&theme=flower&apikey=${keyvenom}`)
cafe = await getBuffer(anu.result)
venom.sendMessage(from, cafe, image, {quoted: m, caption:'đźFeitinha'})
break
case 'play': case 'ytplay': {
                if (!text) throw `Exemplo: ${prefix + command} pandora funk`
                let yts = require("yt-search")
                let search = await yts(text)
                let playvenom = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${playvenom.url}`, buttonText: {displayText: 'â« Audio'}, type: 1},
                    {buttonId: `ytmp4 ${playvenom.url}`, buttonText: {displayText: 'âș Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: playvenom.thumbnail },
                    caption: `
đŹ Titulo: ${playvenom.title}


â¶ïž DuraĂ§ĂŁo: ${playvenom.timestamp}

đïžïž Views: ${playvenom.views}

â°ïž Publicado hĂĄ: ${playvenom.ago}

đ Canal: ${playvenom.author.name}

đ Link: ${playvenom.url}

â­ DescriĂ§ĂŁo: ${playvenom.description}`,
                    footer: `${nomedobot}`,
                    buttons: buttons,
                    headerType: 4
                }
                venom.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                venom.sendImage(m.chat, thumbnail, `đŹ Titulo: ${title}\n\nâ­ Tamanho do Arquivo: ${media[0].formattedSize}\n\nđ Link: ${url}\n\nđČ  Tipo: MP3\n\nđ ResoluĂ§ĂŁo: ${args[1] || '128kbps'}\n\n*Enviando Audio, aguarde...*`, m)
                venom.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                venom.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `đŹ Titulo: ${title}\n\nâ­ Tamanho do Arquivo: ${media[0].formattedSize}\n\nđ Link: ${url}\n\nđČ  Tipo: MP3\n\nđ ResoluĂ§ĂŁo: ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'metadinha': {
                enviar(resposta.aguarde)
                let cuecadovenom = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let venompikakkk = cuecadovenom[Math.floor(Math.random() * cuecadovenom.length)]
                venom.sendMessage(m.chat, { image: { url: venompikakkk.male }, caption: `Menino` }, { quoted: m })
                venom.sendMessage(m.chat, { image: { url: venompikakkk.female }, caption: `Menina` }, { quoted: m })
            }
	    break            

					case 'testekk':
					{enviar('oie venom')}
					break

            default:
            
if (prefix && isCmd) {
enviar(`
â­âââââââââââ
â (comando: ${command} nĂŁo registrado digite ${prefix}menu)
â°âââââââââââââââââââ`)
console.log(color('COMANDO NAO REGISTRADO', 'green'))
}            

            if (budy.startsWith('sexo')) {
                     enviar('Vai ora seu fimose đ')
                     console.log(color('AUTO RESPOSTA', 'blue'))

              
           
                }
                }                                     
     
} catch (err) {
console.log(color('erro', 'red'), err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})


/*fim da acript todos direitos resevados ao criado venom mods
base feita para usuarios bot whatasapp
đđđđđđđđđđđđđđđđ*/