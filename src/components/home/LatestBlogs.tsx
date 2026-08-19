import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogsData";

export function LatestBlogs() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-12 bg-brand-cream">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-brand-border/60 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-48 w-full overflow-hidden bg-brand-beige">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-playfair font-bold text-brand-charcoal mt-1 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-brand-secondary leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between border-t border-brand-border/40 mt-4">
                <span className="text-[11px] text-brand-secondary">{post.publishedAt}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-brand-emerald hover:text-brand-gold hover:underline flex items-center gap-1 transition-colors"
                >
                  Read Article <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;
