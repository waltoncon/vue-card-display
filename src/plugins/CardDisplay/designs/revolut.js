export default {
    name: 'revolut',
    details: {
        bank: 'Revolut',
    },
    layout: {
        front: [
            {id: 'chip', type: 'chip'},
            {
                id: 'card-number',
                type: 'text',
                modifiers: ['embossed', 'bankCard'],
                input: 'longNumber',
            },
        ],
        back: [
            {
                id: 'mag-stripe',
                type: 'stripe',
                style: {
                    background: '#121F35'
                }
            },
            {
                type: 'shine',
                style: {
                    width: '17mm',
                    height: '11mm',
                    bottom: '6mm',
                    left: '3mm',
                    borderRadius: '5.5mm',
                }
            },
            {
                id: '',
                type: 'rectangle',
                style: {
                    background: 'lightgrey',
                    width: '55mm',
                    height: '11mm',
                    top: '19mm',
                    left: '3mm',
                }
            },
        ]
    }
}
