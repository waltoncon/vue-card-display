export default {
    name: 'revolute-plasticPurpleBlue',
    details: {
        bank: 'Revolut',
        material: 'plastic',
        color: 'Purle-Blue'
    },
    style: {
        background: 'linear-gradient(200deg, #1b47a4 40%, #ac37a7 100%)',
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
