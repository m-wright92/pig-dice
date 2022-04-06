function Game() {
  this.players = {};
  this.roundNumber = 1;
  this.currentId = 0;
}

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};

Game.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Game.prototype.findPlayer = function (id) {
  if (this.players[id] != undefined) {
    return this.players[id];
  }
  return false;
};

function Player(name, roundScore, totalScore, turnNumber) {
  this.name = name;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
  this.turnNumber = turnNumber;
}

Player.prototype.roundCount = function (rollValue) {
  this.roundScore += rollValue;
  console.log(rollValue);
  if (rollValue === 1) {
    this.roundScore = 0;
    turnOver = true;
  }
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
  this.turnNumber += 1;
  if (game.findPlayer(1).turnNumber % game.findPlayer(1).turnNumber === 0) {
    this.roundNumber += 1;
  }
  console.log(this.roundNumber);
};

function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

// UI
let game = new Game();

$(document).ready(function () {
  let player;
  let cpu;
  let turnOver = false;
  $("#game-start").click(function () {
    const playerName = $("input#nameInput").val();
    $("#game-info").addClass("hidden");
    $("#game").removeClass("hidden");
    $("#player").text(playerName);
    $("#round-num").text(game.roundNumber);
    let player = new Player(playerName, 0, 0, 1);
    let cpu = new Player("CPU", 0, 0, 1);
    game.addPlayer(player);
    game.addPlayer(cpu);
  });
  $("#roll").click(function () {
    game.players[1].roundCount(diceRoll());
    $("#round").text(game.players[1].roundScore);
  });
});
