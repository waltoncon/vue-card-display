export default {
    name: 'Monzo Bank Card',
    details: {
        color: 'Hot Coral'
    },
    style: {
        background: '#FF4D56',
    },
    layout: {
        front: [
            {type: 'chip'},
            {
                type: 'image',
                default: require(`../assets/brand/mc_vrt_rev.svg`),
                style: {
                    width: 'auto',
                    height: '18mm',
                    position: 'absolute',
                    bottom: '2mm',
                    right: '2mm',
                    opacity: 0.9
                }
            },
            {
                type: 'image',
                default: require('../assets/brand/monzo-bank-white.svg'),
                style: {
                    height: '5mm',
                    width: 'auto',
                    top: '3mm',
                    right: '3mm'
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
                type: 'text',
                default: 'monzo.com/help<br>0800 8021 281<br>+44 20 3872 0620',
                style: {
                    color: '#ffffff',
                    fontSize: '0.6em',
                    fontWeight: '700',
                    fontFamily: 'Montserrat',
                    textAlign: 'right',
                    lineHeight: '1.4em',
                    right: '2mm',
                    top: '19mm',
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
                type: 'rectangle',
                style: {
                    background: 'lightgrey',
                    width: '55mm',
                    height: '11mm',
                    top: '19mm',
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
    }
};
