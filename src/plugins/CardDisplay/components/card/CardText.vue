<template>
    <span :style="{...defaultStyle, ...modifiedStyle, ...field.style}" v-html="output"></span>
</template>

<script>
    export default {
        name: "CardTextEmbossed",
        props: {
            data: {
                required: true,
            },
            default: {},
            field: {
                type: Object,
                required: false,
            }
        },
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    fontFamily: ''
                },
                modifiers: {
                    embossed: {
                        textShadow: '-0.5px -1px 1px white, 1px 1px 1px dimgrey',
                        fontFamily: "'Kelly Slab', 'monospace'",
                        color: 'silver',
                        fontWeight: '400',
                        letterSpacing: '2px',
                        fontSize: '2em',
                    },
                    bankCard: {
                        left: '9mm',
                        top: '29mm',
                        fontSize: '1.3em',
                        letterSpacing: '4px',
                    }
                }
            }
        },
        computed: {
            modifiedStyle() {
                if (!this.field.modifiers) {
                    return {}
                }

                return this.field.modifiers
                    .filter(key => Object.keys(this.modifiers).includes(key))
                    .map(key => this.modifiers[key])
                    .reduce((carry = {}, current) => {
                        return {...carry, ...current}
                    });
            },
            output() {
                return this.data || this.default
            }
        },
    }
</script>

<style>
    span {
        transform: translateZ(20px);
    }
</style>
