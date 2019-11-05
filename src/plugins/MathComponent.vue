<template>
    <div class="math-container">
        <h3>Do some math!</h3>
        <math-content :operator="multiplication" :operation="'*'" />
        <math-content :operator="addition" :operation="addition" />
        <math-content :operator="subtraction" :operation="subtraction" />
    </div>
</template>

<script>
import MathContent from './components/MathContent.vue'

export default {
    name: 'mathComponent',
    components: {
        MathContent
    },
    data() {
        return {
            multiplication: 'X',
            addition: '+',
            subtraction: '-'
        }
    }
}
</script>

<style lang="scss" scoped>
.math-container {
    padding: 20px;
}
.content {
    margin: 2rem 0;
    max-width: 378px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .inputs {
        display: flex;
        align-items: center;
        width: 100%;
        p {
            margin: 0 20px;
        }
        input {
            border: 1px solid #ccc;
            border-radius: 5px;
            text-indent: 10px;
            padding: 8px 0;
        }
    }
}
</style>