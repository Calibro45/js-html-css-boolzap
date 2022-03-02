
const app = new Vue ({

    el: '#app',

    data: {

        contacts:  [
            {
                name: 'Gianni',
                avatar: 'img/avatar-1.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 17:00:00',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 17:00:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 17:00:00',
                        text: 'tutto fatto!',
                        status: 'received',
                    },
                ]
            },
            {
                name: 'Lorenzo',
                avatar: 'img/avatar-2.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 12:30:15',
                        text: 'Ciao come stai?',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 12:32:37',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 12:35:20',
                        text: 'Si usciamo',
                        status: 'sent',
                    },
                ]
            },
            {
                name: 'Luca',
                avatar: 'img/avatar-3.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 15:51:30',
                        text: 'Ciao lo sai che è uscito un nuovo gioco?',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'No non lo sapevo',
                        status: 'sent',
                    },
                ]
            },
        ],
        activeIndex: 0,
        activeElement: 0,
        uMessage: '',
        messaggioAuto: 'ok',
        clock: 0,
    },

    methods: {

        setActive: function(element, i) {

            this.activeIndex = i;
            this.activeElement = element;
        },

        setChatClass: function(status) {

            if (status === 'sent') {

                return 'sent-message';

            } else {

                return 'received-message';
            }
        },

        createMessage: function() {

            const data = new Date();
            const newMessage = this.uMessage;
            return {
                date: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`,
                text: newMessage,
                status: 'sent',
            }
        },

        pushNewMessage: function() {

            const messaggio = this.activeElement.messages;
            messaggio.push(this.createMessage());
            this.uMessage = '';
            setTimeout( ()=> {
                this.pushAnswer(messaggio) }, 1000);
        },

        risposta: function() {

            const data = new Date();
            const risposta = this.messaggioAuto;
            return {
                date: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`,
                text: risposta,
                status: 'received',
            }
        },

        pushAnswer: function(contatto) {

            const rispChat = contatto;
            rispChat.push(this.risposta());
        },
    }
})
console.log(app);