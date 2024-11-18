import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Data Protection & Privacy Law | Negus Legal",
  description: "Expert guidance on GDPR, CCPA, and international data protection regulations",
};

export default function DataProtection() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-8">
          Data Protection & Privacy Law
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            In today's digital age, data protection and privacy are critical concerns for businesses and individuals alike.
            Our expert team provides comprehensive guidance on compliance with global privacy regulations.
          </p>

          <h2>Our Expertise</h2>
          <ul>
            <li>GDPR Compliance and Implementation</li>
            <li>CCPA/CPRA Compliance</li>
            <li>International Data Transfer Mechanisms</li>
            <li>Privacy Impact Assessments</li>
            <li>Data Protection Officer (DPO) Services</li>
            <li>Privacy Policy Development</li>
          </ul>

          <h2>Why Choose Us</h2>
          <ul>
            <li>Deep understanding of global privacy laws</li>
            <li>Practical, business-focused solutions</li>
            <li>Proven track record of successful implementations</li>
            <li>Ongoing support and updates</li>
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