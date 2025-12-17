'use client';

import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  const productImages = [
    '/Gallery/1/DFB-01_1.jpg',
    '/Gallery/1/DFB-01_2.jpg',
    '/Gallery/2/DF-02_4.jpg',
    '/Gallery/4/DF-05_3.jpg',
    '/Gallery/3/BL-05_1-scaled.jpg',
    '/Gallery/2/DF-02_2.jpg',
    '/Gallery/1/DFB-01_7.jpg',
    '/Gallery/1/DFB-01_3.jpg',
    '/Gallery/1/DFB-01_4.jpg',
    '/Gallery/1/DFB-01_5.jpg',
    '/Gallery/1/DFB-01_6.jpg',
    '/Gallery/2/DF-02_1.jpg',
    '/Gallery/2/DF-02_3.jpg',
    '/Gallery/3/BL-05_2-scaled.jpg',
    '/Gallery/4/DF-05_1.jpg',
    '/Gallery/4/DF-05_2.jpg',
    '/Gallery/4/DF-05_4.jpg',
  ];

  // Only take the first 8 images for the preview section
  const previewImages = productImages.slice(0, 8);

  return (
    <section className="w-full relative py-10 md:py-20 pb-20 md:pb-36 my-10">
      {/* Dotted Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #555 1px, transparent 0)`,
            backgroundSize: '18px 18px',
            opacity: 0.22,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-40 md:h-56 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 md:h-56 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-display font-light tracking-tight text-black mb-3 md:mb-4">
            Gallery
          </h2>
          <p className="text-xs md:text-sm font-light tracking-widest uppercase text-gray-600">
            Premium
          </p>
        </div>

        {/* Desktop Gallery (Top 8 Only) */}
        <div className="hidden md:flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-[80%]">
            {previewImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden bg-gray-50 group cursor-pointer"
                style={{
                  // The translateY pushes images down visually
                  transform: `translateY(${index * 20}px)`,
                  zIndex: previewImages.length - index,
                }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pinterest-style Gallery (Top 8 Only) */}
        <div className="md:hidden px-3">
          <div className="columns-2 gap-3">
            {previewImages.map((image, index) => (
              <div
                key={index}
                className="mb-3 break-inside-avoid overflow-hidden rounded-xl bg-gray-50"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  sizes="100vw"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View Full Gallery Link */}
        {/* INCREASED MARGIN HERE: mt-24 for mobile, md:mt-60 for desktop */}
        <div className="flex justify-center mt-24 md:mt-60 relative z-20">
            <Link href="/gallery" className="group relative px-8 py-3 bg-black text-white text-[10px] uppercase tracking-[0.25em] font-medium transition-all hover:bg-[#960018]">
                View Full Gallery
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Gallery;