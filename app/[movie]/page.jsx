import Image from "next/image"

export async function generateStaticParams(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function MovieDetail({params}){
    const {movie} = params
    const imagePath = 'https://image.tmdb.org/t/p/original'

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)

    const res = await data.json()
    return(
        <div>
            <div>
                <h2>{res.title}</h2>
                <h2>{res.release_date}</h2>
                <h2>Length: {res.runtime} mins</h2>
                <h2>{res.status}</h2>
                <p>{res.overview}</p>
            </div>
            <div>
                <Image 
                className="my-12" 
                src={imagePath + res.poster_path}
                width={400} 
                height={400} 
                priority
                />
            </div>
        </div>
    )
}