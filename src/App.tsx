import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Globe, 
  Terminal,
  Cpu,
  Layers,
  LineChart,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Award,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react';
import './App.css';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-void/90 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="font-display text-2xl md:text-3xl text-white hover:text-lime transition-colors"
          >
            PK<span className="text-lime">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm text-white/70 hover:text-lime transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-lime transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-void/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="block text-lg text-white/70 hover:text-lime transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-void/70 to-void" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lime text-sm md:text-base tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
        </div>
        
        <h1 
          className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Bandaru <span className="text-gradient">Pavan Kumar</span>
        </h1>
        
        <div 
          className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-4 font-light">
            AI/ML Engineer | Data Analyst | Web Developer
          </p>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Building intelligent systems with AI, data, and scalable web solutions
          </p>
        </div>
        
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button 
            onClick={() => scrollToSection('#projects')}
            className="group relative px-8 py-4 bg-lime text-void font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => scrollToSection('#contact')}
            className="group px-8 py-4 border border-white/30 text-white rounded-full hover:border-lime hover:text-lime transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <Mail size={18} />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-white/50 hover:text-lime transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="Pavan Kumar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-lime/30 rounded-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-lime/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <div 
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lime text-sm tracking-widest uppercase mb-4">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                Crafting Digital <span className="text-gradient">Experiences</span>
              </h2>
            </div>
            
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Computer Science undergraduate with hands-on experience in AI/ML, Data Analytics, 
                and Web Development. Strong foundation in DSA, OOP, DBMS, SQL, OS, and Computer 
                Networks with hands-on skills in Python, Java, JavaScript, and Git.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Experienced in building ML dashboards, NLP models, and responsive web applications 
                with strong communication and a continuous learning mindset. Passionate about 
                transforming complex data into actionable insights and building intelligent systems.
              </p>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="glass rounded-xl p-6">
                <p className="font-display text-4xl text-lime mb-2">3</p>
                <p className="text-white/60 text-sm">Internships Completed</p>
              </div>
              <div className="glass rounded-xl p-6">
                <p className="font-display text-4xl text-orange mb-2">5+</p>
                <p className="text-white/60 text-sm">Projects Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C', 'Python', 'Java', 'JavaScript', 'SQL'],
      color: 'lime',
    },
    {
      title: 'Core CS Fundamentals',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
      color: 'orange',
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Layers className="w-6 h-6" />,
      skills: ['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Matplotlib', 'Streamlit'],
      color: 'lime',
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Anaconda', 'Eclipse', 'Power BI'],
      color: 'orange',
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'SQLite'],
      color: 'lime',
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
      color: 'orange',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lime text-sm tracking-widest uppercase mb-4">My Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`flex items-center gap-3 mb-4 ${
                category.color === 'lime' ? 'text-lime' : 'text-orange'
              }`}>
                {category.icon}
                <h3 className="font-display text-xl text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-all duration-300 ${
                      category.color === 'lime'
                        ? 'border-lime/30 text-lime/80 hover:bg-lime/10 hover:border-lime'
                        : 'border-orange/30 text-orange/80 hover:bg-orange/10 hover:border-orange'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredProject = {
    title: 'AI/ML-Based Vehicle Monitoring & Risk Analysis Dashboard',
    description: 'A comprehensive ML-powered system for real-time vehicle monitoring, anomaly detection, and risk assessment with interactive dashboards.',
    image: '/images/project-vehicle.jpg',
    problem: 'Manual monitoring is inefficient and lacks real-time insights',
    solution: 'ML-powered anomaly detection and risk scoring system',
    features: [
      { icon: <Zap size={18} />, text: 'Real-time alerts' },
      { icon: <LineChart size={18} />, text: 'Interactive dashboard' },
      { icon: <Shield size={18} />, text: 'Risk prediction system' },
    ],
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Streamlit', 'Plotly'],
  };

  const otherProjects = [
    {
      title: 'Zomato Sentiment Analysis',
      description: 'NLP-based sentiment classifier using TF-IDF and ML models to analyze restaurant reviews and visualize sentiment trends.',
      image: '/images/project-sentiment.jpg',
      technologies: ['Python', 'NLP', 'TF-IDF', 'Naive Bayes', 'Logistic Regression'],
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: 'E-Commerce Website',
      description: 'Fully responsive e-commerce web interface with structured UI components and interactive features.',
      image: '/images/project-ecommerce.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lime text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Featured Project */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-video lg:aspect-auto">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-void/80 to-transparent lg:bg-gradient-to-l" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-lime mb-4">
                  <Sparkles size={18} />
                  <span className="text-sm font-medium">Featured Project</span>
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                  {featuredProject.title}
                </h3>
                
                <p className="text-white/70 mb-6">
                  {featuredProject.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-orange font-medium">Problem:</span>
                    <span className="text-white/60">{featuredProject.problem}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lime font-medium">Solution:</span>
                    <span className="text-white/60">{featuredProject.solution}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {featuredProject.features.map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-lime/10 rounded-full text-lime text-sm"
                    >
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 3) * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-lime mb-3">
                  {project.icon}
                  <h3 className="font-display text-xl text-white group-hover:text-lime transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-white/60 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs border border-white/10 rounded-full text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Certifications Section
function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'AI Internship Program',
      issuer: 'Agnirva Space Community',
      icon: <Brain className="w-6 h-6" />,
      color: 'lime',
    },
    {
      title: 'Java Certification',
      issuer: 'Datapro',
      icon: <Code2 className="w-6 h-6" />,
      color: 'orange',
    },
    {
      title: 'Python Programming',
      issuer: 'SkillDzire',
      icon: <Terminal className="w-6 h-6" />,
      color: 'lime',
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lime text-sm tracking-widest uppercase mb-4">Achievements</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                cert.color === 'lime' ? 'bg-lime/20 text-lime' : 'bg-orange/20 text-orange'
              }`}>
                {cert.icon}
              </div>
              
              <Award className="w-8 h-8 mx-auto text-white/30 mb-4" />
              
              <h3 className="font-display text-xl text-white mb-2 group-hover:text-lime transition-colors">
                {cert.title}
              </h3>
              <p className="text-white/50 text-sm">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    {
      name: 'Email',
      value: 'bandarupavan282004@gmail.com',
      href: 'mailto:bandarupavan282004@gmail.com',
      icon: <Mail className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/pavankumarb001',
      href: 'https://linkedin.com/in/pavankumarb001',
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: 'GitHub',
      value: 'github.com/Pavan755',
      href: 'https://github.com/Pavan755',
      icon: <Github className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-lime/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lime text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-lime/20 text-lime flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              
              <h3 className="font-display text-lg text-white mb-1 group-hover:text-lime transition-colors">
                {link.name}
              </h3>
              <p className="text-white/50 text-sm">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div 
          className={`mt-20 pt-8 border-t border-white/10 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-white/40 text-sm">
            © 2025 Bandaru Pavan Kumar. All rights reserved.
          </p>
          <p className="text-white/30 text-xs mt-2">
            Built with React, Tailwind CSS & lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div className="grain-overlay">
      <Navigation />
      <main className="bg-void min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
