import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { User, FolderKanban, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <User className="h-5 w-5" /> Sai — Portfolio as a Service
          </a>
          <nav className="hidden items-center gap-1 sm:flex">
            <a href="#about" className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">About</a>
            <a href="#projects" className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">Projects</a>
            <a href="#contact" className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sai. Built for clarity and fast evaluation.</p>
          <p className="inline-flex items-center gap-1">
            <FolderKanban className="h-4 w-4" /> Explore projects above
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
