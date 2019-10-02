import WebFontLoader from 'webfontloader';
import _ from 'lodash';

WebFontLoader.load({
    google: {
        families: ['Kelly Slab', 'Yanone Kaffeesatz:light', 'Montserrat']
    },
});

const defaultOptions = {
    loadDefaultDesigns: true,
    designs: {},
    debug: false
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

let allReady = function () {
    return Object.values(designs).reduce((carry = false, design) => {
        return (carry && design.ready);
    });
};

const installer = {
    install(Vue, opts) {
        options = {...defaultOptions, ...opts};

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

        let available = Object.keys(designs);

        document.onkeyup = function (e) {
            if (e.code === 'KeyD') {
                options.debug = !options.debug;
            }
        };

        // Get all of the designs that aren't ready for use yet (the rely on a template that needs to be merged in)
        let hasTemplate = Object.keys(designs).map(key => {
            designs[key].ready = true;

            if (typeof designs[key].template !== 'string') {
                return key;
            }

            if (!available.includes(designs[key].template)) {
                console.warn(`Card design '${key}' is looking for the template '${designs[key].template}' but it can't be found`);
                return key;
            }

            if (designs[key].template === key) {
                console.warn(`Card design '${key}' is looking for itself as a template!`);
                return key;
            }

            designs[key].ready = false;

            return key;
        }).filter(key => !designs[key].ready);
        let timeout = 10;
        let counter = 0;

        // Handle all template merging
        while (!allReady()) {
            for (let i = 0; i < hasTemplate.length; i++) {
                let key = hasTemplate[i];
                let design = designs[key];
                let template = designs[design.template];

                if (!template.ready) {
                    if (counter >= timeout) {
                        console.error('vue-card-display: There is a template reference loop. Some cards may look incorrect. Fix the loop, fix the cards.');
                        return;
                    }

                    counter++;
                    continue;
                }

                let tempTemplate = _.merge({}, template);

                let combiner = function(objValue, srcValue) {
                    if (_.isArray(objValue) && !(_.isEmpty(objValue) || _.isEmpty(srcValue))) {

                        let filtered = [];
                        let mergedList = _.map(srcValue, function (item) {
                            let filter = _.filter(objValue, {id: item.id});
                            filtered.push(filter.map(f => f.id));
                            return _.merge(filter[0], item);
                        });

                        filtered = _.flatten(filtered);

                        // Filter out template modules that have been merged
                        let regularModules = objValue.filter(module => {
                            return !filtered.includes(module.id);
                        });

                        console.log(`${key}`, {filtered, mergedList, regularModules});


                        return _.concat(mergedList, regularModules);
                    }
                };

                design = _.mergeWith(tempTemplate, design, combiner);
                designs[key] = design;

                designs[key].ready = true
            }
        }


    },
};


export {sizes, defaultOptions, designs, defaultDesign, options};
export default installer
