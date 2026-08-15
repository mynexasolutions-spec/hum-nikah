"use client";

import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-brand-emerald rounded-full flex items-center justify-center mx-auto mb-4 text-white">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-playfair font-bold text-brand-charcoal mb-2">Message Sent Successfully!</h4>
        <p className="text-brand-secondary mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Your Name" required placeholder="John Doe" />
        <Input label="Email Address" type="email" required placeholder="john@example.com" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Phone Number (Optional)" type="tel" placeholder="+1 (234) 567-8900" />
        <Input label="Subject" required placeholder="How can we help?" />
      </div>
      <Textarea label="Your Message" required placeholder="Type your message here..." className="min-h-[150px]" />
      
      {status === "error" && (
        <p className="text-red-500 text-sm">There was an error sending your message. Please try again.</p>
      )}
      
      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
        Send Message
      </Button>
    </form>
  );
}
