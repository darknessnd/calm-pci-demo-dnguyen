import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Layers } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Layers size={24} className="text-primary" />
            <h1 className="text-4xl lg:text-5xl font-black text-foreground">Projects</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl">
            A curated selection of projects I've designed and built — from side experiments
            to production applications used by thousands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project) => (
            <div
              key={project._meta.path}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Project image placeholder with gradient */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                {project.image ? (
                  <img
                    src={`/.netlify/images?url=${encodeURIComponent(project.image)}&w=600&h=300&fit=cover&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-5xl font-black text-primary/20 select-none">
                    {project.title.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-border/40">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={15} />
                      Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <script src='././lib/thirdpartyscript.js'/>
  )
}
