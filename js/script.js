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
            this.show = true;

            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                    if (this.response.length < 10) {
                        this.response.push(resp.data.response)
                    }
                })
            }
        },


        clearList() {
            this.show = false,
                this.response = []
        }
    },


}).mount("#app")