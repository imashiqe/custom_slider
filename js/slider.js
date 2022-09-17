const images = [
    'images/banner_01.png',
    'images/banner_02.png',
    'images/banner_03.png',
    'images/banner_04.png',
    'images/banner_05.png',
];

let imgIndex = 0;
const img = document.getElementById('slider_image');
setInterval( ()=>{
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    // console.log(imgLink)
    img.setAttribute('src', imgLink)
    imgIndex++;
} ,3000) 