<template>
    <div class="shine" :style="{...defaultStyle, ...field.style }"></div>
</template>

<script>
    export default {
        name: "CardShine",
        props: ['data', 'field', 'default'],
        data() {
            return {
                defaultStyle: {
                    position: 'absolute',
                    width: '20mm',
                    height: '12mm',
                    background: 'grey'
                }
            }
        }
    }
</script>

<style scoped>
    .shine {
        width: 100%; /*Make sure the animation is over the whole element*/
        height: 100%; /*Make sure the animation is over the whole element*/

        -webkit-animation-name: ShineAnimation;
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        /*-webkit-animation-delay: 1s;*/

    }

    @-webkit-keyframes ShineAnimation {
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
