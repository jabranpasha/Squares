let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30;
//creating Z-index counter
let highestZ = 0;
document.querySelector("#add").onclick = addSquare;
document.querySelector("#change").onclick = changeColor;

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = getRandomColor();
    square.style.top = parseInt(Math.random() *(300-50  )) + "px";
    square.style.left = parseInt(Math.random()*(700-50)) + "px";
    //Giving each square an onclick for the fourth rubric criteria
    square.onclick=changeSquare;
    squareArea.append(square);
}

function changeSquare(){
    //Make the functionality to remove the square by checking if its the highest z-index AND that it's not 0 
    //because an empty z-index gets treated as 0 ("" == 0 is true. We don't want to remove squares on the first click.)
    if (this.style.zIndex == highestZ && this.style.zIndex > 0){
        this.remove();
    }
    else{
        //Make the current square's z-Index the new highest and then increment the counter
        this.style.zIndex = highestZ + 1;
        highestZ++;
    }
    
}

function changeColor(){
    //I initially tried this without using the loop because I didn't realize querySelectorAll
    //returned a NodeList. Now I'm using a loop because this way actually lets me change each square.
    //I also had to specify the class of the div because the function was also changing the square area (which is the background)

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