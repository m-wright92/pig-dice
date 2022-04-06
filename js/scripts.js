function Game() {
  this.players = {};
}

function Player(name, roundScore, totalScore, turnNumber) {
  this.name = name;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
  this.turnNumber = turnNumber;
}

Player.prototype.roundCount = function (rollValue) {
  this.roundScore += rollValue;
  console.log(player.roundScore);
};

Player.prototype.totalCount = function (roundScore) {
  this.totalScore += roundScore;
  this.roundScore = 0;
  if (winCond(this.roundScore, this.totalScore) === true) {
    console.log("You win!");
  }
};

function winCond(roundScore, totalScore) {
  if (roundScore + totalScore >= 100) {
    return true;
  } else {
    return false;
  }
}

Player.prototype.turnCount = function (turnNumber) {
  if (this.turnNumber % this.turnNumber === 0) {
    this.turnNumber += 1;
  }
  console.log(player.turnNumber);
};
