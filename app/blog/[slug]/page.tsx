import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
export async function generateStaticParams() {
    const query = `*[_type == 'post']{
      "slug": slug.current
    }`;
    const slugs = await client.fetch(query)
    return slugs.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }) {
    const { slug } = params; // Extract slug safely

    const query = `*[_type == 'post' && slug.current == "${slug}"]{
      title, summary, image, content
    }`;

    try {
        const posts = await client.fetch(query);
        const post = posts[0]; // Assuming the fetch returns an array

        if (!post) {
            return <div>Post not found</div>;
        }

        return (
            <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
                <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold dark:text-light text-dark text-center">
                    {post.title}
                </h1>
                <Image
                    src={urlForImage(post.image)} // Ensure url() is called on the builder function
                    width={350}
                    height={450}
                    alt={post.title || "Post Image"}
                    className="rounded shadow-lg items-center mx-auto "
                />
                <section className="text-lg leading-relaxed">
                    <PortableText value={post.content} />
                </section>
                <section>
                    <h2 className="text-xl md:text-3xl font-bold uppercase">
                        Summary:
                    </h2>
                    <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
                        {post.summary}
                    </p>
                </section>
            </article>
        );
    } catch (error) {
        console.error("error fetching post:", error);
        return <div>Error loading post</div>;
    }
}
