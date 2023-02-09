import MovieModel from '../../models/movie-model.js'

export default {
    Query: {
        async getMovie() {
            try {
                const user = await MovieModel.find()
                return user
            } catch (err) {
                throw new Error(err)
            }
        }
    }
} 