"use client";

export default function Quote() {
  const quotes = [
    {
      text: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
    },
    {
      text: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson",
    },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Favorite Quotes
      </h1>
      <div className="max-w-2xl w-full space-y-6">
        {quotes.map((quote, i) => (
          <blockquote
            key={i}
            className="bg-gray-900/70 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition"
          >
            <p className="italic text-gray-300 mb-3 leading-relaxed">
              “{quote.text}”
            </p>
            <footer className="text-blue-400 font-medium">
              — {quote.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </main>
  );
}
