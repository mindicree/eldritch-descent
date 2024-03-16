document.addEventListener('alpine:init', () => {
    Alpine.data('screenLoading', () => ({
        dots: '.',
        dots_count: 0,

        init() {
            this.$el.style.display = "grid";
            setInterval(() => {
                this.dots_count++;
                this.dots = '.'.repeat(this.dots_count%3 + 1)
            }, 500)
        },
    }))
})