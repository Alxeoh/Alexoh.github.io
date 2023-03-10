const BOARD_SIZE = 15; // 오목판 크기
const PLAYER1_COLOR = '#000000'; // 플레이어 1의 돌 색상
const PLAYER2_COLOR = '#ffffff'; // 플레이어 2의 돌 색상

let board = []; // 오목판 배열
let currentPlayer = 1; // 현재 플레이어

const boardElement = document.getElementById('board'); // 오목판 요소
const resetButton = document.getElementById('reset'); // 재시작 버튼 요소

// 오목판 초기화 함수
function initBoard() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        let row = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            row.push(0);
            let square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = i;
            square.dataset.col = j;
            square.addEventListener('click', handleClick);
            boardElement.appendChild(square);
        }
        board.push(row);
    }
}

// 클릭 이벤트 핸들러 함수
function handleClick(event) {
    let row = parseInt(event.target.dataset.row);
    let col = parseInt(event.target.dataset.col);
    if (board[row][col] !== 0) {
        return;
    }
    let color = currentPlayer === 1 ? PLAYER1_COLOR : PLAYER2_COLOR;
    event.target.style.backgroundColor = color;
    board[row][col] = currentPlayer;
    if (checkWinner(row, col)) {
        alert(`플레이어 ${currentPlayer} 승리!`);
        resetBoard();
    } else if (checkTie()) {
        alert('무승부!');
        resetBoard();
    } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
}

// 승자 확인 함수
function checkWinner(row, col) {
    if (checkHorizontal(row) || checkVertical(col) || checkDiagonal1(row, col) || checkDiagonal2(row, col)) {
        return true;
    }
    return false;
}

// 가로 방향으로 승리 여부 확인 함수
function checkHorizontal(row) {
    let count = 0;
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[row][i] === currentPlayer) {
            count++;
            if (count === 5) {
                return true;
            }
        } else {
            count = 0;
        }
    }
    return false;
}

// 세로 방향으로 승리 여부 확인 함수
function checkVertical(col) {
    let count = 0;
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[i][col] === currentPlayer) {
            count++;
            if (count === 5) {
                return true;
            }
        } else {
            count = 0;
        }
    }
    return false;
}

// 대각선(↘) 방향으로 승리 여부 확인 함수
function checkDiagonal1(row, col) {
}

initBoard();
handleClick();