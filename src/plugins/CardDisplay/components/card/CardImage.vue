<template>
    <img v-if="selectorImage" :src="output" :style="style">
    <div v-else-if="selectorSvg" v-html="output" :style="style"></div>
</template>

<script>
    import BaseModule from "./BaseModule";
    export default {
        extends: BaseModule,
        name: "CardImage",
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    left: 'auto',
                    top: 'auto',
                }
            }
        },
        computed: {
            selectorImage() {
                return this.field.options === undefined
                    || this.field.options.type === 'image'
                    || this.field.options.type === undefined;
            },
            selectorSvg() {
                return this.field.options.type === 'svg'
            }
        }
    }
</script>

<style scoped>

</style>
