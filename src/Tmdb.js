const API_KEY = '95a9983f93085c4448e7f5193944cb07';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch `${API_BASE_URL}${endpoint}`;
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Original da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Maiores Avaliações',
                items:await basicFetch(`/movie/top_rated?language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=288&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romancer',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-PT&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-PT&api_key=${API_KEY}`)
            }
          
            
        ]
    }
}