import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/" 
          className="neobrutalist-button inline-block px-6 py-3 mb-16 bg-accent"
        >
          ← BACK HOME
        </Link>
        
        <section className="space-y-12">
          <h1 className="text-6xl font-black">ABOUT THE CHAOS</h1>
          
          <div className="space-y-8">
            <p className="text-xl font-bold leading-relaxed">
              I'm ARDANIN PEZEVENGİ, a developer who believes in breaking the conventional 
              rules of web design. I create websites that are bold, loud, and impossible to ignore.
            </p>
            
            <p className="text-xl font-bold leading-relaxed">
              When I'm not smashing keyboards and breaking builds, you can find me exploring 
              the depths of weird tech and contributing to chaos in open source.
            </p>
          </div>

          <div className="neobrutalist-card p-12 mt-16">
            <h2 className="text-3xl font-black mb-8">WEAPONS OF CHOICE</h2>
            <div className="flex flex-wrap gap-4">
              {[
                'JavaScript',
                'React',
                'Next.js',
                'TypeScript',
                'CSS',
                'HTML',
                'Node.js'
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-6 py-3 bg-accent border-2 border-foreground font-bold
                  hover:rotate-2 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 