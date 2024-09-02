abstract class Game {
  public playGame(): void {
    this.startGame();
    this.play();
    this.endGame();
  }
  protected abstract startGame(): void;
  protected abstract play(): void;
  protected endGame(): void {
    console.log("Ending the game...");
  }
}
class Chess extends Game {
  protected startGame(): void {
    console.log("Setting up the chess board...");
  }

  protected play(): void {
    console.log("Playing chess game...");
  }
}

class Soccer extends Game {
  protected startGame(): void {
    console.log("Kicking off the soccer game...");
  }

  protected play(): void {
    console.log("Playing soccer game...");
  }
}

export const templateMethod = () => {
  console.log("Chess Game:");
  const chessGame = new Chess();
  chessGame.playGame();

  console.log("\nSoccer Game:");
  const soccerGame = new Soccer();
  soccerGame.playGame();
};
