"use client";

import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { MessageSquare, Search, Phone, Mail, CheckCircle, Trash2, RefreshCw, ChevronLeft, ChevronRight, Hash, Clock, User, Eye, Tag } from "lucide-react";
import { updateMessageStatus, deleteMessage } from "./actions";

interface MessageItem {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: string;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<MessageItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const itemsPerPage = 12;

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();
      if (data.success) {
        setMessages(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch messages", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
    setMounted(true);
  }, [fetchMessages]);

  const filteredMessages = messages.filter(
    (msg) =>
      (msg.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (msg.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (msg.subject || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, messages.length]);

  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);
  const paginatedMessages = filteredMessages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
          <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-1 sm:mb-2 flex items-center gap-2">
            <MessageSquare className="text-brand-gold" /> User Messages
          </h1>
          <p className="text-sm sm:text-base text-brand-secondary">
            Manage inquiries, feedback, and support requests from the contact page.
          </p>
        </div>
        <button
          onClick={fetchMessages}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-brand-border hover:bg-brand-cream text-brand-charcoal text-sm font-medium transition-colors shadow-sm self-start sm:self-auto"
        >
          <RefreshCw size={16} className={loading ? "animate-spin text-brand-gold" : "text-brand-gold"} />
          Refresh Messages
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-border flex items-center gap-3">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, email, or subject..."
          className="w-full text-sm outline-none bg-transparent placeholder-slate-400"
        />
      </div>

      {/* Grid Section */}
      <div className="w-full">
        {loading ? (
          <div className="p-12 text-center text-slate-500 bg-white rounded-xl shadow-sm border border-brand-border">
            <RefreshCw size={24} className="animate-spin mx-auto mb-2 text-brand-gold" />
            Loading messages...
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="p-12 text-center text-slate-500 space-y-2 bg-white rounded-xl shadow-sm border border-brand-border">
            <MessageSquare size={36} className="mx-auto text-slate-300" />
            <p className="font-semibold text-slate-700">No Messages Found</p>
            <p className="text-xs">Incoming messages from the contact page will appear here.</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {paginatedMessages.map((msg, index) => {
                const serialNumber = (currentPage - 1) * itemsPerPage + index + 1;
                const isNew = msg.status === 'NEW' || msg.status === 'new';
                const isResolved = msg.status === 'RESOLVED' || msg.status === 'resolved';

                return (
                  <div 
                    key={msg.id} 
                    className={`bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-lg transition-all duration-300 p-5 flex flex-col cursor-pointer ${isNew ? 'border-l-4 border-l-brand-gold' : isResolved ? 'border-l-4 border-l-emerald-400 opacity-80' : 'border-l-4 border-l-blue-400'}`}
                    onClick={() => setSelectedMessage(msg)}
                  >
                    
                    {/* Header: Tag, Name, Status */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-cream text-brand-gold font-bold text-sm border border-brand-gold/30">
                          <Tag size={14} className="mr-1" />{serialNumber}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-brand-charcoal text-sm sm:text-base truncate">{msg.name}</h3>
                          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400 mt-0.5">
                            <Clock size={10} />
                            {new Date(msg.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            <span className="hidden sm:inline"> • {new Date(msg.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        isResolved ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                        isNew ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20' :
                        'bg-blue-50 text-blue-500 border border-blue-100'
                      }`}>
                        {msg.status || "NEW"}
                      </span>
                    </div>

                    {/* Subject */}
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-brand-charcoal line-clamp-1">{msg.subject || "No Subject"}</h4>
                      <p className="text-xs text-brand-secondary mt-1 line-clamp-2 leading-relaxed">{msg.message}</p>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100/80 gap-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={async () => {
                          const newStatus = isNew ? 'READ' : 'RESOLVED';
                          await updateMessageStatus(msg.id, newStatus);
                          fetchMessages();
                        }}
                        disabled={isResolved}
                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] uppercase tracking-wider font-extrabold transition-all ${
                          isResolved 
                            ? 'bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-100' 
                            : isNew
                            ? 'bg-brand-emerald text-white hover:bg-brand-emerald-hover shadow-sm'
                            : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700 border border-emerald-100/50'
                        }`}
                      >
                        <CheckCircle size={14} className="shrink-0" /> 
                        <span className="truncate">
                          {isResolved ? 'Resolved' : isNew ? 'Mark Read' : 'Mark Resolved'}
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedMessage(msg)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] uppercase tracking-wider font-extrabold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-brand-gold transition-all"
                      >
                        <Eye size={14} className="shrink-0" /> 
                        <span className="truncate">View</span>
                      </button>
                      
                      <button
                        onClick={async () => {
                          if (confirm("Are you sure you want to delete this message?")) {
                            await deleteMessage(msg.id);
                            fetchMessages();
                          }
                        }}
                        className="shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 rounded-lg transition-colors"
                        title="Delete message"
                      >
                        <Trash2 size={14} />
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
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                
                {getPaginationArray(currentPage, totalPages).map((p, i) => (
                  p === '...' ? (
                    <span key={`dots-${i}`} className="w-10 h-10 flex items-center justify-center text-slate-400 font-bold">...</span>
                  ) : (
                    <button 
                      key={`page-${p}`}
                      onClick={() => setCurrentPage(p as number)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                        currentPage === p 
                          ? 'bg-brand-gold text-brand-charcoal shadow-sm' 
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
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Message Details Modal Popup */}
      {selectedMessage && mounted && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedMessage(null)}>
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-brand-border/60 flex flex-col max-h-[95vh] sm:max-h-[90vh] transform transition-all"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-4 sm:px-6 sm:py-5 border-b border-slate-100 flex justify-between items-start bg-slate-50 shrink-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <User size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal">{selectedMessage.name}</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
                    Sent on {new Date(selectedMessage.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMessage(null)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 transition-colors shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto scrollbar-thin space-y-4 sm:space-y-6">
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
                <a href={`mailto:${selectedMessage.email}`} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-charcoal bg-slate-50 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-slate-200 hover:border-brand-gold hover:bg-brand-cream transition-colors break-all">
                  <Mail size={14} className="text-brand-gold shrink-0" /> {selectedMessage.email}
                </a>
                {selectedMessage.phone && (
                  <a href={`tel:${selectedMessage.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-charcoal bg-slate-50 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl border border-slate-200 hover:border-brand-gold hover:bg-brand-cream transition-colors">
                    <Phone size={14} className="text-brand-gold shrink-0" /> {selectedMessage.phone}
                  </a>
                )}
              </div>

              {/* Subject */}
              <div className="bg-brand-cream/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-brand-gold/20">
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-secondary font-bold mb-1.5 sm:mb-2">Subject</span>
                <span className="block text-sm sm:text-base md:text-lg font-bold text-brand-charcoal">{selectedMessage.subject || "No Subject Provided"}</span>
              </div>

              {/* Message Content */}
              <div>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 sm:mb-3 ml-1">Message</span>
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-200 shadow-inner">
                  <p className="text-xs sm:text-sm md:text-base text-brand-charcoal whitespace-pre-wrap leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

            </div>
            
            {/* Modal Footer */}
            <div className="p-3 sm:p-4 md:p-6 bg-slate-50 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-between gap-3 shrink-0">
              <button 
                onClick={async () => {
                  if (confirm("Are you sure you want to delete this message?")) {
                    await deleteMessage(selectedMessage.id);
                    setSelectedMessage(null);
                    fetchMessages();
                  }
                }}
                className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 size={14} className="sm:w-4 sm:h-4" /> Delete
              </button>
              
              <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => setSelectedMessage(null)}
                  className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-center"
                >
                  Close
                </button>
                {selectedMessage.phone ? (
                  <a
                    href={`tel:${selectedMessage.phone.replace(/[^0-9+]/g, "")}`}
                    className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold bg-brand-emerald hover:bg-brand-emerald-hover text-white transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Phone size={14} className="sm:w-4 sm:h-4" /> Call Now
                  </a>
                ) : (
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Your Inquiry'}`}
                    className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold bg-brand-emerald hover:bg-brand-emerald-hover text-white transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Mail size={14} className="sm:w-4 sm:h-4" /> Reply via Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
