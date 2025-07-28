import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Users } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
    price: "$299",
    rating: 4.9,
    reviews: 2847,
    duration: "3 days",
    category: "Beach & Islands",
    highlight: "Best Sunset Views"
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    price: "$599",
    rating: 4.8,
    reviews: 1923,
    duration: "5 days",
    category: "Culture & City",
    highlight: "Cherry Blossom Season"
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop",
    price: "$799",
    rating: 4.9,
    reviews: 3241,
    duration: "4 days",
    category: "Adventure",
    highlight: "UNESCO World Heritage"
  },
  {
    id: 4,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=300&fit=crop",
    price: "$699",
    rating: 4.7,
    reviews: 1567,
    duration: "4 days",
    category: "Luxury & Shopping",
    highlight: "Modern Architecture"
  },
  {
    id: 5,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
    price: "$449",
    rating: 4.8,
    reviews: 2156,
    duration: "6 days",
    category: "Beach & Culture",
    highlight: "Tropical Paradise"
  },
  {
    id: 6,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
    price: "$549",
    rating: 4.9,
    reviews: 4523,
    duration: "4 days",
    category: "Romance & Culture",
    highlight: "City of Love"
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most breathtaking places and create memories that will last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-travel transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                  {destination.highlight}
                </Badge>
                <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-white text-sm font-semibold">{destination.price}</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-3">{destination.category}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{destination.reviews} reviews</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;