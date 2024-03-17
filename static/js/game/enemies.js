let enemies = [
    {
        name: "Ak'lodri Spawn",
        image: "/static/img/enemies/aklodri-spawn.jpg",
        baseHP: 50,
        maxHP: 50,
        currentHP: 50,
        chanceToHit: 75,
        chanceToRun: 80,
        dodge: 10,
        damage: '3-7',
        resist: 0,
        spawn: 8,
    },
    {
        name: "Orvach-Ho-Iih",
        image: "/static/img/enemies/orvach-ho-iih.jpg",
        baseHP: 60,
        maxHP: 60,
        currentHP: 60,
        chanceToHit: 50,
        chanceToRun: 50,
        dodge: 10,
        damage: '5-10',
        resist: 0,
        spawn: 8,
    },
    {
        name: "Necna",
        image: "/static/img/enemies/necna.jpg",
        baseHP: 80,
        maxHP: 80,
        currentHP: 80,
        chanceToHit: 70,
        chanceToRun: 20,
        dodge: 10,
        damage: '2-6',
        resist: 5,
        spawn: 8,
    },
    {
        name: "Khorvarc",
        image: "/static/img/enemies/v.jpg",
        baseHP: 40,
        maxHP: 40,
        currentHP: 40,
        chanceToHit: 60,
        chanceToRun: 40,
        dodge: 10,
        damage: '5-15',
        resist: 0,
        spawn: 8,
    },
    {
        name: "Nioigon",
        image: "/static/img/enemies/nioigon.jpg",
        baseHP: 100,
        maxHP: 100,
        currentHP: 100,
        chanceToHit: 90,
        chanceToRun: 10,
        dodge: 10,
        damage: '10-15',
        resist: 30,
        spawn: 8,
    },
    {
        name: "Vuggdah",
        image: "/static/img/enemies/vuggdah.jpg",
        baseHP: 50,
        maxHP: 50,
        currentHP: 50,
        chanceToHit: 40,
        chanceToRun: 70,
        dodge: 10,
        damage: '10-15',
        resist: 0,
        spawn: 8,
    },
    {
        name: "They That Speak",
        image: "/static/img/enemies/they-that-speak.jpg",
        baseHP: 40,
        maxHP: 40,
        currentHP: 40,
        chanceToHit: 80,
        chanceToRun: 70,
        dodge: 10,
        damage: '8-15',
        resist: 10,
        spawn: 5,
    },
    {
        name: "L'Loigo",
        image: "/static/img/enemies/lloigo.jpg",
        baseHP: 60,
        maxHP: 60,
        currentHP: 60,
        chanceToHit: 50,
        chanceToRun: 20,
        dodge: 10,
        damage: '20-30',
        resist: 0,
        spawn: 5,
    },
    {
        name: "Atamil, The Nightwalker",
        image: "/static/img/enemies/atamil.jpg",
        baseHP: 80,
        maxHP: 80,
        currentHP: 50,
        chanceToHit: 75,
        chanceToRun: 10,
        dodge: 10,
        damage: '10-15',
        resist: 0,
        spawn: 5,
    },
    {
        name: "At-tstondeha",
        image: "/static/img/enemies/At-tstondeha.jpg",
        baseHP: 80,
        maxHP: 80,
        currentHP: 80,
        chanceToHit: 65,
        chanceToRun: 5,
        dodge: 50,
        damage: '10-25',
        resist: 15,
        spawn: 1,
    },
    {
        name: "Yithashaquoph",
        image: "/static/img/enemies/Yithashaquoph.jpg",
        baseHP: 150,
        maxHP: 150,
        currentHP: 150,
        chanceToHit: 50,
        chanceToRun: 50,
        dodge: 10,
        damage: '35-50',
        resist: 20,
        spawn: 1,
    },
    {
        name: "It That Tells Of Psychoreal",
        image: "/static/img/enemies/psychoreal-2.jpg",
        baseHP: 150,
        maxHP: 150,
        currentHP: 150,
        chanceToHit: 95,
        chanceToRun: 2,
        dodge: 10,
        damage: '10-30',
        resist: 0,
        spawn: 1,
    },
    {
        name: "Aizagnish",
        image: "/static/img/enemies/aizagnish-2.jpg",
        baseHP: 100,
        maxHP: 100,
        currentHP: 100,
        chanceToHit: 10,
        chanceToRun: 5,
        dodge: 80,
        damage: '50-100',
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