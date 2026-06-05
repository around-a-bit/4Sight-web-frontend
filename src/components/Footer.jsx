import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import logo from '../assets/4Sight_new_logo.png';

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.4 0h4.36v2.05h.06c.61-1.15 2.09-2.36 4.3-2.36 4.6 0 5.45 3.03 5.45 6.97V23h-4.55v-6.83c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.78-2.62 3.61V23H7.62V8z"/>
  </svg>
);

const socialLinks = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/people/Quantyra-Analytics/61590782033767/', label: 'Facebook' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/quantyra-analytics/', label: 'LinkedIn' },
];

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/about' },
    { label: 'Product', href: '/product' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Compliance', href: '/compliance' },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-blue-100 to-white border-t border-blue-200 pt-16 pb-8 transition-colors duration-300 relative overflow-hidden" id="site-footer">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0859b8]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start md:items-center md:text-center text-left">
                        <Link
                            to="/"
                            className="inline-block mb-6 hover:-translate-y-1 transition-transform"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <img
                                src={logo}
                                alt="Marketing4Sight"
                                className="h-12 sm:h-14 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-gray-600 mb-8 max-w-sm leading-relaxed md:mx-auto">
                            The data-driven marketing OS. Built on the SIGO framework by Quantyra.
                        </p>

                        <div className="flex items-center justify-start md:justify-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0859b8] hover:bg-[#0859b8] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 lg:col-span-4 lg:justify-self-center">
                        <h4 className="text-lg font-bold text-[#222222] mb-6">
                            Quick Links
                        </h4>

                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <NavLink
                                        to={link.href}
                                        onClick={() => window.scrollTo(0, 0)}
                                        className={({ isActive }) => 
                                            `transition-colors duration-300 ${isActive ? "text-[#0859b8] font-bold" : "text-gray-600 hover:text-[#00adc4]"}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 lg:col-span-4">
                        <h4 className="text-lg font-bold text-[#222222] mb-6">
                            Contact Us
                        </h4>

                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 text-gray-600">
                                <Phone className="w-5 h-5 shrink-0 text-[#00adc4] mt-0.5" />
                                <a href="tel:+919830050939" className="hover:text-[#00adc4] transition-colors">+91 98300 50939</a>
                            </li>

                            <li className="flex items-start gap-3 text-gray-600">
                                <Mail className="w-5 h-5 shrink-0 text-[#00adc4] mt-0.5" />
                                <a href="mailto:contact@quantyraanalytics.com" className="hover:text-[#00adc4] transition-colors">contact@quantyraanalytics.com</a>
                            </li>

                            <li className="flex items-start gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 shrink-0 text-[#00adc4] mt-0.5" />
                                <span>83, S.P Mukherjee Road, Hazra, Kolkata - 700026, West Bengal, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Quantyra Analytics Private Limited. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/compliance#privacy"
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-sm text-gray-500 hover:text-[#0859b8] transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/compliance#terms"
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-sm text-gray-500 hover:text-[#0859b8] transition-colors duration-300"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
