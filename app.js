const app = Vue.createApp({
    data(){
        return{
            title: 'the final empire',
            author: 'brandon sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = "words of radiance"
            this.title = title
        }
    }
})

app.mount('#app')