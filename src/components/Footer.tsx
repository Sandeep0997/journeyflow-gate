import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plane, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TravelQuest</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Your trusted partner for unforgettable travel experiences around the world. 
              Discover, explore, and create memories that last a lifetime.
            </p>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/80 hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Tours & Activities</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Booking Support</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/80">
              Subscribe to get exclusive deals and travel inspiration delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2024 TravelQuest. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;