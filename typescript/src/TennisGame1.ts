import { TennisGame } from './TennisGame';
import { Player } from './Player';

export class TennisGame1 implements TennisGame {
  private player1: Player;
  private player2: Player;
  private scoreMapping = ['Love', 'Fifteen', 'Thirty', 'Forty']

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1.name) {
      this.player1.incrementPoint()
    } else {
      this.player2.incrementPoint()
    }
  }

  getScore(): string {
    if (this.isEqualpoints()) {
      return (this.player1.points < 3) ? `${this.pointsToText(this.player1.points)}-All` : 'Deuce'
    } else if (this.hasAdvantage()) {
      const [player, diffScore]: [Player, number] = this.advantageToPlayer();
      const prefix: string = (diffScore >= 2) ? 'Win for' : 'Advantage'

      return `${prefix} ${player.name}`
    }

    return `${this.pointsToText(this.player1.points)}-${this.pointsToText(this.player2.points)}`;
  }

  private pointsToText(score: number): string {
    return this.scoreMapping[score]
  }

  private advantageToPlayer(): [Player, number] | null {
    if (this.player1.points === this.player2.points) return null

    if (this.player1.points > this.player2.points) {
      return [ this.player1, (this.player1.points - this.player2.points) ]
    } else {
      return [ this.player2, (this.player2.points - this.player1.points) ]
    }
  }

  private isEqualpoints(): boolean {
    return this.player1.points === this.player2.points
  }

  private hasAdvantage(): boolean {
    return this.player1.points >= 4 || this.player2.points >= 4
  }
}
