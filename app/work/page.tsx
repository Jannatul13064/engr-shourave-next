export default function WorkPage() {
  const works = [
    {
      title: "AgriHub",
      role: "Full Stack Developer",
      desc: "A modern platform for agricultural knowledge built with Next.js, React, and TypeScript.",
    },
    {
      title: "Portfolio Website",
      role: "Frontend Engineer",
      desc: "A responsive personal website using Next.js 15 and Tailwind 4.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center text-center pt-20">
      <h1 className="text-4xl font-bold mb-6">My Work</h1>
      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl pt-10">
        {works.map((work, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold mb-2">{work.title}</h2>
            <p className="text-blue-400 text-sm mb-2">{work.role}</p>
            <p className="text-gray-300">{work.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
