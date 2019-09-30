export default {
    name: 'UK Provisional Driving Licence',
    details: {
        level: 'Provisional'
    },
    style: {
        background: '#CED699'
    },
    layout: {
        front: [
            {
                type: 'image',
                input: 'photo',
                default: '',
                style: {
                    width: '17mm',
                    height: '22mm',
                    top: '14mm',
                    left: '5mm',
                    filter: 'grayscale(1)'
                }
            },
            {
                type: 'image',
                default: require('../assets/flags/united_kingdom.svg'),
                style: {
                    width: '14mm',
                    height: '8mm',
                    left: 'auto',
                    right: '2mm',
                    top: '17mm',
                }
            },
            {
                type: 'text',
                default: 'PROVISIONAL DRIVING LICENCE',
                style: {
                    top: '2mm',
                    fontSize: '0.8em',
                    letterSpacing: '0px',
                    color: 'black',
                    left: '18mm',
                    width: '32mm',
                    fontFamily: 'Yanone Kaffeesatz'
                }
            }
        ]
    }
}
