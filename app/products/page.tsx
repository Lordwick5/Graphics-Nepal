import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Business Cards",
    image: "/visiting_card.jpg",
    desc: "Make a powerful first impression with our premium matte and glossy card finishes.",
  },
  {
    id: 2,
    name: "Self-ink Stamp",
    image: "/stamp_self_ink.jpg",
    desc: "Professionally brand any document with custom square, rectangle, or circle stamps.",
  },
  {
    id: 3,
    name: "Flex/Banner Print",
    image: "/flex_print.jpg",
    desc: "High-impact custom banners for both business promotion and personal events.",
  },
  {
    id: 4,
    name: "Vinyl Sticker",
    image: "/vinyl_sticker.jpg",
    desc: "Durable, vibrant vinyl stickers for vehicles, branding, and various decorative needs.",
  },
  {
    id: 5,
    name: "Id card & Stripe print",
    image: "/idcard.jpg",
    desc: "High-quality, durable ID cards and straps for seamless professional identification.",
  },
  {
    id: 6,
    name: "Certificate print",
    image: "/certificate.jpg",
    desc: "Honor achievements with customizable, elegant certificates for any event or institution.",
  },
  {
    id: 7,
    name: "Number plate",
    image: "/number_plate.jpg",
    desc: "Restore or customize number plates for a sharp, compliant, and professional look.",
  },
  {
    id: 8,
    name: "Diamond Stamp",
    image: "/diamond_stamp.jpg",
    desc: "Upgrade your office stationery with a polished, premium diamond-effect stamp.",
  },
  {
    id: 9,
    name: "Bunting Pipe",
    image: "/PVCPIPEA-1-2500x2500.jpg",
    desc: "Effortlessly display your banners with our multipurpose, easy-to-hang bunting pipe system.",
  },
  {
    id: 10,
    name: "X-stand",
    image: "/xstand_banner.jpg",
    desc: "Stylish, reusable, and easy-to-assemble X-stands for professional event displays.",
  },
  {
    id: 11,
    name: "Pocket Stamp",
    image: "/pocket_stamp.jpg",
    desc: "Super convenient, compact stamps that fit perfectly in any pocket or bag.",
  },
  {
    id: 12,
    name: "Forex Board",
    image: "/Forex_board.jpg",
    desc: "Create attractive and premium presentation boards using customized vinyl styling.",
  },
  {
    id: 13,
    name: "Award & medals",
    image: "/award.jpg",
    desc: "Celebrate success with beautifully designed and customized awards and medals.",
  },
  {
    id: 14,
    name: "LED Light Box",
    image: "/displayboard.png",
    desc: "Make your business shine! Eye-catching illuminated display boards for maximum visibility.",
  },
  {
    id: 15,
    name: "Cup print",
    image: "/cup_print.png",
    desc: "Branded giveaway items! Customizable cup prints for events, parties, and promotions.",
  },
  {
    id: 16,
    name: "CANVAS print",
    image: "/canvas.png",
    desc: "Turn your photos or designs into beautiful, high-quality stretched canvas artwork.",
  },
  {
    id: 17,
    name: "DTF T-shirt printing",
    image: "/dtfprinter.png",
    desc: "Get vibrant, durable, and comfortable T-shirt printing using the modern DTF process.",
  },
  {
    id: 18,
    name: "2D & 3D",
    image: "/2d_and_3d.png",
    desc: "Interactive 2D and 3D display blocks to make your business presentation pop.",
  },
  {
    id: 19,
    name: "Lightboard",
    image: "/lightboard.png",
    desc: "Illuminate your message! Portable, backlit display boards for visible branding.",
  },
  {
    id: 20,
    name: "Stickers",
    image: "/stickers.png",
    desc: "Instant branding power! Customize stickers for maximum promotional reach.",
  },
  {
    id: 21,
    name: "Letter Head",
    image: "/letterhead.png",
    desc: "Maintain a professional corporate image with custom-designed letterheads.",
  },
  {
    id: 22,
    name: "Bill Printing",
    image: "/billpad.png",
    desc: "Ensure accuracy and professionalism with custom-printed billing pads.",
  },
  {
    id: 23,
    name: "Photo Frame",
    image: "/photoframe.png",
    desc: "Capture and display your favorite moments in customized, elegant photo frames.",
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
              className="border-2 border-slate-300 rounded-xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  // width={400}
                  // height={200}
                  fill // Use fill to make the image cover the parent div completely
                  className="object-cover transition duration-500 group-hover:scale-105" 
                  // className="w-full h-40 object-cover"
                />
              </div>

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
