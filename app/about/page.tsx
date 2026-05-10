export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0a1628] mb-3">About Graphics Nepal</h1>
        <p className="text-slate-500 text-lg">A legacy built on trust, quality, and honesty</p>
      </div>

      {/* Our Story */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#c9a84c] mb-4">Our Story</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Graphics Nepal (previously named <strong>Nepal Art</strong>) was founded over 20 years ago
          with a simple mission - to provide honest, high-quality printing and graphic design
          services to the people of Nepal.
        </p>
        <p className="text-slate-600 leading-relaxed">
          What started as a small shop has grown into a trusted name that thousands of businesses
          and individuals rely on. We believe great design shouldn't cost a fortune, and quality
          should never be compromised.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6-bg-[#0a1628] rounded-2xl p-10 text-center">
        <div>
          <span className="text-4xl font-bold text-[#c9a84c] block">20+</span>
          <span className="text-slate-400 text-sm mt-1 block">Years in business</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-[#c9a84c] block">5000+</span>
          <span className="text-slate-400 text-sm mt-1 block">Happy customers</span>
        </div>
        <div>
          <span className="text-4xl font-bold text-[#c9a84c] block">100%</span>
          <span className="text-slate-400 text-sm mt-1 block">Satisfaction rate</span>
        </div>
      </div>
    </main>
  );
}
