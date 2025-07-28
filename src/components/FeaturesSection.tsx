import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Headphones, Award, CreditCard, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your payments and personal information are protected with enterprise-grade security."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our travel experts are available around the clock to assist you with any questions."
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Find a lower price elsewhere? We'll match it and give you an additional discount."
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Flexible payment options including installments and multiple currency support."
  },
  {
    icon: Clock,
    title: "Instant Confirmation",
    description: "Get immediate booking confirmation and mobile tickets for hassle-free travel."
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Curated experiences by local experts who know the destinations inside and out."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">TravelQuest</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make travel planning effortless with our comprehensive services and expert support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;