export default function Contact() {
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
                <p className="text-slate-500 text-sm">Kathmandu, Nepal</p>
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
                <p className="text-slate-500 text-sm">graphics.nepal2018@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-medium text-[#0a1628]">Opening Hours</p>
                <p className="text-slate-500 text-sm">Sun-Fri: 9am - 8pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="text--sm font-medium text-[#0a1628] block mb-1">Your name</label>
            <input
              type="text"
              placeholder="e.g. Ram Sharm"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9c84c]"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#0a1628] block mb-1">Email address</label>
            <input
              type="email"
              placeholder="e.g. ram@gmail.com"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#0a1628] block mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us what you need..."
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9a84c] resize-none"
            />
          </div>
          <button className="bg-[#c9a84c] text-[#0a1628] font-bold px-6 py-3 rounded-lg w-full">
            Send Message
          </button>
        </div>
      </div>
    </main>
  );
}
