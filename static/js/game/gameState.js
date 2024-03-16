document.addEventListener('alpine:init', () => {
    Alpine.data('gameState', () => ({
        currentScreen: 'loading',
        init() {
            setTimeout(() => {
                this.currentScreen = 'title'
            }, 1000);
        },
    }))
})