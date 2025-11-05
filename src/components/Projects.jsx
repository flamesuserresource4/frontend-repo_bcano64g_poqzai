import React, { useMemo, useState } from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: 'Autonomous Line-Following Bot',
    desc: 'Embedded control + PID, custom PCB, ROS2 bridge for telemetry.',
    tags: ['Electronics'],
    link: '#',
  },
  {
    title: 'ROS2 Perception Pipeline',
    desc: 'Object detection and tracking with custom nodes, rviz visualization.',
    tags: ['ROS2/ML'],
    link: '#',
  },
  {
    title: 'Portfolio Platform (this site)',
    desc: 'React + Tailwind + 3D Spline hero, contact lead capture.',
    tags: ['Web'],
    link: '#',
  },
  {
    title: 'Differential Drive SLAM',
    desc: 'Mapping and localization with Lidar, ROS2 Nav2 integration.',
    tags: ['ROS2/ML'],
    link: '#',
  },
  {
    title: 'IoT Sensor Hub',
    desc: 'ESP32-based telemetry gateway with local buffering and cloud relay.',
    tags: ['Electronics'],
    link: '#',
  },
];

const categories = ['All', 'Electronics', 'ROS2/ML', 'Web'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return allProjects;
    return allProjects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Browse by category to quickly assess relevant work in electronics, ROS2/ML, and the web.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-3 py-1 text-sm font-medium transition ${
                active === c ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                <FolderGit2 size={14} /> {p.tags[0]}
              </div>
              <a
                href={p.link}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                View <ExternalLink size={12} />
              </a>
            </div>
            <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
