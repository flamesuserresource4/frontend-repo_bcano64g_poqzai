import React from 'react';

const skills = [
  { name: 'Python', value: 85 },
  { name: 'ROS2', value: 80 },
  { name: 'C/C++', value: 75 },
  { name: 'Electronics/Embedded', value: 82 },
  { name: 'Web (React/Node)', value: 78 },
  { name: 'ML/Perception', value: 70 },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About, Education & Skills</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            I design and ship robotics and intelligent systems end-to-end: from embedded electronics to ROS2 stacks
            and perception, plus the web tooling that ties it all together.
          </p>
        </div>
        <a
          href="#projects"
          className="hidden rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground md:inline"
        >
          View Projects
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Education</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start justify-between">
              <div>
                <p className="font-medium">B.Tech, Robotics & Automation</p>
                <p className="text-muted-foreground">Coursework: Control, Perception, Embedded, ML</p>
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">2021–2025</span>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <p className="font-medium">Internships & Labs</p>
                <p className="text-muted-foreground">Applied robotics, electronics, and software</p>
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">Ongoing</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Skills (metric dashboard)</h3>
          <ul className="space-y-4">
            {skills.map((s) => (
              <li key={s.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
