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
        <div className="flex justify-start gap-20 my-20">
          <div>
              <Image 
              className="rounded-lg" 
              src={imagePath + res.poster_path}
              width={300} 
              height={300} 
              priority
               />
          </div>
          <div className=" font-noir text-xl">
            <h2 className="text-3xl">{res.title}</h2>
            <h2>{res.release_date}</h2>
            <h2>Length: {res.runtime} mins</h2>
            <h2 className=" bg-green-700 rounded-xl text-center text-gray-100 w-24">{res.status}</h2>
              <div className=" h-48 w-96 mt-10 flex flex-col">
                <p>{res.overview}</p>
              </div>
              <div className="flex items-center justify-center text-xl text-gray-100 w-36 h-8 rounded-xl bg-red-500 my-10">
                <a href="#">Watch Trailer</a>
              </div>
          </div>
      </div>
    )
}