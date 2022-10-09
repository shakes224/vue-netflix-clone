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
                title: "Dynasty",
                genre: "Social Issue TV Dramas, TV Drama, US TV Shows",
                comingSoon: false,
                availDate: 2022,
                description: "After coming to blows over business with her stepmother to be, an ever ambitious Faalon sets her sights on her father's biggest rival.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanPLt1t-sBTiVQyXEZS09Evi2y98vKja3zIzNcCQK4pmKjipBca-5rkMvfbdgiH_AGmKL2TDGJkamrLMAG3ymJvH6Q5irMuU4aVE_xihb-MELi51oURYC1OR-Ms6yfa5E55SCRKVerGdvD6qZyHt9i0d-nuuL2A4rezSVVFEze05V2_D1BDCNE5guGwhKBT2COO00RsZA3gZgBHHAL9Dzv7DLTGFqhJhHHz43esB3qqvTEerF8iiU2eyKD2u8nVT95v3PTVuWu5E_WY2iZUDpMEle6opPMdbHDvKFY-P6nDcV-M2oSr_BN_2ocWY87N7MErg2hGWCfHIb9TQcs.jpg?r=1e6",
                preview: "https://www.youtube.com/watch?v=Uq0soWMpkv8",
            },
    
            {
                id: "trendingNow",
                title: "Bling Empire",
                genre: "Reality TV, US TV Shows",
                comingSoon: false,
                availDate: 2022,
                description: "Follow LA's wildy wealthy Asian and Asian America fun seeker as they go all out with fabulous parties, glamour and drama in this reality series.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeHjEn16zsRvRFd0lOGmiieErHJBI3A3ZPquW-aG2y-I-ais6gSQs0k43IcKDUAjoTg9sRxB_mMLP3gVxblk5kSNku3taWpWPNa6HhRAkrjzmB0KlUUaQb3zrIK3t3fZMXY5xDbxpH6Juc23Y74RajSOUD9Yp2Ruajk7a6-uz-pPQnLnGmg6lus4QFEfsrvm2NIE2eLILEVLYPuyikie9ySawK3CbSSVLO6UhldrRqyXMs9qafeiy2wb4K_4sFw8qqp1GT0mEdkLpNZwTuF9iaU0BOK0-ou_fhzhr7ZfThcJ0m-oooTnczQ9F3N_Zg12hV0R7y1ZVZM_P6_OI7Q.jpg?r=9bd",
                preview: "https://www.youtube.com/watch?v=ilDYquHLJ_k",
            },
    
            {   
                id: "trendingNow",
                title: "The Mole",
                genre: "Competetion reality TV, US TV Shows",
                comingSoon: false,
                availDate: 2022,
                description: "Twelve crafty competitors gather in Australia's ancient Daintree Rainforest to begin the game, with no idea which of the might be plotting sabotage.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQaSksvZs44QJNx78Iq9yZ_drGjoGfKaXHFA7ZLnsBZpc6ir8Q6oOnyOahVmrQuPnX85mq7GVKwV-StoAnsOpQG4TvgdvTaOozbNyknD3H_FFkJTxba8gtWF-Tpzmw0h_Rcj7BFLQYRlsOUbVVnGXj4M1L6H57Ksca3uu8I4S3DDVJopjPOBfi84WTNsWfJxWce6_JWxYRdUjVydcaLWpdO7dLuWrtmb3ZO8Twa0wO-D6egzdP7A9Dell81bz6mmBYll-Iu4QQ-ilU5x42_uy5L8XHgFfTJiV1BwNGrTC_uFrIUrsP-llEwldIJV5qobndK-rq_3AW9EKeWgdswNLdnPqb6juzfoUc-luolbnuEpLgVJr8ZGgPy9OuT8Fyc0zOYTrxNRwPkWUTrxRJDwmnGCfqijkFR2ZfT5Be6tQk.jpg?r=2d6",
                preview: "https://www.youtube.com/watch?v=IZdjKKrMmaw",
            },
    
            {
                id: "comedies",
                title: "The baby sitter",
                genre: "Horror Comedies",
                comingSoon: false,
                availDate: 2020,
                description: "When Cole stays up past his bedtime, he discovers that his hot baby sitter is of a satanic cult that will stop at nothing to keep him quit.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc2jruYfYLepGiQ2zznHCvv31qzduYauFWHRHYlqZTOs6peRCECyFMxgCAHn5kLTD2dgTI0ECM4Lph3HXWy6QKdH7b650FS_3JKwGxWpgBJKe3vOKiD6QqpPWQB00b-IrApc.jpg?r=5e9",
                preview: "https://www.youtube.com/watch?v=8WzUYkzRgBE",
            },
    
            {
                id: "comedies",
                title: "Sextuplets",
                genre: "Comedies",
                comingSoon: false,
                availDate: 2019,
                description: "Marlon Wayans (White Chiks) and director Micheal Tiddes(A Haunted house) team up once again in this goofy and raucous comedy. ",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT6cHWyFamFHZwmaGtUxAuCR_n2AIMqcsMqdJrSwAyq_tAslUJWdYt-gHdwfVoab1brroFCuGPGGTIFmfgGwMz2CF7ywD0ZW-sUb4czDw0tTCRxuz-PxO0K8VKIftKP6XlOO.jpg?r=978",
                preview: "https://www.youtube.com/watch?v=e0LJNn-GcnY",
            },
    
            {
                id: "comedies",
                title: "The wrong missy",
                genre: "Romantic, Comedies",
                comingSoon: false,
                availDate: 2020,
                description: "Tim Thinks he's inveted the woman of his dreams on a work retreat to Hawaii realizing too late he mistakenly texted someone from a nightmare blind date.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZCwy6bGidn3z4vK3CDQMCuBBZY5Bs_JMt3nYojACd7vKFxjBYPN93IQdqwBP9giZ9wfd7Cq2tFda13kGU6w8G6fy60HpKGRinjsTJlAkDeXtqBFvYv10gRF1Zb6Ub3ipyES.jpg?r=3d5",
                preview: "https://www.youtube.com/watch?v=2Cwaneq2w-4",
            },
    
            {
                id: "comedies",
                title: "The package",
                genre: "Teen Movies, Comedies",
                comingSoon: false,
                availDate: 2018,
                description: "After their buddy suffers an unfortunate accident during spring break, four pals risk everything - including their dignity- to make him whole again.",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYbBAKdSZeVZvkdPBaxZ2FkeIUrUxl23H548NIE5weERodS6HBhUh88ZAOLEQt3AjHelQTu7B5meBTk9wKlHyapEtnqPl9e1E3nSCz8dJOwzxIdrwuNZZFvDo7CF_aiawyNN.jpg?r=98e",
                preview: "https://www.youtube.com/watch?v=FA_K9QPuKuM",
            },
    
            {
                id: "comedies",
                title: "The after party",
                genre: "Comedies",
                comingSoon: false,
                availDate: 2018,
                description: "An aspiring rapper and his bestfriend/manager have one night to bounce back from embarassment and make their dreams of hip-hop stardom to come true",
                image: "https://occ-0-5294-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRdNICP026wXfGkdQGUy-WgGcTI3vwR6vvMkrJV5HgAeUCx75IBa-AF81cNFhJ8jbXa2u2dlMf3QdzSK8KH6c-oqfe9k9lDKxnJxsYtGrG57ejUa09H6x35KG173wokxUKcd.jpg?r=888",
                preview: "https://www.youtube.com/watch?v=coG5LwaHp3c",
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
        
        computed: { //computed is there to help create, modify, manipulate or display data within your components in a readable, efficient manner. This also helps with updating and creating new elements as time goes on.
            comingSoonFilter() { //moviesComingSoonFilter is a function that will return an object with two properties: The movies and filter to coming soon.
                let comingSoonFilter = this.movies.filter((movie) => { 
                    return movie.id.toLowerCase().includes("comingSoon".toLowerCase()); 
            });
            return comingSoonFilter; 
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

            animeFilter() {
                let animeFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("anime".toLowerCase());
                });
                return animeFilter;
            },
        },

        methods: { 

            addingToWatchList(event) { 
                let watchlist = JSON.parse(localStorage.getItem("movies")); 
                for (let i = 0; i < watchlist.length; i++) { 
                    if (watchlist[i].title == event.title) { 
                        this.list = true;
                    } else {
                        this.list = false;
                    }
                }
                
                if (this.list == true) {
                } else {
                if (watchlist.length < 20) {
                    watchlist.push(event);

                    localStorage.setItem("movies", JSON.stringify(watchlist));  
                } else if (watchlist.length >= 20) {
                    this.completeList = true;
                    alert("List Capacity reached, eiter you watch all or you willl have to delete some, sorry!");
                }
            }
        },
    },
})
