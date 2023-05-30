
setInterval(timer, 100);

function timer() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    /* Analog */
    const hourHand = document.querySelector('[data-hours-hand]')
    const minuteHand = document.querySelector('[data-minutes-hand]')
    const secondHand = document.querySelector('[data-seconds-hand]')

    const secondsRatio = seconds / 60;
    const minutesRatio = (secondsRatio + minutes) / 60;
    const hoursRatio = (minutesRatio + hours) / 12;

    secondHand.style.transform = `translateX(-50%) 
                                  rotateZ(${360*secondsRatio}deg)`;
    minuteHand.style.transform = `translateX(-50%) 
                                  rotateZ(${360*minutesRatio}deg)`;
    hourHand.style.transform = `translateX(-50%)
                                rotateZ(${360*hoursRatio}deg)`;
    
    

    /* Digital */
    const hourDigit = document.querySelector('[data-hours-digit]')
    const minuteDigit = document.querySelector('[data-minutes-digit]')
    const secondsColon = document.querySelector('[data-AM-PM]')

    secondsColon.innerHTML = (hours < 12) ? 'AM' : 'PM';
    hours -= (hours > 12) ? 12 : 0;
    hourDigit.innerHTML = hours;
    minuteDigit.innerHTML = (minutes < 10) ? '0' + minutes : minutes;

}