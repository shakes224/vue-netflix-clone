const watchlistVue = new Vue({ //el property of the Vue instance.
    el: "#netflixWatchlist", //the value I set was #netflixWatchlist which is a reference in the HTML file just above the body tag.

    data: {
        watchlist: [], //this will create a watchlist with the specifiied array objects
},

    methods: {

        removeWatchlistItem(index) { //remove watchlistItem is a function created to remove an item when the 'remove from list' button is pressed
            this.watchlist.splice(index, 1); //removes from the index

            localStorage.setItem("movies", JSON.stringify(this.watchlist)); //sets the local storage to be equal to "movies" and sets this.watchlist equal to JSON localstorage
            this.watchlist = JSON.parse(localStorage.getItem("movies")); //local storage is then updated
        }, 
    },

    mounted() { //get the movies from the local storage, if there are no movies the array will stay empty, so the empty array will be saved as a bunch of zero's
        if (!localStorage.getItem("movies")) {
            let arrayListItem = [];
            localStorage.setItem("movies", JSON.stringify(arrayListItem));
        }

        this.watchlist = JSON.parse(localStorage.getItem("movies")); //setting up the watch list to be stored in local storage
    },
});