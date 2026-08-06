"use client";

import { useEffect } from "react";
import { stats, experience, projects, skillGroups, education } from "./data";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="grid-bg" />

      <header>
        <nav>
          <div className="logo">
            <span className="logo-mark">TE</span>
          </div>
          <div className="nav-links">
            <a href="#experience" data-idx="01/">
              Experience
            </a>
            <a href="#projects" data-idx="02/">
              Projects
            </a>
            <a href="#skills" data-idx="03/">
              Tech Stacks
            </a>
            <a href="#education" data-idx="04/">
              Education
            </a>
          </div>
          <a href="#contact" className="connect-btn">
            <span className="connect-dot" />
            Connect
          </a>
        </nav>
      </header>

      <div className="wrap">
        {/* HERO */}
        <section id="home">
          <div className="name-row">
            <div className="avatar-circle">
              <Image
                src="/profile.png"
                alt="Tony Evans Adisurya"
                fill
                sizes="80px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <h1 className="name">Tony Evans Adisurya</h1>
          </div>
          <div className="eyebrow mono">OPEN TO OPPORTUNITIES</div>
          <div className="hero-grid">
            <div>
              
              <p className="role-line">
                <b>Fresh Computer Science Graduate {" "}</b>from <b>Nanyang Technological University</b>{" "} with expertise in{" "}
                <b>Digital Assets</b> and <b>Web3</b>.
              </p>
              <div className="hash-row mono">
                <span>
                  <b>loc:</b> Singapore
                </span>
                <span>
                  <b>addr:</b> tonyevans495@gmail.com
                </span>
                <span>
                  <b>tel:</b> +65 9724 0032
                </span>
              </div>
              <div className="hero-ctas">
                <a href="#experience" className="btn-primary">
                  View Profile →
                </a>
                <a
                  href="https://www.linkedin.com/in/tonyevansadisurya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="section-head reveal">
            <div className="section-tag">
              <span className="num">01/</span>
            </div>
            <h2 className="section-title">Professional Experience</h2>
          </div>

          <div className="ledger">
            {experience.map((block) => (
              <div className="block reveal" key={block.height}>
                <div className="block-node" />
                <div className="block-card">
                  <div className="block-meta">
                    {/* <span className="height">{block.height}</span> */}
                    <span>{block.dateRange}</span>
                  </div>
                  <div className="block-title-row">
                    <span className="block-title">{block.title}</span>
                  </div>
                  <div className="block-company">
                    <b>{block.company}</b> · {block.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="section-head reveal">
            <div className="section-tag">
              <span className="num">02/</span>
            </div>
            <h2 className="section-title">Relevant Projects</h2>
            <p className="section-sub">
              Independent builds spanning Solidity, full-stack apps, and on-chain data
              infrastructure.
            </p>
          </div>

          <div className="contracts-grid">
            {projects.map((project) => (
              <div className="contract-card reveal" key={project.name}>
                <div className="contract-head">
                  {/* <span className="kw">{project.kind}</span> */}
                  <span className="fn">{project.name}</span> {}
                </div>
                <div className="contract-body">
                  <p className="contract-desc">{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="section-head reveal">
            <div className="section-tag">
              <span className="num">03/</span>
            </div>
            <h2 className="section-title">Technology Stacks</h2>
          </div>

          <div className="stack-grid">
            {skillGroups.map((group) => (
              <div className="stack-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className={`chip${group.variant ? ` ${group.variant}` : ""}`} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="section-head reveal">
            <div className="section-tag">
              <span className="num">04/</span>
            </div>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="validators">
            {education.map((edu) => (
              <div className="validator-card reveal" key={edu.school}>
                <div className="validator-school">{edu.school}</div>
                <div className="validator-loc">{edu.location}</div>
                <div className="validator-deg">{edu.degree}</div>
                <div className="validator-time mono">{edu.timeRange}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="contact-panel reveal">
            <h2>Open to build together!</h2>
            <p>
              Open to product and technical roles in the blockchain, fintech, and Web3 space. Let's connect and explore opportunities to collaborate on innovative projects.
            </p>
            <div className="contact-links">
              <a href="mailto:tonyevans495@gmail.com" className="btn-primary">
                Email me →
              </a>
              <a
                href="https://www.linkedin.com/in/tonyevansadisurya/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn ↗
              </a>
              <a href="tel:+6597240032" className="btn-ghost">
                +65 9724 0032
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer>© 2026 Tony Evans Adisurya — Deployed with intent.</footer>
    </>
  );
}