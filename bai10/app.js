var Player;
(function (Player) {
    Player["None"] = "";
    Player["X"] = "X";
    Player["O"] = "O";
})(Player || (Player = {}));
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.board = [
            [Player.None, Player.None, Player.None],
            [Player.None, Player.None, Player.None],
            [Player.None, Player.None, Player.None]
        ];
        this.currentPlayer = Player.X;
    }
    TicTacToe.prototype.makeMove = function (row, col) {
        if (this.board[row][col] === Player.None) {
            this.board[row][col] = this.currentPlayer;
            this.checkWinner();
            this.switchPlayer();
        }
    };
    TicTacToe.prototype.switchPlayer = function () {
        this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    };
    TicTacToe.prototype.checkWinner = function () {
        // Check rows
        for (var i = 0; i < 3; i++) {
            if (this.board[i][0] !== Player.None &&
                this.board[i][0] === this.board[i][1] &&
                this.board[i][1] === this.board[i][2]) {
                alert("".concat(this.board[i][0], " wins!"));
                this.resetGame();
                return;
            }
        }
        // Check columns
        for (var i = 0; i < 3; i++) {
            if (this.board[0][i] !== Player.None &&
                this.board[0][i] === this.board[1][i] &&
                this.board[1][i] === this.board[2][i]) {
                alert("".concat(this.board[0][i], " wins!"));
                this.resetGame();
                return;
            }
        }
        // Check diagonals
        if (this.board[0][0] !== Player.None &&
            this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2]) {
            alert("".concat(this.board[0][0], " wins!"));
            this.resetGame();
            return;
        }
        if (this.board[0][2] !== Player.None &&
            this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0]) {
            alert("".concat(this.board[0][2], " wins!"));
            this.resetGame();
            return;
        }
        // Check for a tie
        if (this.isBoardFull()) {
            alert("It's a tie!");
            this.resetGame();
        }
    };
    TicTacToe.prototype.isBoardFull = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] === Player.None) {
                    return false;
                }
            }
        }
        return true;
    };
    TicTacToe.prototype.resetGame = function () {
        // Reset the board and current player
        this.board = [
            [Player.None, Player.None, Player.None],
            [Player.None, Player.None, Player.None],
            [Player.None, Player.None, Player.None]
        ];
        this.currentPlayer = Player.X;
        renderBoard();
    };
    return TicTacToe;
}());
var ticTacToe = new TicTacToe();
function renderBoard() {
    var boardElement = document.getElementById("board");
    // Clear the board element before rendering
    boardElement.innerHTML = "";
    var _loop_1 = function (row) {
        var _loop_2 = function (col) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = ticTacToe.board[row][col];
            cell.addEventListener("click", function () { return onCellClick(row, col); });
            boardElement.appendChild(cell);
        };
        for (var col = 0; col < 3; col++) {
            _loop_2(col);
        }
    };
    for (var row = 0; row < 3; row++) {
        _loop_1(row);
    }
}
function onCellClick(row, col) {
    ticTacToe.makeMove(row, col);
    renderBoard();
}
renderBoard();
