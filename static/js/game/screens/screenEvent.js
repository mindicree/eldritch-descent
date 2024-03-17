document.addEventListener('alpine:init', () => {
    Alpine.data('screenEvent', () => ({
        currentEvent: {},
        showOptionButtons: false,
        init() {
            this.$el.style.display = "grid";
        },
        createEvent() {
            this.currentEvent = events[Math.floor(Math.random() * events.length)]
            console.log('From screenEvents.js - createEvent')
            console.log(this.currentEvent.textbox)
            printToTextBox(this.currentEvent.textbox, () => {
                this.showOptionButtons = true;
            })
        }
    }))
})