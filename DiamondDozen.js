// Claim the coins while defeating the marauding ogres.
// If you defeat the ogre with the most health, the rest of the ogres will run!
// Coins vanish quickly after appearing, so be sure to find the best value!

function findMostHealth(enemies) {
    var target = null;
    var targetHealth = 0;
    var enemyIndex = 0;
    while(enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        if(enemy.health > targetHealth) {
            target = enemy;
            targetHealth = enemy.health;
        }
        enemyIndex += 1;
    }
    return target;
}

// Make a function named findOptimalCoin which returns the coin with the best value.
// Coins rapidly appear and disappear, so pick the best coin.
// Optimize your path by going for the coin with the largest value over distance.
function findOptimalCoin(coins){
    var b = 0; 
    var a = null;
    var d = 0;
    while ( b < coins.length) {
        var c = coins[b];
        if ( c.value  > d ) {
            d = c.value;
            a = c;
            
           
            }
            b++;
        }
        return a;
    }

while(true) {
    var enemies = hero.findEnemies();
    enemy = findMostHealth(enemies);
    if(enemy && enemy.health > 15) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    } else {
        coins = hero.findItems();
        coin = findOptimalCoin(coins);
        //coin = findOptimalCoin(coins); // ∆ Uncomment this once you've written the function.
        if(coin) {
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
    }
}

