import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Negus Legal",
  description: "Legal disclaimers and notices for Negus Legal",
};

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-playfair text-4xl font-bold text-primary mb-8">Legal Disclaimer</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. General Information</h2>
        <p>The information provided on this website is for general informational purposes only and should not be considered as legal advice.</p>

        <h2>2. No Attorney-Client Relationship</h2>
        <p>Viewing this website or contacting us does not create an attorney-client relationship. Such a relationship is only established through a signed engagement letter.</p>

        <h2>3. No Guarantees</h2>
        <p>We make no guarantees about the outcome of any legal matter. Past results do not guarantee future outcomes.</p>

        <h2>4. Website Content</h2>
        <p>While we strive to keep information current, we make no representations about the accuracy or completeness of information on this website.</p>

        <h2>5. Third-Party Links</h2>
        <p>We are not responsible for third-party websites linked from our site.</p>

        <h2>6. Jurisdictional Limitations</h2>
        <p>Legal services are only provided where we are licensed to practice.</p>

        <h2>7. Contact Information</h2>
        <p>For questions about this disclaimer, contact:</p>
        <p>Email: legal@neguslegal.com<br />
        Phone: +1 (415)-678-7296</p>
      </div>
    </div>
  );
}