
let $ = document

let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let keyElem=$.getElementById('key')
let locElem=$.getElementById('location')
let whichElem=$.getElementById('which')
let codeElem=$.getElementById('code')
let keyCodeElem=$.getElementById('keyCode')

document.body.addEventListener('keydown', function (event) {

    event.preventDefault()
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

    keyElem.innerHTML=event.key
    locElem.innerHTML=event.location
    whichElem.innerHTML=event.which
    codeElem.innerHTML=event.code
    keyCodeElem.innerHTML=event.keyCode
})
