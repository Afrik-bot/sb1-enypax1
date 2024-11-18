import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Negus Legal",
  description: "Terms of Service and conditions for Negus Legal",
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-playfair text-4xl font-bold text-primary mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using our services, you agree to be bound by these Terms of Service.</p>

        <h2>2. Services</h2>
        <p>We provide legal consulting services in:</p>
        <ul>
          <li>Data Protection Law</li>
          <li>Cybersecurity Law</li>
          <li>AI & Robotics Law</li>
          <li>Regulatory Compliance</li>
        </ul>

        <h2>3. Client Responsibilities</h2>
        <p>As a client, you agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Cooperate with legal proceedings</li>
          <li>Pay agreed-upon fees</li>
          <li>Maintain confidentiality</li>
        </ul>

        <h2>4. Fees and Payment</h2>
        <p>Our fee structure and payment terms will be outlined in your engagement letter.</p>

        <h2>5. Confidentiality</h2>
        <p>We maintain strict confidentiality of all client information in accordance with attorney-client privilege.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Our liability is limited to the extent permitted by applicable law.</p>

        <h2>7. Contact Information</h2>
        <p>For questions about these terms, contact us at:</p>
        <p>Email: legal@neguslegal.com<br />
        Phone: +1 (415)-678-7296</p>
      </div>
    </div>
  );
}