<template>
    <div :style="{...defaultStyle, ...field.style }"></div>
</template>

<script>
    export default {
        name: "CardStripe",
        props: ['data', 'field', 'default'],
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
