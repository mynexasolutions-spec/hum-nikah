"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, FileText, CheckCircle2, AlertCircle, X, Loader2, Image as ImageIcon } from "lucide-react";

interface BiodataUploadDropzoneProps {
  onUploadSuccess: (url: string, filename: string) => void;
  onRemove: () => void;
  uploadedUrl?: string;
  uploadedName?: string;
}

export function BiodataUploadDropzone({
  onUploadSuccess,
  onRemove,
  uploadedUrl,
  uploadedName,
}: BiodataUploadDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileDetails, setFileDetails] = useState<{ name: string; size: string } | null>(
    uploadedName ? { name: uploadedName, size: "Uploaded" } : null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const handleFile = async (file: File) => {
    setErrorMessage(null);

    // Validate type: PDF, JPG, PNG, WEBP, DOC, DOCX
    const validExtensions = ["pdf", "jpg", "jpeg", "png", "webp", "doc", "docx"];
    const ext = file.name.split(".").pop()?.toLowerCase() || "";

    if (!validExtensions.includes(ext)) {
      setErrorMessage("Please select a valid document (PDF, JPG, PNG, or DOC/DOCX)");
      return;
    }

    // Validate size (15MB)
    if (file.size > 15 * 1024 * 1024) {
      setErrorMessage("File size is too large (Maximum 15MB allowed)");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload-biodata", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFileDetails({
          name: file.name,
          size: formatFileSize(file.size),
        });
        onUploadSuccess(data.url, file.name);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (err: any) {
      console.error("Biodata file upload error:", err);
      setErrorMessage(err.message || "Failed to upload file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    setFileDetails(null);
    setErrorMessage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onRemove();
  };

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
        onChange={handleInputChange}
        className="hidden"
        id="biodata-file-input"
      />

      {fileDetails || uploadedUrl ? (
        <div className="relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-brand-gold/10 border-2 border-brand-gold/40 transition-all shadow-sm">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D184C] to-[#651514] text-white flex items-center justify-center shrink-0 shadow-sm">
              {fileDetails?.name.endsWith(".pdf") ? (
                <FileText size={24} className="text-[#F3B979]" />
              ) : (
                <ImageIcon size={24} className="text-[#F3B979]" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-brand-charcoal truncate">
                  {fileDetails?.name || "Uploaded Biodata Document"}
                </p>
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {fileDetails?.size ? `${fileDetails.size} • Uploaded successfully` : "Ready to submit"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-xl transition-all cursor-pointer shrink-0 ml-2"
            title="Remove document"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-all duration-200 cursor-pointer ${
            isDragging
              ? "border-brand-gold bg-brand-gold/10 scale-[1.01]"
              : "border-slate-300 hover:border-brand-gold/60 bg-slate-50/70 hover:bg-white"
          }`}
        >
          {isUploading ? (
            <div className="py-4 flex flex-col items-center justify-center space-y-3">
              <Loader2 size={36} className="text-brand-gold animate-spin" />
              <p className="text-sm font-semibold text-brand-charcoal">
                Uploading your Biodata document...
              </p>
              <p className="text-xs text-slate-400 font-light">
                Please wait a few seconds
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2.5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-brand-gold/30 shadow-xs flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <UploadCloud size={28} />
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-brand-charcoal">
                  Click to Upload or Drag &amp; Drop Biodata
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5">
                  Attach your biodata in any format: <span className="font-semibold text-brand-charcoal">PDF, JPG, PNG, DOC</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] font-medium text-slate-500">
                <span className="px-2.5 py-1 rounded-full bg-slate-200/70">Max size: 15MB</span>
                <span className="px-2.5 py-1 rounded-full bg-brand-gold/15 text-[#1D184C] font-semibold">Ready-made Biodata Accepted</span>
              </div>
            </div>
          )}
        </div>
      )}

      {errorMessage && (
        <div className="mt-2.5 flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
          <AlertCircle size={15} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
