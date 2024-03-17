document.addEventListener('alpine:init', () => {
    Alpine.data('screenIntro', () => ({
        displayText: "blablabla",
        fullText: "",
        showButton: false,

        init() {
            this.$el.style.display = "grid";
        },

        runIntro() {
            console.log('Yo')
            this.displayText = "",
            this.fullText = "Virtues such as life are unexplained; Pastimes akin to friendships are no longer practiced; Obtaining power over what we fear, while admirable, is without satisfaction; The reason to be is naught; hence, the route of all evil is paved in our own slaughter, and the root of all evil is truly omniscient.";
            for (let i = 0; i < this.fullText.length; i++) {
                setTimeout(() => {
                    this.displayText = this.fullText.substring(0, i+1)
                }, 20 * i)
            }
            setTimeout(() => { this.showButton = true }, 20 * this.fullText.length + 100)
        }
    }))
})