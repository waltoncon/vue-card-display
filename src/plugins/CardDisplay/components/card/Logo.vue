<template>
    <img :src="require(`../../assets/brandLogos/${field.options.logo}`)" :style="field.style">
</template>

<script>
    export default {
        name: "Logo",
        props: {
            field: {
                required: true,
                type: Object
            }
        },
    }
</script>

<style scoped>

</style>
