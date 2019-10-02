export default {
    name: 'Monzo',
    template: 'bankCard',
    details: {
        bank: 'Monzo',
        color: null,
    },
    layout: {
        front: [
            {
                id: 'monzo-logo',
                type: 'image',
                default: require('../assets/brand/monzo-unset.svg'),
                options: {type: 'svg'},
                style: {
                    height: '5mm',
                    top: '3mm',
                    right: '3mm',
                    fill: '#fff'
                }
            },
            {
                id: 'mastercard-logo',
                type: 'image',
                default: require(`../assets/brand/mc_vrt_rev.svg`),
                options: {type: 'svg'},
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
                default: 'EXP<br>END',
                style: {
                    left: '35mm',
                }
            },
            {
                id: 'sort-code',
                display: false,
            },
        ],
        back: [
            {
                id: 'mag-stripe',
                style: {
                    background: '#121F35'
                }
            },
            {
                id: 'reflective-sticker',
                style: {
                    top: 'auto',
                    borderRadius: '5.5mm',
                }
            },
            {
                id: 'signature-box',
                style: {
                    backgroundImage: 'radial-gradient(#FFFFFF 20%, #CCCCCC 20%)',
                    backgroundPosition: '0 0',
                    backgroundSize: '7px 7px',
                    // height: '200px',
                    // width: '100%',
                }
            },

            // Text
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
        ]
    }
}
