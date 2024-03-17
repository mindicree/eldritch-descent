let weapons = [
    { name: "Longsword", type: "sword", damage: '1d10', rarity: "common" },
    { name: "Jiansword", type: "sword", damage: '2d6', rarity: "uncommon" },
    { name: "Katana", type: "sword", damage: '3d4', rarity: "rare"},
    { name: "Vrexhed, Sword of Flames", type: "sword", damage: '2d6', bonus: '1d6', bonus_chance: 0.5, rarity: "super"},
    { name: "Mlothlil, Blood Sword Of The Underdark", type: "sword", damage: '3d6', bonus: '2d6', bonus_chance: 0.25, rarity: "ultra"},
    { name: "Ghridrrist, The Slayer Of Calamity", type: "sword", damage: '5d6', bonus: '3d6', bonus_chance: 0.25, rarity: "legendary" },
]

function getRandomWeapon() {
    let rarity = getRarity()
    let rarityWeapons = weapons.filter((e) => e.rarity == rarity)
    let chosenWeapon = Object.assign({}, rarityWeapons[Math.floor(Math.random() * rarityWeapons.length)])

    // chosenWeapon.cursed = Math.random() < 0.1 ? this.$refs.curses.getRandomCurse() : null
    chosenWeapon.variable = Math.random() + 0.5

    return chosenWeapon;
}

function getRarity() {
    let chance = Math.random();
    if (chance < 0.005) return "legendary";     // 0.5%
    if (chance < 0.03) return "ultra";          // 2.5%
    if (chance < 0.10) return "super";          // 7%
    if (chance < 0.25) return "rare";           // 15%
    if (chance < 0.50) return "uncommon";       // 25%
    return "common";                            // 50%
}

function calculateAttackDamage(weapon, strength) {
    let dice = weapon.damage.split('d')
    let base_damage = 0;
    let critical = Math.random() < 0.05
    for(let i = 0; i < dice[0] * (critical ? 2 : 1); i++) {
        base_damage += Math.max(Math.round(Math.random() * dice[1]), 1)
    }

    let bonus_damage = 0;
    let bonus = false;
    if (weapon.hasOwnProperty('bonus_chance') && Math.random() < weapon.bonus_chance) {
        let bonus_dice = weapon.bonus.split('d')
        bonus = true;
        for(let i = 0; i < bonus_dice[0]; i++) {
            bonus_damage += Math.max(Math.round(Math.random() * bonus_dice[1]), 1)
        }
    }

    let strength_damage = Math.floor(strength / 4)

    return {
        base_damage: base_damage,
        bonus_damage: bonus_damage,
        strength_damage: strength_damage,
        criticalHit: critical,
        bonus: bonus,
        variable: weapon.variable,
        total_damage: Math.floor((base_damage + bonus_damage + strength_damage) * weapon.variable)
    }

}