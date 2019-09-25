import WebFontLoader from 'webfontloader';

WebFontLoader.load({
    google: {
        families: ['Kelly Slab', 'Mansalva']
    },
})

const defaultOptions = {
    loadDefaultDesigns: true,
    designs: {},
};
let options = {};

const sizes = {
    'id-1': {
        width: '85.60mm',
        height: '53.98mm',
    },
    'id-2': {
        width: '105mm',
        height: '74mm',
    },
    'id-3': {
        width: '125mm',
        height: '88mm',
    },
    'id-000': {
        width: '25mm',
        height: '15mm',
    },
};

const designs = {};
const defaultDesign = {
    style: {
        background: '#EFEFEF'
    }
};




const installer = {
    install(Vue, opts) {
        options = {...defaultOptions, ...opts}

        // Load all of the designs saved in ./designs
        if (options.loadDefaultDesigns) {
            const files = require.context('./designs', true, /\.js$/i);
            files.keys().forEach(key => {
                let name = key.split('/').pop().split('.')[0];
                designs[name] = files(key).default
            });
        }

        // Import custom designs
        Object.keys(options.designs).forEach(key => {
            designs[key] = options.designs[key]
        });
    },
};

export {sizes, defaultOptions, designs, defaultDesign};
export default installer
