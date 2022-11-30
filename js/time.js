const timeArea = document.querySelector('#time-area')

function getNowTime(){
    const nowTime = new Date()
    const Hours = nowTime.getHours().toString().padStart(2,'0')
    const minutes = nowTime.getMinutes().toString().padStart(2,'0')
    const seconds = nowTime.getSeconds().toString().padStart(2,'0')
    timeArea.innerText = `${Hours} :  ${minutes} : ${seconds}`
}

getNowTime()
setInterval(getNowTime, 1000 )
