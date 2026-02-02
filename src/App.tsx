import React, { useState, useEffect, useRef } from "react";

import {
  INTRO,
  WORK_EXPERIENCE,
  EDUCATION,
  SKILLS,
  BLOG_POSTS,
  SOCIALS,
  PROJECTS,
} from "./constants";

import BottomNav from "./components/BottomNav";
import AgeTimer from "./components/AgeTimer";
import { BlogPost } from "./types";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [activeSection, selectedPost]);

  const handleNavigate = (section: string) => {
    if (selectedPost && section !== 'blog') {
      setSelectedPost(null);
    }
    
    setActiveSection(section);
    
    if (section === 'blog') {
      setSelectedPost(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
   const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
  home: homeRef,
  about: aboutRef,
  projects: projectsRef,
  contact: contactRef,
};


    setTimeout(() => {
      refs[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const handleReadPost = (post: BlogPost) => {
    window.open(post.content, '_blank');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  const renderBio = (bio: string) => {
    const capitalizedBio = bio.charAt(0).toUpperCase() + bio.slice(1);
    
    if (capitalizedBio.startsWith('Tl;dr:')) {
      const parts = capitalizedBio.split('\n\n');
      const tldrPart = parts[0].replace('Tl;dr:', '').trim();
      return (
        <div className="space-y-12">
          <div className="relative group reveal reveal-delay-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-6 mono">About</h2>
            <div className="absolute -inset-x-6 -inset-y-4 bg-zinc-900/10 rounded-3xl -z-10 group-hover:bg-zinc-900/20 transition-colors"></div>
            <p className="text-white text-2xl sm:text-4xl leading-tight max-w-3xl font-black tracking-tight">
              <span className="text-zinc-600 italic font-medium mr-4 text-xl">Tl;dr:</span>
              <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                {tldrPart}
              </span>
            </p>
          </div>
          
          <div className="space-y-8">
            {parts.slice(1).map((text, i) => (
              <p key={i} className={`text-zinc-500 text-xl leading-relaxed max-w-3xl font-light reveal reveal-delay-${i + 3}`}>
                {text}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return <div className="text-zinc-400 text-xl leading-relaxed max-w-3xl font-light whitespace-pre-line reveal reveal-delay-2">{capitalizedBio}</div>;
  };

  return (
    <div className="min-h-screen bg-[#000] text-zinc-100 selection:bg-white selection:text-black pb-32 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="blob w-[500px] h-[500px] bg-blue-500/10 top-[-10%] left-[-10%]" style={{ animationDelay: '0s' }}></div>
        <div className="blob w-[400px] h-[400px] bg-zinc-500/10 bottom-[10%] right-[-5%]" style={{ animationDelay: '-5s', animationDuration: '30s' }}></div>
        <div className="blob w-[300px] h-[300px] bg-indigo-500/10 middle-y left-[40%]" style={{ animationDelay: '-10s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-0 right-0 w-full h-[60vh] bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative z-10">
        <div className="flex justify-between items-center mb-16 reveal reveal-delay-1">
          <a 
            href="/resume.pdf" 
            download="Shashwat_Tiwari_Resume.pdf"
            className="flex gap-4 items-center group/hire cursor-pointer"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></div>
            <span className="text-[10px] mono uppercase tracking-widest text-zinc-500 group-hover/hire:text-white transition-colors">
              Available for hire <span className="text-zinc-800 mx-2">—</span> <span className="underline decoration-zinc-800 underline-offset-4 group-hover/hire:decoration-white transition-all">Download Resume</span>
            </span>
          </a>
        </div>

        {activeSection !== 'blog' ? (
          <div className="space-y-40">
            <header ref={homeRef} className="scroll-mt-32">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-10 reveal">
                <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-white">
                  Hy, {INTRO.name.split(' ')[0]} here.
                </h1>

                <button 
                  onClick={() => handleNavigate('home')}
                  className="group relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shrink-0"
                >
                  <img 
                    src={INTRO.avatar} 
                    alt="Logo" 
                    className="w-full h-full object-contain animate-logo-spin filter grayscale brightness-125 transition-all group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>

              <div className="mb-16 reveal reveal-delay-1">
                <AgeTimer />
              </div>
              {renderBio(INTRO.bio)}
            </header>

            <section ref={aboutRef} id="about" className="scroll-mt-32 space-y-24 reveal">
              <div className="space-y-16">
                <div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8 mono">Experience</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {WORK_EXPERIENCE.map((job, i) => (
                      <div key={i} className={`group relative reveal reveal-delay-${i + 1}`}>
                        <div className="relative z-10 p-6 sm:p-10 bg-zinc-900/10 border border-zinc-900/50 rounded-3xl group-hover:bg-zinc-900/40 group-hover:border-zinc-700/50 transition-all duration-500 ease-out cursor-default overflow-hidden backdrop-blur-sm">
                          <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                            <div className="space-y-1">
                              <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight">{job.company}</h3>
                              <p className="text-base text-zinc-400 font-medium">{job.role}</p>
                            </div>
                            <span className="text-[10px] mono text-zinc-700 uppercase tracking-widest bg-zinc-950 px-4 py-1 rounded-full border border-zinc-900">{job.period}</span>
                          </div>
                          <p className="text-zinc-500 text-base leading-relaxed mb-0 group-hover:mb-10 transition-all duration-500 max-w-4xl">
                            {job.description}
                          </p>
                          <div className="max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                            <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent mb-10"></div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                              {job.details?.map((detail, idx) => (
                                <li key={idx} className="flex gap-4 text-sm text-zinc-400 leading-relaxed group/item">
                                  <span className="text-zinc-800 mt-2 shrink-0 w-1.5 h-1.5 border border-zinc-700 rounded-full group-hover/item:bg-white group-hover/item:border-white transition-all"></span>
                                  <span className="group-hover/item:text-zinc-200 transition-colors">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-6 mono">Core Skills</h2>
                  <div className="flex flex-wrap gap-4">
                    {SKILLS.map((skill, i) => (
                      <span 
                        key={i} 
                        style={{ animationDelay: `${i * 0.1}s` }}
                        className="px-6 py-3 bg-zinc-900/60 border border-zinc-800 rounded-2xl text-[11px] text-zinc-100 font-medium mono shadow-[0_0_15px_rgba(255,255,255,0.01)] cursor-default transition-all duration-500 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] animate-pulse-soft"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 reveal">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-6 mono">Education</h2>
                <div className="grid grid-cols-1 gap-6">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="group relative reveal">
                      <div className="relative z-10 p-8 bg-zinc-900/10 border border-zinc-900/30 rounded-[2.5rem] group-hover:bg-zinc-900/40 group-hover:border-zinc-700/50 transition-all duration-500 ease-out cursor-default overflow-hidden backdrop-blur-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white tracking-tight">{edu.institution}</h3>
                            <p className="text-base text-zinc-400 mt-1 font-medium italic">{edu.degree}</p>
                          </div>
                          {edu.period && (
                            <p className="text-[10px] mono text-zinc-700 uppercase tracking-[0.2em] whitespace-nowrap bg-zinc-950/50 px-3 py-1 rounded-full border border-zinc-900">{edu.period}</p>
                          )}
                        </div>
                        
                        <div className="max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                          <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent my-6"></div>
                          {edu.details && (
                            <ul className="space-y-4">
                              {edu.details.map((detail, idx) => (
                                <li key={idx} className="flex gap-4 text-sm text-zinc-400 leading-relaxed group/item">
                                  <span className="text-zinc-800 mt-2 shrink-0 w-1.5 h-1.5 border border-zinc-700 rounded-full group-hover/item:bg-white group-hover/item:border-white transition-all"></span>
                                  <span className="group-hover/item:text-zinc-200 transition-colors">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        
                        <div className="mt-4 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
                          <span className="text-[9px] mono uppercase tracking-widest text-zinc-600">Hover for details</span>
                          <div className="h-[1px] w-4 bg-zinc-800"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section ref={projectsRef} id="projects" className="scroll-mt-32 reveal">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8 mono">Selected Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project, i) => (
                  <a 
                    key={i} 
                    href={project.link}
                    target="_blank"
                    className="group block p-10 bg-zinc-900/10 border border-zinc-900 hover:border-zinc-700 rounded-[2.5rem] transition-all reveal backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <h3 className="text-2xl font-bold text-zinc-200 group-hover:text-white transition-colors tracking-tight">{project.title}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                         <svg width="18" height="18" viewBox="0 0 12 12" fill="none" className="text-zinc-500"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                    <p className="text-zinc-500 mb-10 group-hover:text-zinc-400 leading-relaxed text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] mono text-zinc-700 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className="scroll-mt-32 reveal">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mono">Latest Writing</h2>
                <button 
                  onClick={() => handleNavigate('blog')}
                  className="text-[10px] mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  View Archive
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-1 transition-transform"><path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5"/></svg>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {BLOG_POSTS.slice(0, 2).map((post, i) => (
                  <div 
                    key={post.id}
                    onClick={() => handleReadPost(post)}
                    className="group cursor-pointer p-8 bg-zinc-900/10 border border-zinc-900/50 rounded-[2rem] hover:border-zinc-700 transition-all backdrop-blur-sm"
                  >
                    <span className="text-[10px] mono text-zinc-700 uppercase tracking-widest block mb-4">{post.date}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors mb-4 leading-tight">{post.title}</h3>
                    <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="scroll-mt-32 reveal">
              <div className="p-10 sm:p-20 bg-zinc-900/10 border border-zinc-900 rounded-[3rem] relative overflow-hidden group backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 mb-6 mono">Newsletter</h2>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-6">Stay updated on my experiments.</h3>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-12">
                    I write occasionally about software architecture, security vulnerabilities, and my journey in tech. No spam, just pure signal.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      required
                      placeholder="email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-zinc-950/50 border border-zinc-900 px-6 py-4 rounded-2xl text-base focus:outline-none focus:border-zinc-500 transition-colors text-white placeholder:text-zinc-700 mono"
                    />
                    <button 
                      type="submit"
                      disabled={isLoading || isSubscribed}
                      className="px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed mono"
                    >
                      {isLoading ? 'Sending...' : isSubscribed ? 'Subscribed!' : 'Join List'}
                    </button>
                  </form>
                  {isSubscribed && (
                    <p className="mt-6 text-[11px] text-green-500 mono uppercase tracking-widest animate-pulse">
                      Welcome to the circle. Check your inbox soon.
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section ref={contactRef} id="contact" className="scroll-mt-32 space-y-24 reveal">
              <div className="flex flex-col items-center gap-16 border-t border-zinc-900 pt-24">
                <div className="flex flex-col items-center gap-10">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 mono">Connect</h2>
                  <div className="flex gap-14 items-center justify-center">
                    {SOCIALS.map((social) => (
                      <a 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-14 h-14 transition-all duration-300"
                        title={social.name}
                        style={{ '--glow-color': social.color } as any}
                      >
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                          style={{ backgroundColor: social.color }}
                        ></div>
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="w-8 h-8 text-zinc-600 group-hover:text-[var(--glow-color)] transition-all duration-300 scale-90 group-hover:scale-110"
                        >
                          <path d={social.iconPath} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 text-center pb-12">
                  <p className="text-[10px] text-zinc-800 mono uppercase tracking-[0.3em]">
                    Built with intentionality & curiosity
                  </p>
                  <p className="text-[10px] text-zinc-500 mono uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} {INTRO.name}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="min-h-screen pt-20">
            <div className="flex flex-col gap-4 mb-20 reveal">
              <div className="flex items-center gap-6">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mono whitespace-nowrap">Archives</h2>
                <div className="h-[1px] w-full bg-zinc-900"></div>
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white lowercase">Writing.</h1>
              <p className="text-zinc-500 text-xl font-light max-w-2xl mt-4">
                Experiments in software engineering, security research, and performance-critical systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12 sm:gap-24">
              {BLOG_POSTS.map((post, i) => (
                <article key={post.id} className={`group reveal reveal-delay-${i % 3 + 1}`}>
                  <div className="flex flex-col gap-10 p-1 bg-transparent hover:bg-zinc-900/5 transition-colors rounded-[2rem] -mx-4">
                    <div className="flex flex-col gap-6 px-4">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
                        <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <span className="text-[10px] mono text-zinc-700 uppercase tracking-widest shrink-0 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900">
                          {post.date}
                        </span>
                      </div>
                      <p className="text-zinc-500 leading-relaxed max-w-3xl text-xl font-light group-hover:text-zinc-400 transition-colors">
                        {post.excerpt}
                      </p>
                      <button 
                        onClick={() => handleReadPost(post)}
                        className="flex items-center gap-6 text-zinc-700 group-hover:text-white transition-all duration-500 w-fit mt-4"
                      >
                        <div className="h-[1px] w-12 bg-zinc-800 group-hover:w-24 transition-all duration-500"></div>
                        <span className="text-[10px] mono uppercase tracking-widest">Read on Medium</span>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                          <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-zinc-900/30 mt-20 group-last:hidden"></div>
                </article>
              ))}
            </div>

            <button 
              onClick={() => handleNavigate('home')}
              className="mt-32 group flex items-center gap-6 text-zinc-600 hover:text-white transition-all duration-500 reveal"
            >
              <div className="w-12 h-12 rounded-full border border-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[225deg] transition-transform group-hover:scale-110">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[10px] mono uppercase tracking-widest">Return to Index</span>
            </button>
          </div>
        )}
      </main>

      <button
        onClick={() => {
          handleNavigate('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`fixed right-12 bottom-24 z-40 p-4 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-full transition-all duration-500 group ${showBackToTop ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-zinc-400 group-hover:text-white transition-colors"
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>

      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
