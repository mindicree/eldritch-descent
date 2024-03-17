
document.addEventListener('alpine:init', () => {
    Alpine.data('screenOrb', () => ({
        init() {
            this.$el.style.display = "grid";
        },
    }))
})
