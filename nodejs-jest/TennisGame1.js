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
        switch (this.player1.points) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (this.player1.points >= 4 || this.player2.points >= 4) {
        var minusResult = this.player1.points - this.player2.points;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.player1.points;
            else {
                score += "-";
                tempScore = this.player2.points;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

export default TennisGame1