
const app = new Vue ({

    el: '#app',

    data: {
        contacts:  [
            {
                name: 'Andrea',
                avatar: 'avatar-1.png',
                visible: true,
                messages: [
                    {
                        date: '28/02/2022 17:00:00',
                        text: 'ciao, come Stai?',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 17:00:00',
                        text: 'ciao, come Stai?',
                        status: 'sent',
                    },
                    {
                        date: '28/02/2022 17:00:00',
                        text: 'ciao, come Stai?',
                        status: 'received',
                    },
                ]
            }
        ]
            
    },
})
console.log(app);