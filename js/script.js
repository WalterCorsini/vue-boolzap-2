const {createApp} = Vue;

createApp({
    data(){
        return{
            DateTime: luxon.DateTime,
            count: 0,
            // input
            searchContact: "",
            inputMessage:"",
            onlineMessage:"",
            nameNewContact:"",
            // flag
            notify: false,
            menuHamburger: false,
            noChat: false,
            contacts: [
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
                ],
                },
                {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
                }
                ],
                },
                {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
                }
                ],
                }
            ],
            rndNumberText: 0,
            arrayText:[
              "Amala pazza inter amala",
              "siamo la curva nord Milano",
              "eeee per la gente che,aaaaama soltanto te",
              "chi non salta bianconero eh eh",
              "milanista chiaccherone, quanta fantasia che hai"],
              rndNumberImg: 0,
              arrayImg:["_1","_2","_3","_4","_5","_6","_7","_8"]
        }
    },
    methods:{
        sendMessage: function(i){
          const now = luxon.DateTime.now();
          const dateNow = now.toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS);
          rndNumberText = Math.floor(Math.random() * this.arrayText.length);
          if(this.inputMessage !== ""){
            const message = {
              date: dateNow,
              message: this.inputMessage,
              info: false,
              status: "sent",
            };
            const messageYou = {
              date: dateNow,
              message: this.arrayText[rndNumberText],
              info: false,
              status: "received",
            };
            console.log("ciao");
                  this.inputMessage="";
                  this.contacts[i].messages.push(message);
                  this.onlineMessage = "online sta scrivendo...";
                  setTimeout(() =>{ this.contacts[i].messages.push(messageYou)
                  this.onlineMessage = "online";
                    setTimeout(() =>{
                  this.onlineMessage = "";
                    },3000);
              }, 3000); 
              };
          },
          searchContacts: function(){
            this.contacts.forEach((curContact) => {
              const name = curContact.name.toLowerCase();
              if (name.includes(this.searchContact.toLowerCase())){
                curContact.visible = true;
                } else {
                    curContact.visible = false;
                }
            });
          },

          deleteMessage: function(curText){
              this.contacts.forEach((curContact,i) => {
                  for(let j=0; j<curContact.messages.length; j++){
                    if(curContact.messages[j] === curText){
                      curContact.messages.splice(j,1);
                    }
                    if(curContact.messages.length !== 0){
                    curContact.messages.info=false;
                    }
                  }
              });
          },
          deleteAllMessage: function(){
            this.contacts[this.count].messages.splice(0);
            this.menuHamburger = false;
            },

        deleteChat: function(){
            if(this.contacts.length > 1 && this.count !== this.contacts.length-1){
            this.contacts.splice(this.count,1);
            this.noChat = false;
            } else if(this.contacts.length > 1 && this.contacts.length-1 === this.count ) {
                this.noChat = false;
                this.contacts.splice(this.count,1);
                this.count--;
            } else{
              this.noChat = true;
              this.contacts = [
                {
                  name: "",
                  visible: false,  
                  messages: [],
                },
              ];
            }
            this.menuHamburger = false;
            },
          createChat: function(){
            copy = this.nameNewContact;
            console.log(copy);
            this.rndNumberImg = Math.floor(Math.random() * this.arrayImg.length);
            this.contacts.push(
              // create contact with new message to avoid having an error and delete it immediately 
              {
                name: copy,
                avatar: this.arrayImg[this.rndNumberImg],
                visible:true,
                messages: [
                  {
                    date: "",
                    message: "11",
                    status: "sent"
                  }
                ],
              });
              if(this.contacts[0].name === ""){
                this.contacts.splice(0,1);
              }
              this.noChat = false;
              this.nameNewContact = "";
              this.contacts[this.contacts.length-1].messages.splice(0);
              this.count = this.contacts.length-1;
            }
    }
}).mount("#app");