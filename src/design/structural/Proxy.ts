interface PremiumFeatures {
    purchaseSkin(skinName: string): void;
    viewLeaderboard(): void;
  }
  
  class RealPlayer implements PremiumFeatures {
    private playerName: string;
  
    constructor(playerName: string) {
      this.playerName = playerName;
    }
  
    purchaseSkin(skinName: string): void {
      console.log(`${this.playerName} purchased the skin: ${skinName}`);
    }
  
    viewLeaderboard(): void {
      console.log(`${this.playerName} is viewing the leaderboard.`);
    }
  }
  
  class PlayerProxy implements PremiumFeatures {
    private realPlayer: RealPlayer | null = null;
    private isAuthenticated: boolean = false;
  
    constructor(private playerName: string) {}
  
    authenticate(password: string): void {
      if (password === "valorant123") {
        this.isAuthenticated = true;
        this.realPlayer = new RealPlayer(this.playerName);
        console.log(`${this.playerName} authenticated successfully.`);
      } else {
        console.log(`Authentication failed for ${this.playerName}.`);
      }
    }
  
    purchaseSkin(skinName: string): void {
      if (this.isAuthenticated && this.realPlayer) {
        this.realPlayer.purchaseSkin(skinName);
      } else {
        console.log(
          `Access denied. ${this.playerName} must authenticate to purchase skins.`
        );
      }
    }
  
    viewLeaderboard(): void {
      if (this.isAuthenticated && this.realPlayer) {
        this.realPlayer.viewLeaderboard();
      } else {
        console.log(
          `Access denied. ${this.playerName} must authenticate to view the leaderboard.`
        );
      }
    }
  }
  
  export const proxy = () => {
    const proxy = new PlayerProxy("Jett");
  
    proxy.purchaseSkin("Elderflame Vandal");
    proxy.viewLeaderboard();
  
    proxy.authenticate("valorant123");
  
    proxy.purchaseSkin("Elderflame Vandal");
    proxy.viewLeaderboard();
  };
  