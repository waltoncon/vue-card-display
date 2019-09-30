<template>
    <div :style="{...defaultStyle, ...field.style }"></div>
</template>

<script>
    export default {
        name: "CardChip",
        props: {
            field: {
                required: false,
                type: Object
            }
        },
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
