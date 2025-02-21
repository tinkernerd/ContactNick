"use client";

import { useForm, ValidationError } from "@formspree/react";
import React from "react";

export default function ContactForm() {
  // Access the variable with NEXT_PUBLIC_ prefix
  const formId = process.env.NEXT_PUBLIC_FORMID;
  if (!formId) {
    throw new Error("Missing environment variable: NEXT_PUBLIC_FORMID");
  }

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p className="text-green-500">Thanks for your submission!</p>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
      {/* Name Field */}
      <label htmlFor="name" className="font-semibold">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      {/* Email Field */}
      <label htmlFor="email" className="font-semibold">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* Message Field */}
      <label htmlFor="message" className="font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>

      <ValidationError errors={state.errors} />
    </form>
  );
}
