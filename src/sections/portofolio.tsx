import { projects } from "@/data/portofolio";

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
        Portofolio
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}