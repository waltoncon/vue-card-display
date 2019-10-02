<template>
    
</template>

<script>
    export default {
        name: "BaseModule",
        props: {
            data: {
                required: true,
            },
            default: {},
            field: {}
        },
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    left: '0',
                    top: '0',
                },
                modifiers: {}
            }
        },
        computed: {
            style() {
                return {...this.defaultStyle, ...this.modifiedStyle, ...this.field.style};
            },
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

<style scoped>

</style>
