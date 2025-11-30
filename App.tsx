import React, { useEffect, useRef, useState } from 'react';
import { ContentProvider, useContent } from './ContentContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Section 1: Hero
const HeroSection = () => {
  const { content } = useContent();
  return (
    <section id="home" className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-dark">
      <div className="absolute inset-0 z-0">
        <img src={content.hero.bgImage} alt="Background" className="w-full h-full object-cover opacity-30 scale-105 animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">
            {content.hero.title}
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 font-light mb-8 uppercase tracking-widest">
            {content.hero.subtitle}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 max-w-3xl mx-auto leading-tight mb-12">
            "{content.hero.tagline}"
          </motion.p>
          <motion.div variants={fadeInUp}>
             <button onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-primary/20">
                {content.hero.ctaText}
             </button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

// Section 2: Featured Work
const FeaturedSection = () => {
    const { content } = useContent();
    return (
        <section id="featured" className="sticky top-0 h-screen w-full bg-dark flex flex-col justify-center px-6 md:px-12 border-t border-white/5 z-10">
             <div className="max-w-7xl mx-auto w-full">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="mb-12 text-center md:text-left">
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-4">{content.featured.title}</motion.h2>
                    <motion.p variants={fadeInUp} className="text-slate-400 text-lg max-w-2xl">{content.featured.description}</motion.p>
                </motion.div>

                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {content.featured.projects.map((project) => (
                        <motion.div key={project.id} variants={fadeInUp} className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                    {project.title}
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
             </div>
        </section>
    );
};

// Section 3: About
const AboutSection = () => {
    const { content } = useContent();
    return (
        <section id="about" className="sticky top-0 h-screen w-full bg-[#0D121C] flex items-center justify-center px-6 md:px-12 border-t border-white/5 z-20">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false }}>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
                        <img src={content.about.profileImage} alt="Profile" className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500" />
                    </div>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8">{content.about.title}</motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed mb-10">
                        {content.about.bio}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="space-y-6 mb-10">
                        {content.about.skills.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-white">{skill.name}</span>
                                    <span className="text-primary">{skill.percentage}%</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }} 
                                        whileInView={{ width: `${skill.percentage}%` }} 
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-primary rounded-full" 
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-sm uppercase text-slate-500 font-bold mb-4 tracking-widest">Toolbox</h4>
                        <div className="flex gap-4">
                            {content.about.tools.map(tool => (
                                <div key={tool.name} className="p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-primary transition-colors tooltip" title={tool.name}>
                                    <img src={tool.iconUrl} alt={tool.name} className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

// Section 4: All Work
const AllWorkSection = () => {
    const { content } = useContent();
    return (
        <section id="all-work" className="sticky top-0 h-screen w-full bg-dark flex flex-col pt-24 px-6 md:px-12 border-t border-white/5 overflow-hidden z-30">
             <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold mb-2">{content.allWork.title}</h2>
                    <p className="text-slate-400">{content.allWork.subtitle}</p>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.allWork.projects.map((project) => (
                             <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                key={project.id} 
                                className="group bg-slate-900 rounded-xl overflow-hidden hover:ring-2 hover:ring-primary transition-all cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden">
                                     <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <p className="text-xs text-primary font-bold uppercase mb-1">{project.category}</p>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>
                             </motion.div>
                        ))}
                     </div>
                </div>
             </div>
        </section>
    );
};

// Section 5: Contact
const ContactSection = () => {
    const { content } = useContent();
    return (
        <section id="contact" className="sticky top-0 h-screen w-full bg-gradient-to-br from-indigo-900 to-dark flex items-center justify-center px-6 md:px-12 z-40">
             <div className="max-w-4xl w-full text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={staggerContainer}>
                    <motion.div variants={fadeInUp} className="mb-8 inline-block p-4 rounded-full bg-white/10 backdrop-blur-md">
                        <Mail size={48} className="text-white" />
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">{content.contact.title}</motion.h2>
                    <motion.p variants={fadeInUp} className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">{content.contact.subtitle}</motion.p>
                    
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a href={`mailto:${content.contact.email}`} className="px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl shadow-primary/20 w-full md:w-auto">
                            Send Me an Email
                        </a>
                         <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all w-full md:w-auto">
                            Download Resume
                        </button>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="mt-20 flex justify-center gap-8">
                        {['LinkedIn', 'GitHub', 'Behance', 'Dribbble'].map(social => (
                            <a key={social} href="#" className="text-slate-400 hover:text-white font-medium transition-colors">{social}</a>
                        ))}
                    </motion.div>
                </motion.div>
             </div>
        </section>
    );
};

const PortfolioApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize
    lastScrollTop.current = container.scrollTop;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;
      
      // Determine direction
      if (currentScrollTop > lastScrollTop.current) {
        scrollDirection.current = 'down';
      } else if (currentScrollTop < lastScrollTop.current) {
        scrollDirection.current = 'up';
      }
      lastScrollTop.current = currentScrollTop;

      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        // Requirements:
        // 1. Scrolling UP: "Stop there" (No auto-snap).
        // 2. Scrolling DOWN: 
        //    - If ratio > 0.8: Snap forward to 100%.
        //    - If ratio <= 0.8: "Stop there" (Do nothing, previously it snapped back).
        
        if (scrollDirection.current === 'up') {
            return; 
        }

        const h = window.innerHeight;
        const index = Math.floor(currentScrollTop / h);
        const remainder = currentScrollTop % h;
        const ratio = remainder / h;
        
        // 80% threshold Logic for Scrolling Down
        let targetScroll = currentScrollTop;
        
        if (ratio > 0.8) {
             // More than 80% visible -> Complete the scroll to next section
             targetScroll = (index + 1) * h;
        } 
        // REMOVED: else if (ratio > 0) { ... snap back ... } 
        // This removal allows the scroll to stop exactly where the user stops if threshold isn't met.
        
        // Only snap if we are significantly away from the target to avoid stutter
        if (targetScroll !== currentScrollTop && Math.abs(currentScrollTop - targetScroll) > 5) {
            container.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }
      }, 100); // Debounce delay
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full overflow-y-auto overflow-x-hidden relative bg-dark text-white">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <AllWorkSection />
      <ContactSection />
      <div className="sticky top-0 h-screen z-50 pointer-events-none flex flex-col justify-end">
          <div className="pointer-events-auto w-full">
            <Footer />
          </div>
      </div>
      <AdminPanel />
    </div>
  );
};

export default function App() {
  return (
    <ContentProvider>
      <PortfolioApp />
    </ContentProvider>
  );
}