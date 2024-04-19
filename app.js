let ism = prompt("Ismingizni kiriting:")

let boshHarf = ism.charAt().toUpperCase()
let davomi = ism.slice(1).toLowerCase()
let result = boshHarf + davomi

alert(`salom, ${result}`)

document.write(result)

//charAt()
//slice()
//toUpperCase()
//toLowerCase()