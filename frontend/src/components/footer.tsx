import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerLinks, storeLocations, newsletter, socialMedia } from "@/data/data.json";
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case 'facebook': return <Facebook className="h-5 w-5" />;
        case 'instagram': return <Instagram className="h-5 w-5" />;
        case 'twitter': return <Twitter className="h-5 w-5" />;

        default: return null;
    }
};

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className='mt-4'>
                <Link href="/" className={`font-extrabold text-4xl font-logo text-white`}>
                    Fresh Groceries
                </Link>
            </div>

            {/* Store Locations */}
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {storeLocations.map((location) => (
                        <div key={location.id} className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">{location.name}</h3>
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 mt-1" />
                                <p>{location.address}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <p>{location.phone}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5" />
                                <p>{location.hours}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="border-t border-gray-800 pt-12 mb-12">
                    <div className="max-w-xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">{newsletter.title}</h3>
                        <p className="mb-6">{newsletter.description}</p>
                        <div className="flex space-x-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border-gray-700"
                            />
                            <Button variant="secondary">
                                {newsletter.buttonText}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h4 className="text-white font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            {footerLinks.customer.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Information</h4>
                        <ul className="space-y-2">
                            {footerLinks.information.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Policies</h4>
                        <ul className="space-y-2">
                            {footerLinks.policies.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Help</h4>
                        <ul className="space-y-2">
                            {footerLinks.help.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        {socialMedia.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="hover:text-white transition-colors"
                                aria-label={social.name}
                            >
                                {getSocialIcon(social.name)}
                            </a>
                        ))}
                    </div>
                    <p className="text-sm">© 2024 Your Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
