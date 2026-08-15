"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, LogIn, ShieldCheck, ArrowLeft, AlertCircle } from "lucide-react";
import { login } from "./actions";
import { HumNikahLogo } from "@/components/ui/Logo";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setError(null);
    
    const formData = new FormData(event.currentTarget);
    const result = await login(formData);
    
    if (result.error) {
      setError(result.error);
      setIsPending(false);
    } else {
      router.push("/admin");
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand-cream relative overflow-hidden py-8 px-4 sm:px-6 font-montserrat">
      
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-brand-gold/10 via-brand-emerald/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand-emerald/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-gold/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main Compact Login Card */}
      <div className="w-full max-w-md relative z-10 my-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-7 sm:p-8 shadow-xl border border-brand-border/80">
          
          {/* Header & Logo Emblem */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-emerald text-brand-gold shadow-md mb-3 ring-3 ring-brand-gold/20">
              <HumNikahLogo size={32} outerColor="#B08A5F" innerColor="#B08A5F" />
            </div>
            
            <h1 className="text-3xl font-playfair font-bold text-brand-charcoal">
              HumNikah <span className="text-brand-gold">Admin</span>
            </h1>
            <p className="text-xs sm:text-sm text-brand-secondary mt-1.5 leading-normal">
              Sign in to access your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            
            {/* Email Field with Icon */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-brand-charcoal mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-gold">
                  <Mail size={18} />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="admin@humnikah.com"
                  className="w-full pl-10 pr-4 py-3 bg-brand-cream/50 border border-brand-border  text-brand-charcoal placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password Field with Icon & Eye Toggle */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-brand-charcoal mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-gold">
                  <Lock size={18} />
                </div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 bg-brand-cream/50 border border-brand-border  text-brand-charcoal placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-brand-secondary hover:text-brand-emerald transition-colors cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium">
                <AlertCircle size={16} className="shrink-0 text-rose-500" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-1.5">
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3 px-6 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-semibold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isPending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Login to Dashboard</span>
                    <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Back to HumNikah Link below Login Button */}
            <div className="text-center pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-secondary hover:text-brand-emerald transition-colors"
              >
                <ArrowLeft size={15} />
                <span>Go to Website</span>
              </Link>
            </div>

          </form>  
        </div>

        {/* Footer Copyright */}
       <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-center gap-1.5 text-xs text-brand-secondary font-medium">
            <ShieldCheck size={16} className="text-brand-gold" />
            <span>Encrypted & Secured Admin Portal</span>
          </div>
      </div>

    </div>
  );
}
