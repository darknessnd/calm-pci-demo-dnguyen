import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Layers, Sparkles, Globe, Github, Linkedin, Twitter } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: About,
})

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'TanStack', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'Netlify', 'Vite'] },
  { category: 'Design', items: ['UI/UX', 'Motion Design', 'Design Systems', 'Accessibility', 'Typography'] },
]

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-36">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <Sparkles size={14} />
                Available for new projects
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none">
                  <span className="block text-foreground">Hi, I'm</span>
                  <span className="block gradient-text">Alex Morgan</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-xl leading-relaxed">
                  Full-stack developer & creative technologist. I build{' '}
                  <span className="text-foreground font-medium">beautiful</span>,{' '}
                  <span className="text-foreground font-medium">performant</span> web experiences
                  that people love to use.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200"
                >
                  View My Work
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-white/5 text-foreground font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
                <img
                  src="/.netlify/images?url=/headshot-on-white.jpg&w=400&h=400&fit=cover&q=85"
                  alt="Alex Morgan"
                  className="relative w-full h-full rounded-3xl object-cover border border-border/50"
                />
              </div>
              <div className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl bg-card border border-border/60 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-2 text-sm">
                  <Code2 size={16} className="text-primary" />
                  <span className="font-semibold text-foreground">5+ Years</span>
                  <span className="text-muted-foreground">experience</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-6 px-4 py-2 rounded-xl bg-card border border-border/60 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-2 text-sm">
                  <Globe size={16} className="text-accent" />
                  <span className="font-semibold text-foreground">30+</span>
                  <span className="text-muted-foreground">projects shipped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I'm a full-stack developer based in San Francisco with a passion for crafting digital
                experiences that sit at the intersection of engineering excellence and visual design.
                My work spans from performant React applications to scalable backend systems.
              </p>
              <p>
                When I'm not writing code, I'm behind a camera capturing urban landscapes, or exploring
                the latest developments in AI and creative technology. I believe the best products come
                from deeply understanding both the technical constraints and human needs.
              </p>
              <p>
                I've worked with startups and Fortune 500 companies alike, bringing the same level of
                care and craft to every project. Let's build something remarkable together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-12">
            <Layers size={24} className="text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-colors duration-300"
              >
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to work together?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            I'm always open to exciting new projects and collaborations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 text-lg"
          >
            Let's Talk
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
