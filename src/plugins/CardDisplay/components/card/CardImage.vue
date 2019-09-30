<template>
    <img :src="image" :style="{...defaultStyle, ...field.style }">
</template>

<script>
    export default {
        name: "CardImage",
        props: {
            data: {
                // required: true
            },
            field: {
                // required: true,
                // type: Object
            },
            default: {}
        },
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    // left: '0',
                    // top: '0',
                }
            }
        },
        computed: {
            image() {
                return this.data || this.default;
            }
        }
    }
</script>

<style scoped>

</style>
