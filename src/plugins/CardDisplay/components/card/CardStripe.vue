<template>
    <div :style="style"></div>
</template>

<script>
    import BaseModule from "./BaseModule";
    export default {
        extends: BaseModule,
        name: "CardStripe",
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    width: '100%',
                    height: '12mm',
                    top: '4mm',
                    left: '0',
                    background: '#000000'
                }
            }
        }
    }
</script>

<style scoped>

</style>
