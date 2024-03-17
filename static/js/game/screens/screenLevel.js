
document.addEventListener('alpine:init', () => {
    Alpine.data('screenLevel', () => ({
        init() {
            this.$el.style.display = "grid";
        },
    }))
})