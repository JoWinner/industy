import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#040e26] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="footer-title">About Us</h3>
            <p className="text-gray-400 mb-4">
              Green-Hive Trading Company Ltd specializes in providing premium quality cocoa beans to manufacturers worldwide, ensuring sustainable and ethical sourcing practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="footer-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/our-story" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-operations" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Business Street</li>
              <li>Okla States, 12345</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Email: info@greenroots.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#fc5e28]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#fc5e28] text-white hover:bg-[#e54d1f] transition-colors duration-300"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Green-Hive Trading Company Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;