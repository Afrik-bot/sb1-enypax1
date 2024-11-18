import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Regulatory Compliance | Negus Legal",
  description: "Strategic advice on navigating complex regulatory frameworks",
};

export default function Compliance() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-8">
          Regulatory Compliance
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Navigate complex regulatory requirements with confidence through our comprehensive
            compliance services and expert guidance.
          </p>

          <h2>Areas of Focus</h2>
          <ul>
            <li>Technology Regulations</li>
            <li>Data Protection Standards</li>
            <li>Industry-Specific Requirements</li>
            <li>Cross-Border Compliance</li>
            <li>Audit and Documentation</li>
          </ul>

          <h2>Our Approach</h2>
          <ul>
            <li>Risk-Based Assessment</li>
            <li>Practical Implementation</li>
            <li>Ongoing Monitoring</li>
            <li>Regular Updates</li>
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