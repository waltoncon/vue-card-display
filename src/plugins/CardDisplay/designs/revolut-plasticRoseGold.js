export default {
    name: 'revolut-plasticPurpleBlue',
    template: 'revolut',
    details: {
        bank: 'Revolut',
        material: 'plastic',
        color: 'Purle-Blue'
    },
    style: {
        background: '#f2c0b9',
    },
    layout: {
        front: [
            {type: 'chip'},
            {
                type: 'text',
                modifiers: ['embossed', 'bankCard'],
                input: 'longNumber',
            },
        ],
        back: [
            {
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
