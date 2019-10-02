export default {
    name: 'Natwest',
    template: 'bankCard',
    details: {
        bank: 'Natwest'
    },
    style: {
        background: '#56204E',
    },
    layout: {
        front: [
            {
                id: 'chip',
                style: {
                    top: '16mm',
                    height: '12mm',
                    width: '13mm'
                }
            },
            {
                id: 'natwest-logo',
                type: 'image',
                default: require(`../assets/brand/natwest-bank-white.svg`),
                options: {type: 'svg'},
                style: {
                    width: 'auto',
                    height: '5mm',
                    top: '4mm',
                    left: '4mm',
                }
            },
            {
                id: 'visa-logo',
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
                default: 'Debit',
                style: {
                    top: '11mm',
                    left: 'auto',
                    right: '4mm',
                    color: 'white',
                    fontSize: '0.7em'
                }
            }
        ],
        back: [
            {
                id: 'mag-stripe',
                style: {
                    background: 'silver'
                }
            },
            {
                id: 'signature-box',
                style: {
                    background: 'repeating-linear-gradient(1deg, #B3E5FC, #B3E5FC 1mm, #FFE0B2 1mm, #FFE0B2 2mm)',
                    width: '55mm',
                    height: '8mm',
                    top: '21mm',
                    left: '3mm',
                }
            },
            {
                id: 'reflective-sticker',
                style: {
                    width: '16mm',
                    top: '30mm',
                    borderRadius: '1.5mm',
                    background: 'silver'
                }
            },

            // Text
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
                default: 'AUTHORISED SIGNATURE - NOT VALID UNLESS SIGNED',
                style: {
                    top: '18mm',
                    left: '3mm',
                    fontSize: '0.49em',
                    color: '#ffffff'
                }
            },
            {
                type: 'text',
                default: 'If found, please return this card to<br>any branch of MatWest. <b>natwest.com</b><br><br>For conditions of use refer to issuer',
                style: {
                    top: 'auto',
                    bottom: '2mm',
                    left: '3mm',
                    color: 'white',
                    fontSize: '0.5em'
                }
            }
        ]
    }
}
