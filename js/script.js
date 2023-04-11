const { createApp } = Vue;

createApp({
    data() {
        return {
            response: [],
            show: false

        }
    },
    methods: {
        showList() {
            this.show = !this.show;
            
        }
    },
    mounted() {
        for (i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                this.response.push(resp.data.response)
            })
        }
    }

}).mount("#app")