let homepageVue = new Vue({ //el property of the Vue instance.
    el: "#netflixApplication", //the value I set was #netflixApplication which is a reference in the HTML file just above the body tag.

    data: {  //these are booleans that are set to false, these indicate whether or not there's a list of the movies in the array below in progress or not, they are all set to false until we start sorting all the the movies/TV shows by id
        list: false,
        completeList: false,
    
        movies: [ //these are all the information about the movies and TV Shows within an array. It contains the id, title, genre, comingsoon, date available, description, image and preview.
            {   id: "trendingNow", //category of the movie/TV show
                title: "Chef's Table Pizza", //title of the movie/TV Show
                genre: "Social & Culture Docs, Docuseries, Food & Travel TV", //Genre's of the movie/TV Show
                comingSoon: false, //Boolean if the movie is out=false, coming soon=true
                availDate: 2022, //when the movie came to availibility ot when it will be available
                description: "Dig into the best Pizzas from around the world, prepared by renowned chefs who bake passion, creativity and hard work into every slice", //short description of the movie
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQJWZeUipOPfMjKHJpsoQ2EglYXiH9YFAbhZwXUNvTEZ6R0TdYWEIdXQv_lqweQxBKMROZrOaPN42T1VGYIBwrtXU38HKgtc_AoEF9lk1GIr48B3wljzefliL5D6L20sr9Rv.jpg?r=2b0",
                preview: "https://youtu.be/wyXnoeJoKLw",  //image and trailer URL's
            },
    
            {
                id: "trendingNow",
                title: "This is 40",
                genre: "Romantic Comedies, Comedies, Romantic Movies",
                comingSoon: false,
                availDate: 2015,
                description: "After a big birthday, married couple Pete and Debbie wrestle with realities of parenthood, romance and getting older",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSPo-lMnp7iVFHdhwWsRuyp2eVam0EFAB0wv16MaMH7cdIAsn45bf31Wb4krHXhr0CYNyR2UldocZEVnvFcZV8hdnslNPd6yMX0.webp?r=fbc",
                preview: "https://youtu.be/46sZURieja0",
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
                id: "realStories",
                title: "Amazing Interiors",
                genre: "British, Home & Garden Reality TV, Lifestyle",
                comingSoon: false,
                availDate: 2018,
                description: "Meet eccentric homeowners whose seemingly ordinary spaces are full of surprises, from a backyard roller coaster to an indoor aquarium.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf7OktOIOFUkZaHrlUToaFAUhjgB5GQkHC2OQ5lh6-1djdoj8fMfUcau6hhiGrT49ROJC24mQkLn83XElEHBqigR-Etrc89FrEh6lz_Eo_fcItfjBfc77n46tstnXGtuTV6F.jpg?r=cd9",
                preview: "https://youtu.be/ia-Hclo-ITs",
            },
    
            {
                id: "realStories",
                title: "Million Pound Menu",
                genre: "British, Food & Travel TV, Reality TV",
                comingSoon: false,
                availDate: 2019,
                description: "Next-gen restauranteurs get the chance to open their own pop-up eateries to impress the paying public -- and a panel of discerning U.K. investors.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXy0Oa90CCQ0Q0dZaQlEaWe4MuP8gOoL_uJhLlt9SYAex3YA6fTfmDgkme3SvhXUZ0qYW_nVPGp4yFcIAT1tC5KuSp2QsquyFukq-02Cl8BIlYrBcof_tjM3ZdOm6SbNuNDS.jpg?r=98c",
                preview: "https://youtu.be/0Ml4LdqdQHg",
            },
    
            {
                id: "realStories",
                title: "A Dog for Life",
                genre: "Docuseries, South African, Family Watch Together TV",
                comingSoon: false,
                availDate: 2021,
                description: "In this reality series, unique Cape Town families get matched with rescue dogs to find the perfect four-legged best friends they never know they needed",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZlf52g05LZMMHs704UxB9_nw282A6e8biutcTuI-aoIDWji3OnQFkUKhzJeEcKfqgJDreQxA9XzxwzhkQ0lN1z8BAjz0ORKgb4.webp?r=afd",
                preview: "https://youtu.be/uWR0iQ2McgA",
            },
    
            {
                id: "realStories",
                title: "Dark Tourist",
                genre: "Social & Cultural Docs, Docuseries, New Zealand",
                comingSoon: false,
                availDate: 2018,
                description: "From a nuclear lake to a haunted forest, journalist David Farrier visits unusual -- and often macabre -- tourism spots around the world.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTVe5RbE5gFRQ44v0ke8BE5SsWSIIFz9gJRVy7S6Yvi9OroRRhFo8Fk1fYg6Je-CdeuHAd_CT1fI8Gr-g-jo4NbwuLTILLG-SuU3HYmRr8XoIG-8ha5z9_OYla0vu8KIe6Wl.jpg?r=5dd",
                preview: "https://youtu.be/8vV1xaLCONw",
            },
    
            {
                id: "realStories",
                title: "Untold - The Race of the Century",
                genre: "Documentary Films, Sports Movies",
                comingSoon: false,
                availDate: 2022,
                description: "The Australia II yacht crew looks back on the motivation, dedication and innovation that led to their historic victory at the 1983 America's Cup.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfwzf65eDiphLZYcpjbbS3Lb6mMgzOv528kuO4PxUzLzWkXvK6zY0nOZnMHtqjzpRtmHQEvbiz13nfqFWAaUrrs_v6eb_oAMgZfKuQE9Q3NM2rAQkKl1S6JIujXlnFKojafK.jpg?r=51b",
                preview: "https://youtu.be/PSmns9QWPiE",
            },
    
            {
                id: "foodWine",
                title: "Heavenly Bites Mexico",
                genre: "Social & Cultural Docs, Docuseries, Mexican",
                comingSoon: false,
                availDate: 2022,
                description: "Can you imagine adding lime, candy, seafood and even meat to your beer? Mexicans certainly do, and the result is an addictive drink called michelada",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbItvuqbSXeRBI3YlnYqgzKvgD3wFeCPeFMIlBSQGqWGxxdQoSBdmTgsRBD0v1lhDTnF4jYEqn_HsZwOSggmVbu1Sx_TziaoiXP8ktr3vhwaaiW0KC1UtweFdtQpQsBdxNFe.jpg?r=6e5",
                preview: "https://youtu.be/6V9AkCnvyVQ",
            },

            {
                id: "foodWine",
                title: "K Food Show, a Nation of Broth",
                genre: "Social & Cultural Docs, Docuseries, Korean",
                comingSoon: false,
                availDate: 2022,
                description: "A humble bowl of good soup sits at the heart of every Korean table. Take off on a journey that explores the history and evolution of korean soup.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbZF0ULJjIRtcd2YkV1G04v4-MRVD1lrJEESyHflJXKShXC8MgdmEGANtNPzytMA9Qntvk8_lRTBSRtEdeFzT7pewyqCJfepgbU.webp?r=45a",
                preview: "https://youtu.be/eI_LjETc_Ak",
            },

            {
                id: "foodWine",
                title: "Salt Fat Acid Heat",
                genre: "Docuseries, Travel & Adventure Documentaries, TV Shows Based on Books",
                comingSoon: false,
                availDate: 2018,
                description: "Chef and food writer Samin Nosrat travels the world to explore four basic keys to wonderful cooking, serving up feasts and helpful tips along the way.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfdVMCf4lEhKNdDVllvaIYin9IDBTs7f5Onc3skn0YAkHNZaMfA-jwULrHRKOtXWN6wvhlTMtGtZwi3EmpMzSjpnVfZmUPJDIG6xpbvT3earR2HEmMzZm2ok6wa6OAInAbSI.jpg?r=e7d",
                preview: "https://youtu.be/2oKbs4jAf7M",
            },

            {
                id: "foodWine",
                title: "The Game Changers",
                genre: "Documentary Films, Food & Travel TV, Lifestyle",
                comingSoon: false,
                availDate: 2018,
                description: "Meeting visionary scientists and top athletes, a UFC fighter embarks on a quest to find the optimal diet for human performance and health.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTcwYoX3D2DSSx9bzDlDbtFghOus8bZw9EnWaijV0xJ1xP2Aar7tVNODOHde-5ASq8XmZLs1yUSl8TiSiK4o-TV70NJKtVLITeA.webp?r=93b",
                preview: "https://youtu.be/iSpglxHTJVM",
            },

            {
                id: "foodWine",
                title: "Down to Earth with Zac Efron",
                genre: "Docuseries, Travel & Adventure Documentaries, Science & Nature Docs",
                comingSoon: false,
                availDate: 2020,
                description: "Actor Zac Efron journeys around the world with wellness expert Darin Olien in a travel show that explores healthy, sustainable ways to live.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEfoVDNmscbTvwUks_XUnZnDNAVGl2098UYnfZCUpRdwzieTxMYvlE83HOs3IxZ8GiCbSHWoNWBDcdLPIhM71jPhLhwEWrmr5INH9sRY1MFZZPUJibtbZk1Uz7UD3rQHFKG.jpg?r=776",
                preview: "https://youtu.be/oMzYiY5wcHU",
            },

            {
                id: "comingSoon",
                title: "Rick and Morty: Season 6",
                genre: "Sci-fi TV, Sitcoms, Adult Animation",
                comingSoon: true,
                availDate: 2023,
                description: "When an alien entity appears with musical demands, Rick and Morty call on Ice-T to help them write a tune for an intergalactic song competition.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUr7Tu0yKNiRyMWeGp1LUPe-BitL39b2q08P2fVYUatNuIQb1uomA_fWYUX-nm5ABmh-Eo63PdyYWaYWiKVeks89pa7oAgicCxcvuodHzmL2Oqd9ZVTk9H1JjfghEN_9MlE9_xl_o2H5fSCgwV3hra0DVrmm_EXhEF2_ZtHeOrUkWwois-uPLIlI51CnM-4nsaXuD3o2Offg0UA9sah-vqiMJkrz8MoVC-H4iEY05fAv9mJUy787IIE1gImh.webp?r=183",
                preview: "https://youtu.be/KQ9Cgdsa9tc",
            },

            {
                id: "comingSoon",
                title: "Do Revenge",
                genre: "Teen Movies, Comedies",
                comingSoon: true,
                availDate: 2023,
                description: "A dethroned queen bee at posh private high school strikes a secret deal with an unassuming new student to exact revenge on each other's enemies.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT6N5MPb-V95sTnSr5cltJDRQ0-YjCu4Dcv7VKxAuS1RlIq4YAfXTewPmD27Su8NcdHp1fRpsSfcefMrIwQvDtY394k7vfAWcFnXHM1UsBYTA6lyuDWCtYYsf6q-C6FM91ND.jpg?r=11b",
                preview: "https://youtu.be/rK-JQU_bShc",
            },

            {
                id: "comingSoon",
                title: "Designing Miami",
                genre: "Lifestyle, Reality TV, US TV Shows",
                comingSoon: true,
                availDate: 2023,
                description: "For Ray and Eilyn Jimenez, marriage and business are a perfect match as their respective interior design firms remodel homes for high-end Miami clients.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb4Em4mwD8NvdNirGk3jZ0IL6_8hfVi-IkPNTDscL7AZzSHtmZz8-jVz3EWkS9NNr3fS3FoxS1MroWYuvjwu73oUrD0oT-ZEvYR6KLghP3A8VRMF2cbXDL7hYPJZiHMBogQZ.jpg?r=37c",
                preview: "https://youtu.be/Cc_tUE6o6tg",
            },

            {
                id: "comingSoon",
                title: "Illumination's Minions & More 1",
                genre: "Family movies, Kids & Family Movies, Comedies",
                comingSoon: true,
                availDate: 2023,
                description: "This collection of Minions shorts from the Despicable Me franchise includes mini-movies like Training Wheels, Puppy and Yellow Is the New Black.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaCr6pAIxFJQQ_IRlYxkx8gzhqrK9dpkiUpSBwF29McybJ3S1QXWErVTO7qdoIty2P9NU9RG_hl6fMpKOoHgGyi2z8s9uy0MvIw.webp?r=6b4",
                preview: "https://youtu.be/6DxjJzmYsXo",
            },

            {
                id: "comingSoon",
                title: "Get Smart with Money",
                genre: "Documentary Films, Lifestyle",
                comingSoon: true,
                availDate: 2023,
                description: "Financial advisers share their simple tips on spending less and saving more with people looking to take control of their funds and achieve their goals.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZk39crVaAEE2z8-fiA-bkaPUNVFll8GpjEWyKNd--74Lx01oXZPNp35XmwLzLv7nmo1NTvYoiHrUNv4kn0UfeZuN_dVr-nHRTe_84cTlapcVJx82OCGJWPgPR30BBxXBc2R.jpg?r=96c",
                preview: "https://youtu.be/pJeQAhaRW80",
            },
        ],
    },
        //I will only explain one function as all the others in the computed section are done in the same manner and follows the same logic
        computed: { //computed is there to help create, modify, manipulate or display data within your components in a readable, efficient manner. This also helps with updating and creating new elements as time goes on.
            moviesComingSoonFilter() { //moviesComingSoonFilter is a function that will return an object with two properties: The movies and filter to coming soon.
                let moviesComingSoonFilter = this.movies.filter((movie) => { //here is where we filter the movies collection to only include the desired id which we ask for line comingSoon in the 'movies'
                    return movie.id.toLowerCase().includes("comingSoon".toLowerCase()); 
            });
            return moviesComingSoonFilter; //the filtered list of the comingSoon movies will then be retured and showed on display 
            },

            trendingNowFilter() {
                let trendingNowFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("trendingNow".toLowerCase());
                });
                return trendingNowFilter;
            },

            documentariesFilter() {
                let documentariesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("documentaries".toLowerCase());
                });
                return documentariesFilter;
            },

            comedyMoviesFilter() {
                let comedyMoviesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("comedies".toLowerCase());
                });
                return comedyMoviesFilter;
            },

            realStoriesFilter() {
                let realStoriesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("realStories".toLowerCase());
                });
                return realStoriesFilter;
            },

            foodWineFilter() {
                let foodWineFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("foodWine".toLowerCase());
                });
                return foodWineFilter;
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
