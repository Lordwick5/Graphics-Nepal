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
    name: "Self-ink Stamp",
    image: "/stamp_self_ink.jpg",
    desc: "Customizable Self-Ink Stamp in Square, Rectangle or Circle",
    emoji: "🪪",
  },
  {
    id: 3,
    name: "Flex/Banner Print",
    image: "/flex_print.jpg",
    desc: "Custom Banner Print for Business/Personal use",
    emoji: "🪪",
  },
  {
    id: 4,
    name: "Vinyl Sticker",
    image: "/vinyl_sticker.jpg",
    desc: "Vinyl Sticker available for various purposes",
    emoji: "🪪",
  },
  {
    id: 5,
    name: "Id card & Stripe print",
    image: "/idcard.jpg",
    desc: "High Quality Strap and Id card print for Business/College/School",
    emoji: "🪪",
  },
  {
    id: 6,
    name: "Certificate print",
    image: "/certificate.jpg",
    desc: "Customizable Certificate print for any event for Business/College/School",
    emoji: "🪪",
  },
  {
    id: 7,
    name: "Number plate",
    image: "/number_plate.jpg",
    desc: "Fined by Police for not having a good number plate? Restore your Number plate in just minutes.",
    emoji: "🪪",
  },
  {
    id: 8,
    name: "Diamond Stamp",
    image: "/diamond_stamp.jpg",
    desc: "Give your office that premium look with this stamp",
    emoji: "🪪",
  },
  {
    id: 9,
    name: "Bunting Pipe",
    image: "/PVCPIPEA-1-2500x2500.jpg",
    desc: "Need to hang your banner on the wall? Our multipurpose bunting pipe can help you",
    emoji: "🪪",
  },
  {
    id: 10,
    name: "X-stand",
    image: "/xstand_banner.jpg",
    desc: "Keep your event stylish and fashionable with our X-STAND. Reusable and easy to use",
    emoji: "🪪",
  },
  {
    id: 11,
    name: "Pocket Stamp",
    image: "/pocket_stamp.jpg",
    desc: "Handy and easy to carry. Pocket stamp can literally fit in your pockets.",
    emoji: "🪪",
  },
  {
    id: 12,
    name: "Forex Board",
    image: "/Forex_board.jpg",
    desc: "A board which when styled with vinyl stickers; looks attractive and premium",
    emoji: "🪪",
  },
  {
    id: 13,
    name: "Award & medals",
    image: "/award.jpg",
    desc: "Awards & medals for your special event",
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
