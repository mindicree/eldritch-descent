
document.addEventListener('alpine:init', () => {
    Alpine.data('screenRoutes', () => ({
        exitRouteAvailable: false,
        currentRoutes: [],
        preloadedImages: [],
        totalWeight: 0,
        routes: [
            {
                name: "Orb Of Ancestors",
                image: "https://encycolorpedia.com/0000ff.png",
                sceneTo: "orb",
                dispatch: "create-orb",
                chance: 1,
                action: () => {

                }
            },
            {
                name: "Forgotten Treasure",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/300px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png",
                sceneTo: "treasure",
                dispatch: "create-treasure",
                chance: 5,
                action: () => {

                }
            },
            {
                name: "Fatal Engagement",
                image: "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
                sceneTo: "combat",
                dispatch: "create-combat",
                chance: 50,
                action: () => {
                    
                }
            },
            {
                name: "Tales Of Judgement",
                image: "https://live-production.wcms.abc-cdn.net.au/7eb03b8ab2c76e6ee3c40519fedffa23?impolicy=wcms_crop_resize&cropH=288&cropW=512&xPos=0&yPos=0&width=862&height=485",
                sceneTo: "event",
                dispatch: "create-event",
                chance: 10,
                action: () => {

                }
            },
        ],
        levelDownRoute: {
            name: "Level Down",
            image: "https://static.wikia.nocookie.net/colors/images/8/84/1200px-Orange_colour_box.svg.png/revision/latest?cb=20231102222423",
            sceneTo: "level",
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
        }
    }))
})
