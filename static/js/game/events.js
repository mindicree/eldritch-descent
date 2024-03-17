let events = [
    {
        name: "Suspicious Door",
        image: "/static/img/events/stone-fountain.jpg",
        textbox: "A closed door often means either a lost opportunity or a lost life. In either case, it is often respected that the barrier is in place for a reason.",
        options: [
            {
                name: "Open the door",
                result: () => {
                    // empty room
                    // find a dead body
                    // find some gold
                    // find a weapon
                    // find a potion
                    // find a monster, but get away
                    // find a monster, get hurt
                    // hit by a trap
                    // instant death
                }
            },
            {
                name: "Let it be",
                result: () => {
                    // nothing happens
                    // hit a trap
                    // get snagged anyway
                }
            }
        ]
    },
    {
        name: "Altar To Mhaggdotl",
        image: "/static/img/events/stone-fountain.jpg",
        textbox: "The god of prosperity has been dead to people for many moons. The old tales of his generosity have been beakens of hope for some and common deciet for others.",
        options: [
            {
                name: "Pray on the altar",
                result: () => {
                    // nothing happens
                    // a blessing of sorts
                    // a trap was set
                    // stricken down by god and die
                }
            },
            {
                name: "Destroy the altar",
                result: () => {
                    // nothing happens (it was fun)
                    // nothing happens (it was pain)
                    // a trap was set
                    // stricken down by god and die
                }
            },
            {
                name: "Take a rest",
                result: () => {
                    // heal a bit
                    // be blessed in a stat
                }
            },
            {
                name: "Leave",
                result: () => {
                    // nothing happens
                }
            }
        ]
    },
    {
        name: "Stone Fountain of Bhigdesh",
        image: "/static/img/events/stone-fountain.jpg",
        textbox: "Whether a humanoid on the surface or a teklod in the ground, all creatures on Thaebia require water to survive. The lives of many claimed by its absense weighs on your mind.",
        options: [
            {
                name: "Take Drink",
                result: () => {
                    // nothing happens (very refreshing)
                    // heal
                    // poison
                }
            },
            {
                name: "Leave",
                result: () => {
                    // nothing happens
                }
            }
        ]
    },
    {
        name: "Mhothrhu's Dressing Room",
        image: "/static/img/events/stone-fountain.jpg",
        textbox: "Fashion and jewels are luxuries seldom afforded by the exploiters of this world, and those who exploit the exploiters. Despite this, the innocence behind a young mind's intrigue is far from evil.",
        options: [
            {
                name: "Raid the room",
                result: () => {
                    // get things
                    // get hit with a trap
                    // get found out and hit
                }
            },
            {
                name: "Leave",
                result: () => {
                    // nothing
                }
            }
        ]
    }
]