import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Briefcase, GraduationCap, Download } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-foreground mb-2">Resume</h1>
            <p className="text-muted-foreground text-lg">Professional experience & education</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:bg-white/10 transition-colors self-start sm:self-auto"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>

        {/* Profile card */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <img
              src="/.netlify/images?url=/headshot-on-white.jpg&w=160&h=160&fit=cover&q=85"
              alt="Alex Morgan"
              className="w-20 h-20 rounded-2xl object-cover border border-border/60 flex-shrink-0"
            />
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Alex Morgan</h2>
              <p className="text-primary text-sm font-medium mb-3">Full-Stack Developer & Creative Technologist</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                Passionate developer with 5+ years building performant web applications.
                I bridge the gap between engineering excellence and thoughtful design to create
                products people genuinely enjoy using.
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-10 bg-border/40" />

        {/* Work Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={20} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {allJobs.map((job) => (
              <div
                key={job.jobTitle}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{job.jobTitle}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="self-start bg-primary/10 text-primary border-primary/20 whitespace-nowrap">
                    {job.startDate} — {job.endDate || 'Present'}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{job.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {job.content && (
                  <div
                    className="mt-5 prose prose-invert prose-sm max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-10 bg-border/40" />

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={20} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <div
                key={education.school}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">{education.school}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{education.summary}</p>
                {education.content && (
                  <div
                    className="mt-4 prose prose-invert prose-sm max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
