Got dice to roll and reset on a 1.
Next Up:
-Display roll (img)
-Hold button
-Turn change
-Display total
-CPU behavior
-Win/lose screen
-Restart
-Styling
-Hard Mode

```javascript
Describe: roundCount();
Test: "This will add a number to the round score"
Code: const game = new Game();
      const player = new Player("player", 0, 0);
      player.roundCount(5);
Expected output: 5


Describe: totalCount();
Test: "It will add roundCount to total count"
Code: const game = new Game();
      const player = new Player("player", 12, 0);
      player.totalCount(12)
Expected Output: Player {"player", 0, 12}

Test: "It will dynamically add roundCount to total count"
Code: const game = new Game();
      const player = new Player("player", 12, 0);
      player.totalCount(player.roundScore)
Expected Output: Player {"player", 0, 12}


Describe: winCond();
Test: "This will recgonize when a score >= 100"
Code: const player = new Player("player", 100, 0);
      player.totalCount(player.roundScore);
Expected output: "You win!"


Describe: turnCount();
Test: "It will count the amount of turns the game has had"
Code: const game = new Game();
      const player = new Player("player", 12, 0, 1);
      player.turnCount(player.turnNumber);
Expected output: 2


Describe: assignId()
Test: "It will assign an id to the player"
Code: const game = new Game();
      const player = new Player("player", 12, 0, 1);
      game.addPlayer(player);
      player
Expected Output: Player {name: 'player', roundScore: 12, totalScore: 0, turnNumber: 1, id: 1}


Describe: findPlayer()
Test: "It will find the player by Id"
Code: const game = new Game();
      const player = new Player("player", 12, 0, 1);
      game.addPlayer(player);
      game.findPlayer(1);
Expected Output: Player {name: 'player', roundScore: 12, totalScore: 0, turnNumber: 1, id: 1}

Describe: diceRoll();
Test: "This will randomize a number from 1-6"
Code: diceRoll();
Expected output: "A number from 1-6"

Describe: roundCount()
Test: "It will add rollValue to roundScore"
Code: const game = new Game();
      const player = new Player("player", 12, 0, 1);
      game.addPlayer(player);
      player.roundCount(diceroll())
Expected: 'a number 1-6 larger than the last'


Test: "It will end the turn with 0 points on a 1"
Code: const game = new Game();
      const player = new Player("player", 12, 0, 1);
      game.addPlayer(player);
      player.roundCount(1);
Expected: Player {name: 'player', roundScore: 0, totalScore: 0, turnNumber: 0, id: 1}

// Describe: totalCount();
// Test: "It will start new turn on turn end"
// Code: const game = new Game();
//       const player = new Player("player", 0, 0, 1);
//       game.addPlayer(player);
//       player.roundCount(1)
// Expected: Player {name: 'player', roundScore: 0, totalScore: 0, turnNumber: 2, id: 1}
```
