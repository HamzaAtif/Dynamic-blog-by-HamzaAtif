import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"


interface Post{
    image:any
    title: string
    summary:string
    slug:string
  }
  

export default function BlogCard({post}:{post:Post}){
    return(
        <section className="flex flex-col justify-between h-[380px]
        w-[300px] rounded shadow-md shadow-gray-300 hover:scale-105 
        duration-700 mb-10">
            <div className="relative max-h-76 flex-1">
                <Image
                src={urlForImage(post.image)}
                alt="AI Image"
                width={300}
                height={300}
                className="object-cover rounded-t"
                />
            </div>
            <div className="h-[200px]">
            <p className="font-bold text-[22px] text-center ">{post.title}</p>
            <p className="line-clamp-5">{post.summary}</p>
            <Link 
            href={`/blog/${post.slug}`}
            className="block py-1  text-center rounded text-dark font-semibold mt-2"
            >
            Read more
            </Link>
            </div>
        </section>
    )
}