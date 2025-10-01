
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  image, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) {
  const handleGithubClick = () => {
    if (githubUrl && githubUrl !== 'private') {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white border border-gray-200 text-gray-800 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <button 
            onClick={handleGithubClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              githubUrl === 'private' 
                ? 'bg-white border border-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-white border border-gray-200 text-gray-800 cursor-pointer hover:bg-green-100/50 hover:border-green-200'
            }`}
            disabled={githubUrl === 'private'}
          >
            <i className="ri-github-fill"></i>
            {githubUrl === 'private' ? 'Private Repository' : 'GitHub Repository'}
          </button>
        </div>
      </div>
    </div>
  );
}