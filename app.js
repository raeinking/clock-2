const secendhand = document.querySelector('.secend');
const minutehand = document.querySelector('.minute');
const hourhand = document.querySelector('.hour');

function setdate() {
    const currentTime = new Date();

    const secend = currentTime.getSeconds();
    const secenddeg = ((secend / 60) * 360) + 90;
    secendhand.style.transform = `rotate(${secenddeg}deg)`;


    const minute = currentTime.getMinutes();
    const minutedeg = ((minute / 60) * 360) + 90;
    minutehand.style.transform = `rotate(${minutedeg}deg)`;


    const hour = currentTime.getHours();
    const hourdeg = ((hour / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hourdeg}deg)`;

}

setInterval(setdate, 1000)