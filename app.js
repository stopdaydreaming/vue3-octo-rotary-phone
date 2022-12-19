const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            books: [
                { title: 'the final empire', author: 'brandon sanderson' },
                { title: 'lost lover', author: 'peg russell' },
                { title: 'field of dreams', author: 'lesley murch' },
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