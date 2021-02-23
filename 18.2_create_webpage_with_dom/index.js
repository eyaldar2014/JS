
// Create a web page in pure JavaScript!

const body = document.createElement("body");
body.id = "body";
document.body = body

//body style

body.style.background = "url('bg2.jpg') no-repeat center center/cover"
body.style.opacity = '1'
body.style.padding = '0'
body.style.margin = '0'
body.style.boxSizing = 'border-box'
body.style.height = '100vh'
body.style.textAlign = 'center'



//navbar
const navbar = document.createElement("nav");
navbar.id = 'navbar'
navbar.style.background = 'lightgreen'
navbar.style.margin = '30px' 
navbar.style.padding = '3px 10px' 
navbar.style.opacity = '0.8' 



const list = document.createElement("UL");
list.id = 'list'                 // Create a <li> node
list.style.display = 'flex'
list.style.paddingRight = '40px'
list.style.justifyContent = 'space-between'
list.style.alignItems = 'center'
list.style.listStyle = 'none'
list.style.fontSize = '20px'
list.style.fontWeight = '700'



const logoA = document.createElement("A");
logoA.id = 'logoA'
const logoB = document.createElement("A");
logoB.id = 'logoB'
const logoC = document.createElement("A");
logoC.id = 'logoC'
const logoD = document.createElement("A");
logoD.id = 'logoD'

const li1 = document.createElement("LI");

const image = document.createElement('img')
  image.style.height = '50px'
  image.style.margin = '10px'
  image.src = 'bg.jpeg'
  const newContent = image

  li1.appendChild(newContent)

const li2 = document.createElement("LI");
li2.innerHTML = 'home'
const li3 = document.createElement("LI");
li3.innerHTML = 'about'
const li4 = document.createElement("LI");
li4.innerHTML = 'contact'


document.getElementById("body").appendChild(navbar);
document.getElementById("navbar").appendChild(list);

document.getElementById("list").appendChild(logoA);
document.getElementById("logoA").appendChild(li1);
document.getElementById('logoA').href = "http://www.cnn.com/"

document.getElementById("list").appendChild(logoB)
document.getElementById("logoB").appendChild(li2);
document.getElementById('logoB').href = "http://www.cnn.com/"

document.getElementById("list").appendChild(li3)
document.getElementById("list").appendChild(li4)



const title = document.createElement("H2");
title.innerHTML = 'My Web Page'
title.style.color = 'white'
title.style.fontSize = '80px'

document.getElementById("body").appendChild(title);

const main = document.createElement("P");
main.innerHTML = 'rewbiuadsgh dsdsgou dsaiadfsg d afs dsfiuygdsfa dafsougdsa o ads8 fdsouydgfasof dasfg ads8pg fadsog dsaog fadsoigads ifdasgfoiuadgs adsi dfsaiouyg adfs'
main.style.background = 'white'
main.style.opacity = '0.7'
main.style.padding = '20px'
main.style.margin = '100px'






document.getElementById("body").appendChild(main);

  

