<template>
    <div :is="`card-${module.type}`"
         v-if="display"
         :data="passThroughData"
         :default="passThroughDefault"
         :field="module"></div>
</template>

<script>
    // Autoload all card module types
    const components = {};
    const files = require.context('./card', true, /\.vue$/i)
    files.keys().map(key => components[key.split('/').pop().split('.')[0]] = files(key).default);

    export default {
        name: "CardModule",
        components,
        props: ['data', 'module'],
        computed: {
            display() {
                // return true;
                return !(this.passThroughData === null && !!this.module.input) || !!this.passThroughDefault;
            },
            passThroughData() {
                return (this.data || {})[this.module.input] || null;
            },
            passThroughDefault() {
                let pass = this.module.default || null;
                return pass;
            }
        }
    }
</script>

<style scoped>

</style>
