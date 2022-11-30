const images = ["1.jpg","2.jpg",'3.jpg','4.jpg'];

const randomImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector('body');

body.style.backgroundImage = `url(assets/img/${randomImage})`
