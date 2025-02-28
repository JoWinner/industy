import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#040e26] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="footer-title">About Us</h3>
            <p className="text-gray-400 mb-4">
              Greenroots Trading Company specializes in providing premium
              quality cash crops to manufacturers worldwide, ensuring
              sustainable and ethical sourcing practices.
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
              <li>+1 234 567 8900</li>
              <li>info@greenrootstrading.com</li>
            </ul>
          </div>

          {/* Logo */}
          <div className=" h-fit w-fit">
           
            <Link href="/" className="flex items-center aspect-square">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className=" object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Greenroots Trading Company Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
