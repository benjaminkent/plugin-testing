<template>
    <div class="springers-container">
        <h4>springers</h4>
        <dog :image="springer.message" @getNewDog="handleGetNew" />
    </div>
</template>

<script>
import { fetchRandomSpringer } from '../ajax'
import Dog from './components/Dog.vue'

export default {
    name: 'springers',
    components: {
        Dog
    },
    data() {
        return {
            springer: {
                message: '',
                status: ''
            }
        }
    },
    methods: {
        async getSpringer () {
            const response = await fetchRandomSpringer()
            this.springer = response.data
        },
        handleGetNew() {
            this.getSpringer()
        }
    },
    mounted() {
        this.getSpringer()
    }
}
</script>

<style lang="scss" scoped>
h4 {
    margin-left: 20px;
}
</style>