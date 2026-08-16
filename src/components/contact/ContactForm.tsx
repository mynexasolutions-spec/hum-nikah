"use client";

import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { submitContactMessage } from "@/app/contact/actions";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactMessage(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
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
        <Input name="name" label="Your Name" required placeholder="John Doe" />
        <Input name="email" label="Email Address" type="email" required placeholder="john@example.com" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input name="phone" label="Phone Number (Optional)" type="tel" placeholder="+1 (234) 567-8900" />
        <Input name="subject" label="Subject" required placeholder="How can we help?" />
      </div>
      <Textarea name="message" label="Your Message" required placeholder="Type your message here..." className="min-h-[150px]" />
      
      {status === "error" && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
      
      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
        Send Message
      </Button>
    </form>
  );
}
