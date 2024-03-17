let potions = [
    {
        id: 1,
        name: "Potion of Healing",
        rarity: "common",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.currentHP = Math.min(player.stats.maxHP, Math.round(player.stats.currentHP + (player.stats.maxHP / (Math.random()*10+2))))
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 1
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 2,
        name: "Potion of Greater Healing",
        rarity: "uncommon",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.currentHP = Math.min(player.stats.maxHP, Math.round(player.stats.currentHP + (player.stats.maxHP / (Math.random()*5+2))))
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 2
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 3,
        name: "Potion of Restoration",
        rarity: "rare",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.currentHP = player.stats.maxHP
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 3
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 4,
        name: "Potion of Greater Might",
        rarity: "super",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.strength += Math.floor(Math.random() * 5 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 4
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 5,
        name: "Potion of Greater Flow",
        rarity: "super",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.dexterity += Math.floor(Math.random() * 5 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 5
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 6,
        name: "Potion of Greater Endurance",
        rarity: "super",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.constitution += Math.floor(Math.random() * 5 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 6
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 7,
        name: "Potion of Greater Knowledge",
        rarity: "super",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.intelligence += Math.floor(Math.random() * 5 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 7
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 8,
        name: "Potion of Greater Insight",
        rarity: "super",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.wisdom += Math.floor(Math.random() * 5 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 8
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 9,
        name: "Potion of Greater Charm",
        rarity: "super",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.charisma += Math.floor(Math.random() * 5 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 9
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 10,
        name: "Potion of Greater Body",
        rarity: "ultra",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.hp = Math.floor(Math.random() * 4 + 2)
                        player.stats.strength = Math.floor(Math.random() * 4 + 2)
                        player.stats.dexterity = Math.floor(Math.random() * 4 + 2)
                        player.stats.constitution = Math.floor(Math.random() * 4 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 10
                            }
                        }))
                    }
                }
            }))
        }
    },
    {   id: 11,
        name: "Potion of Greater Mind",
        rarity: "ultra",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.sanity = Math.floor(Math.random() * 4 + 2)
                        player.stats.intelligence = Math.floor(Math.random() * 4 + 2)
                        player.stats.wisdom = Math.floor(Math.random() * 4 + 2)
                        player.stats.charisma = Math.floor(Math.random() * 4 + 2)
                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 11
                            }
                        }))
                    }
                }
            }))
        }
    },
    {
        id: 12,
        name: "Potion of Ascension",
        rarity: "legendary",
        click: () => {
            console.log('potions.js - using a potion')
            window.dispatchEvent(new CustomEvent('use-potion', {
                detail: {
                    effect:(player={}) => {
                        player.stats.hp = Math.floor(Math.random() * 4 + 2)
                        player.stats.strength = Math.floor(Math.random() * 4 + 2)
                        player.stats.dexterity = Math.floor(Math.random() * 4 + 2)
                        player.stats.constitution = Math.floor(Math.random() * 4 + 2)
                        player.stats.sanity = Math.floor(Math.random() * 4 + 2)
                        player.stats.intelligence = Math.floor(Math.random() * 4 + 2)
                        player.stats.wisdom = Math.floor(Math.random() * 4 + 2)
                        player.stats.charisma = Math.floor(Math.random() * 4 + 2)

                        window.dispatchEvent(new CustomEvent('remove-potion', {
                            detail: {
                                id: 12
                            }
                        }))
                    }
                }
            }))
        }
    },
]

function getRandomPotion() {
    let rarity = getRarity()
    let rarityPotion = potions.filter((e) => e.rarity == rarity)
    let chosenPotion = Object.assign({}, rarityPotion[Math.floor(Math.random() * rarityPotion.length)])

    return chosenPotion;
}