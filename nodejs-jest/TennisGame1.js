import Player from './player'

class TennisGame1 {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.players = [this.player1, this.player2]
        this.pointMapping = ['Love', 'Fifteen', 'Thirty', 'Forty']
    }

    wonPoint(playerName) {
        const player = this.playerWithName(playerName)

        if (player) player.wonPoint()
    }

    playerWithName(playerName) {
        return this.players.find(player => player.name === playerName)
    }

    getAdvantage() {
        let advantagePlayer = null
        let difference = 0

        if (this.player1.points > this.player2.points) {
            advantagePlayer = this.player1
            difference = this.player1.points - this.player2.points
        } else if (this.player1.points < this.player2.points) {
            advantagePlayer = this.player2
            difference = this.player2.points - this.player1.points
        }

        return [advantagePlayer, difference]
    }

    getScore() {
        const [advantagePlayer, difference] = this.getAdvantage()

        if (this.isGameTied()) {
            return this.handleEqualScores()
        } else if (this.hasGamePassedWinningThreshold() && difference >= 2) {
            return `Win for ${advantagePlayer.name}`
        } else if (this.hasGamePassedWinningThreshold() && difference < 2) {
            return `Advantage ${advantagePlayer.name}`
        }

        return `${this.pointMapping[this.player1.points]}-${this.pointMapping[this.player2.points]}`
    }

    hasGamePassedWinningThreshold() {
        return Math.max(this.player1.points, this.player2.points) >= 4
    }

    isGameTied() {
        return this.player1.points === this.player2.points
    }

    handleEqualScores() {
        const equalScores = ['Love-All', 'Fifteen-All', 'Thirty-All']
        if (this.player1.points < 3) {
            return equalScores[this.player1.points]
        } else {
            return 'Deuce'
        }
    }
}

export default TennisGame1