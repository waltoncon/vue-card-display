export default {
    name: 'NatWest Visa Debit',
    details: {
        type: 'Visa Debit',
    },
    style: {
        background: '#56204E',
    },
    layoutFront: [
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
                position: 'absolute',
                left: '9mm',
                top: '29mm',
                fontSize: '1.5em',
            },
        },
        {
            type: 'text-embossed',
            input: 'accountHolder',
            style: {}
        }
    ],
}
