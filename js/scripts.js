function Game() {
  this.players = {};
  this.roundNumber = 1;
  this.currentId = 0;
  this.playerTurn = 1;
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
  game.players[game.playerTurn].roundScore += rollValue;
  console.log(rollValue);
  if (rollValue === 1) {
    game.players[game.playerTurn].roundScore = 0;
    game.endTurn();
  }
  return rollValue
};

Game.prototype.endTurn = function() {
  if (game.playerTurn === 1) {
    game.playerTurn = 2;
    console.log("it is now player 2's turn")
    game.players[1].totalCount(game.players[1].roundScore)
  } else {
    game.playerTurn = 1;
    console.log("it is now player 1's turn")
    game.players[2].totalCount(game.players[2].roundScore)
  }
  player.roundScore = 0;
  game.players[game.playerTurn].turnCount(this.turnNumber);
}

Player.prototype.totalCount = function (roundScore) {
  this.totalScore += roundScore;
  this.roundScore = 0;
}

Game.prototype.winCond = function(roundScore, totalScore) {
  if (roundScore + totalScore >= 100) {
    return true;
  } else {
    return false;
  }
}

Player.prototype.turnCount = function (turnNumber) {
  this.turnNumber += 1;
  if (game.findPlayer(1).turnNumber % game.findPlayer(2).turnNumber === 0) {
    game.roundNumber += 1;
  }
  console.log(this.roundNumber);
};

Game.prototype.diceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
}

// UI
let game = new Game();

$(document).ready(function () {
  let player;
  let cpu;
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
    let roll = game.diceRoll();
    let img = "img/dice" + roll + ".jpg";
    game.players[1].roundCount(roll);
    $("img#dice").attr("src", img);
    $("#round").text(game.players[game.playerTurn].roundScore);
    $("#round-num").text(game.roundNumber);
  });
  $("#hold").click(function () {
    game.endTurn()
    $("#player1").text(game.players[1].totalScore)
    $("#player2").text(game.players[2].totalScore)
    $("#round").text(0);
    $("#round-num").text(game.roundNumber);
  })
  $("button").click(function() {
    let text = game.playerTurn
    if(game.playerTurn === 1) {
      $("#player-1-background").addClass("currentPlayer");
      $("#player-2-background").removeClass("currentPlayer");
    }else {
      $("#player-2-background").addClass("currentPlayer");
      $("#player-1-background").removeClass("currentPlayer");
    }
    if (game.winCond(game.players[game.playerTurn].roundScore, game.players[game.playerTurn].totalScore) === true) {
      $("#player-number").text(text)
    }
  })
});