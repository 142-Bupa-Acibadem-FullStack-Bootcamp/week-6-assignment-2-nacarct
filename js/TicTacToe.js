let turn = true;
let symbol = 'X';
let playerX = [];
let playerO = [];
let moveCount = 0;
let winCounterX = 0;
let winCounterO = 0;
let start = true;

const winnerCells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function restartGame(){
    //location.reload();

    start = true;
    clearCells();
    clearWinner();

    turn = true;
    symbol = 'X';
    playerX = [];
    playerO = [];
    moveCount = 0;
    winCounterX = 0;
    winCounterO = 0;
}

function winnerSymbol(s,color){
    //clearCells();
    start = false;
    document.getElementById("winner").style.color = color;
    document.getElementById("winner").innerHTML= "Winner is " + s;
}

function noWinner(){
    clearCells();
    start = false;
    document.getElementById("winner").style.color = "yellow";
    document.getElementById("winner").innerHTML= "No winner. It's Draw!";
}

function clearCells(){
    for (let i = 0; i < 9 ; i++){
        document.getElementById(i.toString()).innerHTML = "<p id=\"p" + i + "\"></p>";
        document.getElementById(i.toString()).style.color = "black";
    }
}

function clearWinner(){
    document.getElementById("winner").innerHTML="";
}

function cellClick(e){

    let element  = document.getElementById("p" + e);

    if (start && element.innerHTML !== 'X' && element.innerHTML !== 'O'){

        if (turn){
            symbol = 'X';
            element.style.color = "blue";
            element.style.border.fontcolor("black");
            playerX.push(parseInt(e));
        }
        else{
            symbol = 'O';
            element.style.color = "red";
            playerO.push(parseInt(e));
        }

        turn = !turn;
        element.innerHTML = symbol;

        moveCount++;

        if (moveCount >= 5){
            checkWinX();
        }
    }
}

function checkWinX(){

    for (let i = 0; i < winnerCells.length; i++){

        winCounterX = 0;
        winCounterO = 0;

        for (let x = 0; x < playerX.length; x++){
            if (winnerCells[i].includes(playerX[x])){
                winCounterX++;

                if (winCounterX === 3){
                    break;
                }
            }
        }

        for (let o = 0; o < playerO.length; o++){
            if (winnerCells[i].includes(playerO[o])){
                winCounterO++;

                if (winCounterO === 3){
                    break;
                }
            }
        }

        if (winCounterX === 3){
            console.log("Winner X");
            winnerSymbol("X","blue");
            break;
        }
        else if (winCounterO === 3){
            console.log("Winner O");
            winnerSymbol("O","red");
            break;
        }

    }

    if (moveCount === 9 && (winCounterX<3 && winCounterO<3)){
        noWinner();
    }

}

