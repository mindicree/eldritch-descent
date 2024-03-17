function printToTextBox(toPrint, then) {
    console.log(toPrint)
    window.dispatchEvent(new CustomEvent('textbox', {detail: {
        text: toPrint,
        after: then,
    }}))
}

document.addEventListener('alpine:init', () => {
    Alpine.data('gameState', () => ({
        currentScreen: 'loading',
        gameStarted: false,
        exitRouteAvailable: false,
        currentLevel: 1,
        player: null,
        saveData: {
            currentPlayer: {},
            currentLevel: {},
            currentOptions: [],
            previousPlayers: [],
        },
        textboxDisplayText: "",
        textboxFullText: "",
        showContinueButton: false,
        currentEnemy: null,
        disableInteractions: false,
        hideTextBox: false,
        showCombatButtons: false,
        roundCounter: 0,
        init() {
            this.previousData = localStorage.getItem('ed_save') || this.getDefaultSave()
            setTimeout(() => {
                this.currentScreen = 'title'
            }, 1000);
        },
        getDefaultSave() {
            return {
                currentPlayer: {},
                currentLevel: {},
                currentOptions: [],
                previousPlayers: [],
            }
        },
        startGame() {
            this.gameStarted = true;
            this.currentScreen = 'intro'
            this.player = this.getNewPlayer()
            this.runEvent('run-intro')
        },
        runEvent(name, data={}) {
            window.dispatchEvent(new CustomEvent(name, data))
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        printText(text, then = null) {
            this.textboxFullText = text;
            this.textboxDisplayText = "";
            for (let i = 0; i < this.textboxFullText.length; i++) {
                setTimeout(() => {
                    this.textboxDisplayText = this.textboxFullText.substring(0, i+1)
                }, 20 * i)
            }
            setTimeout(() => { 
                if (then) {
                    then()
                }
            }, 20 * this.textboxFullText.length + 100)
        },
        getNewPlayer() {
            let hp = this.getRandomStat() + 20
            let player = {
                name: this.getRandomName(),
                stats: {
                    maxHP: hp,
                    currentHP: hp,
                    strength: this.getRandomStat(),
                    dexterity: this.getRandomStat(),
                    constitution: this.getRandomStat(),
                    intelligence: this.getRandomStat(),
                    wisdom: this.getRandomStat(),
                    charisma: this.getRandomStat(),
                    luck: this.getRandomStat(),
                    sanity: this.getRandomStat(),
                },
                weapon: 0, //index of selected weapon
                armor: 0, //index of selected armor
                gold: 10,
                inventory: {
                    weapons: [
                        getRandomWeapon()
                    ],
                    armor: [
                        getRandomArmor()
                    ],
                    potions: [],
                }
            }
            return player
        },
        getRandomStat() {
            return 50 + (Math.floor(Math.random() * 40 - 20))
        },
        getRandomName() {
            let names = ['Gabriel', 'Samuel', 'Amir', 'Elijah', 'Gideon', 'Phineas', 'Amadeus', 'Alejandro', 'Answorth', 'Augustus', 'Ashford', 'Aurelius', 'Balthasar', 'Eldridge', 'Emmanuel', 'Ignatius', 'Leonardo', 'Sylvester', 'Ulysses', 'Zaire', 'Adonis', 'Cicero', 'Cyril', 'Egan', 'Jason', 'Orion', 'Nicholas', 'Othello', 'Proteus', 'Santos', 'Sebastian', 'Thaddeus', 'Xander', 'Caesar', 'Brutus', 'Julian']
            return names[Math.floor(Math.random() * names.length)]
        },
        startNextRound() {
            this.showContinueButton = false;

            if (this.player.currentHP <= 0) {
                this.runEvent('lose-game')
            }

            this.player.stats.currentHP = Math.min(this.player.stats.currentHP + (Math.floor(Math.random() * 5 + 1)), this.player.stats.maxHP)
            this.runEvent('create-routes')
            this.currentScreen = 'routes'
        },
        async startCombat() {
            this.currentEnemy = getRandomEnemy();
            let message = this.currentEnemy.spawn < 5 
                            ? 'A terrifying enemy' 
                            : (this.currentEnemy.spawn < 10 ? 'A strong enemy' : 'An enemy') 
            printToTextBox(`${message} has appeared!`)
            let pause = await this.sleep(2000)
            this.hideTextBox = true;
            this.showCombatButtons = true;
            console.log(this.currentEnemy)
        },
        getLevelMultiplier() {
            return (1 + (this.currentLevel/10))
        },
        async combatRound(action) {
            // disable all actions
            if (this.disableInteractions) return;
            this.disableInteractions = true;

            // change visuals
            this.showCombatButtons = false
            await this.sleep(250)
            this.hideTextBox = false

            //print player
            console.log('Player before attacking')
            console.log(this.player)

            // check if player is running or attacking
            if (action == "attack") {
                printToTextBox(`You attack with your ${this.getPlayerWeapon().name}!`)
                await this.sleep(2000)
                // check if you hit
                if (Math.random() * 100 < (this.player.stats.strength * (Math.random() * 2 + 1)) - this.currentEnemy.dodge) {
                    // if you do, roll damage
                    let damage = calculateAttackDamage(this.getPlayerWeapon(), this.player.stats.strength)
                    damage.finalDamage = damage.total_damage - enemy.resist
                    console.log(damage)
                    this.currentEnemy.currentHP -= damage.finalDamage + 1
                    this.animateEnemyDamage(damage)
                    if (damage.criticalHit) {
                        printToTextBox('Critical hit!');
                        await this.sleep(1500);
                    }
                    printToTextBox(`You attack successfully dealing ${damage.finalDamage} damage.`)
                    await this.sleep(2000)
                    
                    // if dead, animate victory and change to victory screen
                    if (this.currentEnemy.currentHP <= 0) {
                        this.animateEnemyDeath()
                        printToTextBox(`${this.currentEnemy.name} has been defeated.`)
                        await this.sleep(2000)
                        return this.completeCombatByVictory()
                    }
                } else {
                    printToTextBox('Your attack missed...')
                    await this.sleep(1500);
                }
            } else {
                printToTextBox('You try running...')
                await this.sleep(1500)
                if (Math.random() * 100 - (this.player.stats.luck/2) < this.currentEnemy.chanceToRun) {
                    printToTextBox('You managed to escape!')
                    await this.sleep(2000)
                    return completeCombatByRun()
                } else {
                    printToTextBox("Couldn't get away!")
                    await this.sleep(1500)
                }
            }

            //print player
            console.log('Player after attacking')
            console.log(this.player)

            // check if enemy hits
            let currentArmor = this.getPlayerArmor()
            console.log('Current armor: ')
            console.log(currentArmor);
            printToTextBox(`The ${this.currentEnemy.name} is striking back!`)
            await this.sleep(1500)
            if (Math.random() * 100 < (this.currentEnemy.chanceToHit + (this.roundCounter/5)) - currentArmor.chanceReduction * currentArmor.variable ) {
                // if do, roll damage
                let enemyDamage = calculateEnemyDamage(this.currentEnemy, this.getLevelMultiplier())
                enemyDamage.finalDamage = Math.floor(enemyDamage.base - currentArmor.damageReduction * currentArmor.variable)
                console.log(enemyDamage)
                this.player.stats.currentHP -= enemyDamage.finalDamage
                this.animatePlayerDamage(enemyDamage)
                if (enemyDamage.critical) {
                    printToTextBox('Critical hit!')
                    await this.sleep(1500)
                }
                printToTextBox(`You've been hit! (${this.player.stats.currentHP}/${this.player.stats.maxHP})`)
                // if dead, roll credits
                if (this.player.stats.currentHP <= 0) {
                    return this.completeCombatByLoss()
                }
            } else {
                printToTextBox('You dodged the attack!')
            }

            //print player
            console.log('Player after being attacked')
            console.log(this.player)

            await this.sleep(1500);

            // reactivate interactions
            this.disableInteractions = false
            this.hideTextBox = true;
            await this.sleep(250)
            this.showCombatButtons = true;
        },
        getPlayerWeapon() {
            return this.player.inventory.weapons[this.player.weapon]
        },
        getPlayerArmor() {
            return this.player.inventory.armor[this.player.armor]
        },
        animateEnemyDamage() {

        },
        animateEnemyDeath() {

        },
        animatePlayerDamage() {

        },
        animatePlayerDeath() {

        },
        async completeCombatByVictory() {
            let message = "You're stats got a boost!            "
            let hasStatBoosted = false;
            let statBoosts = {
                hp: this.getStatBoost(),
                str: this.getStatBoost(),
                dex: this.getStatBoost(),
                con: this.getStatBoost(),
                int: this.getStatBoost(),
                wis: this.getStatBoost(),
                cha: this.getStatBoost(),
            }
            this.player.stats.maxHP += statBoosts.hp
            this.player.stats.strength += statBoosts.str
            this.player.stats.dexterity += statBoosts.dex
            this.player.stats.constitution += statBoosts.con
            this.player.stats.intelligence += statBoosts.int
            this.player.stats.wisdom += statBoosts.wis
            this.player.stats.charisma += statBoosts.cha

            for (const [key, value] of Object.entries(statBoosts)) {
                if (value) {
                    hasStatBoosted = true;
                    message += `  ${key} + ${value}`
                } 
            }

            if (hasStatBoosted) {
                await this.sleep(1500)
                printToTextBox(message)
            }
            await this.sleep(5000)
            this.disableInteractions = false
            this.startNextRound()
        },
        completeCombatByRun() {

        },
        completeCombatByLoss() {

        },
        getStatBoost() {
            return Math.max(Math.round(Math.random() * 2 - 0.25), 0)
        }
    }))
})