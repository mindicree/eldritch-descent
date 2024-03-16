document.addEventListener('alpine:init', () => {
    Alpine.data('screenTitle', () => ({

        init() {
            this.$el.style.display = "grid";
        },

        toggleView() {
            this.showing = !this.showing;
        }
    }))
})