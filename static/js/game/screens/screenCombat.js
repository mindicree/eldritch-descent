
document.addEventListener('alpine:init', () => {
    Alpine.data('screenCombat', () => ({
        init() {
            this.$el.style.display = "grid";
        },
    }))
})
