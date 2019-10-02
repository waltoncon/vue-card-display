export default {
    name: 'Bank Card',
    details: {
        bank: '',
        type: 'Credit'
    },
    style: {
        // Placeholder background colour
        background: 'repeating-linear-gradient(45deg, #EEEEEE,  #EEEEEE 3mm,  #DDDDDD 3mm, #DDDDDD 6mm)'
    },
    layout: {
        front: [
            {
                id: 'chip',
                type: 'chip'
            },
            {
                id: 'card-number',
                type: 'text',
                modifiers: ['embossed', 'bankCard'],
                input: 'longNumber',
            },
            {
                id: 'expiry-date',
                type: 'text',
                modifiers: ['embossed'],
                input: 'expiryDate',
                style: {
                    left: '35mm',
                    // top: '39mm',
                    bottom: '11mm',
                    top: 'auto',
                    fontSize: '0.8em'
                }
            },
            {
                id: 'expiry-date-label',
                type: 'text',
                default: 'EXPIRES<br>END',
                style: {
                    left: '26mm',
                    // top: '39mm',
                    bottom: '11mm',
                    top: 'auto',
                    color: '#ffffff',
                    fontSize: '0.5em',
                    fontFamily: 'monospace'
                }
            },
            {
                id: 'valid-from',
                type: 'text',
                modifiers: ['embossed'],
                input: 'validFrom',
                style: {
                    left: '10mm',
                    // top: '39mm',
                    bottom: '11mm',
                    top: 'auto',
                    fontSize: '0.8em'
                }
            },
            {
                id: 'valid-from-label',
                type: 'text',
                default: 'VALID<br>FROM',
                style: {
                    left: '2mm',
                    // top: '39mm',
                    bottom: '11mm',
                    top: 'auto',
                    color: '#ffffff',
                    fontSize: '0.5em',
                    fontFamily: 'monospace'
                }
            },
            {
                id: 'account-holder',
                type: 'text',
                modifiers: ['embossed'],
                input: 'accountHolder',
                style: {
                    left: '8mm',
                    // top: '43mm',
                    bottom: '7mm',
                    top: 'auto',
                    fontSize: '0.8em'
                }
            },
            {
                id: 'sort-code',
                type: 'text',
                input: 'sortCode',
                modifiers: ['embossed'],
                style: {
                    left: '8mm',
                    // top: '47mm',
                    top: 'auto',
                    bottom: '3mm',
                    fontSize: '0.7em'
                }
            },
            {
                id: 'contactless-logo',
                type: 'image',
                options: {type: 'svg'},
                default: require('../assets/misc/contactless-unset.svg'),
                style: {
                    top: '19mm',
                    left: '25mm',
                    height: '7mm',
                    fill: 'white',
                    opacity: 0.8
                }
            }
        ],
        back: [
            {
                id: 'mag-stripe',
                type: 'stripe',
            },
            {
                id: 'reflective-sticker',
                type: 'shine',
                style: {
                    width: '17mm',
                    height: '11mm',
                    bottom: '6mm',
                    left: '3mm',
                }
            },
            {
                id: 'signature-box',
                type: 'rectangle',
                style: {
                    background: 'white',
                    width: '55mm',
                    height: '11mm',
                    top: '19mm',
                    left: '3mm',
                }
            },
            {
                id: 'cvc',
                type: 'text',
                input: 'cvc',
                style: {
                    top: '21mm',
                    left: '51mm',
                    fontSize: '0.8em',
                    transform: 'scale(1) rotate(0deg) translate(0px, 0px) skew(10deg, 0deg)'
                }
            }
        ]
    }
}
