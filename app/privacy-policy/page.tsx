import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Negus Legal",
  description: "Privacy Policy and data handling practices for Negus Legal",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-playfair text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Contact information (name, email, phone number)</li>
          <li>Communication records and history</li>
          <li>Client matter information</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide legal services</li>
          <li>Communicate with you</li>
          <li>Comply with legal obligations</li>
          <li>Improve our services</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>We do not sell or rent your personal information. We may share your information:</p>
        <ul>
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>With service providers under confidentiality agreements</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>For privacy-related inquiries, contact us at:</p>
        <p>Email: privacy@neguslegal.com<br />
        Phone: +1 (415)-678-7296</p>
      </div>
    </div>
  );
}