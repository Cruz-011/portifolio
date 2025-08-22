"use client";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Python", level: 45 },
  { name: "SQL", level: 65 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "Node.js / Express", level: 60 },
  { name: "C# / .NET Core", level: 40 },
  { name: "Java / Spring Boot", level: 65 },
  { name: "Tailwind CSS / CSS3", level: 95 },
  { name: "Git / GitHub", level: 90 },
];

export default function Skills() {
  return (
    <section className="p-8 m-4 bg-gradient-to-b from-blue-900 via-purple-900 to-black rounded-lg animate-fadeIn text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Habilidades & Tecnologias</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-1500 ease-in-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
