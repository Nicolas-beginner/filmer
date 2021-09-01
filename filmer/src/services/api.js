import { apiKey } from "../components/main"

const t = {

    async onSearchSubmit(search) {
        let request = fetch(`https://api.themoviedb.org/3/search/${search.type}?api_key=${apiKey}&language=pt-BR&query=${search.search}&page=${"1"}&include_adult=false`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },

    async movieId(Id) {
        let request = fetch(`https://api.themoviedb.org/3/movie/${Id}/external_ids?api_key=${apiKey}`)
        let response = (await request).json()
        let Data = (await response)
        let IdImdb = (await Data.imdb_id)
        let requestImdb = fetch(`https://api.themoviedb.org/3/find/${IdImdb}?api_key=${apiKey}&language=pt-BR&external_source=imdb_id`)
        let responseImdb = (await requestImdb).json()
        let data = (await responseImdb)
        return data
    },
    async getVideosForDetail(id) {
        let request = fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },
    async getSeries(query) {
        let request = fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&page=1&query=${query}&include_adult=false`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },
    async getSeriesForDetail(id) {
        let request = fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    },
    async person(id) {
        let request = fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=pt-BR`)
        let response = (await request).json()
        let Data = (await response)
        return Data
    }


}

export default t