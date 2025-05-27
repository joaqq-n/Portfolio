// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="px-6 py-12" id="projects">
        <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p._id} {...p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
