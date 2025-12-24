/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import { Download } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiTailwindcss,
  SiPrisma,
  SiJest,
  SiCypress,
  SiFigma,
  SiGit,
  SiGithubactions,
} from "react-icons/si";

import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Button from "../components/Button";
import { ChevronDown } from "lucide-react";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAmazon },
  { name: "Vercel", icon: SiVercel },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Prisma", icon: SiPrisma },
  { name: "Jest", icon: SiJest },
  { name: "Cypress", icon: SiCypress },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "GitHub Actions", icon: SiGithubactions },
];
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • NextJS React Specialist
              </span>

              {/* <span className="inline-flex  items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • NextJS React Specialist
              </span> */}
            </div>
          </div>
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Crafting <span className="text-primary glow-text">digital</span>
              <br />
              experiences with
              <br />
              <span className="font-serif italic font-normal text-white">
                precision.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm Ram Suryawanshi — a software engineer specializing in
              React, Next.js, and TypeScript. I build scalable, performant web
              applications that users love.
            </p>
          </div>
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
            <AnimatedBorderButton>
              <Download className="w-5 h-5" />
              Download CV
            </AnimatedBorderButton>
          </div>
          {/* {SOCIAL LINKS} */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me :</span>

            {[
              { icon: Github, href: "https://github.com/Suryawanshiram" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ram-suryawanshi-4a642815b/",
              },
              { icon: Twitter, href: "https://twitter.com/Ram_Suryawanshi" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        {/* Right Column - Profile Image */}
        <div className="relative animate-fade-in animation-delay-300">
          {/* Profile Image */}
          <div className="relative max-w-md mx-auto">
            <div
              className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
            />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src="/profile-photo.jpg"
                alt="Ram Suryawanshi"
                className="w-full aspect-4/5 object-cover rounded-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">3.2+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map(({ name, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-8 py-4 shrink-0"
                >
                  <Icon className="w-6 h-6 text-muted-foreground/50" />
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
