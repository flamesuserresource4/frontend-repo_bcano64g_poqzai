import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Contact & Lead Capture</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Ready to chat about roles, collaborations, or research? Send a message and I’ll reply promptly.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <form onSubmit={onSubmit} className="rounded-xl border bg-card p-6 shadow-sm md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary"
              placeholder="Briefly describe what you’re looking for"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
          >
            <Mail size={16} /> Send Message
          </button>
        </form>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Elsewhere</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                <Github size={16} /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
          </ul>

          <div className="mt-6 rounded-lg bg-muted p-4 text-xs text-muted-foreground">
            Tip: I reply fastest to concise messages with role, timeline, and links.
          </div>
        </div>
      </div>
    </section>
  );
}
