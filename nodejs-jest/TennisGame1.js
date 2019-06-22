import Player from './player'

var TennisGame1 = function(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.players = [this.player1, this.player2]
};

TennisGame1.prototype.wonPoint = function(playerName) {
    const player = this.playerWithName(playerName)

    if (player) player.wonPoint()
};

TennisGame1.prototype.playerWithName = function(playerName) {
    return this.players.find(player => player.name === playerName)
}

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;

    if (this.player1.points === this.player2.points) {
        const equalScores = ['Love-All', 'Fifteen-All', 'Thirty-All']
        if (this.player1.points < 3) {
            score = equalScores[this.player1.points]
        } else {
            score = 'Deuce'
        }
    }

    else if (this.player1.points >= 4 || this.player2.points >= 4) {
        var minusResult = this.player1.points - this.player2.points;

        // const [advantagePlayer, difference] = this.getAdvantage()

        // method to compare who has higher score
        // difference(player1Score, player2Score)
        // e.g. difference(3, 4) = player2 has 1 point more
        // if the score >= 2, then "win for player X"
        // BUT essentially it kind of is the same logic as this existing block of code
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";

        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";

    }

    else {
        const pointMapping = ['Love', 'Fifteen', 'Thirty', 'Forty']
        score = `${pointMapping[this.player1.points]}-${pointMapping[this.player2.points]}`
    }
    return score;
};

export default TennisGame1