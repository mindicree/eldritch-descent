
document.addEventListener('alpine:init', () => {
    Alpine.data('screenTreasure', () => ({
        init() {
            this.$el.style.display = "grid";
        },
    }))
})