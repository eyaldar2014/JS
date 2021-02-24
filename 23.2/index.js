
const hour = document.querySelector("#hours")
const minute = document.querySelector("#minutes")
const second = document.querySelector("#seconds")
const btn = document.querySelector("#btn")

aSecond()

function aSecond() {

  if(btn.innerHTML === 'start'){
    return
  }

  let newValue = parseInt(second.innerHTML)
  let minuteValue = parseInt(minute.innerHTML)
  let hourValue = parseInt(hour.innerHTML)

  newValue += 1
  if (newValue < 10) {
    newValue = '0' + newValue.toString()
  }

  else if (newValue === 60) {
    newValue = '00'

    minuteValue += 1
  }
  if (minuteValue < 10) {
    minuteValue = '0' + minuteValue.toString()
  }

  else if (minuteValue === 60) {
    minuteValue = '00'

    hourValue += 1
  }
  if (hourValue < 10) {
    hourValue = '0' + hourValue.toString()
  }

  else if (hourValue === 60) {
    hourValue = '00'
    return
  }

  second.innerHTML = newValue
  minute.innerHTML = minuteValue
  hour.innerHTML = hourValue
  
  if(stop){

  }

  setTimeout(aSecond, 1)
}

function clickIt(){
  if(btn.innerHTML === 'start'){
    console.log('a')
    
    btn.innerHTML = 'stop'
    aSecond()
  }

  else {
    console.log('a')
    btn.innerHTML = 'start'
  }
}