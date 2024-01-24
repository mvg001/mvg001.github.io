'use strict';

const divHojas = document.querySelector('#hojas');
divHojas.style.width = '100%';
divHojas.style.height = '100%';
divHojas.style.position = 'absolute';
const MAX_DELTA = 4;
const MIN_DELTA = 1;
const MAX_WIDTH = 60;
const MIN_WIDTH = 30;
const REFRESH_INTERVAL = 20; // milliseconds
const NUMBER_LEAVES = 10;
const TOTAL_SIMULATION_TIME = 60000; // 60 seconds
const SQRT2 = Math.sqrt(2.0);

function createValue(minValue, maxValue) {
    return (maxValue - minValue) * Math.random() + minValue;
}

function createHojas(nHojas, division) {
    let hojas = [];
    for (let i = 0; i < nHojas; i++) {
        let hoja = document.createElement('img');
        hoja.src = 'hoja.png';
        let size = createValue(MIN_WIDTH,MAX_WIDTH);
        hoja.style.width = `${size}px`;
        hoja.style.transform = `rotate(${createValue(0,360)}deg)`;
        size *= SQRT2;
        let divHoja = document.createElement('div');
        divHoja.style.position='absolute';
        divHoja.appendChild(hoja);
        let h = {
            div: divHoja,
            size: size,
            x: (window.innerWidth - size) * Math.random(),
            y: (window.innerHeight - size) * Math.random(),
            deltaY: createValue(MIN_DELTA,MAX_DELTA),
        }
        divHoja.style.left = `${h.x}px`;
        divHoja.style.top = `${h.y}px`;
        division.appendChild(divHoja);
        hojas.push(h);
        // console.log(h);
    }
    return hojas;
}

function moveHojas(hojas) {
    hojas.forEach(hoja => {
        hoja.y = (hoja.y + hoja.deltaY) % (window.innerHeight - hoja.size);
        hoja.div.style.top = `${hoja.y}px`;
        // console.log(hoja);
    });
}

function animate(duration,draw) {
    let start = Date.now(); // remember start time

    let timer = setInterval(function () {
        // how much time passed from the start?
        let timePassed = Date.now() - start;

        if (timePassed >= duration) {
            clearInterval(timer); // finish the animation after duration milliseconds
            return;
        }

        // draw the animation at the moment timePassed
        draw(timePassed);

    }, REFRESH_INTERVAL);
}

let hojas = createHojas(NUMBER_LEAVES,divHojas);
animate(TOTAL_SIMULATION_TIME,(x)=>moveHojas(hojas));