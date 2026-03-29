import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TextReveal } from "@/components/animations/TextReveal";
import { MorphingBlob } from "@/components/animations/MorphingBlob";

const skillGroups = [
  {
    category: "Product & Delivery",
    items: ["Roadmapping", "Stakeholder alignment", "Agile delivery", "Change management", "PMO / CIO Office"],
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "Power BI", "Dashboarding", "KPI design", "Master Data Management"],
  },
  {
    category: "Transformation",
    items: ["Core banking", "IT master plan", "Process optimization", "IS urbanization", "Gap analysis"],
  },
  {
    category: "Technical Fluency",
    items: ["Python", "FastAPI", "Docker", "Scikit-learn", "Figma"],
  },
  {
    category: "Business Foundations",
    items: ["Financial management", "Budget planning", "Pre-sales", "Cost engineering", "Performance management"],
  },
];

const experience = [
  {
    role: "Global CIO Office",
    company: "CFG Bank",
    period: "Sep 2024 – Sep 2025",
    location: "Casablanca",
    description:
      "Established governance and budget steering for the bank's IT action plans (400M MAD). Contributed to the execution of the multi-year IT master plan across strategic committees.",
    tags: ["IT Governance", "CIO Office", "Budget Management"],
  },
  {
    role: "Senior IT & Finance Project Manager",
    company: "Vivalis",
    period: "Dec 2023 – Jun 2024",
    location: "Casablanca",
    description:
      "Prepared go-live readiness for a new core banking system through action planning, workshop facilitation, and a structured change management strategy.",
    tags: ["Core Banking", "Change Management", "Go-live Readiness"],
  },
  {
    role: "Senior Data Compliance Project Manager",
    company: "BMCI",
    period: "Oct 2022 – Nov 2023",
    location: "Casablanca",
    description:
      "Automated 10+ compliance dashboards for KYC, AML, sanctions, and advisory. Led weekly data governance committees and coordinated remediation plans.",
    tags: ["Dashboards", "KYC/AML", "Data Governance"],
  },
  {
    role: "Senior IT Project Manager",
    company: "L'Oreal",
    period: "Oct 2021 – Apr 2022",
    location: "Paris",
    description:
      "Shaped target data architectures with business lines and Anaplan CoE. Analysed RFPs for 5+ planning projects and improved audit reporting with 10 new KPIs.",
    tags: ["Data Architecture", "Anaplan", "RFP Analysis"],
  },
  {
    role: "Consultant Manager EPM/BI",
    company: "Viseo",
    period: "Jul 2020 – Aug 2021",
    location: "Paris",
    description:
      "Grew the Anaplan finance practice: signed 2 new clients, onboarded 3 junior consultants, and delivered 3 SaaS planning apps using an agile method.",
    tags: ["Anaplan", "Team Management", "SaaS Delivery"],
  },
  {
    role: "Senior EPM Consultant",
    company: "Smarthys Consulting",
    period: "Jan 2018 – May 2020",
    location: "Paris",
    description:
      "Delivered 5 Oracle PBCS planning apps, framed €3M in project economics, and grew the consulting offer's prospect pipeline by 25%.",
    tags: ["Oracle PBCS", "Cost Engineering", "Pre-sales"],
  },
  {
    role: "Junior EPM Consultant",
    company: "Jedox",
    period: "Jan 2016 – Dec 2017",
    location: "Paris",
    description:
      "Developed 5+ POCs for the French market, raised customer satisfaction from 80% to 90%, and produced training and user guides for deployed applications.",
    tags: ["Jedox", "POC Design", "Customer Training"],
  },
];

const quickStats = [
  { value: "9", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "5", label: "Industries" },
  { value: "3", label: "Countries" },
];

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28">
        <div className="max-w-4xl mx-auto">

          {/* ── Hero ── */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 mb-20">
            {/* Avatar with decorative elements */}
            <div className="relative flex-shrink-0 hero-animate" style={{ animationDelay: "0.1s" }}>
              {/* Glow behind avatar */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl scale-110" />

              <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent border border-primary/20 flex items-center justify-center overflow-hidden shadow-lg">
                {/* Gradient mesh background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <MorphingBlob className="!absolute top-[-20%] right-[-20%]" size="100px" color="hsl(214 84% 56% / 0.15)" />
                <span className="relative text-5xl font-bold text-primary font-display">AL</span>
              </div>

              {/* Status dot with pulse ring */}
              <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-background" />
              <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-emerald-500/50 animate-ping" />

              {/* Decorative floating dots */}
              <div className="absolute -top-3 -left-3 w-2 h-2 rounded-full bg-primary/30 float-slow" />
              <div className="absolute -bottom-4 left-6 w-1.5 h-1.5 rounded-full bg-cyan-400/30 float-medium" />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-2 hero-animate" style={{ animationDelay: "0.1s" }}>About</p>
              <h1 className="font-display text-3xl md:text-5xl font-normal mb-3 hero-animate" style={{ animationDelay: "0.2s" }}>Amine Lazrak</h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-2xl hero-animate" style={{ animationDelay: "0.3s" }}>
                Finance and IT transformation professional building toward{" "}
                <span className="text-foreground font-medium">Product Owner Data</span> roles,
                with 9 years of experience across governance, analytics, SaaS delivery, and business transformation.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-muted-foreground mb-5 hero-animate" style={{ animationDelay: "0.35s" }}>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> Casablanca, Morocco</span>
                <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-primary" /> aminelazrak5@gmail.com</span>
              </div>
              <div className="flex justify-center md:justify-start gap-3 hero-animate" style={{ animationDelay: "0.4s" }}>
                <Button variant="outline" size="icon" asChild className="rounded-lg h-9 w-9 hover-tilt">
                  <a href="https://github.com/AmineLaz10" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-lg h-9 w-9 hover-tilt">
                  <a href="https://www.linkedin.com/in/amine-lazrak5/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-lg h-9 w-9 hover-tilt">
                  <a href="mailto:aminelazrak5@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* ── Quick Stats Bar ── */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {quickStats.map((stat) => (
                <div key={stat.label} className="text-center p-5 rounded-xl border border-border bg-card/50 card-hover">
                  <AnimatedCounter value={stat.value} className="text-3xl font-bold text-primary block" duration={2000} />
                  <p className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Background ── */}
          <section className="mb-20">
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Background</p>
            <TextReveal as="h2" className="font-display text-2xl md:text-3xl font-normal mb-4">
              My Story
            </TextReveal>
            <div className="w-12 h-0.5 bg-primary line-grow mb-8" />
            <ScrollReveal>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                My career started in finance and performance management, then expanded into IT
                transformation, delivery governance, and data-heavy programs. Across that journey,
                I learned how to connect strategic ambitions with operating reality: budget owners,
                business teams, IT stakeholders, and delivery constraints.
              </p>
              <p>
                In recent missions across banking and consulting, I worked on CIO Office setup,
                compliance dashboards, core banking transformation, planning architectures, and SaaS
                application delivery. These experiences strengthened the skills that matter for a
                Product Owner Data role: framing needs, prioritizing value, designing governance,
                and driving adoption.
              </p>
              <p>
                To deepen my technical and user-centered perspective, I completed bootcamps in
                Data Science & AI (Le Wagon) and UX/UI (Ironhack). Today, I position myself at the intersection of
                business, data, and product thinking, with the goal of owning data use cases that
                deliver measurable outcomes for organizations.
              </p>
            </div>
            </ScrollReveal>
          </section>

          {/* ── Skills ── */}
          <section className="mb-20">
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Capabilities</p>
            <TextReveal as="h2" className="font-display text-2xl md:text-3xl font-normal mb-4">
              Skills
            </TextReveal>
            <div className="w-12 h-0.5 bg-primary line-grow mb-8" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map(({ category, items }, i) => (
                <ScrollReveal key={category} delay={i * 60}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 card-hover h-full hover-tilt">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* ── Experience (Timeline) ── */}
          <section className="mb-20">
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Career</p>
            <TextReveal as="h2" className="font-display text-2xl md:text-3xl font-normal mb-4">
              Experience
            </TextReveal>
            <div className="w-12 h-0.5 bg-primary line-grow mb-8" />

            <div className="timeline-line pl-12 space-y-8">
              {experience.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 70}>
                <div className="relative">
                  {/* Timeline dot with pulse */}
                  <span className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_0_3px_hsl(214_84%_56%_/_0.2)]" />

                  <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-base">{exp.role}</h3>
                      <span className="text-xs text-muted-foreground font-mono shrink-0">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-primary text-sm font-medium">{exp.company}</p>
                      <span className="text-muted-foreground/40 text-xs">·</span>
                      <p className="text-muted-foreground text-xs">{exp.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[11px] border-border/80 hover:border-primary/40 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* ── Actions ── */}
          <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full group" asChild>
              <Link to="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full hover-tilt" asChild>
              <a href="https://www.linkedin.com/in/amine-lazrak5/" target="_blank" rel="noopener noreferrer">
                View LinkedIn
              </a>
            </Button>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default About;
