"use client";

export default function GalleryPage() {
  const images = [
    "/images/personal/work1.jpg",
    "/images/personal/work2.jpg",
    "/images/personal/work3.jpg",
    "/images/personal/work4.jpg",
  ];

  return (
    <main className="flex flex-col items-center justify-center pt-20 text-center">
      <div className="max-w-7xl w-full mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-white">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
