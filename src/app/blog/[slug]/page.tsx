import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, BookOpen, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { BLOG_POSTS } from "@/data/blogsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  const { data: post } = await supabase
    .from("blogs")
    .select("title, excerpt")
    .eq("slug", slug)
    .single();

  if (!post) {
    const fallbackPost = BLOG_POSTS.find(p => p.slug === slug);
    if (!fallbackPost) {
      return {
        title: "Article Not Found | HumNikah",
      };
    }
    return {
      title: `${fallbackPost.title} | HumNikah Blog`,
      description: fallbackPost.excerpt,
    };
  }

  return {
    title: `${post.title} | HumNikah Blog`,
    description: post.excerpt,
  };
}

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  const { data: dbPost, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  let post = dbPost;
  
  if (error || !post) {
    const fallbackPost = BLOG_POSTS.find((p) => p.slug === slug);
    if (fallbackPost) {
      post = fallbackPost;
    } else {
      notFound();
    }
  }

  const { data: dbRelatedPosts } = await supabase
    .from("blogs")
    .select("*")
    .neq("id", post.id)
    .limit(3);

  let relatedPosts = dbRelatedPosts;
  if (!relatedPosts || relatedPosts.length === 0) {
    relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  }

  return (
    <main className="min-h-screen bg-brand-cream pb-16 sm:pb-24">
      {/* Top Banner & Header */}
      <section className="bg-[#1D184C] text-white py-8 sm:py-12 border-b border-brand-gold/20 relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#651514]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 mb-4 flex-wrap">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <Link href="/blog" className="hover:text-brand-gold transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-[#F3B979] font-medium truncate max-w-[200px] sm:max-w-[350px]">
              {post.title}
            </span>
          </nav>

          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-[11px] font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-white leading-tight sm:leading-tight mb-4">
            {post.title}
          </h1>

          {/* Author & Meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <img
                src={post.author?.avatar}
                alt={post.author?.name}
                className="w-8 h-8 rounded-full object-cover border border-brand-gold/40"
              />
              <div>
                <p className="font-semibold text-white text-xs">{post.author?.name}</p>
                <p className="text-[10px] text-slate-400">{post.author?.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-brand-gold" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-brand-gold" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Container */}
      <article className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* Back Link */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-emerald hover:text-brand-gold transition-colors bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-brand-border/60"
          >
            <ArrowLeft size={14} /> Back to Articles
          </Link>
        </div>

        {/* Compact & Responsive Featured Image */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-brand-border/80 mb-6 sm:mb-8 bg-brand-beige max-w-3xl lg:max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[280px] sm:max-h-[380px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-brand-border/60">
          <div
            className="prose prose-emerald sm:prose-lg max-w-none 
              prose-headings:font-playfair prose-headings:font-bold prose-headings:text-brand-charcoal 
              prose-h2:text-xl prose-h2:sm:text-2xl lg:prose-h2:text-3xl prose-h2:mt-7 prose-h2:mb-3.5 prose-h2:border-b prose-h2:border-brand-border/40 prose-h2:pb-2
              prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-6 prose-h3:mb-2.5
              prose-p:text-brand-secondary prose-p:text-sm prose-p:sm:text-base prose-p:font-light prose-p:leading-relaxed prose-p:mb-4
              prose-blockquote:border-l-4 prose-blockquote:border-brand-gold prose-blockquote:bg-brand-cream/80 prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:font-playfair prose-blockquote:italic prose-blockquote:text-brand-charcoal prose-blockquote:text-sm prose-blockquote:sm:text-base
              prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2 prose-ul:text-sm prose-ul:sm:text-base prose-ul:text-brand-secondary
              prose-strong:text-brand-charcoal prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-5 border-t border-brand-border/50 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-brand-secondary flex items-center gap-1 mr-1">
              <Tag size={13} className="text-brand-gold" /> Tags:
            </span>
            {post.tags && post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-brand-beige rounded-md text-[11px] font-medium text-brand-charcoal"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-6 bg-brand-cream/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-brand-border/80 flex items-center gap-3.5">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-brand-gold flex-shrink-0"
            />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal">{post.author?.name}</h4>
              <p className="text-[11px] text-brand-gold font-semibold">{post.author?.role}</p>
              <p className="text-[11px] text-brand-secondary font-light mt-0.5 line-clamp-2">
                Providing authentic Islamic guidance for single Muslims, parents, and newlyweds embarking on Nikah.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Nikah Articles Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pt-10 border-t border-brand-border/60">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-brand-gold" />
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal">
              Related Nikah Articles
            </h3>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-brand-emerald hover:text-brand-gold flex items-center gap-1 transition-colors"
          >
            View All <ChevronRight size={14} />
          </Link>
        </div>

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {relatedPosts && relatedPosts.map((related) => (
            <Link key={related.id} href={`/blog/${related.slug}`} className="group block h-full">
              <div className="bg-white rounded-2xl border border-brand-border/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  {/* Image */}
                  <div className="h-44 sm:h-48 w-full overflow-hidden bg-brand-beige relative">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#1D184C]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                        {related.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 pb-2">
                    <div className="flex items-center gap-3 text-[11px] text-brand-secondary mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-brand-gold" />
                        {related.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-brand-gold" />
                        {related.readTime}
                      </span>
                    </div>

                    <h4 className="text-base font-playfair font-bold text-brand-charcoal group-hover:text-brand-gold transition-colors leading-snug mb-2 line-clamp-2">
                      {related.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={related.author?.avatar}
                      alt={related.author?.name}
                      className="w-6 h-6 rounded-full object-cover border border-brand-gold/30"
                    />
                    <span className="text-[11px] font-semibold text-brand-charcoal truncate max-w-[100px]">
                      {related.author?.name}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-brand-emerald group-hover:underline flex items-center gap-1">
                    Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
