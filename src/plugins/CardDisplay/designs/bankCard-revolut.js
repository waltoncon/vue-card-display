export default {
    name: 'Revolut',
    template: 'bankCard',
    details: {
        bank: 'Revolut'
    },
    style: {
        background: 'linear-gradient(200deg, #1b47a4 40%, #ac37a7 100%)',
    },
    layout: {
        front: [
            {
                id: 'revolut-logo',
                type: 'image',
                default: require('../assets/brand/revolut-unset.svg'),
                options: {type: 'svg'},
                style: {
                    height: '5mm',
                    width: 'auto',
                    top: '5mm',
                    left: '5mm',
                    fill: '#BFC5C9'
                }
            },
            {
                id: 'contactless-logo',
                style: {
                    top: '5mm',
                    left: 'auto',
                    right: '5mm',
                }
            },
            {
                id: 'visa-logo',
                type: 'image',
                default: require('../assets/brand/visa-white.png'),
                style: {
                    height: '6mm',
                    width: 'auto',
                    bottom: '4mm',
                    right: '4mm'
                }
            },
            {
                id: 'valid-from',
                display: false
            },
            {
                id: 'valid-from-label',
                display: false
            },
            {
                id: 'expiry-date',
                style: {
                    left: '41mm',
                }
            },
            {
                id: 'expiry-date-label',
                default: 'VALID THRU',
                style: {
                    left: '40mm',
                    // top: '37mm',
                    bottom: '15mm',
                    top: 'auto',
                }
            },
            {
                id: 'sort-code',
                display: false,
            },
        ],
        back: [
            {
                id: 'signature-box',
                style: {
                    background: 'repeating-linear-gradient(1deg, #B3E5FC, #B3E5FC 1mm, #FFE0B2 1mm, #FFE0B2 2mm)',
                    width: '47mm',
                    height: '8mm',
                    top: '21mm',
                    left: '3mm',
                }
            },
            {
                id: 'cvc-box',
                type: 'rectangle',
                style: {
                    background: 'white',
                    width: '8mm',
                    height: '5mm',
                    top: '22mm',
                    left: '50mm',
                }
            },
            {
                id: 'cvc',
                style: {
                    top: '22mm'
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
                default: 'AUTHORISED SIGNATURE',
                style: {
                    top: '18mm',
                    left: '3mm',
                    fontSize: '0.49em',
                    color: '#ffffff'
                }
            },
            {
                type: 'text',
                default: 'www.revolut.com',
                style: {
                    top: '1mm',
                    left: '3mm',
                    color: 'white',
                    fontSize: '0.5em'
                }
            }
        ]
    }
}
