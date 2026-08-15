/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Users, Search, Phone, CheckCircle, Trash2, RefreshCw, User, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { updateLeadStatus, deleteLead } from "./actions";

interface LeadItem {
  id: string;
  name: string;
  phone: string;
  status: string;
  gender?: string;
  dob?: string;
  country?: string;
  city?: string;
  maritalStatus?: string;
  profession?: string;
  education?: string;
  createdAt: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const itemsPerPage = 16; // 4 rows x 4 cols

  const COLOR_THEMES = [
    { border: 'border-orange-400', bg: 'bg-orange-50', iconBg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-100' },
    { border: 'border-blue-400', bg: 'bg-blue-50', iconBg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-100' },
    { border: 'border-emerald-400', bg: 'bg-emerald-50', iconBg: 'bg-emerald-100', text: 'text-emerald-600', hover: 'hover:bg-emerald-100' },
    { border: 'border-purple-400', bg: 'bg-purple-50', iconBg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-100' },
  ];

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch leads", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const filteredLeads = leads.filter(
    (lead) =>
      (lead.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.phone || "").includes(searchQuery)
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, leads.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const paginatedLeads = filteredLeads.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPaginationArray = (current: number, total: number) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, '...', total];
    if (current >= total - 2) return [1, '...', total - 2, total - 1, total];
    return [1, '...', current, '...', total];
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-brand-charcoal">Leads Management</h1>
          <p className="text-sm text-brand-secondary mt-1">
            View and manage user search criteria &amp; contact inquiries submitted from the website.
          </p>
        </div>
        <button
          onClick={fetchLeads}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-brand-border hover:bg-brand-cream text-brand-charcoal text-sm font-medium transition-colors shadow-sm self-start sm:self-auto"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          Refresh Leads
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-border flex items-center gap-3">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search leads by name, phone, or preferences..."
          className="w-full text-sm outline-none bg-transparent placeholder-slate-400"
        />
      </div>

      {/* Grid Section */}
      <div className="w-full">
        {loading ? (
          <div className="p-12 text-center text-slate-500 bg-white rounded-xl shadow-sm border border-brand-border">
            <RefreshCw size={24} className="animate-spin mx-auto mb-2 text-brand-gold" />
            Loading submitted leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-12 text-center text-slate-500 space-y-2 bg-white rounded-xl shadow-sm border border-brand-border">
            <Users size={36} className="mx-auto text-slate-300" />
            <p className="font-semibold text-slate-700">No Leads Found</p>
            <p className="text-xs">Leads submitted from &quot;Start Your Search&quot; form will appear here in real-time.</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {paginatedLeads.map((lead, index) => {
                const theme = COLOR_THEMES[index % COLOR_THEMES.length];
                
                return (
                  <div key={lead.id} className={`bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-y border-r border-slate-100 border-l-[3px] ${theme.border} p-4 sm:p-5 flex flex-col hover:shadow-md transition-shadow`}>
                    
                    {/* Header: Avatar, Name, Date, Status */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center ${theme.iconBg} ${theme.text}`}>
                          <User size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-brand-charcoal text-sm sm:text-[15px] line-clamp-1">{lead.name}</h3>
                          <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                            {new Date(lead.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} • {new Date(lead.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        lead.status === 'DONE' ? 'bg-slate-100 text-slate-500' :
                        lead.status === 'CONTACTED' ? 'bg-blue-50 text-blue-500' :
                        'bg-orange-50 text-orange-500'
                      }`}>
                        {lead.status || "NEW"}
                      </span>
                    </div>

                    {/* Call Button */}
                    <a
                      href={`tel:${(lead.phone || "").replace(/[^0-9+]/g, "")}`}
                      className={`flex items-center justify-center gap-2 w-full py-2.5 mb-3 rounded-xl transition-colors text-xs sm:text-sm font-semibold border ${theme.bg} ${theme.text} ${theme.hover}`}
                    >
                      <Phone size={14} />
                      {lead.phone || "No Phone"}
                    </a>

                    {/* View Details Button */}
                    <button 
                      onClick={() => setSelectedLead(lead)}
                      className="w-full py-2 bg-white hover:bg-slate-50 text-slate-600 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2 mb-4"
                    >
                      <FileText size={14} className="text-slate-400" />
                      View Full Details
                    </button>

                    {/* Footer Actions */}
                    <div className="mt-auto pt-3 flex items-center justify-between border-t border-slate-100">
                      <button
                        onClick={async () => {
                          const newStatus = lead.status === 'NEW' ? 'CONTACTED' : 'DONE';
                          await updateLeadStatus(lead.id, newStatus);
                          fetchLeads();
                        }}
                        disabled={lead.status === 'DONE'}
                        className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold transition-colors ${
                          lead.status === 'DONE' 
                            ? 'bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-100' 
                            : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 border border-emerald-100/50'
                        }`}
                      >
                        <CheckCircle size={14} className="shrink-0" /> 
                        <span className="whitespace-nowrap">{lead.status === 'DONE' ? 'Completed' : 'Mark Contacted'}</span>
                      </button>
                      
                      <button
                        onClick={async () => {
                          if (confirm("Are you sure you want to delete this lead?")) {
                            await deleteLead(lead.id);
                            fetchLeads();
                          }
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-400 hover:text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                        title="Delete lead"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                
                {getPaginationArray(currentPage, totalPages).map((p, i) => (
                  p === '...' ? (
                    <span key={`dots-${i}`} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-400 font-bold">...</span>
                  ) : (
                    <button 
                      key={`page-${p}`}
                      onClick={() => setCurrentPage(p as number)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                        currentPage === p 
                          ? 'bg-[#b3854d] text-white border border-[#b3854d] shadow-sm' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {p}
                    </button>
                  )
                ))}
                
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Details Modal Popup (Portal to body for full 100vh coverage) */}
      {selectedLead && mounted && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-brand-border/60">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal">{selectedLead.name}</h3>
                <p className="text-xs text-slate-500 mt-1 mb-2.5">
                  Submitted on {new Date(selectedLead.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100/50 px-2.5 py-1 rounded-md w-fit border border-emerald-200">
                  <Phone size={12} /> WhatsApp: {selectedLead.phone || "No phone"}
                </div>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors shrink-0 ml-4"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 max-h-[60vh] overflow-y-auto scrollbar-thin">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Gender</span>
                  <span className="block text-sm font-semibold text-brand-charcoal">{selectedLead.gender || "Not specified"}</span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Date of Birth</span>
                  <span className="block text-sm font-semibold text-brand-charcoal">{selectedLead.dob || "Not specified"}</span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Location</span>
                  <span className="block text-sm font-semibold text-brand-charcoal">
                    {selectedLead.city || selectedLead.country ? `${selectedLead.city || ''} ${selectedLead.country || ''}` : "Not specified"}
                  </span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Marital Status</span>
                  <span className="block text-sm font-semibold text-brand-charcoal">{selectedLead.maritalStatus || "Not specified"}</span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Profession</span>
                  <span className="block text-sm font-semibold text-brand-charcoal">{selectedLead.profession || "Not specified"}</span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Education</span>
                  <span className="block text-sm font-semibold text-brand-charcoal">{selectedLead.education || "Not specified"}</span>
                </div>
              </div>

            </div>
            
            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedLead(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
              <a
                href={`https://wa.me/${(selectedLead.phone || "").replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#062e29] hover:bg-[#083b34] text-white transition-colors flex items-center gap-2 shadow-md"
              >
                <Phone size={16} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
