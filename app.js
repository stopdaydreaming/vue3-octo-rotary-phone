const app = Vue.createApp({
    data(){
        return{
            url: "google.com",
            showBooks: true,
            books: [
                { 
                    title: 'galloways justice', 
                    author: 'melodee elliott', 
                    cover: "assets/book1.png",
                    isFav: true},
                { 
                    title: 'us', 
                    author: 'david nicholls',
                    cover: "assets/book2.png",
                    isFav: false },
                { 
                    title: 'a teaspoon earth and sea', 
                    author: 'dina nayeri',
                    cover: "assets/book3.png",
                    isFav: true},
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            // console.log("is fav")
            book.isFav = !book.isFav
        },
    }
})

app.mount('#app')