import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cybersecurity Law | Negus Legal",
  description: "Expert legal counsel on cybersecurity regulations and incident response planning",
};

export default function Cybersecurity() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-8">
          Cybersecurity Law
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Protect your organization from cyber threats with comprehensive legal guidance on
            cybersecurity regulations, incident response, and risk management.
          </p>

          <h2>Our Services</h2>
          <ul>
            <li>Cybersecurity Risk Assessment</li>
            <li>Incident Response Planning</li>
            <li>Security Policy Development</li>
            <li>Breach Notification Compliance</li>
            <li>Vendor Security Management</li>
            <li>Employee Training Programs</li>
          </ul>

          <h2>Industry Experience</h2>
          <ul>
            <li>Financial Services</li>
            <li>Healthcare</li>
            <li>Technology</li>
            <li>Government Contractors</li>
          </ul>

          <div className="mt-8">
            <Link href="/schedule">
              <Button size="lg">Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}