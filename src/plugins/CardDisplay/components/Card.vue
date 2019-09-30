<template>
    <!--    <div @dblclick="flip" @contextmenu.prevent="flip" class="card-plastic" @mouseleave="front = true" v-tilt="tiltOptions">-->
    <transition name="slide-fade" mode="out-in">
        <div :key="side" v-tilt="tiltOptions" class="card" :style="{width, height, ...style}" @click="flip">
            <card-module v-for="(module, key) in layout" :key="key" :module="module" :data="data"></card-module>
        </div>
    </transition>
</template>

<script>
    import {sizes, designs, defaultDesign} from '../index'
    import VanillaTilt from 'vanilla-tilt'

    import CardModule from "./CardModule";

    export default {
        name: "Card",
        components: {CardModule},
        directives: {
            tilt: {
                inserted: function (el, binding) {
                    VanillaTilt.init(el, Object.assign({}, binding.value));
                }
            }
        },
        props: {
            type: {
                type: String,
                default: 'id-1',
                validator: value => Object.keys(sizes).includes(value)
            },
            design: {
                type: String,
                required: true
            },
            data: {
                type: Object
            }
        },
        data() {
            return {
                front: true,
                sizes: sizes,
                tiltOptions: {
                    reverse: true,
                    scale: 1.2,
                    glare: true,
                    'max-glare': 0.5,
                }
            }
        },
        computed: {
            layout() {
                return (this.card.layout || {})[this.side];
                // return this.layoutFilter(this.side);
            },
            // layout() {
            //    return {
            //        front: this.layoutFilter('front'),
            //        back: this.layoutFilter('back'),
            //    }
            // },
            style() {
                return this.getStyle(this.side);
            },
            // style() {
            //     return {
            //         front: (this.card.style || {}).front || this.card.style || defaultDesign.style,
            //         back: (this.card.style || {}).back || this.card.style || defaultDesign.style,
            //     }
            // },
            card() {
                return designs[this.design] || defaultDesign;
            },
            height() {
                return this.sizes[this.type].height;
            },
            width() {
                return this.sizes[this.type].width;
            },
            side() {
                return this.front ? 'front' : 'back'
            }
        },
        methods: {
            getStyle(side) {
                return (this.card.style || {})[side] || this.card.style || defaultDesign.style
            },
            flip() {
                this.front = !this.front
            },
            layoutFilter(side) {
                side = (this.card.layout || {})[side];
                if (!side) {
                    return {}
                }

                return side.filter(field => {
                    return (!!field.input && !!this.data[field.input]) || !field.input
                })
            }
        }
    }
</script>

<style scoped>
    .card {
        position: relative;
        border-radius: 10px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        /*z-index: 0;*/
    }

    .card:hover {
        z-index: 1;
    }
</style>
