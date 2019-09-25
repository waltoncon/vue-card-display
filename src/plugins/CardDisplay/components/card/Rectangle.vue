<template>
    <div :style="{...defaultStyle, ...field.style }"></div>
</template>

<script>
    export default {
        name: "Rectangle",
        props: {
            field: {
                required: false,
                type: Object
            }
        },
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
