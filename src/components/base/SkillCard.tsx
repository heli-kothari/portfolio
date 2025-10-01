
interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function SkillCard({ 
  icon, 
  title, 
  description, 
  isHighlighted, 
  onMouseEnter, 
  onMouseLeave 
}: SkillCardProps) {
  return (
    <div
      className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
        isHighlighted 
          ? 'bg-green-50/40 text-gray-800 shadow-xl scale-105' 
          : 'bg-gray-50 text-gray-700 hover:bg-green-50/40'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${
        isHighlighted ? 'bg-white/50' : 'bg-teal-100'
      }`}>
        <i className={`${icon} text-2xl ${isHighlighted ? 'text-gray-800' : 'text-teal-600'}`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className={`text-sm leading-relaxed ${isHighlighted ? 'text-gray-700' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}
