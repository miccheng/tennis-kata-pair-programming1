import Player from './player'

class TennisGame1 {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.players = [this.player1, this.player2]
    }

    wonPoint(playerName) {
        const player = this.playerWithName(playerName)

        if (player) player.wonPoint()
    }

    playerWithName(playerName) {
        return this.players.find(player => player.name === playerName)
    }

    getAdvantage() {
        if (this.player1.points > this.player2.points) {
            return [this.player1, (this.player1.points - this.player2.points)]
        } else {
            return [this.player2, (this.player2.points - this.player1.points)]
        }
    }

    getScore() {
        var score = "";

        if (this.player1.points === this.player2.points) {
            const equalScores = ['Love-All', 'Fifteen-All', 'Thirty-All']
            if (this.player1.points < 3) {
                score = equalScores[this.player1.points]
            } else {
                score = 'Deuce'
            }
        } else if (this.player1.points >= 4 || this.player2.points >= 4) {
            const [advantagePlayer, difference] = this.getAdvantage()

            if (difference >= 2) {
                score = `Win for ${advantagePlayer.name}`
            } else {
                score = `Advantage ${advantagePlayer.name}`
            }
        } else {
            const pointMapping = ['Love', 'Fifteen', 'Thirty', 'Forty']
            score = `${pointMapping[this.player1.points]}-${pointMapping[this.player2.points]}`
        }
        return score;
    }
}

export default TennisGame1