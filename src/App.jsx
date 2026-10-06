import React from 'react';

// Bulletproof Embedded Icons
const GithubIcon = () => (
  <svg xmlns="https://github.com/MulaloNenguda" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="www.linkedin.com/in/mulalo-nenguda-1bb297430" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const MailIcon = () => (
  <svg xmlns="thomasmletsoalo@gmail.com" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

// --- RADESKI-STYLE DATA STRUCTURE ---
const PROFILE = {
  firstName: "Mulalo",
  lastName: "Nenguda",
  role: "Data Practitioner",
  location: "Centurion, Gauteng",
  bio: "I bridge analytical thinking with technical execution. Turning complex data and software concepts into efficient, real world solutions.",
};

const SERVICES = [
  {
    num: "01.",
    tag: "Core Foundation",
    title: "Software Engineering",
    desc: "I build robust systems from the ground up, focusing on efficiency, file I/O operations, and complex class structures.",
    tools: ["Python", "C++", "Algorithms", "Visual Studio", "Cross-platform sync"]
  },
  {
    num: "02.",
    tag: "Certified Expert",
    title: "AI & Data Solutions",
    desc: "I implement data analysis and AI-driven workflows to turn raw information into actionable, structured insights.",
    tools: ["SQL", "AWS Certified AI Practitioner", "Foundational Data Science", "Data Modeling"]
  },
  {
    num: "03.",
    tag: "Go-to-market",
    title: "Web & SaaS Development",
    desc: "I develop tailored micro-SaaS platforms and web interfaces designed to streamline operations and client acquisition.",
    tools: ["HTML", "React", "CSS", "JavaScript", "B2B Strategy"]
  }
];

const PROJECTS = [
  {
    title: "NeoVerse AI City",
    category: "C++ Simulation System",
    desc: "A comprehensive survival simulation managing dynamic city events through custom file handlers (engineers.dat, events.dat) and strict Big-O efficiency analysis."
  },
  {
    title: "B2B Micro-SaaS",
    category: "Web Platform",
    desc: "A tailored software solution currently in development, targeted at streamlining operations for local wholesalers and distributors."
  },
  {
    title: "Veliq Web Project",
    category: "Frontend Engineering",
    desc: "Modern web development project demonstrating practical UI/UX implementation and responsive component architecture."
  }
];

// --- THE WEBSITE LAYOUT ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-white selection:text-black">
      
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-6 md:px-12 border-b border-white/10 uppercase text-xs tracking-widest font-medium">
        <span>{PROFILE.firstName}</span>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
          <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="px-6 md:px-12 pt-24 pb-32 border-b border-white/10">
        <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest mb-6">
          {PROFILE.role} • Based in {PROFILE.location}
        </p>
        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-12 uppercase">
          {PROFILE.firstName} <br />
          <span className="text-gray-500">{PROFILE.lastName}</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-xl md:text-3xl font-light leading-snug">
            {PROFILE.bio}
          </p>
          <div className="flex flex-col justify-end items-start md:items-end gap-6">
            <div className="flex gap-4">
              <a href="#" className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"><GithubIcon /></a>
              <a href="#" className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"><LinkedinIcon /></a>
              <a href="#" className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"><MailIcon /></a>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section id="services" className="px-6 md:px-12 py-32 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4 md:mb-0">/ Services, Skills, Abilities</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl">
            What I do best?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="border border-white/10 p-8 hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-16">
                <span className="text-xs font-medium uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                  {service.tag}
                </span>
                <span className="text-gray-500 text-xl font-light">{service.num}</span>
              </div>
              <h4 className="text-3xl font-bold tracking-tight mb-4">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed mb-8 h-24">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, i) => (
                  <span key={i} className="text-sm text-gray-300 border border-white/10 px-3 py-1">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section id="work" className="px-6 md:px-12 py-32 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4 md:mb-0">/ Portfolio Projects</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl">
            Selected Work Samples
          </h3>
        </div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group border border-white/10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white transition-colors cursor-pointer">
              <div className="max-w-2xl">
                <span className="text-gray-500 text-sm uppercase tracking-widest mb-4 block group-hover:text-gray-400 transition-colors">
                  {project.category}
                </span>
                <h4 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 group-hover:text-black transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 font-light text-lg leading-relaxed group-hover:text-gray-600 transition-colors">
                  {project.desc}
                </p>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="px-6 md:px-12 py-12 flex justify-between items-center text-sm text-gray-500 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} {PROFILE.firstName}</span>
        <span>Built with React</span>
      </footer>

    </div>
  );
}