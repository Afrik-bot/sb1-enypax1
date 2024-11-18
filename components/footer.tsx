import { LogoIcon } from "@/components/logo-icon";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <LogoIcon className="h-8 w-8" />
              <span className="font-playfair text-xl font-bold">Negus Legal</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Leading legal technology consultancy specializing in data protection,
              cybersecurity, and AI & robotics law.
            </p>
            <div className="space-y-2">
              <p className="text-white/80">
                <a href="mailto:info@neguslegal.com" className="hover:text-white">
                  info@neguslegal.com
                </a>
              </p>
              <p className="text-white/80">
                <a href="tel:+14156787296" className="hover:text-white">
                  +1 (415)-678-7296
                </a>
              </p>
              <p className="text-white/80">
                1142 Florida Street, Suite 5<br />
                San Francisco, CA 94110
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/data-protection" className="text-white/80 hover:text-white">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-white/80 hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/ai-robotics" className="text-white/80 hover:text-white">
                  AI & Robotics
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="text-white/80 hover:text-white">
                  Regulatory Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/client-rights" className="text-white/80 hover:text-white">
                  Client Rights
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-white/80 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Negus Legal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}