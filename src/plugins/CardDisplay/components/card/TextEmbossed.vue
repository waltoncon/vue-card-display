<template>
    <span :style="{...defaultStyle, ...field.style }">{{ data }}</span>
</template>

<script>
    export default {
        name: "TextEmbossed",
        props: {
            data: {
                required: true,
                type: String
            },
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
                    color: 'silver',
                    fontWeight: '400',
                    fontFamily: "'Kelly Slab', 'cursive'",
                    letterSpacing: '2px',
                    fontSize: '2em',
                    textShadow: '-0.5px -1px 1px white, 1px 1px 1px dimgrey',
                }
            }
        }
    }
</script>

<style>
    span {
        transform: translateZ(20px);
    }
</style>
