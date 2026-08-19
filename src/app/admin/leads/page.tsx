/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Users, Search, Phone, Mail, CheckCircle, Trash2, RefreshCw, User, FileText, ChevronLeft, ChevronRight, X } from "lucide-react";
import { updateLeadStatus, deleteLead } from "./actions";

interface LeadItem {
  id: string;
  name: string;
  phone: string;
  email?: string;
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
      (lead.phone || "").includes(searchQuery) ||
      (lead.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.gender || "").toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className="space-y-5 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-1 sm:mb-2">Leads Management</h1>
          <p className="text-sm sm:text-base text-brand-secondary">
            View and manage user search criteria &amp; contact inquiries submitted from the website.
          </p>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          {/* Search Toggle Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer ${
              isSearchOpen || searchQuery
                ? "bg-brand-cream/90 border-brand-gold text-brand-charcoal"
                : "bg-white border-brand-border hover:bg-brand-cream hover:border-brand-gold/60 text-brand-charcoal"
            }`}
            title="Search Leads"
          >
            <Search size={16} className="text-brand-gold shrink-0" />
            <span>Search</span>
            {searchQuery && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
            )}
          </button>

          {/* Refresh Leads Button */}
          <button
            onClick={fetchLeads}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-brand-border hover:bg-brand-cream hover:border-brand-gold/60 text-brand-charcoal text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            <RefreshCw size={16} className={`text-brand-gold shrink-0 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh Leads</span>
          </button>
        </div>
      </div>

      {/* Inline Expandable Search Bar */}
      {isSearchOpen && (
        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-brand-gold/30 flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="relative flex-1 flex items-center">
            <Search size={18} className="absolute left-3.5 text-brand-gold pointer-events-none" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search leads by name, phone, email, gender..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 hover:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-brand-charcoal focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                title="Clear text"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Side Action Button */}
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery("")}
              className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs sm:text-sm font-bold transition-colors shrink-0 cursor-pointer border border-red-200/60"
            >
              Clear
            </button>
          ) : (
            <button
              onClick={() => setIsSearchOpen(false)}
              className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors shrink-0 cursor-pointer border border-slate-200/60"
            >
              Close
            </button>
          )}
        </div>
      )}

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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {paginatedLeads.map((lead, index) => {
                const theme = COLOR_THEMES[index % COLOR_THEMES.length];
                
                return (
                  <div key={lead.id} className={`bg-white rounded-xl sm:rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-y border-r border-slate-100 border-l-[3px] sm:border-l-[4px] ${theme.border} p-3 sm:p-5 flex flex-col hover:shadow-md transition-shadow`}>
                    
                    {/* Header: Avatar, Name, Date, Status */}
                    <div className="flex justify-between items-start mb-3 sm:mb-4 gap-1">
                      <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                        <div className={`shrink-0 w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center ${theme.iconBg} ${theme.text}`}>
                          <User size={14} className="sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-brand-charcoal text-[11px] sm:text-[15px] truncate">{lead.name}</h3>
                          <p className="text-[8px] sm:text-xs text-slate-400 mt-0.5 truncate font-bold">
                            {new Date(lead.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            <span className="hidden sm:inline"> • {new Date(lead.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
                          </p>
                        </div>
                      </div>
                      <span className={`shrink-0 inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider ${
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
                      className={`flex items-center justify-center gap-1.5 sm:gap-2 w-full py-1.5 sm:py-2.5 mb-2 sm:mb-3 rounded-lg sm:rounded-xl transition-colors text-[10px] sm:text-sm font-bold border ${theme.bg} ${theme.text} ${theme.hover}`}
                    >
                      <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{lead.phone || "No Phone"}</span>
                    </a>

                    {/* View Details Button */}
                    <button 
                      onClick={() => setSelectedLead(lead)}
                      className="w-full py-1.5 sm:py-2 bg-white hover:bg-slate-50 text-slate-600 font-semibold text-[9px] sm:text-sm rounded-lg sm:rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 shadow-sm"
                    >
                      <FileText size={12} className="text-slate-400 sm:w-3.5 sm:h-3.5" />
                      View Details
                    </button>

                    {/* Footer Actions */}
                    <div className="mt-auto pt-2.5 sm:pt-3 flex items-center justify-between border-t border-slate-100 gap-2">
                      <button
                        onClick={async () => {
                          const newStatus = lead.status === 'NEW' ? 'CONTACTED' : 'DONE';
                          await updateLeadStatus(lead.id, newStatus);
                          fetchLeads();
                        }}
                        disabled={lead.status === 'DONE'}
                        className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[9px] sm:text-[11px] uppercase tracking-wider font-extrabold transition-colors ${
                          lead.status === 'DONE' 
                            ? 'bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-100' 
                            : lead.status === 'CONTACTED'
                            ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100'
                            : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 border border-emerald-100/50'
                        }`}
                      >
                        <CheckCircle size={12} className="shrink-0 sm:w-3.5 sm:h-3.5" /> 
                        <span className="truncate">
                          {lead.status === 'DONE' ? 'Done' : lead.status === 'CONTACTED' ? 'Mark Done' : 'Mark Contacted'}
                        </span>
                      </button>
                      
                      <button
                        onClick={async () => {
                          if (confirm("Are you sure you want to delete this lead?")) {
                            await deleteLead(lead.id);
                            fetchLeads();
                          }
                        }}
                        className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-red-50 text-red-400 hover:text-red-500 hover:bg-red-100 rounded-md sm:rounded-lg transition-colors"
                        title="Delete lead"
                      >
                        <Trash2 size={12} className="sm:w-[15px] sm:h-[15px]" />
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-brand-border/60 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-4 py-4 sm:px-6 sm:py-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50 shrink-0">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal">{selectedLead.name}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
                  Submitted on {new Date(selectedLead.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors shrink-0 ml-3 sm:ml-4"
              >
                ✕
              </button>
            </div>

            <div className="p-4 sm:p-7 overflow-y-auto scrollbar-thin">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Full Name</span>
                  <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedLead.name || "N/A"}</span>
                </div>
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Phone / WhatsApp</span>
                  {selectedLead.phone ? (
                    <a
                      href={`tel:${selectedLead.phone.replace(/[^0-9+]/g, "")}`}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                    >
                      <Phone size={14} /> {selectedLead.phone}
                    </a>
                  ) : (
                    <span className="block text-xs sm:text-sm font-semibold text-slate-400">N/A</span>
                  )}
                </div>
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Email Address</span>
                  {selectedLead.email ? (
                    <a
                      href={`mailto:${selectedLead.email}`}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      <Mail size={14} /> {selectedLead.email}
                    </a>
                  ) : (
                    <span className="block text-xs sm:text-sm font-semibold text-slate-400">N/A</span>
                  )}
                </div>
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Gender</span>
                  <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedLead.gender || "N/A"}</span>
                </div>

                {/* Legacy / optional fields for older entries if available */}
                {selectedLead.dob && (
                  <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Date of Birth</span>
                    <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedLead.dob}</span>
                  </div>
                )}
                {(selectedLead.city || selectedLead.country) && (
                  <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Location</span>
                    <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{[selectedLead.city, selectedLead.country].filter(Boolean).join(', ')}</span>
                  </div>
                )}
                {selectedLead.maritalStatus && (
                  <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Marital Status</span>
                    <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedLead.maritalStatus}</span>
                  </div>
                )}
                {selectedLead.profession && (
                  <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Profession</span>
                    <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedLead.profession}</span>
                  </div>
                )}
                {selectedLead.education && (
                  <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Education</span>
                    <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedLead.education}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Modal Footer (Always 1 row on mobile) */}
            <div className="p-3 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0 flex-nowrap">
              <button 
                onClick={() => setSelectedLead(null)}
                className="flex-1 sm:flex-none px-3 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors bg-white sm:bg-transparent border border-slate-200 sm:border-transparent text-center justify-center flex items-center shrink-0"
              >
                Close
              </button>
              {selectedLead.email && (
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="flex-1 sm:flex-none px-3 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-[11px] sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center gap-1 sm:gap-2 shadow-md shrink-0 whitespace-nowrap"
                >
                  <Mail size={13} className="shrink-0 sm:w-4 sm:h-4" /> Email
                </a>
              )}
              {selectedLead.phone && (
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none px-3 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-[11px] sm:text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors flex items-center justify-center gap-1 sm:gap-2 shadow-md shrink-0 whitespace-nowrap"
                >
                  <Phone size={13} className="shrink-0 sm:w-4 sm:h-4" /> WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
