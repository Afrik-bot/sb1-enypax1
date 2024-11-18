import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Rights | Negus Legal",
  description: "Understanding your rights as a client of Negus Legal",
};

export default function ClientRights() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-playfair text-4xl font-bold text-primary mb-8">Client Rights</h1>
      
      <div className="prose prose-lg max-w-none">
        <h2>Your Rights as Our Client</h2>
        <p>At Negus Legal, we are committed to protecting your rights and ensuring you receive the highest quality legal services.</p>

        <h2>1. Right to Competent Representation</h2>
        <ul>
          <li>Expert legal advice</li>
          <li>Current knowledge of relevant laws</li>
          <li>Timely updates on your case</li>
        </ul>

        <h2>2. Right to Communication</h2>
        <ul>
          <li>Regular case updates</li>
          <li>Prompt responses to inquiries</li>
          <li>Clear explanation of legal matters</li>
        </ul>

        <h2>3. Right to Confidentiality</h2>
        <ul>
          <li>Attorney-client privilege protection</li>
          <li>Secure handling of information</li>
          <li>Privacy in communications</li>
        </ul>

        <h2>4. Right to Make Informed Decisions</h2>
        <ul>
          <li>Full disclosure of options</li>
          <li>Clear fee structures</li>
          <li>Understanding of potential outcomes</li>
        </ul>

        <h2>5. Right to Professional Conduct</h2>
        <ul>
          <li>Ethical representation</li>
          <li>No conflicts of interest</li>
          <li>Professional behavior</li>
        </ul>

        <h2>Questions About Your Rights?</h2>
        <p>Contact our Client Rights Officer:</p>
        <p>Email: rights@neguslegal.com<br />
        Phone: +1 (415)-678-7296</p>
      </div>
    </div>
  );
}