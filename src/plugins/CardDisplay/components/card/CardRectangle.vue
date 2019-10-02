<template>
    <div :style="style"></div>
</template>

<script>
    import BaseModule from "./BaseModule";
    export default {
        extends: BaseModule,
        name: "CardRectangle",
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    height: '10mm',
                    width: '10mm',
                    top: '1mm',
                    left: '1mm',
                }
            }
        }
    }
</script>
