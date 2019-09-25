<template>
    <div id="app">
        <div class="form">
            <div class="form-item">
                <label for="card-sizing">Card Sizing</label>
                <select v-model="currentStyle" id="card-sizing">
                    <option v-for="option in sizes" :key="option" :value="option">{{ option }}</option>
                </select>
            </div>
        </div>

        <div class="card-deck">
            <div class="card-wrapper" v-for="(card, key) in cards" :key="key">
                <card :type="currentStyle" :design="card.design" :data="card.data"></card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "./plugins/CardDisplay/components/Card";
    import {sizes} from './plugins/CardDisplay/index'

    export default {
        name: 'app',
        components: {
            Card
        },
        data() {
            return {
                currentStyle: 'id-1',
                cards: [
                    {
                        design: 'monzo-hotCoral',
                        data: {
                            longNumber: '1234 5678 9012 3456',
                            accountHolder: 'MR JOHN SMITH',
                            expiryDate: 'EXP. 01/12'
                        }
                    },
                    {
                        design: 'drivingLicence-provisional'
                    },
                    {
                        design: 'visa'
                    },
                    {
                        design: 'natwest-visaDebit'
                    }
                ]
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
        background: #EFEFEF;
        padding: 8px 16px;
        width: 200px;
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
        width: 100px;
        text-align: left;
        margin-bottom: 4px;
    }
</style>
