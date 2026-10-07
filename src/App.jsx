import React from 'react';



// ICONS

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.03V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);



// DATA STRUCTURE

const PROFILE = {
  firstName: "MULALO",
  lastName: "NENGUDA",
  role: "Junior Data Analyst",

  bio: "I am an early Information Technology professional specializing in turning raw data into meaningful insights and building efficient, data driven systems. My work bridges software development, database architecture, and modern cloud and AI platforms, with a constant focus on solving real world challenges through practical problem solving. Whether I am analyzing structured datasets, designing robust database solutions, or developing scalable applications, my goal is to build intelligent, high impact technical solutions across data and software.",

  phone: "+27 538 6667",
  email: "thomasmletsoalo@gmail.com",
  address: "Centurion, Gauteng, South Africa"
};


const SERVICES = [
  {
    num: "01.",
    tag: "CORE FOUNDATION",
    title: "Software Engineering",
    desc: "I build robust systems from the ground up, focusing on efficiency, file I/O operations, and complex class structures.",
    tools: [
      "Python",
      "C++",
      "Algorithms",
      "Visual Studio",
      "Cross-platform sync"
    ]
  },

  {
    num: "02.",
    tag: "CERTIFIED EXPERT",
    title: "AI & Data Solutions",
    desc: "I implement data analysis and AI-driven workflows to turn raw information into actionable, structured insights.",
    tools: [
      "SQL",
      "AWS Certified AI Practitioner",
      "Foundational Data Science",
      "Data Modeling"
    ]
  },

  {
    num: "03.",
    tag: "GO-TO-MARKET",
    title: "Web & SaaS Development",
    desc: "I develop tailored micro-SaaS platforms and web interfaces designed to streamline operations and client acquisition.",
    tools: [
      "HTML",
      "React",
      "CSS",
      "JavaScript",
      "B2B Strategy"
    ]
  }
];


const PROJECTS = [
  {
    title: "NEOVERSE AI",
    desc: "A comprehensive survival simulation managing dynamic city events through custom file handlers and strict Big-O efficiency analysis.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
  },

  {
    title: "B2B MICRO-SAAS",
    desc: "A tailored software solution currently in development, targeted at streamlining operations for local wholesalers and distributors.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },

  {
    title: "VELIQ WEB",
    desc: "Modern web development project demonstrating practical UI/UX implementation and responsive component architecture.",
    image: "https://scontent-jnb2-1.cdninstagram.com/v/t51.82787-19/700723491_18064500956414997_8730517733536086424_n.jpg?_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44MjQuQzMifQ%3D%3D&_nc_ohc=EZ8fmr-bxI0Q7kNvwHsTnbQ&_nc_oc=Adrp_3zQ5l_75xrqGhvV0-JAkUuevrikIRHgyO0YI5GPoBjO0zeUnJOj5-7Y7XAlVbA&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=y5y490gjQi_pAi3AgpZEkA&_nc_ss=78aaf&oh=00_AQNUe6OMiao-nHs8XGY8_M5ks-SuomSolC-GXCV7PRYI7w&oe=6ACB4960"
  }
];

// WEBSITE LAYOUT

export default function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert("Error sending message."));
  };

  return (
    <div className="bg-[#111] text-[#f5f5f5] font-sans selection:bg-white selection:text-black">

      {/* NAVIGATION BAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#111]/90 backdrop-blur-md px-6 md:px-12 py-6 flex justify-between items-center uppercase text-xs tracking-widest font-bold">

        <div className="flex gap-8">
          <a
            href="#home"
            className="hover:text-gray-400 transition-colors"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-gray-400 transition-colors"
          >
            About
          </a>

          <a
            href="#resume"
            className="hover:text-gray-400 transition-colors"
          >
            Resume
          </a>

          <a
            href="#portfolio"
            className="hover:text-gray-400 transition-colors"
          >
            Portfolio
          </a>
        </div>

        <div>
          <a
            href="#contact"
            className="hover:text-gray-400 transition-colors"
          >
            Contact
          </a>
        </div>

      </nav>


      {/* HOME */}

      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(17,17,17,1) 10%, rgba(17,17,17,0.3) 100%), url("https://images.pexels.com/photos/6279111/pexels-photo-6279111.jpeg")',

          backgroundSize: "cover",

          backgroundPosition: "center"
        }}
      >

        <div className="max-w-4xl">

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-none mb-6 uppercase">
            {PROFILE.firstName}
            <br />
            {PROFILE.lastName}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-widest uppercase mb-12">
            {PROFILE.role}
          </p>


          {/* Social Links */}

          <div className="flex gap-4">

            <a
              href="https://github.com/MulaloNenguda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-sm"
            >
              <GithubIcon />
            </a>


            <a
              href="https://www.linkedin.com/in/mulalo-nenguda-1bb297430"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-sm"
            >
              <LinkedinIcon />
            </a>


            <a
              href="https://www.instagram.com/officialveliq/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-sm"
            >
              <InstagramIcon />
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="px-6 md:px-12 py-32 bg-[#111] flex flex-col items-center text-center"
      >

        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12">
          / About Me
        </h2>

        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-400 max-w-3xl">
          {PROFILE.bio}
        </p>

      </section>


      {/* SERVICES & SKILLS */}

      <section
        id="services"
        className="px-6 md:px-12 py-32 bg-[#111] border-b border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          {/* Services Heading */}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">

            <h2 className="text-sm uppercase tracking-widest text-gray-500">
              / SERVICES, SKILLS, ABILITIES
            </h2>

            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              What I do best?
            </h3>

          </div>


          {/* Service Cards Grid */}

          <div className="grid md:grid-cols-3 gap-8">

            {SERVICES.map((service, index) => (

              <div
                key={index}
                className="bg-[#151515] border border-white/10 p-8 flex flex-col justify-between rounded-lg hover:border-gray-500 transition-colors"
              >

                <div>

                  {/* Tag & Number Header */}

                  <div className="flex justify-between items-center mb-10">

                    <span className="text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 text-gray-300 rounded">
                      {service.tag}
                    </span>

                    <span className="text-gray-600 text-sm font-mono">
                      {service.num}
                    </span>

                  </div>


                  {/* Service Title */}

                  <h4 className="text-2xl font-bold tracking-tight mb-4 text-white">
                    {service.title}
                  </h4>


                  {/* Service Description */}

                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>

                </div>


                {/* Tools / Skills */}

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">

                  {service.tools.map((tool, tIndex) => (

                    <span
                      key={tIndex}
                      className="text-xs bg-[#0f0f0f] text-gray-300 border border-white/10 px-3 py-1.5 rounded"
                    >
                      {tool}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* RESUME */}

      <section
        id="resume"
        className="px-6 md:px-12 py-32 bg-[#161616]"
      >

        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12 text-center">
          / Interactive Resume
        </h2>


        <div className="w-full max-w-5xl mx-auto h-[800px] border border-white/10 bg-black overflow-hidden flex items-center justify-center shadow-2xl">

          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Resume PDF"
          >
            <p className="text-gray-500">
              Your browser does not support PDFs. Please download the PDF to view it.
            </p>
          </iframe>

        </div>

      </section>


      {/* PORTFOLIO */}

      <section
        id="portfolio"
        className="px-6 md:px-12 py-32 bg-[#111]"
      >

        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-20 text-center">
          / Projects
        </h2>


        {/* Project Grid */}

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">

          {PROJECTS.map((project, index) => (

            <div
              key={index}
              className="flex flex-col text-center group h-full"
            >

              {/* Project Image */}

              <div className="w-full aspect-video bg-gray-900 mb-10 overflow-hidden border border-white/5 relative">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

              </div>


              {/* Project Title */}

              <h4 className="text-3xl font-bold tracking-widest uppercase mb-6">
                {project.title}
              </h4>


              {/* Project Description */}

              <p className="text-gray-500 text-sm mb-10 max-w-xs mx-auto font-light leading-relaxed">
                {project.desc}
              </p>


              {/* View Project Button */}

              <button
                className="mt-auto self-center text-xs font-bold uppercase tracking-widest border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-colors"
              >
                View Project
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="px-6 md:px-12 py-32 bg-[#161616]"
      >

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">

          {/* Contact Info */}

          <div className="flex flex-col justify-center">

            <h3 className="text-3xl font-bold tracking-widest mb-10 uppercase">
              Contact
            </h3>

            <p className="text-gray-400 font-light leading-relaxed mb-12 max-w-sm">
              Available for freelance opportunities, data analysis roles, and B2B software collaborations. Reach out to discuss your next project.
            </p>


            <div className="space-y-8 text-sm tracking-widest uppercase">

              <div>

                <p className="text-white font-bold mb-2">
                  Address
                </p>

                <p className="text-gray-500">
                  {PROFILE.address}
                </p>

              </div>


              <div>

                <p className="text-white font-bold mb-2">
                  Phone
                </p>

                <p className="text-gray-500">
                  {PROFILE.phone}
                </p>

              </div>


              <div>

                <p className="text-white font-bold mb-2">
                  E-mail
                </p>

                <p className="text-gray-500">
                  {PROFILE.email}
                </p>

              </div>

            </div>

          </div>


          {/* Netlify Form */}

          <div className="bg-[#111] p-12 border border-white/5 shadow-2xl">

            <h3 className="text-xl font-bold tracking-widest mb-12 uppercase text-center">
              Contact Form
            </h3>


            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-10"
            >

              <input
                type="hidden"
                name="form-name"
                value="contact"
              />


              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="bg-transparent border-b border-gray-800 pb-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors"
              />


              <input
                type="tel"
                name="phone"
                placeholder="Your phone"
                className="bg-transparent border-b border-gray-800 pb-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors"
              />


              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                required
                className="bg-transparent border-b border-gray-800 pb-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors"
              />


              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                required
                className="bg-transparent border-b border-gray-800 pb-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
              ></textarea>


              <button
                type="submit"
                className="self-center px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-300 transition-colors mt-4"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}