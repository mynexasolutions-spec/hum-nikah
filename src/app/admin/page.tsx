import React from "react";
import { Users, FileText, Newspaper, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { BLOG_POSTS } from "@/data/blogsData";
import { GALLERY_ITEMS } from "@/data/galleryData";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  // Fetch stats concurrently using Supabase
  const [
    { count: leadsCount },
    { count: biodataCount },
    { count: blogsCount },
    { count: galleryCount },
    { data: recentBiodata },
    { data: recentLeads }
  ] = await Promise.all([
    supabase.from("Lead").select("*", { count: "exact", head: true }),
    supabase.from("Biodata").select("*", { count: "exact", head: true }),
    supabase.from("blogs").select("*", { count: "exact", head: true }),
    supabase.from("gallery").select("*", { count: "exact", head: true }),
    supabase.from("Biodata").select("*").order("createdAt", { ascending: false }).limit(5),
    supabase.from("Lead").select("*").order("createdAt", { ascending: false }).limit(5)
  ]);

  const finalBlogsCount = blogsCount && blogsCount > 0 ? blogsCount : BLOG_POSTS.length;
  const finalGalleryCount = galleryCount && galleryCount > 0 ? galleryCount : GALLERY_ITEMS.length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-playfair font-bold text-brand-charcoal mb-2">Dashboard Overview</h1>
        <p className="text-brand-secondary">Welcome to HumNikah administration panel.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-brand-secondary font-medium">Total Leads</p>
            <p className="text-2xl font-bold text-brand-charcoal">{leadsCount ?? 0}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-sm text-brand-secondary font-medium">Total Biodata</p>
            <p className="text-2xl font-bold text-brand-charcoal">{biodataCount ?? 0}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-charcoal/10 text-brand-charcoal rounded-full flex items-center justify-center">
            <Newspaper size={24} />
          </div>
          <div>
            <p className="text-sm text-brand-secondary font-medium">Published Blogs</p>
            <p className="text-2xl font-bold text-brand-charcoal">{finalBlogsCount}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-border flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-beige text-brand-gold rounded-full flex items-center justify-center">
            <ImageIcon size={24} />
          </div>
          <div>
            <p className="text-sm text-brand-secondary font-medium">Gallery Images</p>
            <p className="text-2xl font-bold text-brand-charcoal">{finalGalleryCount}</p>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden">
          <div className="p-6 border-b border-brand-border">
            <h3 className="text-lg font-bold text-brand-charcoal">Recent Biodata Submissions</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {!recentBiodata || recentBiodata.length === 0 ? (
              <p className="p-6 text-brand-secondary text-center">No biodata submissions yet.</p>
            ) : (
              recentBiodata.map((item) => (
                <div key={item.id} className="p-4 hover:bg-brand-light-cream transition-colors flex justify-between items-center">
                  <div>
                    <p className="font-medium text-brand-charcoal">{item.fullName}</p>
                    <p className="text-sm text-brand-secondary">{item.city}, {item.country}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden">
          <div className="p-6 border-b border-brand-border">
            <h3 className="text-lg font-bold text-brand-charcoal">Recent Leads</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {!recentLeads || recentLeads.length === 0 ? (
              <p className="p-6 text-brand-secondary text-center">No leads yet.</p>
            ) : (
              recentLeads.map((item) => (
                <div key={item.id} className="p-4 hover:bg-brand-light-cream transition-colors flex justify-between items-center">
                  <div>
                    <p className="font-medium text-brand-charcoal">{item.name}</p>
                    <p className="text-sm text-brand-secondary">{item.phone}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-emerald/10 text-brand-emerald">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}
