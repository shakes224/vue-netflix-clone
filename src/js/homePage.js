let homepageVue = new Vue({ //el property of the Vue instance.
    el: "#netflixApplication", //the value I set was #netflixApplication which is a reference in the HTML file just above the body tag.

    data: {  //these are booleans that are set to false, these indicate whether or not there's a list of the movies in the array below in progress or not, they are all set to false until we start sorting all the the movies/TV shows by id
        list: false,
        completeList: false,
    
        movies: [
            {   id: "trendingNow", 
                title: "Get rich or die tryin'",
                genre: "music, Hip-hop, Crime, Dramas", 
                comingSoon: false, 
                availDate: 2005, 
                description: "Determined to leave his criminal days behind, an inner-city drug dealer pursues rap music, butthe aspiring artist runs into tough times", 
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYEcjQw8f-uMePEFU6LJXJbHZm-Q4aUuHhzmACLzjxwnAOSIrEQp0vUjz85DSqfKI06HNxKFeEYu58aGCez47HEQM4IPCnpIj53M7Jh18Um3ao2ravxRKswwM-U1dc3Mw-Ha9Xj8vdSY_Xf7ybx4CVY5t5TCG6ZtSos.jpg?r=663",
                preview: "https://www.youtube.com/watch?v=yNcayNlK4jE",  
            },
    
            {
                id: "trendingNow",
                title: "Luckiest girl alive",
                genre: "Movies based on books",
                comingSoon: false,
                availDate: 2022,
                description: "A writer's perfectly crafted New York City life starts to unravel when a true crime documentary forces her to confront her harrowing high school history",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb6vQVYCLrYJyy69xzXVyPtiWipE376iK7D8zTlZjy3cckjcMmuGgtg0v6yMg5iIYP_9rlQT5cwfaN4gbKCJdg12izmLuw6BscI4appTI4EIsSF-4y57Gn-c_NO6JxyXYg_QqWjFkASarHJYnn5NWxAcCzuXGhoQULWi03bH4RlyYyF9KnYe-XI2tSlIivA.jpg?r=e28",
                preview: "https://www.youtube.com/watch?v=B_XUlbPW-eY",
            },
    
            {
                id: "trendingNow",
                title: "Buy my house",
                genre: "Home & Garden Reality TV, Competition Reality TV, Reality TV",
                comingSoon: false,
                availDate: 2022,
                description: "In this fast-paced reality series, homeowners negotiate with real estate investors in hopes of selling their houses on the spot",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTlF4L-Q35BVOx1DLxstW2eYPywQK8CgXPFrVoYsOBA-KZ1W8H5E2Scz923aH3eNdZFlmRDXQ-c8tX76ubSnBK_2m1lCtu7yeKaGU7EnRhmJ-oRrt_TLYNrWX6pRoCRvheqo.jpg?r=ceb",
                preview: "https://youtu.be/5hm0-1UZBXA",
            },
    
            {
                id: "trendingNow",
                title: "Friends",
                genre: "Sitcoms, TV Comedies, US TV Shows",
                comingSoon: false,
                availDate: 2009,
                description: "This hit sitcom follows the merry misadventures of six-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSw3DDSeLkHdqYFndbfOH7P8MDhaHvdr6YxwnfdEDJXNoXg3c-ju2mxCXD3EbZZWPJQsGqO1EBGr8mOiruBTNFy3SzmJBwPDPa0.webp?r=75b",
                preview: "https://youtu.be/IEEbUzffzrk",
            },
    
            {   
                id: "trendingNow",
                title: "The Big Bang Theory",
                genre: "Sitcoms, TV Comedies, US TV Shows",
                comingSoon: false,
                availDate: 2012,
                description: "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQxxYpzILaZr3UFJp6pabVypB6BMPs7ly5CgL6fIERLjhnC1VvV3dhyEMQPiK8Y_x1vPWLA5TUl-2A1YsQqN7-vM6YkfnKeLl4.webp?r=bdb",
                preview: "https://youtu.be/rCj-Fb1OmXg",
            },
    
            {
                id: "documentaries",
                title: "Fantastic Fungi",
                genre: "Documentary Films, Science & Nature Docs",
                comingSoon: false,
                availDate: 2022,
                description: "Delve into the magical world of fungi, from mushrooms that clear oil spills to underground fungal networks that help trees communicate.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXRfhsWgx8aTL7u1jbBNKBSInj1UPFNaxvXnJbtF42ABHloeKG78cPnc9zF0PKtuEbG1aWqSZsXWtlGURNLtIus7ldgdBTphk5I.webp?r=b51",
                preview: "https://youtu.be/2wzBPSbTGYM",
            },
    
            {
                id: "documentaries",
                title: "Crack, cocaine, corruption & conspiracy",
                genre: "Social & Cultural Docs, Documentary Films",
                comingSoon: false,
                availDate: 2022,
                description: "A cheap, powerful drug emerges during a recession, igniting a moral panic fueled by racism. Explore the complex history of crack in the 1980's.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYUeEy7_YgFdfKW8GVp6KEW1JccRXOIUfQEaooqzbHmJpkhui_Vq4tDfDdkY4Kqc6iis9XGrzfLsgFUdVfZlFr6GSw4kqBvYYKJ2DG4yIIzgRUk7jsfRrYGynZO60tP2cMBK.jpg?r=94d",
                preview: "https://youtu.be/RbYdjyxDNtQ",
            },
    
            {   
                id: "documentaries",
                title: "Midnight Asia ",
                genre: "Social & Cultural Docs, Docuseries, Travel & Adventure Documentaries",
                comingSoon: false,
                availDate: 2022,
                description: "Night brings out the most playful side of Asia's metropolises. This docuseries captures the food, drink, music - and night owls who shine in the dark.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV7O8lOp4kT485BRSI2gEpgIB2xOC5KdlWUR5haeK4lBQrIFrYs_03LXUhKbTDx__q-K2Ae0gZgJ3-RaYn2r9IQzC_UiYJAGOBV5SRlz7Va01xCQWhFsD71LKz9d6MJKxUZ0.jpg?r=47b",
                preview: "https://youtu.be/hZnQFUyQ8s0",
            },
    
            {
                id: "documentaries",
                title: "The Royal House of Windsor",
                genre: "Social & Cultural Docs, Docuseries, British",
                comingSoon: false,
                availDate: 2017,
                description: "Drawing on newly available info, this show traces how the British royal family has survived the last 100 years of power struggles, politics and more.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaLk1qx3CQy-12n_PRE2SrXbfN8Wxp5GLEphNlogSW3KlNW9vVPbBSvA_is8HNk-TfMlGVAZZ8QhReWCORWcq94d-JeIzerOxHo.webp?r=0fd",
                preview: "https://youtu.be/vLsyR3YxAuc",
            },
    
            {
                id: "documentaries",
                title: "Ugly Delicious",
                genre: "Social & Cultural Docs, Docuseries, Travel & Adventure Documentaries",
                comingSoon: false,
                availDate: 2020,
                description: "All the flavor. None of the BS. Star chef David Chang leads friends on a mouthwatering, cross-cultural hunt for the world's most satisfying grub.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQRNPx8pYspf1-8Uuq9hz8HGy6FjNjRMw61XOAEXCEuEqpXxTY6N_WJz2XHmJ6xUvuTqsJ93Oh98MsWqNG2yo5F4rUsfJ5GRYvi3VtHB0fy6cJLmNhu2cEbWFVG5Pc34LGON.jpg?r=2e6",
                preview: "https://youtu.be/pN_XItALHmM",
            },
    
            {
                id: "comedies",
                title: "Clueless",
                genre: "Romantic Comedies, Teen Comedies, Movies Based on Books",
                comingSoon: false,
                availDate: 1995,
                description: "At a Beverly Hills high school, queen bee Cher excels at makeovers and matchmaking. But figuring out her own love life? Ugh, as if! ",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXNtM9Cg_4UE6V6jZKDMWqClhI3PPXGzMvG1xUF1JViigPoTR36id2UV5qicqhQw04FA8Qmx__LZ7jgPHlJlx6R-g52-_cMzr4A.webp?r=420",
                preview: "https://youtu.be/Mgjwq1ZzdPQ",
            },
    
            {
                id: "comedies",
                title: "a Cinderella story",
                genre: "Kids & Family Movies, Comedies",
                comingSoon: false,
                availDate: 2004,
                description: "A teen meets the boy of her dreams at a dance before returning to toil in her stepmother's diner. Can her lost cell phone bring them togerther?",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfSHwoL-NyKHN81-G_ex3-F3Yza7KCZyPMDtP-2x_goJvZ7AMfhRX203Htdns-qr6mXXYkwt0SjOcL8hsGLs5fpy7X6Y1ZFEx6c.webp?r=004",
                preview: "https://youtu.be/B_VFs9j95gc",
            },
    
            {
                id: "comedies",
                title: "The Campaign",
                genre: "Comedies",
                comingSoon: false,
                availDate: 2012,
                description: "Plenty of mud gets slung when an inexperienced contender backed by two plotting benefactors goes up against a longtime North Carolina congressman.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeMQuL0Ydf2KRxxNCk7RChOzUPbrspBO7HObZS5mjf1JgZqjdDMOBVIKOSTyl9vuZLi7eoAR1m73H0GrnJZmseettsrJi3Hzzn8.webp?r=620",
                preview: "https://youtu.be/4qQ6UcU_JiE",
            },
    
            {
                id: "comedies",
                title: "Pitch Perfect 2",
                genre: "Musicals, Movies Based on Books, Comedies",
                comingSoon: false,
                availDate: 2015,
                description: "In hopes of being the first Americans to win a global a cappella competition, the Barden Bellas wage a note-for-note war with fierce European rivals.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcbPzdAWRUWj6lS6L0rkcSmNry5qhIrWd9bCUlgATUBEy_PZ8JFB43qrOpAxYAnZo1pDn8FFWELStgtnJKnWBS93Z6dBEG3l66c.webp?r=67a",
                preview: "https://youtu.be/1RgKlnG5aQY",
            },
    
            {
                id: "comedies",
                title: "Wine Country",
                genre: "Comedies",
                comingSoon: false,
                availDate: 2019,
                description: "",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABafnVa8p2DhlPDuMMk50KzlsyZ9ZoMGFFa30-dv1hOpln8aNzAAYwaS9wjT5t5xdgfr6NaF0YYPiYvemBD2uKZrqEEYlXaNF6Exww8H_UCaUta2ModXe5th85NNnBdhOI9Ah.jpg?r=5f9",
                preview: "https://youtu.be/aW_0MO-XKog",
            },
    
           
    
            {
                id: "actionThrillers",
                title: "Black and blue",
                genre: "Action thriller",
                comingSoon: false,
                availDate: 2019,
                description: "When a rookie cop inadertently captures corrupt officers committing a murder on tape, loyalties are tested when she's hunted for the footage",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTS_hfKTCqBhdVRPombKNeJ0_B78KY7zaGfOcaq1m0J6Opv-gV_klb7XKJ140IebmBxdVqvpjxEr95s45af_R7dcIgaoFclaS7g.jpg?r=116",
                preview: "https://www.youtube.com/watch?v=-JJHswVN5Ik",//Black and blue done
            },

            {
                id: "actionThrillers",
                title: "The siege of Jadotville done",
                genre: "Action military, based on real life",
                comingSoon: false,
                availDate: 2016,
                description: "Besieged by overwhelming enemy forces, Irish soldiers on an U.N peacekeeping mission in Africa defend their outmost in this story.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABele2smEze0w0zvcxsXLtV06-yYyvRyHBIKiLnxMMNXnAAZNXdv8VL5gkrbcJAGlBUeDM8aym81N0hWqgVrtOadY5xBQBFzTEIhObFpkm2_VebpknOxpEdur1ykLahGbVR21.jpg?r=e9d",
                preview: "https://youtu.be/eI_LjETc_Ak", // The siege of Jadotville done
            },

            {
                id: "actionThrillers",
                title: "Arrow",
                genre: "Crime, Based on Comics, Action",
                comingSoon: false,
                availDate: 2019,
                description: "Presumed dead for 5 years before being discovered on a remote Pacific island, billionare playboy Oliver returns home a changed man.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfvrd4Y728WPHJLWxM5nc5H0telb2_ty5HYOs_pDzGpFpCfxpDCzOASEa5DD6jd3KILnLJ2eT8E-Iicw1WuSqNJowZR70AQsN3A.jpg?r=19e",
                preview: "https://www.youtube.com/watch?v=oc9Nae664vo",//arrow
                
            },

            {
                id: "actionThrillers",
                title: "Assassin's creed",
                genre: "",
                comingSoon: false,
                availDate: 2016,
                description: "In this adapttation of the critically acclaimed video game franchise, a man on death row is rescued from execution by a mysterious organization.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa9Q09T7lbNf1ktflr0C2CNfnToal6ttnQgMexCFPOn39qgj9qG0NQRpbqOsIWhYeZwyv22A07wC61eFHARURui05zfVsTjhymM.jpg?r=dac",
                preview: "https://www.youtube.com/watch?v=4haJD6W136c",//Assassin's creed
            },

            {
                id: "actionThrillers",
                title: "Athena",
                genre: "Action thriller",
                comingSoon: false,
                availDate: 2022,
                description: "After his little brother is murderedin cold blood, no amount of grief or pleas for pleace will stop Kaim from getting answers even if it means war.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABct29rL9I-y3V0IaouT3RvgKzCHqqbbrotthIsGJsvQHE7JGiTDG2-ZLE4nJEGVJZ668Lf9Qan-S7PO-o5BLm-edKuy3XUhkKcRTtQ1zwj4RP8L0hPUIfBMf8DUeN_8ay7mt.jpg?r=ed7",
                preview: "https://www.youtube.com/watch?v=vRunUkdkK8s", //Athena
            },

            {
                id: "comingSoon",
                title: "Rick and Morty",
                genre: "Sci-fi TV, Sitcoms, Adult Animation",
                comingSoon: true,
                availDate: 2023,
                description: "When an alien entity appears with musical demands, Rick and Morty call on Ice-T to help them write a tune for an intergalactic song competition.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUr7Tu0yKNiRyMWeGp1LUPe-BitL39b2q08P2fVYUatNuIQb1uomA_fWYUX-nm5ABmh-Eo63PdyYWaYWiKVeks89pa7oAgicCxcvuodHzmL2Oqd9ZVTk9H1JjfghEN_9MlE9_xl_o2H5fSCgwV3hra0DVrmm_EXhEF2_ZtHeOrUkWwois-uPLIlI51CnM-4nsaXuD3o2Offg0UA9sah-vqiMJkrz8MoVC-H4iEY05fAv9mJUy787IIE1gImh.webp?r=183",
                preview: "https://youtu.be/KQ9Cgdsa9tc",
            },

            {
                id: "comingSoon",
                title: "Tyler Perry's A Madea Homecoming",
                genre: "Comedies",
                comingSoon: true,
                availDate: 2022,
                description: "Madea's back - Hallelujer! And she's not putting up with any nonsense as family drama erupts at her great-grandson's college graduation celebration.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUJpM9CPy2oJ23YqWvqs0BO4m4k0axeHDvhAvWKR6sG-VktZmjM7ZAoWtQwbUDpMp1nEunDsT-ixYpMByyadVJUQ1S_a-pZUGqEjAHQFdlMkTC2yv11kRIiVvX4jaoZ3dTeM.jpg?r=46f",
                preview: "https://www.youtube.com/watch?v=afJXk-RgzoQ",//Madea
            },

            {
                id: "comingSoon",
                title: "The School for good and evil",
                genre: "Familly, movies, Teen Movies",
                comingSoon: true,
                availDate: 2022,
                description: "Best friends Sophia and Agatha find their bond put to the test when they're whisked away to a magical school for future fairy-tale heroes and villains.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeeiPf-mLSl5ytYOsDglFyh7oFdfcfANaCHq0jWtRu8d5aq14RY_P5dm-AZ24eNzWqs0TkVkwrnf-B3GVMaLTp936xFAKRVsrIvIbIvkYppbtnFNUve-5KqVX7FN7joTMLpv.jpg?r=606",
                preview: "https://www.youtube.com/watch?v=aftysDQ4hpI",//The School for good and evil
            },

            {
                id: "comingSoon",
                title: "Snabba cash",
                genre: "Crime TV shows",
                comingSoon: true,
                availDate: 2023,
                description: "This collection of Minions shorts from the Despicable Me franchise includes mini-movies like Training Wheels, Puppy and Yellow Is the New Black.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaTrCAbICS46a9ROGY_aPcdmB2rLmVybMOM3SZiBz0f04DX8FNqJw7MpcWULq0GATBGz4WMkJPT8Sgvvqlcg8eROhLrPjQTap4ebEf_A0IMCP_tbHukSpcokUGXfdnVnLQNot2VDFwTQj-DXFSZHaUY0RgkLbXwcHufBdmqVXgOsNvdHIuMMk3TPXaZWJ1mrFKB1pj95ur_IRLe6KwRpkd8If6kcCWuw1I90UBix707ZahIJhyRHGITDCEFNFIRVNonowhgB9-pIsIeSUlgqiS_8.jpg?r=334",
                preview: "https://www.youtube.com/watch?v=yHFBsGdIBzs",//Snabba cash
            },

            {
                id: "comingSoon",
                title: "Wild is the wind",
                genre: "Social Issues, African crime",
                comingSoon: true,
                availDate: 2022,
                description: "Racial tensions and corruption come to a head in a small segrgated town after police find a body of a young Afrikaner girl in the bush.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYaZhjwsDfldIuyLgJ-wrNiL4cw9kakMJ-kO9yXO6fDFm1aHZmORrB9O27EIbCqB5tDvIA_DNvQSKbn1uC4b2jx9kV2iEv9ZYgKhIkAVvHCPEcEQlEsWnuGJYYM1YJTE8XoR.jpg?r=876",
                preview: "https://youtu.be/pJeQAhaRW80",//must fix  preview
            },

            {
                id: "anime",
                title: "Altered Carbon Resleeved",
                genre: "Thriller Anime",
                comingSoon: true,
                availDate: 2022,
                description: "On the planet Latimer, Takeshi Kavocs must protect a tattooist while investigating the death of a yakuza boss alongside a no-nonsense CTAC.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbU0HFtzeRnlKJ-faLxW3nGHdOLPf_VP3_JdDDG5DNLV4REw_UVF0s2m_WDaKEd64op9NVFWVkEOxWWct-q-T-yEBFTeyUsnDpC3QBk0ydRrmY-iYiNhZLaIQAb4xUKJUFvg.jpg?r=7de",
                preview: "https://www.youtube.com/watch?v=HmDxxoFslzs", // Altered Carbon Resveeled Done
            },

            {
                id: "anime",
                name: "Seven deadly sins",
                genre: "Fantasy Anime",
                comingSoon: true,
                availDate: 2015,
                description: "When a kingdom is taken over by tyrants, the deposed princess begins a quest to find a disbanded group of evil knights to help take back her realm.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABezRWGtm3ul0HI5O78Gf-W0dMl736UM1oBvJC2Qu0U-d3UZk28ItIgHbaJyhqOx1bIZD4RdC5wwJuHR_XTBpN6Tsv7Z4OqHVEupYlkJYdBadpzEPGfHsi53pKxPMqxB0aq9o.jpg?r=5ef",
                preview: "https://www.youtube.com/watch?v=wxcvbL6o55M", // Seven deadly sins Done
            },

            {
                id: "anime",
                title: "Seis Manos",
                genre: "Crime TV Shows, Amine Series",
                comingSoon: true,
                availDate: 2019,
                description: "Orphans raised by martial arts master into a mystery involving demonic powers, drug cartels rituals and blood sacrifice.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY6LyXcwDWXnJfEgiHaeL3f73e1MG8kfDf0Hza4KMpKl2W_mbKud25BcMaLTNsb1SzSVtfQsuCWpa5C8VX62vqmDlwc9HItuXf-_BQOUiqYe89G1HfV7gEEZiZWYRmZprMXf.jpg?r=408",
                preview: "https://www.youtube.com/watch?v=z9AMScNK5Zw", //Seis Manos Done
            },

            {
                id: "anime",
                title: "Spriggan",
                genre: "Anime series",
                comingSoon: true,
                availDate: 2022,
                description: "An ancient civilazation's relics on earth hold dangerous powers - it's up to ARCAM Corporatio's Spriggan to keep them out of the wrong.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY2FnAFaN117m3HmZoKjtPN7odQCI46kvmdsabV9vxlxD5Ct3cwhFLLj6TGM31E9Xu8lndrLjlVSvBjUuCMK83OKzvxtymbq131uckJIggarVt1QaxVutGTT8-Yc0nDNmbyi.jpg?r=551",
                preview: "https://www.youtube.com/watch?v=IZJMihZ8ujg", //Seis Manos Done
            },

            {
                id: "anime",
                title: "Kengan Ashura",
                genre: "Anime series",
                comingSoon: true,
                availDate: 2019,
                description: "Ajro Fisheries Yoshinari Karo faces Saw Paing Yorozuka. The fix is in: the match is rigged. But Karo and his harpoon aren't following the script.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU4Q-6tODGX6XR6DUDRfx8iW25PWCDLVuLoBbzPcqCxFNlugBScF9PxVIESTGRt_Ix64KZXUeM7ALBtXlpIyJ1dxoOcN6mcEyfQoX8mMC-uJpDeyQVkbQiwIIZgMF4jBu4xn.jpg?r=d8c",
                preview: "https://www.youtube.com/watch?v=CNuY4ymi4Fs", //Kengan Ashura Done
            },
        ],
    },
        //I will only explain one function as all the others in the computed section are done in the same manner and follows the same logic
        computed: { //computed is there to help create, modify, manipulate or display data within your components in a readable, efficient manner. This also helps with updating and creating new elements as time goes on.
            comingSoonFilter() { //moviesComingSoonFilter is a function that will return an object with two properties: The movies and filter to coming soon.
                let comingSoonFilter = this.movies.filter((movie) => { //here is where we filter the movies collection to only include the desired id which we ask for line comingSoon in the 'movies'
                    return movie.id.toLowerCase().includes("comingSoon".toLowerCase()); 
            });
            return comingSoonFilter; //the filtered list of the comingSoon movies will then be retured and showed on display 
            },

            popularOnNetflixFilter() {
                let popularOnNetflixFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("trepopularOnNetflix".toLowerCase());
                });
                return popularOnNetflixFilter;
            },

            trendingNowFilter() {
                let trendingNowFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("trendingNow".toLowerCase());
                });
                return trendingNowFilter;
            },

            actionThrillersFilter() {
                let actionThrillersFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("actionThrillers".toLowerCase());
                });
                return actionThrillersFilter;
            },

            comediesFilter() {
                let comediesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("comedies".toLowerCase());
                });
                return comediesFilter;
            },

            horrorMoviesFilter() {
                let horrorMoviesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("horrorMovies".toLowerCase());
                });
                return horrorMoviesFilter;
            },

            strongBlackLeadFilter() {
                let strongBlackLeadFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("strongBlackLead".toLowerCase());
                });
                return strongBlackLeadFilter;
            }, 
            
            blockbusterAndSciFiFilter() {
                let blockbusterAndSciFiFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("blockbusterAndSciFi".toLowerCase());
                });
                return blockbusterAndSciFiFilter;
            },

            animeFilter() {
                let animeFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("anime".toLowerCase());
                });
                return animeFilter;
            },
        },

        methods: { //methods are used here to to perform actions on the V-on directives in the HTML files that handle the events, these functions can also be called further on in performing actions

            addingToWatchList(event) { 
                let watchlist = JSON.parse(localStorage.getItem("movies")); //created a variable called watchlist, this object will be parsed later from localstorage
                for (let i = 0; i < watchlist.length; i++) { //an array of movies is created and this loops through each movie in the list to see if the id match the event
                    if (watchlist[i].title == event.title) { //if it does or is true, then set it to the list, adds movie to the watchlist
                        this.list = true;
                    } else {
                        this.list = false;
                    }
                }
                //all these events will be added to the watchlist and which will then be saved back into localStorage with a JSON stringified version of itself for future use when needed later down the line
                if (this.list == true) {
                } else {
                if (watchlist.length < 20) {
                    watchlist.push(event);

                    localStorage.setItem("movies", JSON.stringify(watchlist));  //these loops are here to make sure that the watchlist doesn't grow to full and the user will be asked to delete some before adding more if the amount goes over 20
                } else if (watchlist.length >= 20) {
                    this.completeList = true;
                    alert("Your list is full, eiter have some fun and watch it all or you'll have to delete some, sorry!");
                }
            }
        },
    },
})
