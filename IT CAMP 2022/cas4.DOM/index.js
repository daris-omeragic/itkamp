const second = document.querySelector("#second")
const minute = document.querySelector("#minute")
const hour = document.querySelector("#hour")




const rotate = function(element, deg){
    element.style.transform = `rotate(${deg+90}deg)`
  }

  const matchCurrentTime = function(){
    const now = new Date()
    const currentSeconds = now.getSeconds()
    const currentMinutes = now.getMinutes()
    const currentHours = now.getHours()

    const secondsRotateDeg = (currentSeconds/60)*360
    const minutesRotateDeg = (currentMinutes/60)*360 +(currentSeconds/60)*6
    const hoursRotateDeg = (currentHours/12)*360+(currentMinutes/60)*30

    rotate(second, secondsRotateDeg)
    rotate(minute, minutesRotateDeg)
    rotate(hour, hoursRotateDeg)
  }
setInterval(function(){
    matchCurrentTime()
    }, 100);


