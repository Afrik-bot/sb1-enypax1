import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI & Robotics Law | Negus Legal",
  description: "Cutting-edge legal expertise in artificial intelligence and robotics regulations",
};

export default function AIRobotics() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-8">
          AI & Robotics Law
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Stay ahead of the curve with expert legal guidance on artificial intelligence
            and robotics regulations, ensuring innovation within legal boundaries.
          </p>

          <h2>Key Services</h2>
          <ul>
            <li>AI Governance Frameworks</li>
            <li>Ethics Guidelines Development</li>
            <li>Regulatory Compliance</li>
            <li>Risk Assessment</li>
            <li>IP Protection</li>
            <li>Liability Management</li>
          </ul>

          <h2>Emerging Technologies</h2>
          <ul>
            <li>Machine Learning Systems</li>
            <li>Autonomous Systems</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
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