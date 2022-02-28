
const app = new Vue ({

    el: '#app',

    data: {
        contacts:  [
            {
                name: 'Andrea',
                avatar: 'img/avatar-1.png',
                visible: true,
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
                visible: true,
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
                visible: true,
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
        ]
            
    },
})
console.log(app);