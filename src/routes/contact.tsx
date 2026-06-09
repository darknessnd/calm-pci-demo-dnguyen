import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, Github, Linkedin, Twitter, MessageSquare, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@alexmorgan',
    href: 'https://github.com',
    color: 'hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Alex Morgan',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@alexmorgan_dev',
    href: 'https://twitter.com',
    color: 'hover:text-sky-400',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'alex@example.com',
    href: 'mailto:alex@example.com',
    color: 'hover:text-primary',
  },
]

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare size={24} className="text-primary" />
            <h1 className="text-4xl lg:text-5xl font-black text-foreground">Get In Touch</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-lg">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-border/60 bg-card">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
                <p className="text-muted-foreground mb-8 max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFields({ name: '', email: '', subject: '', message: '' }) }}
                  className="px-6 py-2 rounded-xl border border-border bg-white/5 text-foreground hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 disabled:opacity-60"
                >
                  {loading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl border border-border/60 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">Let's Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                I'm most responsive on LinkedIn and email. Response time is typically within 24 hours.
              </p>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-xl border border-border/40 bg-white/[0.02] hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-200 group text-muted-foreground ${color}`}
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Open to freelance projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Available for consulting</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Full-time: limited availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
