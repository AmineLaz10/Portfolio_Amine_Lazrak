import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { MorphingBlob } from "@/components/animations/MorphingBlob";
import { useToast } from "@/hooks/use-toast";


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzznkabz";

const socials = [
  { href: "https://github.com/AmineLaz10", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/amine-lazrak5/", icon: Linkedin, label: "LinkedIn" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again, or contact me directly by email.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please try again later, or contact me directly by email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Layout>
      <div className="relative container mx-auto px-4 pt-20 pb-16 md:pt-28">
        {/* Background decoration */}
        <MorphingBlob className="absolute top-[5%] right-[-10%] opacity-50" size="400px" color="hsl(214 84% 56% / 0.04)" />

        <div className="max-w-4xl mx-auto relative">
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4 hero-animate" style={{ animationDelay: "0.05s" }}>
              <span className="w-8 h-px bg-primary/60" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Contact</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display mb-4 hero-animate" style={{ animationDelay: "0.15s" }}>
              Let's <span className="italic text-gradient-shimmer">Connect</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl hero-animate" style={{ animationDelay: "0.25s" }}>
              I am targeting Product Owner Data opportunities and transformation missions where
              business, governance, and analytics need to come together.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">
                      Direct
                    </h2>
                    <div className="space-y-3.5">
                      <a
                        href="mailto:aminelazrak5@gmail.com"
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <Mail className="h-4 w-4 text-primary/60" />
                        aminelazrak5@gmail.com
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary/60" />
                        Casablanca, Morocco
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4">
                      Profiles
                    </h2>
                    <div className="flex gap-2">
                      {socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover-tilt"
                        >
                          <social.icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-lg border border-border/40 bg-card/40 card-hover">
                    <h3 className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">
                      Available for
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
                        Product Owner Data roles
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
                        Data and analytics transformation missions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "0.4s" }} />
                        Governance and PMO-oriented data programs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "0.6s" }} />
                        Banking, finance, and compliance environments
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal delay={100}>
              <form onSubmit={handleSubmit} className="space-y-5 p-6 rounded-xl border border-border/40 bg-card/30">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs text-muted-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-card/60 border-border/50 focus:border-primary/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-card/60 border-border/50 focus:border-primary/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-xs text-muted-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-card/60 border-border/50 focus:border-primary/40 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the role, mission, or data initiative..."
                    rows={6}
                    required
                    className="bg-card/60 border-border/50 focus:border-primary/40 transition-colors resize-none"
                  />
                </div>

                {/* Honeypot field for bots */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="_gotcha" autoComplete="off" tabIndex={-1} />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto rounded-full px-8 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
