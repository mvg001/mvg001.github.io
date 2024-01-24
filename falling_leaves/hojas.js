'use strict';

const divHojas = document.querySelector('#hojas');
divHojas.style.width = '100%';
divHojas.style.height = '100%';
divHojas.style.position = 'absolute';
const TOTAL_SIMULATION_TIME = 60000; // == 60 seconds
const MAX_Y_DELTA = 2;
const MIN_Y_DELTA = 0.5;
const MAX_WIDTH = 60;
const MIN_WIDTH = 30;
const MIN_ROTATION_DELTA = -1; // degrees
const MAX_ROTATION_DELTA = 1; // degrees
const FRAME_REFRESH = 20; // milliseconds
const NUMBER_LEAVES = 10;
const SQRT2 = Math.sqrt(2.0);

function createValue(minValue, maxValue) {
    return (maxValue - minValue) * Math.random() + minValue;
}

function createHojas(nHojas, division, hojaFilename) {
    let hojas = [];
    for (let i = 0; i < nHojas; i++) {
        let hoja = document.createElement('img');
        hoja.src = hojaFilename;
        let size = createValue(MIN_WIDTH,MAX_WIDTH);
        hoja.style.width = `${size}px`;
        size *= SQRT2;
        let divHoja = document.createElement('div');
        divHoja.style.position='absolute';
        divHoja.appendChild(hoja);
        let h = {
            div: divHoja,
            hoja: hoja,
            size: size,
            x: (window.innerWidth - size) * Math.random(),
            y: (window.innerHeight - size) * Math.random(),
            deltaY: createValue(MIN_Y_DELTA,MAX_Y_DELTA),
            r: createValue(0,360),
            deltaR: createValue(MIN_ROTATION_DELTA,MAX_ROTATION_DELTA),
        }
        hoja.style.transform = `rotate(${h.r}deg)`;
        divHoja.style.left = `${h.x}px`;
        divHoja.style.top = `${h.y}px`;
        division.appendChild(divHoja);
        hojas.push(h);
        // console.log(h);
    }
    return hojas;
}

function moveHojas(hojas) {
    hojas.forEach(h => {
        h.y = (h.y + h.deltaY) % (window.innerHeight - h.size);
        h.div.style.top = `${h.y}px`;
        h.r = (h.r + h.deltaR) % 360;
        h.hoja.style.transform = `rotate(${h.r}deg)`;
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

    }, FRAME_REFRESH);
}

let hojas = createHojas(NUMBER_LEAVES,divHojas,'hoja.png');
animate(TOTAL_SIMULATION_TIME,(x)=>moveHojas(hojas));