enum Player {
    None = "",
    X = "X",
    O = "O"
}

class TicTacToe {
    public board: Player[][];
    private currentPlayer: Player;

    constructor() {
      this.board = [
          [Player.None, Player.None, Player.None],
          [Player.None, Player.None, Player.None],
          [Player.None, Player.None, Player.None]
      ];
      this.currentPlayer = Player.X;
    }

    public makeMove(row: number, col: number): void {
      if (this.board[row][col] === Player.None) {
        this.board[row][col] = this.currentPlayer;
        this.checkWinner();
        this.switchPlayer();
      }
    }

    private switchPlayer(): void {
      this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    }

    private checkWinner(): void {
      // Check rows
      for (let i = 0; i < 3; i++) {
          if (
              this.board[i][0] !== Player.None &&
              this.board[i][0] === this.board[i][1] &&
              this.board[i][1] === this.board[i][2]
          ) {
              alert(`${this.board[i][0]} wins!`);
              this.resetGame();
              return;
          }
      }

      // Check columns
      for (let i = 0; i < 3; i++) {
          if (
              this.board[0][i] !== Player.None &&
              this.board[0][i] === this.board[1][i] &&
              this.board[1][i] === this.board[2][i]
          ) {
              alert(`${this.board[0][i]} wins!`);
              this.resetGame();
              return;
          }
      }

      // Check diagonals
      if (
          this.board[0][0] !== Player.None &&
          this.board[0][0] === this.board[1][1] &&
          this.board[1][1] === this.board[2][2]
      ) {
          alert(`${this.board[0][0]} wins!`);
          this.resetGame();
          return;
      }

      if (
          this.board[0][2] !== Player.None &&
          this.board[0][2] === this.board[1][1] &&
          this.board[1][1] === this.board[2][0]
      ) {
          alert(`${this.board[0][2]} wins!`);
          this.resetGame();
          return;
      }

      // Check for a tie
      if (this.isBoardFull()) {
          alert("It's a tie!");
          this.resetGame();
      }
    }

    private isBoardFull(): boolean {
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              if (this.board[i][j] === Player.None) {
                  return false;
              }
          }
      }
      return true;
    }

    private resetGame(): void {
      // Reset the board and current player
      this.board = [
          [Player.None, Player.None, Player.None],
          [Player.None, Player.None, Player.None],
          [Player.None, Player.None, Player.None]
      ];
      this.currentPlayer = Player.X;
      renderBoard();
    }
}

const ticTacToe = new TicTacToe();

function renderBoard(): void {
  const boardElement = document.getElementById("board");

  // Clear the board element before rendering
  boardElement.innerHTML = "";

  for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.textContent = ticTacToe.board[row][col];
          cell.addEventListener("click", () => onCellClick(row, col));
          boardElement.appendChild(cell);
      }
  }
}

function onCellClick(row: number, col: number): void {
  ticTacToe.makeMove(row, col);
  renderBoard();
}

renderBoard();
