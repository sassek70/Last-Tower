

class EnemySquare {
    constructor(health, damage, speed, value, playerLevel) {
        this.health = health,
        this.damage = damage,
        this.speed = speed,
        this.value = value
    }
}


class EnemyCircle {
    constructor(health, damage, speed, value, playerLevel) {
        this.health = health + (playerLevel * 1.5),
        this.damage = damage + 1.25,
        this.speed = speed * 2.5,
        this.value = value * 2
    }
}



export const Spawner = (health, damage, speed, value, playerLevel) => {
    const enemy = Math.floor(Math.random() * (11 - 1) + 1)
    if (enemy % 2 != 0) {
        console.log("Circle")
        const enemyToSpawn = new EnemyCircle(health = 1, damage = 1, speed = 1, value = 2, playerLevel = 1)
        return enemyToSpawn
    } else {
        console.log("Square")
        const enemyToSpawn =new EnemySquare(health = 1, damage = 1, speed = 1, value = 2, playerLevel = 1)
        return enemyToSpawn
    }
}

