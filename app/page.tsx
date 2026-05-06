export default function Home() {
  return (
    <main>
      {/*Hero Section and also section means groups a chunk of content together*/}
      <section className="bg-[#0a1628] text-white text-center py-24 px-6">
        <span className="text-[#c9a84c] text-sm border border-[#c9a84c] px-4 py-1 rounded-full">
          Trusted since 2000
        </span>

        <h1 className="text-5xl font-bold mt-6 mb-4">Graphics Nepal</h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
          Your trusted printing & graphics partner for over 20 years. Quality you can count on,
          every single time.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/products"
            className="bg-[#c9a84c] text-[#0a1628] font-bold px-6 py-3 rounded-lg"
          >
            View Products
          </a>
          <a
            href="/contact"
            className="border border-[#c9a84c] text-[#c9a84c] px-6 py-3 rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/*Features Section*/}
      <section className="bg-slate-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-[#0a1628] mb-12">
          Why customers trust us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <span className="text-4xl">🏅</span>
            <h3 className="font-semibold text-[#0a1628] mt-4 mb-2">20+ Years Experience</h3>
            <p className="text-slate-500 text-sm">
              Serving Nepal since 2004 with consistent quality.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <span className="text-4xl">✅</span>
            <h3 className="font-semibold text-[#0a1628] mt-4 mb-2">Quality Guaranteed</h3>
            <p className="text-slate-500 text-sm">
              Every product goes through strict quality checks.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <span className="text-4xl">🤝</span>
            <h3 className="font-semibold text-[#0a1628] mt-4 mb-2">Honest Pricing</h3>
            <p className="text-slate-500 text-sm">
              Transparent pricing with no hidden charges. Ever.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <span className="text-4xl">🚀</span>
            <h3 className="font-semibold text-[#0a1628] mt-4 mb-2">Fast Turnaround</h3>
            <p className="text-slate-500 text-sm">We respect your deadlines and deliver on time.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
