<template>
    <div class="math-content">
        <div class="answer">
            <h2>{{ answer }}</h2>
        </div>
        <div class="num-one">
            <input v-model="numOne" type="number">
        </div>
        <div class="operator">{{ operator }}</div>
        <div class="num-two">
            <input v-model="numTwo" type="number">
        </div>
        <div class="compute">
            <button @click="computeValue">Compute!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mathContent',
    props: {
        operator: String,
        operation: String
    },
    data() {
        return {
            numOne: 0,
            numTwo: 0,
            answer: 0
        }
    },
    methods: {
        computeValue() {
            this.answer = eval(`${this.numOne} ${this.operation} ${this.numTwo}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.math-content {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr .2fr 1fr;
    margin: 2rem 0;
    max-width: 400px;
    min-height: 200px;
    .answer {
        grid-area: 1 / 1 / 2 / 4;
        justify-self: center;
        align-self: center;
    }
    .num-one {
        grid-area: 2 / 1 / 3 / 2;
        align-self: center;
    }
    .num-two {
        grid-area: 2 / 3 / 3 / 4;
        align-self: center;
    }
    .operator {
        grid-area: 2 / 2 / 3 / 3;
        align-self: center;
        justify-self: center;
    }
    .compute {
        grid-area: 3 / 1 / 4 / 4;
        button {
            width: 100%;
            font-size: 1rem;
            padding: 8px 0;
            border-radius: 5px;
            border: 1px solid #222;
            background-color: #222;
            color: #fff;
            cursor: pointer;
        }
        button:hover {
            background-color: #444;
        }
    }
}
input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-indent: 10px;
    padding: 8px 0;
}
</style>