// console.log('a')

const hour = document.querySelector("#hours")
const minute = document.querySelector("#minutes")
const second = document.querySelector("#seconds")

// setTimeout( seconds() , 1000)
// setTimeout( minutes() , 60000)
// setTimeout( hours() , 3600000)

aSecond()

function aSecond() {
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
      
      else if (hourValue === 24) {
        hourValue = '00'
      }

      second.innerHTML = newValue
      minute.innerHTML = minuteValue
      hour.innerHTML = hourValue


      setTimeout(aSecond, 1000)
    }
