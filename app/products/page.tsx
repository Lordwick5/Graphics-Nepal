const products = [
  {
    id: 1,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 2,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 3,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 4,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 5,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 6,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 7,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 8,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 9,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
  {
    id: 10,
    name: "Business Cards",
    desc: "Premium matte & glossy finish",
    // price: "From Rs. 1000",
    emoji: "🪪",
  },
];

export default function Products() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0a1628] mb-3">Our Products & Services</h1>
        <p className="text-slate-500 text-lg">Everything your business needs to look its best</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-slate-200 rounded-xl p-6 bg-white">
            <span className="text-4xl">{product.emoji}</span>
            <h3 className="font-semibold text-[#0a1628] text-lg mt-4 mb-1">{product.name}</h3>
            <p className="text-slate-500 text-sm mb-4">{product.desc}</p>
            <div className="flex justify-between items-center">
              {/* <span className="text-[#c9a84c] font-semibold">{product.price}</span> */}
              <a
                href="/contact"
                className="bg-[#0a1628] text-[#c9a84c] text-sm px-4 py-2 rounded-lg"
              >
                Order now
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
