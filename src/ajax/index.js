import axios from 'axios'

const DOG_API_URL = 'https://dog.ceo/api'

const dogAjax = axios.create({
    baseURL: DOG_API_URL
})

export const fetchRandomSpringer = () => {
    return dogAjax.get('/breed/springer/english/images/random')
}