/**
 *
 * Creare in JavaScript una griglia delle dimensioni impostate dall'utente attraverso una select.
 * Ogni casella conterrà un numero univoco da 1 alla dimensione impostata.
 * Ogni volta che clicco su una casella, questa si colora di verde se è di numero pari e di rosso se è di numero dispari.
 *
 */

const userInput = document.getElementById("dimension");

const setBtn = document.querySelector(".set-dimension");

const container = document.querySelector(".container");



setBtn.addEventListener("click", () => {
    let gridDimension=userInput.value;
    let cellNumber;
    let cellPerside;
    container.innerHTML="";
    switch(gridDimension){
        case "1":
            cellNumber = 100;
            cellPerside = 10;
            break;

        case "2": 
            cellNumber=81 ;
            cellPerside=9;
            break;
        case "3":
            cellNumber=49;
            cellPerside=7;
            break;
    }
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.append(grid);
    const numList = [];

    for(let i=1; i <= cellNumber; i++)
    {

        const num= uniqueRandomInt(1, cellNumber, numList);        
        numList.push(num);
        const square = createGridSquare(cellPerside);
        const tXt = document.createElement("div");
        grid.append(square);
        square.append(tXt);
        tXt.append(num);
        tXt.style.display="none";

        square.addEventListener("click", () => {divClick(tXt, square)});     
    }
});

function divClick(divTxt, divColor) {
    divTxt.style.display= "block";
    (divTxt.innerText%2 == 0) ? divColor.classList.add("green") :  divColor.classList.add("red");
}

function createGridSquare (cell){
    const node= document.createElement("div");
    node.style.width= `calc(100% / ${cell})`;
    node.style.height= `calc(100% / ${cell})`;
    node.classList.add("square");
    return node;
};

function uniqueRandomInt(min, max, list){
    let num=0;

    do {
        num = Math.floor(Math.random() * (max - min+1) + min);
    }
    while(list.includes(num))
    
    return num;
}

