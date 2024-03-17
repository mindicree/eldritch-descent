let enemies = [
    {
        name: "Ak'lodri Spawn",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 30,
        maxHP: 30,
        currentHP: 30,
        chanceToHit: 30,
        chanceToRun: 80,
        dodge: 10,
        damage: '3-7',
        resist: 0,
        spawn: 20,
    },
    {
        name: "Orvach-Ho-Iih",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 50,
        maxHP: 50,
        currentHP: 50,
        chanceToHit: 40,
        chanceToRun: 50,
        dodge: 10,
        damage: '5-10',
        resist: 0,
        spawn: 10,
    },
    {
        name: "Necna",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 80,
        maxHP: 80,
        currentHP: 80,
        chanceToHit: 25,
        chanceToRun: 20,
        dodge: 10,
        damage: '2-6',
        resist: 5,
        spawn: 10,
    },
    {
        name: "Khorvarc",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 40,
        maxHP: 40,
        currentHP: 40,
        chanceToHit: 60,
        chanceToRun: 40,
        dodge: 10,
        damage: '5-15',
        resist: 0,
        spawn: 10,
    },
    {
        name: "Nioigon",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 100,
        maxHP: 100,
        currentHP: 100,
        chanceToHit: 90,
        chanceToRun: 10,
        dodge: 10,
        damage: '1-3',
        resist: 0,
        spawn: 10,
    },
    {
        name: "Vuggdah",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 50,
        maxHP: 50,
        currentHP: 50,
        chanceToHit: 40,
        chanceToRun: 70,
        dodge: 10,
        damage: '10-15',
        resist: 0,
        spawn: 10,
    },
    {
        name: "They That Speak",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 40,
        maxHP: 40,
        currentHP: 40,
        chanceToHit: 40,
        chanceToRun: 70,
        dodge: 10,
        damage: '8-15',
        resist: 10,
        spawn: 5,
    },
    {
        name: "L'Loigo",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 60,
        maxHP: 60,
        currentHP: 60,
        chanceToHit: 40,
        chanceToRun: 20,
        dodge: 10,
        damage: '20-30',
        resist: 0,
        spawn: 5,
    },
    {
        name: "Atamil, The Nightwalker",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 50,
        maxHP: 50,
        currentHP: 50,
        chanceToHit: 50,
        chanceToRun: 10,
        dodge: 10,
        damage: '10-15',
        resist: 0,
        spawn: 5,
    },
    {
        name: "At-tstondeha",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 80,
        maxHP: 80,
        currentHP: 80,
        chanceToHit: 65,
        chanceToRun: 25,
        dodge: 10,
        damage: '20-30',
        resist: 15,
        spawn: 1,
    },
    {
        name: "Yithashaquoph",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 125,
        maxHP: 125,
        currentHP: 125,
        chanceToHit: 35,
        chanceToRun: 50,
        dodge: 10,
        damage: '35-50',
        resist: 20,
        spawn: 1,
    },
    {
        name: "It That Tells Of Psychoreal",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 60,
        maxHP: 60,
        currentHP: 60,
        chanceToHit: 95,
        chanceToRun: 10,
        dodge: 10,
        damage: '10-30',
        resist: 0,
        spawn: 1,
    },
    {
        name: "Orvach-Ho-Iih",
        image: "/static/img/enemies/placeholder.jpg",
        baseHP: 75,
        maxHP: 75,
        currentHP: 75,
        chanceToHit: 75,
        chanceToRun: 50,
        dodge: 10,
        damage: '0-99',
        resist: 0,
        spawn: 1,
    },
]

function getRandomEnemy() {
    let pool = []
    enemies.forEach((r) => {
        for(let i = 0; i < r.spawn; i++) {
            pool.push(r)
        }
    })
    enemy = JSON.parse(
                JSON.stringify(
                    pool[Math.floor(Math.random() * pool.length)]
                )
            )
    hpMod = Math.random() + 0.5
    enemy.maxHP = Math.floor(enemy.baseHP * hpMod);
    enemy.currentHP = Math.floor(enemy.baseHP * hpMod);
    enemy.chanceToHit *= Math.random() + 1
    enemy.chanceToRun *= Math.random() + 1
    enemy.damageMod = Math.random() + 0.5

    return enemy;
}

function calculateEnemyDamage(enemy, levelMultiplier) {
    let returnDamage = {}
    let range = enemy.damage.split('-')
    let diff = range[1] - range[0];
    let damage = Math.random() * range[0] + diff
    damage *= levelMultiplier
    damage *= enemy.damageMod
    returnDamage.base = damage
    critical = Math.random() < 0.05
    returnDamage.base *= critical ? 2 : 1
    returnDamage.critical = critical

    return returnDamage
}