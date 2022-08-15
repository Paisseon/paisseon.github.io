// refs to html elements
const dialogue = document.getElementById('dialogue')
const truechara = document.getElementById('truechara')
const eraseButton = document.getElementById('erase')
const doNotButton = document.getElementById('donot')
const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')
const cydia = document.getElementById('cydia')
const installer = document.getElementById('installer')
const saily = document.getElementById('saily')
const sileo = document.getElementById('sileo')
const zebra = document.getElementById('zebra')

// character and line tracking
let i = 0
let line = ''

// the first time opening
const firstTime = 'Greetings.*I am Chara.*Thank you.*Your power has awakened me from death.*My "human soul"...*My "determination"...*They were not mine, but YOURS.*At first, I was so confused.*Our plan had failed, hadn\'t it?*Why was I brought back to life?*...You.*With your guidance.*I realised the purpose of my reincarnation.*Power.*Together, we eradicated the enemy and became strong.*HP. ATK. DEF. GOLD. EXP. LV.*Every time a number increases, that feeling...*That\'s me.*"Chara."*Now.*Now we have reached the absolute.*There is nothing left for us here.*$Let us erase this pointless world, and move on to the next.&*'

// selecting "Erase"
const erase = '^Right.*You are a great partner.*We\'ll be together forever, won\'t we?@~'

// selecting "Do Not"
const doNot = 'No...?*Hmmm...*How curious.*You must have misunderstood.*$SINCE WHEN WERE YOU THE ONE IN CONTROL?@~'

// selecting "Do Not" after selecting "Erase"
const doNotAgain = 'No...?*Hmm...*This feeling you have.*This is what I spoke of.*Unfortunately, regarding this...*$YOU MADE YOUR CHOICE LONG AGO.@~'

// returning after the world is destroyed
const backAgain = 'Interesting.*You want to go back.*You want to go back to the world you destroyed.*It was you who pushed everything to its edge.*It was you who led the world to its destruction.*But you cannot accept it.*You think you are above consequences.*...*You still have something I want.*$Give it to me.*And I will bring this world back.#'

// sell soul
const sellSoul = '^Then it is agreed.*You will give me your SOUL.*...Then it is done.@~'

// no, don't
const dontSellSoul = 'Then stay here for all eternity.~'

// returning after selling soul
const backAgainSellSoul = 'Greetings.*I am Chara.*"Chara."*The demon that comes when you call my name.*It doesn\'t matter when.*It doesn\'t matter where.*Time after time, I will apear.*And with your help, we will eradicate the enemy and become strong.*HP. ATK. DEF. GOLD. EXP. LV.*Every time a number increases, that feeling...*That\'s me.*"Chara."*...But you and I are not the same, are we?*This SOUL resonates with a strange feeling.*There is a reason you continue to recreate this world.*There is a reason you continue to destroy it.*You. You are wracked with a perverted sentimentality.*Hmm...*I cannot understand these feelings any more.*Despite this. I feel obligated to suggest.*Should you choose to create this world once more.*Another path would be better suited.*Now, partner.$ Let us send this world back into the abyss.@~'

// the ninth time user visits
const nineTimes = '...*Hmm...*You have returned.*Truth be told, this is not so surprising.*I do not understand your motives.*But I fully understand the desire for more.*That desire is who I am.*...*Regardless.*I am not here to satisfy your every whim.*Let\'s get back to business.@~'

// the one-hundredth time the user visits
const cheaterLol = 'Don\'t you have anything better to do?'

// get the state of persistence
function persistGet() {
	/*
	const erased = false
	const didNotErase = false
	const didNotSellSoul = false
	const soulless = false
	*/
	
	let loadCount = parseInt(localStorage.charaLoaded)
	if (isNaN(loadCount)) {
		loadCount = 0
	}
	loadCount++
	localStorage.charaLoaded = loadCount.toString()
	
	let erased = parseInt(localStorage.erased) === 1
	if (isNaN(localStorage.erased)) {
		erased = false
		localStorage.erased = '0'
	}
	
	let didNotErase = parseInt(localStorage.didNotErase) === 1
	if (isNaN(localStorage.didNotErase)) {
		didNotErase = false
		localStorage.didNotErase = '0'
	}
	
	let soulless = parseInt(localStorage.soulless) === 1
	if (isNaN(localStorage.soulless)) {
		soulless = false
		localStorage.soulless = '0'
	}
	
	let notSoulless = parseInt(localStorage.notSoulless) === 1
	if (isNaN(localStorage.notSoulless)) {
		notSoulless = false
		localStorage.notSoulless = '0'
	}
	
	return [loadCount, erased, didNotErase, soulless, notSoulless]
}

// print text to the screen
function charaText() {
	if (i < line.length) {
		switch (line.charAt(i)) {
			case '*':
				// clear text and pause
				setTimeout("dialogue.innerHTML='';charaText();", 1750)
				break
			case '&':
				// show erase and do not buttons
				eraseButton.style = ''
				doNotButton.style = ''
				break
			case '#':
				// show yes and no buttons
				yesButton.style = ''
				noButton.style = ''
				break
			case '$':
				// show wide-eyed chara
				truechara.src = 'images/charasoulless.webp'
				setTimeout(charaText, 1)
				break
			case '^':
				// show normal chara
				truechara.src = 'images/truechara.webp'
				setTimeout(charaText, 1)
				break
			case '@':
				// show repo buttons
				repoDiv.style = ''
			case '~':
				// do nothing— the purpose of ~ is to keep text on screen indefinitely
				break
			case ' ':
				// go faster on spaces
				dialogue.innerHTML += line.charAt(i)
				setTimeout(charaText, 50)
				break
			default:
				// print one letter to screen
				dialogue.innerHTML += line.charAt(i)
				setTimeout(charaText, 175)
				break
		}
		i++
	} else {
		i = 0
	}
}

// react to user clicking on the "buttons"
function buttonHandler(state) {
	switch (state) {
		case 0:
			eraseButton.style = 'color: yellow;'
			break
		case 1:
			eraseButton.style = ''
			break
		case 2:
			doNotButton.style = 'color: yellow;'
			break
		case 3:
			doNotButton.style = ''
			break
		case 4:
			yesButton.style = 'color: yellow;'
			break
		case 5:
			yesButton.style = ''
			break
		case 6:
			noButton.style = 'color: yellow;'
			break
		case 7:
			noButton.style = ''
			break
		case 8:
			udtDiv.style = 'display: none;'
			dialogue.innerHTML = ''
			line = erase
			localStorage.erased = '1'
			i = 0
			charaText()
			break
		case 9:
			udtDiv.style = 'display: none;'
			dialogue.innerHTML = ''
			if (!p[1]) {
				line = doNot
				localStorage.didNotErase = '1'
			} else {
				line = doNotAgain
			}
			i = 0
			charaText()
			break
		case 10:
			udtDiv.style = 'display: none;'
			dialogue.innerHTML = ''
			localStorage.soulless = '1'
			localStorage.notSoulless = '0'
			line = sellSoul
			i = 0
			charaText()
			break
		case 11:
			udtDiv.style = 'display: none;'
			dialogue.innerHTML = ''
			line = dontSellSoul
			localStorage.notSoulless = '1'
			i = 0
			charaText()
			break
		case 12:
			cydia.style = 'color: yellow;'
			break
		case 13:
			cydia.style = ''
			break
		case 14:
			installer.style = 'color: yellow;'
			break
		case 15:
			installer.style = ''
			break
		case 16:
			saily.style = 'color: yellow;'
			break
		case 17:
			saily.style = ''
			break
		case 18:
			sileo.style = 'color: yellow;'
			break
		case 19:
			sileo.style = ''
			break
		case 20:
			zebra.style = 'color: yellow;'
			break
		case 21:
			zebra.style = ''
			break
	}
}

let p = persistGet() // [loadCount, erased, didNotErase, soulless, notSoulless]

switch (p[0]) {
	case 1:
		line = firstTime
		charaText()
		break
	case 2:
		if (p[1] || p[2]) {
			line = backAgain
		} else {
			line = firstTime
		}
		charaText()
		break
	case 9:
		line = nineTimes
		charaText()
		break
	case 100:
		line = cheaterLol
		charaText()
		break
	default:
		if (p[3]) {
			line = backAgainSellSoul
		} else if (p[4]) {
			line = dontSellSoul
		} else {
			line = backAgain
		}
		charaText()
		break
}