export default {
    name: 'Apple Card',
    template: 'bankCard',
    style: {
        background: 'whitesmoke',
    },
    layout: {
        front: [
            {
                id: 'chip',
                style: {
                    top: 'auto',
                    left: 'auto',
                    bottom: '18mm',
                    right: '9mm',
                }
            },
            {
                type: 'image',
                default: require('../assets/brand/apple-outline-unset.svg'),
                options: {type: 'svg'},
                style: {
                    top: '6mm',
                    left: '6mm',
                    height: '12mm',
                    width: 'auto',
                    fill: 'lightgrey',
                }
            },
            {
                id: 'contactless-logo',
                display: false,
            },
            {
                id: 'account-holder',
                modifiers: null,
                style: {
                    color: 'grey',
                }
            },
            {
                id: 'card-number',
                display: false,
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
                id: 'valid-from',
                display: false
            },
            {
                id: 'valid-from-label',
                display: false
            },
            {
                id: 'sort-code',
                display: false
            },
        ],
        back: [
            {
                type: 'image',
                default: require('../assets/brand/goldmanSachs-unset.svg'),
                options: {type: 'svg'},
                style: {
                    top: '6mm',
                    left: '6mm',
                    width: '18mm',
                    fill: 'lightgrey',
                }
            },
            {
                type: 'image',
                default: require('../assets/brand/mc_vrt-outline-fix.svg'),
                options: {type: 'svg'},
                style: {
                    top: '6mm',
                    right: '6mm',
                    left: 'auto',
                    width: '18mm',
                    fill: 'lightgrey',
                }
            },

            {
                id: 'mag-stripe',
                style: {
                    background: 'silver',
                    top: 'auto',
                    bottom: 0
                }
            },
            {
                id: 'reflective-sticker',
                display: false
            },
            {
                id: 'signature-box',
                display: false
            },
            {
                id: 'cvc',
                display: false
            }
        ]
    }
}
