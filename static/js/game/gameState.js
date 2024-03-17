function printToTextBox(toPrint) {
    console.log('From gameState.js - printToTextBox')
    console.log(toPrint)
    window.dispatchEvent(new CustomEvent('textbox', {detail: toPrint}))
}

let player = {}

document.addEventListener('alpine:init', () => {
    Alpine.data('gameState', () => ({
        currentScreen: 'loading',
        gameStarted: false,
        exitRouteAvailable: false,
        currentLevel: 1,
        saveData: {
            currentPlayer: {},
            currentLevel: {},
            currentOptions: [],
            previousPlayers: [],
        },
        textboxDisplayText: "",
        textboxFullText: "",
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
            this.runEvent('run-intro')
        },
        runEvent(name, data={}) {
            window.dispatchEvent(new CustomEvent(name, data))
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        printText(text) {
            this.textboxFullText = text;
            this.textboxDisplayText = "";
            for (let i = 0; i < this.textboxFullText.length; i++) {
                setTimeout(() => {
                    this.textboxDisplayText = this.textboxFullText.substring(0, i+1)
                }, 20 * i)
            }
            setTimeout(() => { this.runEvent('run-event-options') }, 20 * this.textboxFullText.length + 100)
        },
        getNewPlayer() {
            let player = {
                name: "Gabriel",
                stats: {
                    strength: this.getRandomStat(),
                    dexterity: this.getRandomStat(),
                    constitution: this.getRandomStat(),
                    intelligence: this.getRandomStat(),
                    wisdom: this.getRandomStat(),
                    charisma: this.getRandomStat(),
                    luck: this.getRandomStat(),
                    sanity: this.getRandomStat(),
                },
                weapon: {},
                armor: {},
                inventory: {
                    weapons: [],
                    armor: [],
                    potions: [],
                }
            }
        },
        getRandomStat() {
            return 50 + (Math.floor(Math.random() * 40 - 20))
        }
    }))
})