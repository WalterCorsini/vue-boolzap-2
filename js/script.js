const {createApp} = Vue;

createApp({
    data(){
        return{
            // input
            searchContact: "",
            inputMessage:"",
            // flag
            notify: false,
            menuHamburger: false,
            

        }
    },
    methods:{
        searchContacts: function(){

        }
    }
}).mount("#app");