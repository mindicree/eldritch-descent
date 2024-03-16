document.addEventListener('alpine:init', () => {
    Alpine.data('weapons', () => ({
        weapons: [
            { name: "Longsword", type: "sword", damage: '1d8', rarity: "common" },
            { name: "Katana", type: "sword", damage: '2d6', rarity: "rare"},
            { name: "Vrexhed, Sword of Flames", type: "sword", damage: '2d6', bonus: '1d6', bonus_chance: 0.5, rarity: "super"},
            { name: "Mlothlil, Blood Sword Of The Underdark", type: "sword", damage: '3d6', bonus: '2d6', bonus_chance: 0.25, rarity: "ultra"},
            { name: "Ghridrrist, The Slayer Of Calamity", type: "sword", damage: '5d6', bonus: '3d6', bonus_chance: 0.25, rarity: "legendary" },
        ],

        getRandomWeapon() {
            let rarity = this.getRarity()
            let rarityWeapons = this.weapons.filter((e) => e.rarity == rarity)
            let chosenWeapon = Object.assign({}, rarityWeapons[Math.floor(Math.random() * rarityWeapons.length)])

            // chosenWeapon.cursed = Math.random() < 0.1 ? this.$refs.curses.getRandomCurse() : null

            return chosenWeapon;
        },

        getRarity() {
            let chance = Math.random();
            if (chance < 0.005) return "legendary";     // 0.5%
            if (chance < 0.03) return "ultra";          // 2.5%
            if (chance < 0.10) return "super";          // 7%
            if (chance < 0.25) return "rare";           // 15%
            if (chance < 0.50) return "uncommon";       // 25%
            return "common";                            // 50%
        },
    }))
})