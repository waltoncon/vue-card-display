<template>
    <div :style="style"></div>
</template>

<script>
    import BaseModule from "./BaseModule";
    export default {
        extends: BaseModule,
        name: "CardChip",
        data() {
            return {
                defaultStyle: {
                    background: 'silver',
                    borderRadius: '4px',
                    position: 'absolute',
                    height: '9mm',
                    width: '12mm',
                    top: '18mm',
                    left: '9mm',
                }
            }
        }
    }
</script>
