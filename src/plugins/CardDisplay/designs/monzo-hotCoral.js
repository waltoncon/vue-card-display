export default {
    name: 'Monzo Bank Card',
    details: {
        color: 'Hot Coral'
    },
    style: {
        front: {
            background: '#FF4D56',
        },
        back: {
            background: '#DD2B34'
        }
    },
    layout: {
        front: [
            {type: 'chip'},
            {
                type: 'logo',
                options: {
                    logo: 'mc_vrt_rev.svg'
                },
                style: {
                    width: 'auto',
                    height: '18mm',
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    opacity: 0.9
                }
            },
            {
                type: 'text-embossed',
                input: 'longNumber',
                style: {
                    left: '9mm',
                    top: '29mm',
                    fontSize: '1.5em',
                },
            },
            {
                type: 'text-embossed',
                input: 'accountHolder',
                style: {
                    left: '9mm',
                    top: '45mm',
                    fontSize: '0.8em'
                }
            },
            {
                type: 'text-embossed',
                input: 'expiryDate',
                style: {
                    left: '30mm',
                    top: '40mm',
                    fontSize: '0.8em'
                }
            }
        ],
        back: [
            {
                type: 'rectangle',
                style: {
                    background: 'blue',
                    width: '100%',
                    height: '10mm',
                    position: 'absolute',
                    // top: '4mm',
                    left: 0
                }
            },
        ]
    }
};
