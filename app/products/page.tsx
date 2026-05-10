import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Business Cards",
    image: "/visiting_card.jpg",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 2,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 3,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 4,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 5,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 6,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 7,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 8,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 9,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
  {
    id: 10,
    name: "Business Cards",
    image: "",
    desc: "Premium matte & glossy finish",
    emoji: "🪪",
  },
];

export default function Products() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-[#0a1628] py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">Our Products & Services</h1>
        <p className="text-slate-400 text-lg">Everything your business needs to look its best</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              {/* Image or Emoji fallback */}
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-slate-100 flex items-center justify-center text-4xl">
                  {product.emoji}
                </div>
              )}

              {/* Card Content */}
              <div className="p-4">
                <h3 className="font-semibold text-[#0a1628] text-lg mb-1">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{product.desc}</p>
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
      </div>
    </main>
  );
}
