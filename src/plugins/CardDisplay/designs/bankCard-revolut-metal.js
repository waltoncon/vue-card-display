export default {
    name: 'Revolut',
    template: 'bankCard',
    details: {
        bank: 'Revolut',
        material: 'Metal'
    },
    layout: {
        front: [
            {
                type: 'image',
                default: require('../assets/misc/brushed-metal.png'),
                style: {
                    width: '100%',
                    height: '100%',
                    opacity: 0.4,
                    // background: 'linear-gradient(to top, rgba(255,255,255,0.2) , transparent 30% 60%, rgba(255,255,255,0.1))',
                    top: 0,
                    left: 0,
                }
            },
            {
                id: 'revolut-logo',
                type: 'image',
                default: require('../assets/brand/revolut-r.svg'),
                options: {type: 'svg'},
                style: {
                    height: '7mm',
                    top: '5mm',
                    left: 'auto',
                    right: '5mm',
                    fill: 'darkgrey'
                }
            },
            {
                id: 'account-holder',
                modifiers: null,
                style: {
                    color: 'darkgrey'
                }
            },
            {
                id: 'contactless-logo',
                display: false,
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
                display: false
            },
            {
                id: 'expiry-date-label',
                display: false
            },
            {
                id: 'sort-code',
                display: false,
            },
            {
                id: 'card-number',
                display: false
            }
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
