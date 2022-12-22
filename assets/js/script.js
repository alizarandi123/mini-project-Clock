const ss =document.querySelector(".ss");
const mm =document.querySelector(".mm");
const hh =document.querySelector(".hh");
const timeDigital= document.querySelector(".time-digital");

function prevenFlick(element,degree) {
    if(degree===90){
        element.style.transition="all 0.0s"
    }
}
function setDate(){
    const now = new Date();
    const seconds=now.getSeconds()
    const secoundsDegree=(seconds / 60 ) * 360 + 90;
    ss.style.transform =`rotate(${secoundsDegree}deg)`
    const minutes = now.getMinutes()
    const minutesDegree = (minutes / 60 ) *360 + (seconds /60 ) * 6 + 90;
    mm.style.transform = `rotate(${minutesDegree}deg)`;
    const hours = now.getHours();
    const hoursDeegree = (hours/12)+360 +(seconds/60)*30+90;
    hh.style.transform=`rotate(${hoursDeegree}deg)`;
    timeDigital.innerHTML =`${hours}:${minutes < 10 ? "0" + `${minutes}` : minutes
    }:${seconds < 10 ? "0" + `${seconds}` : seconds}`;
    prevenFlick(ss,secoundsDegree)
    prevenFlick(mm,minutesDegree)
    prevenFlick(hh,hoursDeegree)
}
setInterval(setDate,1000)
setDate()