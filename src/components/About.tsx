import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Clock, Shield, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "We use only environmentally safe detergents and processes that protect both your clothes and the planet."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Same-day and next-day service available. We understand your time is valuable."
    },
    {
      icon: Shield,
      title: "Expert Care",
      description: "Our trained professionals handle your garments with the utmost care and attention to detail."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "State-of-the-art equipment and premium cleaning solutions for exceptional results every time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose LaunderLand?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At LaunderLand, we're committed to delivering exceptional dry cleaning and laundry services 
            that combine convenience, quality, and environmental responsibility. Trust us to keep your 
            clothes looking their absolute best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;