export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-6 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Línea superior con brillo morado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-center text-gray-500">
          © {currentYear} - Diseñado por <span className="text-purple-400">Josue Domínguez</span>
        </p>
      </div>
    </footer>
  );
}
