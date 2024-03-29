var cubes = [
    {  
        id: 1,
        sidesColor: "rgba(0, 236, 0, 1.0)",
        shadowColor: "rgba(0, 255, 0, 1.0)",
        shadowColor1: "rgba(0, 255, 0, 0.2)",
        shadowColor2: "rgba(0, 255, 0, 0.4)",
        shadowColor3: "rgba(0, 255, 0, 0.6)",
        shadowColor4: "rgba(0, 255, 0, 0.8)",
        shadowColor5: "rgba(0, 255, 0, 1.0)"
    },
    {  
        id: 2,
        sidesColor: "rgba(236, 0, 0, 1.0)",
        shadowColor: "rgba(255, 0, 0, 1.0)",
        shadowColor1: "rgba(255, 0, 0, 0.2)",
        shadowColor2: "rgba(255, 0, 0, 0.4)",
        shadowColor3: "rgba(255, 0, 0, 0.6)",
        shadowColor4: "rgba(255, 0, 0, 0.8)",
        shadowColor5: "rgba(255, 0, 0, 1.0)"
    },
    {  
        id: 3,
        sidesColor: "rgba(0, 0, 236, 1.0)",
        shadowColor: "rgba(0, 0, 255, 1.0)",
        shadowColor1: "rgba(0, 0, 255, 0.2)",
        shadowColor2: "rgba(0, 0, 255, 0.4)",
        shadowColor3: "rgba(0, 0, 255, 0.6)",
        shadowColor4: "rgba(0, 0, 255, 0.8)",
        shadowColor5: "rgba(0, 0, 255, 1.0)"
    },
    {  
        id: 4,
        sidesColor: "rgba(236, 236, 236, 1.0)",
        shadowColor: "rgba(255, 255, 255, 1.0)",
        shadowColor1: "rgba(255, 255, 255, 0.2)",
        shadowColor2: "rgba(255, 255, 255, 0.4)",
        shadowColor3: "rgba(255, 255, 255, 0.6)",
        shadowColor4: "rgba(255, 255, 255, 0.8)",
        shadowColor5: "rgba(255, 255, 255, 1.0)"
    },
    {  
        id: 5,
        sidesColor: "rgba(195, 0, 236, 1.0)",
        shadowColor: "rgba(214, 0, 255, 1.0)",
        shadowColor1: "rgba(214, 0, 255, 0.2)",
        shadowColor2: "rgba(214, 0, 255, 0.4)",
        shadowColor3: "rgba(214, 0, 255, 0.6)",
        shadowColor4: "rgba(214, 0, 255, 0.8)",
        shadowColor5: "rgba(214, 0, 255, 1.0)"
    },
    {  
        id: 6,
        sidesColor: "rgba(0, 170, 236, 1.0)",
        shadowColor: "rgba(0, 189, 255, 1.0)",
        shadowColor1: "rgba(0, 189, 255, 0.2)",
        shadowColor2: "rgba(0, 189, 255, 0.4)",
        shadowColor3: "rgba(0, 189, 255, 0.6)",
        shadowColor4: "rgba(0, 189, 255, 0.8)",
        shadowColor5: "rgba(0, 189, 255, 1.0)"
    },
    {  
        id: 7,
        sidesColor: "rgba(236, 145, 0, 1.0)",
        shadowColor: "rgba(255, 164, 0, 1.0)",
        shadowColor1: "rgba(255, 164, 0, 0.2)",
        shadowColor2: "rgba(255, 164, 0, 0.4)",
        shadowColor3: "rgba(255, 164, 0, 0.6)",
        shadowColor4: "rgba(255, 164, 0, 0.8)",
        shadowColor5: "rgba(255, 164, 0, 1.0)"
    },
    {  
        id: 8,
        sidesColor: "rgba(236, 0, 236, 1.0)",
        shadowColor: "rgba(255, 0, 255, 1.0)",
        shadowColor1: "rgba(255, 0, 255, 0.2)",
        shadowColor2: "rgba(255, 0, 255, 0.4)",
        shadowColor3: "rgba(255, 0, 255, 0.6)",
        shadowColor4: "rgba(255, 0, 255, 0.8)",
        shadowColor5: "rgba(255, 0, 255, 1.0)"
    },
];

var activeCube = cubes[0];
async function changeCube() {
    document.body.style.setProperty('--sides-color', 'black');
    document.body.style.setProperty('--shadow-color', 'black');
    document.body.style.setProperty('--shadow-color-1', 'black');
    document.body.style.setProperty('--shadow-color-2', 'black');
    document.body.style.setProperty('--shadow-color-3', 'black');
    document.body.style.setProperty('--shadow-color-4', 'black');
    document.body.style.setProperty('--shadow-color-5', 'black');
    await sleep(2000);

    document.body.style.setProperty('--sides-color', activeCube.sidesColor);
    document.body.style.setProperty('--shadow-color', activeCube.shadowColor);
    document.body.style.setProperty('--shadow-color-1', activeCube.shadowColor1);
    document.body.style.setProperty('--shadow-color-2', activeCube.shadowColor2);
    document.body.style.setProperty('--shadow-color-3', activeCube.shadowColor3);
    document.body.style.setProperty('--shadow-color-4', activeCube.shadowColor4);
    document.body.style.setProperty('--shadow-color-5', activeCube.shadowColor5);

    activeCube = activeCube.id === cubes.length ? cubes[0] : cubes[activeCube.id];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

changeCube();
setInterval(() => {
    changeCube();
}, 6000);

