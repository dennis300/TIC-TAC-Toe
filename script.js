// HI, I MADE TWO DIFFERENT WAYS TO CREATE THE TIC TAC TOE GAME, Make sure you uncomment any of the section before you test code.

const restart = document.getElementById('restartBtn');
let tiles = Array.from(document.getElementsByClassName('tile'));
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];
 let board = ['', '', '', '', '', '', '', '', '']; 
 let Player = 'x';


// THIS IS MY FIRST METHOD TO CREATE THE TIC TAC TOE GAME

function startGame() {
    tiles.forEach(tile => tile.addEventListener("click", tileClicked)); // LOOP THROUGH THE TILES TO ADD AN EVENT TO EACH 
}

// FUNCTION FOR THE CLICKED TILE
function tileClicked() {
    const cellIndex = this.getAttribute("cellIndex"); // GETTING THE cellindex attribut for each tile
    // UPDATING THE INDEX VALUE OF EACH TILE TO THE BOARD ARRAY TO MATCH INDIVIDUAL TILE AND SWITCHING BETWEEN PLAYERS
    if(!board[cellIndex]){
        board[cellIndex] = Player;
        this.innerText = Player;
        checkWinner()
        Player = Player == 'x' ? 'o' : 'x';
    }
    
    
}

startGame();
// CHECK WINNER FUNCTION
function checkWinner(){
    for(let i = 0; i < winningConditions.length; i++){
        const condition = winningConditions[i];
        const cellA = board[condition[0]];
        const cellB = board[condition[1]];
        const cellC = board[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            alert('Player ' + Player + ' winner');
            break;
        }
        
    }
}

restart.addEventListener('click' , function () {
    location.reload();
})
// THIS IS MY SECOND METHOD TO CREATE A TIC TAC TOE GAME

//  tiles.forEach(function (tile) {
//     tile.addEventListener('click' , function(){
//         if (tile.innerHTML != '') {
//             return;
//         }
//         tile.innerHTML = Player;
//         checkWinner()
//         Player = Player == 'x' ? 'o' : 'x';
//     })
//  })


// function checkWinner(){
//     winningConditions.forEach(function (combination) {
//          let check = combination.every(idx => tiles[idx].innerHTML == Player );
//          if(check){
//              alert('winner');
//          }
//     })
//  }


  

