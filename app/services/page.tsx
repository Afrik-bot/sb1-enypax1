import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Server, Scale, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Negus Legal",
  description: "Comprehensive legal solutions for data protection, cybersecurity, and AI & robotics law",
};

const services = [
  {
    icon: Shield,
    title: "Data Protection & Privacy Law",
    description: "Expert guidance on GDPR, CCPA, and international data protection regulations.",
    link: "/services/data-protection",
  },
  {
    icon: Server,
    title: "Cybersecurity Law",
    description: "Legal counsel on cybersecurity regulations and incident response planning.",
    link: "/services/cybersecurity",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Strategic advice on navigating complex regulatory frameworks.",
    link: "/services/compliance",
  },
  {
    icon: Cpu,
    title: "AI & Robotics Law",
    description: "Cutting-edge legal expertise in artificial intelligence and robotics regulations.",
    link: "/services/ai-robotics",
  },
];

export default function Services() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal solutions for the modern digital landscape, delivered by experts in technology law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Link href={service.link}>
                <Button>Learn More</Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/schedule">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}