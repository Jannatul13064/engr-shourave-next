export default function GalleryPage() {
  const images = [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
    "/images/work4.jpg",
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {images.map((src, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl">
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
