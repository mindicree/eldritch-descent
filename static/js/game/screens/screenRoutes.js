
document.addEventListener('alpine:init', () => {
    Alpine.data('screenRoutes', () => ({
        exitRouteAvailable: false,
        currentRoutes: [],
        preloadedImages: [],
        totalWeight: 0,
        routes: [
            {
                name: "Orb Of Ancestors",
                image: "/static/img/routes/orb.jpg",
                sceneTo: "orb",
                dispatch: "create-orb",
                chance: 1,
                action: () => {

                }
            },
            {
                name: "Forgotten Treasure",
                image: "/static/img/routes/treasure.jpg",
                sceneTo: "treasure",
                dispatch: "create-treasure",
                chance: 3,
                action: () => {

                }
            },
            {
                name: "Fatal Engagement",
                image: "/static/img/routes/combat.jpg",
                sceneTo: "combat",
                dispatch: "create-combat",
                chance: 10,
                action: () => {
                    
                }
            },
            {
                name: "Tales Of Judgement",
                image: "/static/img/routes/event.jpg",
                sceneTo: "event",
                dispatch: "create-event",
                chance: 10,
                action: () => {

                }
            },
        ],
        levelDownRoute: {
            name: "Level Down",
            image: "/static/img/routes/level-down.jpg",
            sceneTo: "level",
            dispatch: 'level-descend',
            click: () => {

            }
        },
        init() {
            this.$el.style.display = "grid";
            this.preloadImages()
            this.weight = this.routes.reduce((n, { chance }) => n + chance, 0)
        },
        preloadImages() {
            this.routes.forEach(element => {
                let preloadedImage = new Image()
                preloadedImage.src = element.image
                this.preloadedImages.push(preloadedImage)
            });
        },
        createRoutes() {
            if (!this.exitRouteAvailable) {
                this.exitRouteAvailable = Math.random() < Math.max(0.15 - (this.currentLevel / 100), 0.05)
            }
            this.currentRoutes = [];
            this.currentRoutes.push(this.getRandomRoute())
            this.currentRoutes.push(this.getRandomRoute())
            this.currentRoutes.push(this.exitRouteAvailable ? this.getLevelRoute() : this.getRandomRoute())
        },
        getRandomRoute() {
            let pool = []
            this.routes.forEach((r) => {
                for(let i = 0; i < r.chance; i++) {
                    pool.push(r)
                }
            })
            return JSON.parse(
                        JSON.stringify(
                            pool[Math.floor(Math.random() * pool.length)]
                        )
                    )
        },
        getLevelRoute() {
            return JSON.parse(
                        JSON.stringify(
                            this.levelDownRoute
                        )
                    )
        },
    }))
})
