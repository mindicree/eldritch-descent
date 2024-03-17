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
        }
    }))
})