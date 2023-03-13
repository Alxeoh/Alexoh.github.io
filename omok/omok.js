// 붙잡았어
const board = document.getElementById("board");

// 요소를 만들어야됨
const map = document.createElement("div");
map.className = "map";

// 변수 설정
let win = 0;
let turn = 1;
const size = 10;

setMap();

function setMap() {
    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            const tile = document.createElement("div");
            const id = `y${i}x${k}`;
            // tile.setAttribute("id", id);
            tile.id = id;
            tile.className = "tile";

            
            tile.addEventListener("click", e => {
                console.log(id); // 
                if(tile.innerText ===""){
                    tile.innerText = turn == 1 ? "⚫️" : "⚪️";
                    winCheck();
                    turn = turn === 1 ? 2 : 1;                
                }
                else{
                    alert("이미 선택된 자리입니다.")
                }
                console.log(win);
            });
            map.append(tile);
        }
    }
    board.append(map);
}

function winCheck() {
    checkHori();
    checkVerti();
    checkDiag();
    checkReverse();
    if(win!= 0){
        alert(`p${turn} Win!!`);
        reset();
    }
}

function checkHori() {
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            const target = `y${i}x${j}`;
            const tile = board.querySelector(`#${target}`);
            const text = tile.innerText;
            if(text === (turn === 1 ? "⚫️" : "⚪️")){
                count++;
            }
            if(count >= 5){
                win = turn;
            }
        }
    }
}

function checkVerti(){
    for( let i = 0; i<size; i++){
        let count = 0;
        for(let j = 0; j<size;j++){
            const target = `y${j}x${i}`;
            const tile = board.querySelector(`#${target}`);
            const text = tile.innerText;
            if(text === (turn === 1 ? "⚫️" : "⚪️")){
                count++;
            }
            if(count >= 5){
                win = trun;
            }
        }
    }
}

function checkDiag(){
    for(let i =0; i<=size/2;i++){
        for(let j = 0; j<=size/2;j++){
            const target1 = `y${i}x${j}`;
            const tile1 = board.querySelector(`#${target1}`);
            const text1 = tile1.innerText; 
            if(text1 === (turn === 1 ? "⚫️" : "⚪️")){   
                let count = 0;
                for(let k = 0; k<size/2;k++){
                    const target2 = `y${i+k}x${j+k}`;
                    const tile2 = board.querySelector(`#${target2}`);
                    const text2 = tile2.innerText;
                    if(text2 === (turn === 1 ? "⚫️" : "⚪️")){   
                        count++;
                    }
                    if(count >= 5){
                        win = turn;
                    }
                }
            }
        }
    }
}

function checkReverse(){
    for(let i = 4; i < size; i++){
        for(let j = 0; j <= size/2;j++){
            const target1 = `y${i}x${j}`;
            const tile1 = board.querySelector(`#${target1}`);
            const text1 = tile1.innerText;
            if(text1 === (turn === 1 ? "⚫️" : "⚪️")){
                let count = 0;
                for(let k = 0; k<size/2;k++){
                    const target2 = `y${i-k}x${j+k}`;
                    const tile2 = board.querySelector(`#${target2}`);
                    const text2 = tile2.innerText;
                    if(text2 === (turn === 1 ? "⚫️" : "⚪️")){
                        count++;
                    }
                    if(count >= 5){
                        win = turn;
                    }
                }
            }
        }
    }
}
function reset(){
    turn = 1;
    win = 0;
    location.reload();   
}