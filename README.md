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

```
