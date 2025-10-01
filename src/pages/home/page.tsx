
import { useState, useEffect } from 'react';
import Navigation from '../../components/feature/Navigation';
import SkillCard from '../../components/base/SkillCard';
import ProjectCard from '../../components/base/ProjectCard';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [highlightedSkill, setHighlightedSkill] = useState('');

  const skills = [
    {
      id: 'full-stack',
      icon: 'ri-code-s-slash-line',
      title: 'Full-Stack Development',
      description: 'Building responsive web and mobile applications using modern frameworks and technologies.'
    },
    {
      id: 'cloud-automation',
      icon: 'ri-cloud-line',
      title: 'Cloud Automation',
      description: 'Deploying scalable infrastructure with AWS & DevOps practices for efficient cloud solutions.'
    },
    {
      id: 'machine-learning',
      icon: 'ri-brain-line',
      title: 'Machine Learning',
      description: 'Creating intelligent solutions with AI/ML algorithms to solve complex data problems.'
    },
    {
      id: 'software-engineer',
      icon: 'ri-briefcase-line',
      title: 'Software Engineer',
      description: 'Open to Software Engineering roles and collaborative development opportunities.'
    }
  ];

  const projects = [
    {
      title: 'Customer Sentiment Analysis using NLP',
      description: 'Developed a comprehensive sentiment analysis system using advanced NLP techniques and machine learning models to analyze customer feedback and reviews with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'BERT', 'FastAPI', 'PostgreSQL'],
      image: 'https://readdy.ai/api/search-image?query=Animated%20sentiment%20analysis%20dashboard%20with%20NLP%20processing%20visualization%2C%20text%20analysis%20graphs%2C%20emotion%20detection%20charts%2C%20machine%20learning%20model%20interface%20with%20flowing%20text%20data%20and%20colorful%20sentiment%20indicators&width=400&height=300&seq=8&orientation=landscape',
      githubUrl: 'https://github.com/heli-kothari/Customer-Sentiment-Analysis-using-NLP'
    },
    {
      title: 'Serverless CI/CD for Image Processing',
      description: 'Built a fully automated serverless CI/CD pipeline for image processing using AWS Lambda, Docker containers, and Infrastructure as Code with Terraform for scalable deployment.',
      technologies: ['AWS Lambda', 'Docker', 'Terraform', 'Python', 'GitHub Actions'],
      image: 'https://readdy.ai/api/search-image?query=Animated%20serverless%20architecture%20diagram%20with%20CI%2FCD%20pipeline%20visualization%2C%20AWS%20Lambda%20functions%2C%20Docker%20containers%2C%20automated%20deployment%20flow%2C%20modern%20tech%20interface%20with%20flowing%20data%20streams%20and%20glowing%20connections&width=400&height=300&seq=7&orientation=landscape',
      githubUrl: 'https://github.com/heli-kothari/Serverless-CI-CD-for-Image-Processing'
    },
    {
      title: 'Airline Flight Performance Dashboard',
      description: 'Created an interactive real-time dashboard for analyzing airline performance metrics, flight delays, and operational efficiency using modern data visualization techniques.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://readdy.ai/api/search-image?query=Animated%20airline%20performance%20dashboard%20with%20interactive%20charts%2C%20flight%20data%20visualization%2C%20real-time%20metrics%2C%20animated%20graphs%20and%20statistics%2C%20modern%20aviation%20analytics%20interface%20with%20blue%20and%20white%20color%20scheme&width=400&height=300&seq=10&orientation=landscape',
      githubUrl: 'https://github.com/heli-kothari/Airline-Flight-Performance-Dashboard'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Implemented a sophisticated collaborative filtering recommendation engine using machine learning algorithms to provide personalized movie suggestions based on user preferences and viewing history.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'React'],
      image: 'https://readdy.ai/api/search-image?query=Animated%20movie%20recommendation%20interface%20with%20film%20posters%2C%20rating%20systems%2C%20collaborative%20filtering%20visualization%2C%20machine%20learning%20algorithms%20in%20action%2C%20dynamic%20content%20suggestions%20with%20smooth%20transitions&width=400&height=300&seq=9&orientation=landscape',
      githubUrl: 'https://github.com/heli-kothari/Movie-Recommendation-System'
    },
    {
      title: 'PFAS ML Research Project',
      description: 'Conducted advanced machine learning research on PFAS contamination patterns, developing predictive models for environmental impact assessment and contamination spread analysis.',
      technologies: ['PyTorch', 'Python', 'Jupyter', 'NumPy', 'Research'],
      image: 'https://readdy.ai/api/search-image?query=Animated%20environmental%20research%20visualization%20with%20PFAS%20contamination%20data%2C%20machine%20learning%20model%20predictions%2C%20scientific%20charts%20and%20graphs%2C%20environmental%20impact%20assessment%20interface%20with%20green%20and%20blue%20color%20scheme&width=300&height=200&seq=11&orientation=landscape',
      githubUrl: 'private'
    },
    {
      title: 'Cross-Platform Mobile Application',
      description: 'Developed a comprehensive cross-platform mobile application with real-time synchronization, offline capabilities, and seamless user experience across iOS and Android platforms.',
      technologies: ['React Native', 'SwiftUI', 'Firebase', 'TypeScript'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20mobile%20app%20interface%20with%20cross-platform%20design%2C%20sleek%20UI%20components%2C%20real-time%20synchronization%20features%2C%20offline%20capabilities%2C%20animated%20transitions%2C%20clean%20minimalist%20design%20with%20blue%20and%20teal%20gradients&width=500&height=600&seq=6&orientation=portrait',
      githubUrl: 'private'
    }
  ];

  const experiences = [
    {
      title: 'Computer Science Tutor',
      company: 'University of California, Irvine',
      period: 'September 2023 - Present',
      description: [
        'Provided one-on-one tutoring for undergraduate students in data structures, algorithms, and software engineering courses',
        'Helped students debug code and understand complex programming concepts',
        'Maintained a 95% student satisfaction rate across 50+ tutoring sessions'
      ]
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'UCI Machine Learning Lab',
      period: 'January 2024 - August 2024',
      description: [
        'Conducted research on PFAS contamination prediction using machine learning models',
        'Developed and optimized PyTorch models for environmental data analysis',
        'Collaborated with graduate students to publish findings in academic conferences',
        'Processed and analyzed large datasets using Python and statistical methods'
      ]
    },
    {
      title: 'Workshop Facilitator',
      company: 'UCI Center for Excellence in Writing and Communication',
      period: 'September 2022 - June 2023',
      description: [
        'Led technical writing workshops for 20+ engineering students per session',
        'Created curriculum for teaching documentation and technical communication skills',
        'Provided feedback on technical reports and project documentation'
      ]
    },
    {
      title: 'Learning Assistant',
      company: 'Introduction to Programming Course',
      period: 'January 2023 - June 2023',
      description: [
        'Assisted professor in teaching Python programming to 150+ first-year students',
        'Conducted weekly lab sessions and office hours for student support',
        'Graded assignments and provided detailed feedback to improve learning outcomes'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d3e66ghnfp0vd7e4nfqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'experience', 'contact']; // Removed 'about' section
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              Hello, I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Heli Kothari
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer • Cloud Automation • Machine Learning 
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Undergraduate Computer Science student passionate about software engineering, 
              full-stack development, and cloud solutions. I love building scalable applications and 
              exploring innovative technologies that solve real-world problems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                isHighlighted={highlightedSkill === skill.id}
                onMouseEnter={() => setHighlightedSkill(skill.id)}
                onMouseLeave={() => setHighlightedSkill('')}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a 
              href="https://github.com/heli-kothari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-teal-100/50 text-teal-800 rounded-lg font-medium hover:bg-teal-100/70 transition-colors whitespace-nowrap"
            >
              <i className="ri-github-fill mr-2"></i>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/heli-kothari-7aa510267/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-100/50 text-blue-800 rounded-lg font-medium hover:bg-blue-100/70 transition-colors whitespace-nowrap"
            >
              <i className="ri-linkedin-fill mr-2"></i>
              LinkedIn
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-4 transition-colors whitespace-nowrap"
            >
              <i className="ri-mail-line mr-2"></i>
              Contact
            </button>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Redux', 'Kotlin (Jetpack Compose)', 'SwiftUI'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-50/40 text-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-6">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'Java', 'Python', 'C++', 'REST APIs', 'GraphQL', 'Microservices'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-50/40 text-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-6">Databases</h3>
              <div className="flex flex-wrap gap-3">
                {['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Firebase Firestore', 'Data Modeling', 'Query Optimization'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-50/40 text-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud / DevOps */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-6">Cloud / DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {['AWS (EC2, S3, Lambda, IoT Core)', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'CI/CD Pipelines', 'Linux/Unix', 'Shell Scripting'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-50/40 text-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI / Machine Learning */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-6">AI / Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'BERT', 'Transformers', 'Natural Language Processing (NLP)', 'Deep Learning', 'Data Preprocessing', 'Model Deployment'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-50/40 text-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Tools & Practices */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-teal-600 mb-6">Other Tools & Practices</h3>
              <div className="flex flex-wrap gap-3">
                {['Agile/Scrum', 'Git/GitHub', 'API Integration', 'Testing/Debugging', 'Security & Encryption', 'Data Visualization (Tableau, Matplotlib)', 'Software Design Patterns'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-50/40 text-gray-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
      <p className="text-gray-600">My professional journey and academic contributions</p>
    </div>

    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-teal-200"></div>
      
      {experiences.map((exp, index) => (
        <div key={index} className={`relative flex items-center mb-8 md:mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
          {/* Timeline dot - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
          
          {/* Content card */}
          <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-briefcase-line text-teal-600 text-xl"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-teal-600 font-medium text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having 
                a conversation about technology and innovation. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">helikothari26@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-linkedin-fill text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/heli-kothari-7aa510267/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">linkedin.com/in/heli-kothari-7aa510267/</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <i className="ri-github-fill text-gray-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <a href="https://github.com/heli-kothari" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">github.com/heli-kothari</a>
                  </div>
                </div>
              </div>

              {/* New light green transparent box */}
              <div className="mt-8 p-6 bg-teal-100/50 rounded-2xl border border-teal-200/30">
                <p className="text-gray-700 leading-relaxed">
                  I'm always interested in hearing about new opportunities, projects, and collaborations. 
                  Whether you have a question or just want to connect, don't hesitate to reach out!
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={handleFormSubmit} data-readdy-form>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      name="message"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      maxLength={500}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-7 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <i className="ri-send-plane-line"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Heli Kothari</h3>
            <p className="text-gray-400 mb-6">Full-Stack Developer • Cloud Automation • Machine Learning • Software Engineer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/heli-kothari" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/heli-kothari-7aa510267/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="mailto:helikothari26@gmail.com" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <i className="ri-mail-line text-xl"></i>
              </a>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 Heli Kothari. All rights reserved. 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
