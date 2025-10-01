
interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const navItems = [
    { id: 'hero', label: 'About' }, // Changed to point to hero section
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            onClick={() => onSectionClick('hero')}
          >
            Heli Kothari
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === item.id || (item.label === 'About' && activeSection === 'hero')
                    ? 'text-teal-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/heli-kothari" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors">
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/heli-kothari-7aa510267/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
