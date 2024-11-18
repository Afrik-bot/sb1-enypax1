import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogContent } from "@/components/blog-content";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Negus Legal",
    };
  }

  return {
    title: `${post.title} | Negus Legal Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-8">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>{post.readTime}</span>
        </div>
      </div>

      <BlogContent content={post.content} />
    </article>
  );
}