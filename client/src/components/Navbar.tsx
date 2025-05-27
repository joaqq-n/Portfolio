// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Mi Portafolio</h1>
      <div className="space-x-4">
        <a href="#projects" className="hover:text-blue-600">Proyectos</a>
        <a href="#contact" className="hover:text-blue-600">Contacto</a>
      </div>
    </nav>
  );
}