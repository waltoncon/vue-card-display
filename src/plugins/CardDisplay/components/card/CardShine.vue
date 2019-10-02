<template>
    <div class="shine" :style="style"></div>
</template>

<script>
    import BaseModule from "./BaseModule";
    export default {
        extends: BaseModule,
        name: "CardShine",
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    width: '20mm',
                    height: '12mm',
                    // background: 'grey'
                },
                modifiers: {
                    holo: {
                        background: 'linear-gradient(270deg, #ec1414, #eccb14, #14ec1c, #14eaec, #1914ec, #ec14da)',
                        backgroundSize: '1200% 1200%',
                        animation: 'Logo 4s ease infinite',
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .shine {
        background: grey;
        width: 100%; /*Make sure the animation is over the whole element*/
        height: 100%; /*Make sure the animation is over the whole element*/

        -webkit-animation-name: ShineAnimation;
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        /*-webkit-animation-delay: 1s;*/

    }

    @keyframes ShineAnimation {
        from {
            background-repeat: no-repeat;
            background-image: linear-gradient(
                    135deg,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(255, 255, 255, 0) 20%,
                    rgba(255, 255, 255, 0.8) 50%,
                    rgba(255, 255, 255, 0) 80%,
                    rgba(0, 0, 0, 0) 100%);
            background-position: -500px -500px;
            background-size: 500% 500%;
        }
        to {
            background-repeat: no-repeat;
            background-position: 500px 500px;
        }
    }
</style>
