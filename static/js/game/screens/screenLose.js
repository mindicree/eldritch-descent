
document.addEventListener('alpine:init', () => {
    Alpine.data('screenLose', () => ({
        init() {
            this.$el.style.display = "grid";
        },
    }))
})