export default {
    name: 'NatWest Visa Debit',
    details: {
        type: 'Visa Debit',
    },
    style: {
        background: '#56204E',
    },
    layout: {
        front: [
            {
                type: 'chip', style: {
                    top: '16mm',
                    height: '12mm',
                    width: '13mm'
                }
            },
            {
                type: 'image',
                default: require(`../assets/brand/natwest-bank-white.svg`),
                style: {
                    width: 'auto',
                    height: '5mm',
                    top: '4mm',
                    left: '4mm',
                }
            },
            {
                type: 'image',
                default: require('../assets/brand/visa-white.png'),
                style: {
                    height: '6mm',
                    width: 'auto',
                    top: '4mm',
                    right: '4mm'
                }
            },
            {
                type: 'text',
                modifiers: ['embossed', 'bankCard'],
                input: 'longNumber',
            },
            {
                type: 'text',
                modifiers: ['embossed'],
                input: 'accountHolder',
                style: {
                    left: '9mm',
                    top: '45mm',
                    fontSize: '0.8em'
                }
            },
            {
                type: 'text',
                modifiers: ['embossed'],
                input: 'expiryDate',
                style: {
                    left: '41mm',
                    top: '39mm',
                    fontSize: '0.8em'
                }
            },
            {
                type: 'text',
                default: 'EXP<br>END',
                style: {
                    left: '35mm',
                    top: '39mm',
                    color: '#ffffff',
                    fontSize: '0.5em',
                    fontFamily: 'monospace'
                }
            },
            {
                type: 'image',
                default: require('../assets/misc/contactless.svg'),
                style: {
                    top: '19mm',
                    left: '25mm',
                    height: '7mm',
                    filter: 'invert()',
                    opacity: 0.8
                }
            }
        ],
        back: [
            {
                type: 'stripe',
                style: {
                    background: 'silver'
                }
            },
            {
                type: 'shine',
                style: {
                    width: '16mm',
                    height: '11mm',
                    top: '30mm',
                    left: '3mm',
                    borderRadius: '1.5mm',
                    background: 'silver'
                }
            },
            {
                type: 'text',
                default: 'Debit card enquiries:',
                style: {
                    color: '#ffffff',
                    fontSize: '0.5em',
                    left: '61mm',
                    top: '19mm',
                }
            },
            {
                type: 'text',
                default: '03457 888 444',
                style: {
                    color: '#ffffff',
                    fontSize: '0.7em',
                    left: '61mm',
                    top: '21.5mm',
                }
            },
            {
                type: 'text',
                default: 'From abroad call<br>+44 345 030 3605',
                style: {
                    color: '#ffffff',
                    fontSize: '0.5em',
                    left: '61mm',
                    top: '25mm',
                }
            },
            {
                type: 'text',
                default: 'debit',
                style: {
                    color: '#ffffff',
                    fontSize: '0.8em',
                    fontWeight: '700',
                    fontFamily: 'Montserrat',
                    textAlign: 'right',
                    right: '2mm',
                    bottom: '2mm',
                    top: 'auto'
                }
            },
            {
                type: 'text',
                default: 'AUTHORISED SIGNATURE - NOT VALID UNLESS SIGNED',
                style: {
                    top: '18mm',
                    left: '3mm',
                    fontSize: '0.49em',
                    color: '#ffffff'
                }
            },
            {
                type: 'rectangle',
                style: {
                    background: 'repeating-linear-gradient(1deg, #B3E5FC, #B3E5FC 1mm, #FFE0B2 1mm, #FFE0B2 2mm)',
                    width: '55mm',
                    height: '8mm',
                    top: '21mm',
                    left: '3mm',
                }
            },
            {
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
    },
}
