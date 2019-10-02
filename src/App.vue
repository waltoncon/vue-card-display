<template>
    <div id="app">
        <div class="form">
            <div class="form-item">
                <label>Click card to flip</label>
            </div>
            <div class="form-item">
                <label for="card-sizing">Card Sizing</label>
                <select v-model="currentStyle" id="card-sizing">
                    <option v-for="option in sizes" :key="option" :value="option">{{ option }}</option>
                </select>
            </div>
            <div class="form-item">
                <label for="card-sizing">Debug (Press D)</label>
                <input type="checkbox" v-model="options.debug">
            </div>
        </div>

        <div class="card-deck">
            <div class="card-wrapper" v-for="(card, key) in cards" :key="key">
                <card :type="currentStyle" :design="card.design" :data="card.data" :side="side"></card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "./plugins/CardDisplay/components/Card";
    import {sizes, options} from './plugins/CardDisplay/index'
    import cards from "./cards";

    export default {
        name: 'app',
        components: {
            Card
        },
        data() {
            return {
                currentStyle: 'id-1',
                side: 'front',
                cards,
                options
            }
        },
        computed: {
            sizes: () => Object.keys(sizes),
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
        display: flex;
        min-height: 100vh;
        margin-left: 170px;
    }

    .card-deck {
        /*display: flex;*/
        /*flex-direction: row;*/
        /*flex-wrap: wrap;*/
        text-align: left;
        padding: 0 20px;
    }

    .card-wrapper {
        padding: 10px;
        height: auto;
        display: inline-block;
    }


    .form {
        position: fixed;
        top: 0;
        left: 0;
        background: #EFEFEF;
        padding: 8px 16px;
        width: 150px;
        height: 100vh;
    }

    .form .form-item {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #333;
        padding-bottom: 4px;
        margin-bottom: 4px;
    }

    .form .form-item:last-child {
        border-bottom: none;
    }

    .form .form-item label {
        display: block;
        text-align: left;
        margin-bottom: 4px;
    }
</style>
