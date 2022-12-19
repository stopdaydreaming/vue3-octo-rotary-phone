const app = Vue.createApp({
    data(){
        return{
            url: "google.com",
            showBooks: true,
            books: [
                { 
                    title: 'galloways justice', 
                    author: 'melodee elliott', 
                    cover: "assets/book1.png"},
                { 
                    title: 'us', 
                    author: 'david nicholls',
                    cover: "assets/book2.png" },
                { 
                    title: 'a teaspoon earth and sea', 
                    author: 'dina nayeri',
                    cover: "assets/book3.png"},
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
    }
})

app.mount('#app')