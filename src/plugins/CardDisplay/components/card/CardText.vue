<template>
    <span :style="style" v-html="output"></span>
</template>

<script>
    import BaseModule from "./BaseModule";
    export default {
        extends: BaseModule,
        name: "CardTextEmbossed",
        data() {
            return {
                modifiers: {
                    embossed: {
                        textShadow: '-0.5px -1px 1px rgba(255,255,255,0.5), 0.5px 1px 1px dimgrey',
                        fontFamily: "'Kelly Slab', 'monospace'",
                        color: 'white',
                        fontWeight: '400',
                        letterSpacing: '2px',
                        fontSize: '2em',
                    },
                    bankCard: {
                        // left: '9mm',
                        top: '29mm',
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '1.3em',
                        letterSpacing: '4px',
                    }
                }
            }
        },
    }
</script>
