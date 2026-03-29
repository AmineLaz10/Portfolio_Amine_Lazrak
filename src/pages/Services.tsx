import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight, Check, BriefcaseBusiness, Database, LineChart, Workflow,
  BarChart3, Target, Users, Clock,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TextReveal } from "@/components/animations/TextReveal";
import { MorphingBlob } from "@/components/animations/MorphingBlob";
import { ParticleField } from "@/components/animations/ParticleField";

const services = [
  {
    icon: Target,
    number: "01",
    title: "Frame the right data use cases",
    description: "I connect business pain points to realistic product scopes, priorities, and measurable outcomes.",
    features: [
      "Clarify business goals and user needs",
      "Prioritize the backlog around value",
      "Translate ambiguity into a roadmap",
      "Keep delivery grounded in outcomes",
    ],
  },
  {
    icon: Database,
    number: "02",
    title: "Design governance that helps delivery",
    description: "I structure committees, reporting, and decision-making so data initiatives move with alignment instead of friction.",
    features: [
      "Steering rituals and stakeholder alignment",
      "Escalation paths and prioritization rules",
      "Budget and scope visibility",
      "Cross-functional coordination",
    ],
  },
  {
    icon: LineChart,
    number: "03",
    title: "Turn data into decision support",
    description: "I build KPI frameworks and dashboards that give leadership teams a usable view of progress, risk, and performance.",
    features: [
      "Dashboard design and automation",
      "Executive reporting and steering packs",
      "Performance indicators that matter",
      "Clear communication for decision-makers",
    ],
  },
  {
    icon: Workflow,
    number: "04",
    title: "Support adoption during transformation",
    description: "I help business and IT teams land new ways of working through change management and execution discipline.",
    features: [
      "Go-live readiness support",
      "Workshop facilitation",
      "Change management planning",
      "Business and IT translation",
    ],
  },
];

const collaborationPoints = [
  {
    icon: BriefcaseBusiness,
    name: "Business-minded",
    description: "Strong grounding in finance, performance management, and executive reporting.",
    features: [
      "Comfortable with budgets, KPIs, and business cases",
      "Able to challenge scope and sharpen priorities",
      "Focused on value, not just outputs",
    ],
  },
  {
    icon: BarChart3,
    name: "Transformation-ready",
    description: "Experience in banking and complex operating environments where governance and adoption matter.",
    features: [
      "Used to cross-functional coordination",
      "Comfortable in regulated environments",
      "Able to structure action plans under pressure",
    ],
  },
  {
    icon: Target,
    name: "Technically credible",
    description: "Hands-on enough to work closely with analytics, data, and engineering teams.",
    features: [
      "Data science and AI training from Le Wagon",
      "Working knowledge of Python, SQL, FastAPI, and Docker",
      "UX/UI training that strengthens product thinking",
    ],
  },
];

const stats = [
  { icon: Users, value: "15+", label: "Projects delivered" },
  { icon: BarChart3, value: "10+", label: "Dashboards automated" },
  { icon: Clock, value: "9", label: "Years of experience" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <ParticleField className="opacity-40" particleCount={25} />
        <MorphingBlob className="absolute top-[10%] right-[-5%]" size="400px" color="hsl(214 84% 56% / 0.06)" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-5 font-mono text-xs uppercase tracking-wider hero-animate" style={{ animationDelay: "0.05s" }}>Value I Bring</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-normal mb-5 leading-tight hero-animate" style={{ animationDelay: "0.15s" }}>
              What I bring as a future{" "}
              <span className="text-gradient-shimmer italic">Product Owner Data</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl hero-animate" style={{ animationDelay: "0.25s" }}>
              Beyond technical curiosity, I bring structure: business framing, governance, analytics,
              and transformation discipline that help data initiatives create visible value.
            </p>
            {/* Stat bar with animated counters */}
            <div className="flex flex-wrap gap-10 hero-animate" style={{ animationDelay: "0.35s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <AnimatedCounter value={stat.value} className="text-2xl font-bold block" duration={2000} />
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">What I do</p>
            <TextReveal as="h2" className="font-display text-3xl md:text-4xl font-normal mb-4">
              How I Create Value
            </TextReveal>
            <div className="w-12 h-0.5 bg-primary line-grow" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 90}>
              <div className="group p-7 rounded-xl border border-border bg-card hover:border-primary/40 card-hover h-full hover-tilt">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-5xl font-bold text-border/60 font-display leading-none mt-1 group-hover:text-primary/20 transition-colors">{service.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Positioning */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-3">Positioning</p>
            <TextReveal as="h2" className="font-display text-3xl md:text-4xl font-normal mb-4">
              Why This Positioning Fits
            </TextReveal>
            <div className="mx-auto w-12 h-0.5 bg-primary line-grow" />
            <ScrollReveal>
            <p className="text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
              My profile sits at the intersection of business, delivery, and data. That is the
              space where Product Owner Data roles create the most leverage.
            </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
            {collaborationPoints.map((point, index) => (
              <ScrollReveal key={point.name} delay={index * 100}>
              <div className="p-7 rounded-xl border border-border bg-card hover:border-primary/40 card-hover flex flex-col h-full hover-tilt">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{point.description}</p>
                <ul className="space-y-2.5 mb-5">
                  {point.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Badge variant="secondary" className="self-start text-xs">Relevant for Product Owner Data</Badge>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden p-10 md:p-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/8 rounded-full blur-[80px]" />
            <MorphingBlob className="absolute top-[-20%] left-[20%]" size="250px" color="hsl(214 84% 56% / 0.05)" />
            <div className="relative">
              <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Let's talk</p>
              <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">
                Interested in this positioning?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                If you are hiring for a Product Owner Data, analytics transformation, or governance-heavy
                delivery role, I would be happy to discuss how my background maps to your needs.
              </p>
              <Button asChild size="lg" className="rounded-full gap-2 group">
                <Link to="/contact">
                  Contact Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
