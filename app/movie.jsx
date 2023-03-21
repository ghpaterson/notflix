import Link from "next/link"
import Image from "next/image"

export default function Movie({title, id, poster_path, release_date}){
    const imagePath = 'https://image.tmdb.org/t/p/original'
    return(
        <div>
            <div className="h-20 flex items-center">
                <h1 className=" font-noir text-2xl mb-2">
                    {title}
                </h1>
            </div>
            
            <Link href={`/${id}`}>
                <Image 
                className="rounded-md"
                src={imagePath + poster_path} 
                width={600} 
                height={600} 
                alt={title}/>
            </Link>
            <h2 className=" font-noir text-lg my-2">{release_date}</h2>
        </div>
    )
}