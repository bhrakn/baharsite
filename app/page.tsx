import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <header className="max-w-5xl mx-auto mb-16 pt-8">
        <nav className="flex justify-between items-center p-4 border-4 border-foreground bg-accent">
          <h1 className="text-2xl font-black">ARDANIN PEZEVENGİ</h1>
          <div className="space-x-6">
            <Link href="/about" className="font-bold hover:underline underline-offset-4">About</Link>
            <a href="#projects" className="font-bold hover:underline underline-offset-4">Projects</a>
            <a href="#contact" className="font-bold hover:underline underline-offset-4">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <h2 className="text-7xl font-black animate-[wiggle_4s_ease-in-out_infinite]">
            ARDANIN PEZEVENGİ
          </h2>
          <p className="text-2xl font-bold max-w-2xl mx-auto animate-[float_6s_ease-in-out_infinite]">
            A CHAOTIC DEVELOPER WHO BREAKS THE RULES
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <h3 className="text-4xl font-black">CRAZY PROJECTS</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((project) => (
              <div 
                key={project}
                className="neobrutalist-card p-8 space-y-4"
              >
                <h4 className="text-2xl font-black">PROJECT {project}</h4>
                <p className="font-bold">
                  Something awesome that will blow your mind!
                </p>
                <a 
                  href="#" 
                  className="neobrutalist-button inline-block px-6 py-3 bg-accent"
                >
                  VIEW PROJECT →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-12">
          <h3 className="text-4xl font-black">GET IN TOUCH</h3>
          <div className="flex gap-8 justify-center">
            <a 
              href="mailto:your.email@example.com" 
              className="neobrutalist-button px-8 py-4 bg-accent"
            >
              EMAIL ME
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neobrutalist-button px-8 py-4 bg-background"
            >
              LINKEDIN
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-32 py-8 text-center font-bold">
        <p>© {new Date().getFullYear()} ARDANIN PEZEVENGİ. NO RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
