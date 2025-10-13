export default function SkillsPage() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "MongoDB",
    "Express",
    "Docker",
    "Git",
    "REST APIs",
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">My Skills</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:bg-blue-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </main>
  );
}
