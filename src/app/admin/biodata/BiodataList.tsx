/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Database } from "@/types/database";
import { Eye, Check, X, Search, Filter, Phone, Mail, Loader2, Calendar, MapPin, Briefcase, Camera } from "lucide-react";
import { updateBiodataStatus, deleteBiodata } from "./actions";
import { createPortal } from "react-dom";

type BiodataRow = Database['public']['Tables']['Biodata']['Row'];

export default function BiodataList({ initialBiodatas }: { initialBiodatas: BiodataRow[] }) {
  const [biodatas, setBiodatas] = useState(initialBiodatas);
  const [selectedBiodata, setSelectedBiodata] = useState<BiodataRow | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  
  // Handlers
  const handleStatusUpdate = async (id: string, newStatus: 'PENDING' | 'APPROVED' | 'REJECTED') => {
    setLoadingId(id);
    const result = await updateBiodataStatus(id, newStatus);
    if (result.success) {
      setBiodatas(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
      if (selectedBiodata?.id === id) {
        setSelectedBiodata(prev => prev ? { ...prev, status: newStatus } : null);
      }
    } else {
      alert("Failed to update status");
    }
    setLoadingId(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this biodata?")) return;
    setLoadingId(id);
    const result = await deleteBiodata(id);
    if (result.success) {
      setBiodatas(prev => prev.filter(b => b.id !== id));
      if (selectedBiodata?.id === id) setSelectedBiodata(null);
    } else {
      alert("Failed to delete biodata");
    }
    setLoadingId(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  };

  return (
    <div className="space-y-5 sm:space-y-8 pb-10">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-1 sm:mb-2">Biodata Management</h1>
          <p className="text-[10px] sm:text-sm text-brand-secondary">Review and approve matrimonial profiles.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-grow sm:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <input 
              type="text" 
              placeholder="Search names..." 
              className="w-full sm:w-64 pl-9 pr-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-brand-border/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-white"
            />
          </div>
          <button className="p-1.5 sm:p-2 border border-brand-border/60 rounded-xl bg-white text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
            <Filter size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      {biodatas.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="text-slate-400 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-brand-charcoal mb-1">No biodatas found</h3>
          <p className="text-sm text-slate-500">Wait for users to submit their biodata.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {biodatas.map((biodata, index) => {
            // Array of subtle modern border colors
            const borderColors = [
              'border-blue-200 hover:border-blue-300',
              'border-emerald-200 hover:border-emerald-300',
              'border-purple-200 hover:border-purple-300',
              'border-amber-200 hover:border-amber-300',
              'border-rose-200 hover:border-rose-300',
              'border-cyan-200 hover:border-cyan-300'
            ];
            const borderClass = borderColors[index % borderColors.length];

            return (
              <div 
                key={biodata.id} 
                className={`bg-white rounded-2xl sm:rounded-3xl border-2 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all cursor-pointer group ${borderClass}`}
                onClick={() => setSelectedBiodata(biodata)}
              >
                {/* Card Header */}
                <div className="p-4 sm:p-5 flex flex-col gap-4 relative">
                  
                  {/* Top Row: Avatar & Name + Status */}
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                        {biodata.profileImageUrl ? (
                          <img src={biodata.profileImageUrl} alt={biodata.fullName} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-brand-charcoal font-bold text-lg sm:text-xl">{biodata.fullName.charAt(0)}</span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-playfair font-bold text-brand-charcoal text-base sm:text-lg truncate max-w-[150px] sm:max-w-[200px]">{biodata.fullName}</h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{biodata.age} yrs • {biodata.gender}</p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`-mt-1 sm:-mt-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider shrink-0 uppercase
                      ${biodata.status === 'APPROVED' ? 'bg-emerald-100/50 text-emerald-700 border border-emerald-200/50' : 
                        biodata.status === 'REJECTED' ? 'bg-red-100/50 text-red-700 border border-red-200/50' : 
                        'bg-amber-100/50 text-amber-700 border border-amber-200/50'}`}
                    >
                      {biodata.status}
                    </div>
                  </div>

                  {/* Location, Profession & Contact */}
                  <div className="space-y-3 mt-2 px-1">
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <MapPin size={15} className="text-emerald-600" />
                      </div>
                      <span className="text-[13px] sm:text-sm font-medium truncate">{biodata.city}, {biodata.country}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Briefcase size={15} className="text-blue-600" />
                      </div>
                      <span className="text-[13px] sm:text-sm font-medium truncate">{biodata.profession}</span>
                    </div>
                    <a 
                      href={`tel:${biodata.phone}`} 
                      onClick={(e) => e.stopPropagation()} 
                      className="inline-flex items-center gap-2 mt-1 w-fit px-3 py-1.5 rounded-lg bg-emerald-50/50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-[#0c704f] text-[13px] sm:text-sm font-bold shadow-sm"
                    >
                      <Phone size={14} className="shrink-0" strokeWidth={2.5} />
                      {biodata.phone}
                    </a>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-auto border-t border-slate-100/80 bg-slate-50/50 p-3 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[10px] sm:text-xs text-slate-400 font-medium ml-1 flex items-center gap-1.5">
                      <Calendar size={12} /> {formatDate(biodata.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {biodata.profileImageUrl && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setLightboxImage(biodata.profileImageUrl); }}
                        className="flex items-center gap-1.5 justify-center py-1.5 px-3 sm:px-4 rounded-xl bg-white border border-brand-border/60 hover:bg-[#b3854d] hover:text-white hover:border-[#b3854d] transition-colors text-brand-gold text-xs font-semibold shadow-sm"
                      >
                        <Camera size={14} /> <span className="hidden sm:inline">Photo</span>
                      </button>
                    )}
                    <button 
                      className="flex items-center gap-1.5 justify-center py-1.5 px-4 rounded-xl bg-white border border-brand-border/60 hover:bg-[#062E29] hover:text-white hover:border-[#062E29] transition-colors text-brand-charcoal text-xs font-semibold shadow-sm"
                      onClick={(e) => { e.stopPropagation(); setSelectedBiodata(biodata); }}
                    >
                      <Eye size={14} /> View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Massive Detailed Modal */}
      {selectedBiodata && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 pb-0 sm:pb-4">
          <div 
            className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm" 
            onClick={() => setSelectedBiodata(null)} 
          />
          <div className="relative bg-white w-full max-w-4xl max-h-[100dvh] sm:max-h-[90vh] rounded-t-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 mt-auto sm:mt-0 border border-brand-border/60">
            
            {/* Modal Header */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 shrink-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                  {selectedBiodata.profileImageUrl ? (
                    <img src={selectedBiodata.profileImageUrl} alt={selectedBiodata.fullName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-brand-charcoal font-bold text-lg sm:text-xl">{selectedBiodata.fullName.charAt(0)}</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-xl font-bold text-brand-charcoal font-playfair leading-tight break-words pr-2">{selectedBiodata.fullName}</h3>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase
                      ${selectedBiodata.status === 'APPROVED' ? 'bg-emerald-100/50 text-emerald-700 border border-emerald-200/50' : 
                        selectedBiodata.status === 'REJECTED' ? 'bg-red-100/50 text-red-700 border border-red-200/50' : 
                        'bg-amber-100/50 text-amber-700 border border-amber-200/50'}`}
                    >
                      {selectedBiodata.status}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 truncate">Submitted {formatDate(selectedBiodata.createdAt)}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                {selectedBiodata.profileImageUrl && (
                  <button 
                    onClick={() => setLightboxImage(selectedBiodata.profileImageUrl)}
                    className="flex items-center gap-1.5 justify-center py-1.5 px-2.5 sm:px-4 rounded-xl bg-white border border-brand-border/60 hover:bg-[#b3854d] hover:text-white hover:border-[#b3854d] transition-colors text-brand-gold text-[10px] sm:text-xs font-semibold shadow-sm"
                  >
                    <Camera size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
                    <span className="hidden sm:inline">View Photo</span>
                    <span className="sm:hidden">Photo</span>
                  </button>
                )}
                <button 
                  onClick={() => setSelectedBiodata(null)}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-slate-200/50 text-slate-500 transition-colors"
                >
                  <X size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-grow overflow-y-auto p-4 sm:p-8 custom-scrollbar bg-white">
              
              {/* Overview Blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Age</span>
                  <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.age} Years</span>
                </div>
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Height</span>
                  <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.height}</span>
                </div>
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Marital Status</span>
                  <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.maritalStatus}</span>
                </div>
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-100/80 shadow-sm">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Location</span>
                  <span className="block text-xs sm:text-sm font-semibold text-brand-charcoal break-words leading-tight">{selectedBiodata.city}, {selectedBiodata.country}</span>
                </div>
              </div>

              {/* Detailed Sections */}
              <div className="space-y-8 sm:space-y-10">
                
                {/* About & Religious */}
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                  <div className="space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-border/60 pb-2">About Them</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Introduction</span>
                        <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">{selectedBiodata.shortIntro}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Personality</span>
                        <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">{selectedBiodata.personality}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Interests</span>
                        <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">{selectedBiodata.interests}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-border/60 pb-2">Religious Practice</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Sect</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.sect}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Practice</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.religiousPractice}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Prayer</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.prayerPractice}</p>
                      </div>
                      {selectedBiodata.hijab && (
                        <div>
                          <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Hijab</span>
                          <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.hijab}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Education, Profession & Family */}
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                  <div className="space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-border/60 pb-2">Education & Career</h4>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Education</span>
                          <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.highestEducation}</p>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Field</span>
                          <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.fieldOfStudy}</p>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Profession</span>
                          <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.profession}</p>
                        </div>
                        {selectedBiodata.company && (
                          <div>
                            <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Company</span>
                            <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.company}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-border/60 pb-2">Family Background</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Family Type</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.familyType}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Location</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.familyLocation}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Father</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.fatherOccupation}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Mother</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.motherOccupation}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Siblings</span>
                        <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.siblings}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner Preferences */}
                <div className="space-y-4">
                  <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal uppercase tracking-wider border-b border-brand-border/60 pb-2">Partner Preferences</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Age Range</span>
                      <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.prefAgeRange}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Location</span>
                      <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.prefLocation}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Education</span>
                      <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.prefEducation}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Profession</span>
                      <p className="text-xs sm:text-sm font-semibold text-brand-charcoal">{selectedBiodata.prefProfession}</p>
                    </div>
                  </div>
                  {selectedBiodata.prefOther && (
                    <div className="mt-3">
                      <span className="block text-[10px] text-slate-500 font-medium mb-0.5">Other Requirements</span>
                      <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">{selectedBiodata.prefOther}</p>
                    </div>
                  )}
                </div>

                {/* Contact Info (Only visible in modal) */}
                <div className="bg-brand-cream/30 border border-brand-gold/20 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                  <h4 className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">Contact Information</h4>
                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    <a href={`tel:${selectedBiodata.phone}`} className="flex items-center gap-2 text-brand-charcoal hover:text-brand-gold transition-colors">
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Phone size={14} className="text-[#062E29]" />
                      </div>
                      <div>
                        <span className="block text-[12px] text-slate-500">Phone</span>
                        <span className="text-xs sm:text-sm font-semibold">{selectedBiodata.phone}</span>
                      </div>
                    </a>
                    <a href={`https://wa.me/${selectedBiodata.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-charcoal hover:text-brand-gold transition-colors">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 shadow-sm flex items-center justify-center shrink-0">
                        <Phone size={14} className="text-emerald-600" />
                      </div>
                      <div>
                        <span className="block text-[12px] text-slate-500">WhatsApp</span>
                        <span className="text-xs sm:text-sm font-semibold">{selectedBiodata.whatsapp}</span>
                      </div>
                    </a>
                    <a href={`mailto:${selectedBiodata.email}`} className="flex items-center gap-2 text-brand-charcoal hover:text-brand-gold transition-colors">
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Mail size={14} className="text-[#062E29]" />
                      </div>
                      <div>
                        <span className="block text-[12px] text-slate-500">Email</span>
                        <span className="text-xs sm:text-sm font-semibold">{selectedBiodata.email}</span>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Footer (Action Buttons) */}
            <div className="px-4 sm:px-8 py-3 sm:py-4 border-t border-slate-100 bg-slate-50/80 shrink-0 flex flex-wrap items-center justify-between gap-3 pb-safe">
              <button 
                onClick={() => handleDelete(selectedBiodata.id)}
                disabled={loadingId === selectedBiodata.id}
                className="text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors"
              >
                Delete
              </button>
              
              <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end">
                {selectedBiodata.status !== 'REJECTED' && (
                  <button 
                    onClick={() => handleStatusUpdate(selectedBiodata.id, 'REJECTED')}
                    disabled={loadingId === selectedBiodata.id}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-bold bg-white text-red-600 border border-red-200 hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm"
                  >
                    {loadingId === selectedBiodata.id ? <Loader2 size={14} className="animate-spin" /> : <X size={14} />}
                    Reject
                  </button>
                )}
                {selectedBiodata.status !== 'APPROVED' && (
                  <button 
                    onClick={() => handleStatusUpdate(selectedBiodata.id, 'APPROVED')}
                    disabled={loadingId === selectedBiodata.id}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-bold bg-[#062E29] text-white hover:bg-[#062E29]/90 transition-colors shadow-sm"
                  >
                    {loadingId === selectedBiodata.id ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                    Approve
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      , document.body)}

      {/* Lightbox Modal */}
      {mounted && lightboxImage && createPortal(
        <div 
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Profile Photo" 
            className="w-auto h-auto max-w-[95vw] max-h-[85vh] sm:max-w-[80vw] sm:max-h-[80vh] md:max-w-[60vw] md:max-h-[75vh] lg:max-w-[45vw] lg:max-h-[80vh] rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>,
        document.body
      )}
    </div>
  );
}
