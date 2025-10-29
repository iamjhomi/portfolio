import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700">
              <Image 
                src="/1.jpg" 
                alt="Profile" 
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">J</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Homethagan</span>, network
            <br />
            engineer based in Sri Lanka.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-400 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
            I am a network engineer from Sri Lanka with expertise in network infrastructure,
            security, and system administration.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-500 ease-in-out"
            >
              Connect with me
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-4 rounded-full border-2 border-white dark:border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-500"
            >
              My resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-12 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-md rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image 
                src="/2.jpg" 
                alt="Profile" 
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Description & Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-zinc-300 leading-relaxed">
                I am an experienced Network Engineer with over a decade of professional expertise in the
                field. Throughout my career, I have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                My passion for network engineering is not only reflected in my extensive experience but also in
                the enthusiasm and dedication I bring to each project.
              </p>
            </div>

            {/* Skills with Progress Bars */}
            <div className="space-y-6 pt-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">Switching</span>
                </div>
                <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-purple-500/50" 
                    style={{width: '85%'}}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">Routing</span>
                </div>
                <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-pink-500/50" 
                    style={{width: '90%'}}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">GNS3</span>
                </div>
                <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-purple-500/50" 
                    style={{width: '80%'}}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">Azure & AWS</span>
                </div>
                <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-orange-500/50" 
                    style={{width: '75%'}}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">Firewall</span>
                </div>
                <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-purple-500/50" 
                    style={{width: '88%'}}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">VPN</span>
                </div>
                <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-pink-500/50" 
                    style={{width: '82%'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-16 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="group relative p-8 rounded-3xl border-2 border-white/20 bg-black hover:bg-gradient-to-br hover:from-purple-900/50 hover:via-pink-900/50 hover:to-orange-900/50 hover:border-purple-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white/70">01</p>
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Network</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Security</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Comprehensive network security solutions including firewall configuration, intrusion detection, and security audits...
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors duration-500">
                Read More 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group relative p-8 rounded-3xl border-2 border-white/20 bg-black hover:bg-gradient-to-br hover:from-purple-900/50 hover:via-pink-900/50 hover:to-orange-900/50 hover:border-purple-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white/70">02</p>
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Cloud</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Solutions</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Cloud infrastructure setup and management on Azure and AWS platforms with automated deployment...
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors duration-500">
                Read More 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group relative p-8 rounded-3xl border-2 border-white/20 bg-black hover:bg-gradient-to-br hover:from-purple-900/50 hover:via-pink-900/50 hover:to-orange-900/50 hover:border-purple-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white/70">03</p>
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Network</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Design</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Custom network architecture design and implementation using GNS3 for simulation and testing...
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors duration-500">
                Read More 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="group relative p-8 rounded-3xl border-2 border-white/20 bg-black hover:bg-gradient-to-br hover:from-purple-900/50 hover:via-pink-900/50 hover:to-orange-900/50 hover:border-purple-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white/70">04</p>
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Routing &</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Switching</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Advanced routing protocols configuration and switching infrastructure setup for enterprise networks...
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors duration-500">
                Read More 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="group relative p-8 rounded-3xl border-2 border-white/20 bg-black hover:bg-gradient-to-br hover:from-purple-900/50 hover:via-pink-900/50 hover:to-orange-900/50 hover:border-purple-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white/70">05</p>
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Network</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Monitoring</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Real-time network monitoring and performance analysis with automated alerting systems...
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors duration-500">
                Read More 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="group relative p-8 rounded-3xl border-2 border-white/20 bg-black hover:bg-gradient-to-br hover:from-purple-900/50 hover:via-pink-900/50 hover:to-orange-900/50 hover:border-purple-500 hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white/70">06</p>
              <h3 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">IT</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Consulting</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Expert IT consulting services for network infrastructure optimization and digital transformation...
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors duration-500">
                Read More 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      

      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Let&apos;s</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">talk</span>
            </h3>

            <p className="text-zinc-300 leading-relaxed max-w-md">
              I&apos;m currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work
              on. You can contact anytime.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:homethagan@gmail.com" className="text-white hover:text-purple-400 transition-colors duration-500">
                  homethagan@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+94-123-456-789" className="text-white hover:text-purple-400 transition-colors duration-500">
                  +94-123-456-789
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white">Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 rounded-lg bg-[#2d2d3a] text-white placeholder-zinc-500 border border-transparent focus:border-purple-500 focus:outline-none transition-colors duration-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-lg bg-[#2d2d3a] text-white placeholder-zinc-500 border border-transparent focus:border-purple-500 focus:outline-none transition-colors duration-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Write your message here
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full px-6 py-4 rounded-lg bg-[#2d2d3a] text-white placeholder-zinc-500 border border-transparent focus:border-purple-500 focus:outline-none resize-none transition-colors duration-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                Submit now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
