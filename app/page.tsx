import React from 'react';
import AuthorsCard from '@/app/components/authorsCard';
import { client } from '@/sanity/lib/client';
import CommentsSection from './components/CommentsSection';
import BlogCard from './components/BlogCard';

interface Post {
  image: any;
  title: string;
  summary: string;
  slug: string;
}

export default async function Home() {
  const query = `
    *[_type == 'post'] | order(_createdAt asc){
      title, summary, image,
      "slug": slug.current
    }
  `;
  
  const Posts: Post[] = await client.fetch(query);

  return (
    <div className='flex flex-col p-4'>
      <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {Posts.map((post, i) => (
          <BlogCard key={i} post={post} />
        ))}
      </section>
      <CommentsSection />
    </div>
  );
}
