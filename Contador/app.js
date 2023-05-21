//createaApp
//Destructuring
const {createApp} = Vue;

createApp({
    data(){
        return{
            titulo: "Contador",
            numero : 0,
            url:"./vue.png",
            alt: "Logo Vue",
        }
    },
    methods: {
        sumando(){
            this.numero ++
        },
        restando(){
            if(this.numero == 0){
                alert("No puede seguir restando.")
            }else{
                this.numero --
            }
        }
    }
}).mount("#app")