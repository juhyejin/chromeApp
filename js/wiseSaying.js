
const url = 'https://api.adviceslip.com/advice'

fetch(url)
    .then(response => response.json())
    .then(data => {
        const wiseSayData = data.slip;
        const wiseSayArea = document.querySelector('#wise-saying-area')

        wiseSayArea.innerText = wiseSayData.advice;
    })
    .catch(err => {
        alert('에러가 발생했습니다. 콘솔을 확인해주세요!')
        console.log(err)
    });
