import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, MapPin, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          Discover Your Next
          <span className="block text-secondary"> Adventure</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
          Explore breathtaking destinations and unforgettable experiences around the world
        </p>

        {/* Search Card */}
        <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 shadow-travel animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
              <Input 
                placeholder="Where do you want to go?"
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
              <Input 
                type="date"
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
            </div>
            
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Search className="h-4 w-4 mr-2" />
              Search Adventures
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">500+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">10k+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">24/7</div>
            <div className="text-white/80">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;