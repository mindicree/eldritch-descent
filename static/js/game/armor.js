let armor = [
    { name: "Leather", chanceReduction: 20, damageReduction: 0, rarity: "common" },
    { name: "Hide", chanceReduction: 20, damageReduction: 5, rarity: "uncommon" },
    { name: "Scale Mail", chanceReduction: 15, damageReduction: 10, rarity: "rare" },
    { name: "Chain Mail", chanceReduction: 15, damageReduction: 10, rarity: "super" },
    { name: "Magic Armor", chanceReduction: 15, damageReduction: 20, rarity: "ultra" },
    { name: "Red Dragonscale", chanceReduction: 25, damageReduction: 25, rarity: "legendary" },
]

function getRandomArmor() {
    let rarity = getRarity()
    let rarityArmor = armor.filter((e) => e.rarity == rarity)
    let chosenArmor = Object.assign({}, rarityArmor[Math.floor(Math.random() * rarityArmor.length)])

    // chosenWeapon.cursed = Math.random() < 0.1 ? this.$refs.curses.getRandomCurse() : null
    chosenArmor.variable = Math.random() + 0.5

    return chosenArmor;
}