let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30;
document.querySelector("#add").onclick = addSquare;
document.querySelector("#change").onclick = changeColor;

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    square.style.top = parseInt(Math.random() *(300-50  )) + "px";
    square.style.left = parseInt(Math.random()*(700-50)) + "px";
    squareArea.append(square);
}

function changeColor(){
    //I initially tried this without using the loop because I didn't realize querySelectorAll
    //returned a list. Doing it this way actually lets me change each square
    //I also had to specify the class of the div because the function was also changing the square area
    //which is the background

    let squares = document.querySelectorAll("div.square");
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
}

for (let i = 0; i < squareCount;i++){
    addSquare();
} 

function getRandomColor(){
    let possibleLetters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i<6;i++){
        let position = parseInt(Math.random() * 
        possibleLetters.length);
        color+=possibleLetters.charAt(position);
    }
    return color;
}