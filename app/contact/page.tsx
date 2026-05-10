"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0a1628] mb-3">Get in Touch</h1>
        <p className="text-slate-500 text-lg">We'd love to hear from you</p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-[#0a1628] mb-6">Visit our shop</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-medium text-[#0a1628]">Address</p>
                <p className="text-slate-500 text-sm">
                  Kathmandu, Nepal
                  <br />
                  Google Search: <strong>Graphics Nepal</strong>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-medium text-[#0a1628]">Phone</p>
                <p className="text-slate-500 text-sm">+977-9851093692 or +977-9808254089</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-medium text-[#0a1628]">Email</p>
                <p className="text-slate-500 text-sm">Graphics4kprint@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-medium text-[#0a1628]">Opening Hours</p>
                <p className="text-slate-500 text-sm">Sun-Fri: 9am - 8pm (Summer)</p>
                <p className="text-slate-500 text-sm">Sun-Fri: 9am - 7pm (Winter)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="flex flex-col gap-4">
          {/* Success Message */}
          {status === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              ✅ Message sent! We'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              ❌ Please fill in all fields and try again.
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-[#0a1628] block mb-1">Your name</label>
            <input
              type="text"
              placeholder="e.g. Ram Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#0a1628] block mb-1">
              Email address or Phone Number
            </label>
            <input
              type="email"
              placeholder="e.g. ram@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#0a1628] block mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us what you need..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9a84c] resize-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#c9a84c] text-[#0a1628] font-bold px-6 py-3 rounded-lg w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </main>
  );
}
