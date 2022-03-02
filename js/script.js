
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
            {
                name: 'Papà',
                avatar: 'img/avatar-4.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 15:51:30',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor.',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet',
                        status: 'sent',
                    },
                ]
            },
            {
                name: 'Mamma',
                avatar: 'img/avatar-5.jpg',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 15:51:30',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor.',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'sent',
                    },
                ]
            },
            {
                name: 'Nonna',
                avatar: 'img/avatar-6.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 15:51:30',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'sent',
                    },
                ]
            },
            {
                name: 'Matteo',
                avatar: 'img/avatar-2.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 15:51:30',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'NLorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'NLorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    
                ]
            },
            {
                name: 'Patrizio',
                avatar: 'img/avatar-1.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 15:51:30',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'NLorem ipsum dolor sit amet.',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'NLorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    
                ]
            },
            {
                name: '',
                avatar: 'img/avatar-2.png',
                visible: false,
                messages: [
                    {
                        date: '28/02/2022 15:51:30',
                        text: 'Lorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'NLorem ipsum dolor sit amet.',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 15:52:10',
                        text: 'NLorem ipsum dolor sit amet.',
                        status: 'received',
                    },
                    
                ]
            },
        ],
        activeIndex: 0,
        activeElement: 0,
        uMessage: '',
        messaggioAuto: 'ok',
        ricercaContatto: '',
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

        createMessage: function(messaggio, status) {

            const data = new Date();
            return {
                date: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`,
                text: messaggio,
                status: status,
            }
        },

        pushNewMessage: function() {

            const messaggio = this.activeElement.messages;
            messaggio.push(this.createMessage(this.uMessage, 'sent'));
            this.uMessage = '';
            setTimeout( ()=> {
                this.pushAnswer(messaggio) }, 1000);
        },

        pushAnswer: function(contatto) {

            const rispChat = contatto;
            rispChat.push(this.createMessage(this.messaggioAuto, 'received'));
        },

        hour: function (data) {

            return data.split(' ')[1].substring(0, 5);
        }

    },

    computed: {

        chatFilter: function() {
            return this.contacts.filter(el => {
                return el.name.toLowerCase().includes(this.ricercaContatto.toLowerCase());
            })
        },
    },

    created() {
        this.activeElement = this.contacts[this.activeIndex];
    },
})
console.log(app);