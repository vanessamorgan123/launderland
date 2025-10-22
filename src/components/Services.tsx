import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Droplets, Zap, Scissors, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics, suits, dresses, and specialty garments.",
      features: ["Stain removal", "Fabric protection", "Professional pressing"]
    },
    {
      icon: Droplets,
      title: "Laundry Washing & Folding",
      description: "Complete wash, dry, and fold service for your everyday clothing and linens.",
      features: ["Eco-friendly detergents", "Fabric softeners", "Neat folding"]
    },
    {
      icon: Zap,
      title: "Ironing & Pressing",
      description: "Expert ironing and pressing services to keep your clothes crisp and professional.",
      features: ["Steam pressing", "Crease removal", "Professional finish"]
    },
    {
      icon: Scissors,
      title: "Alterations & Repairs",
      description: "Skilled tailoring services for perfect fits and garment repairs.",
      features: ["Hemming", "Sizing adjustments", "Tear repairs"]
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      description: "Convenient  pickup and delivery service right to your doorstep.",
      features: ["Reliable service", "Scheduled pickups", "Same-day delivery"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive laundry and dry cleaning solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300 transform hover:scale-105 bg-clean-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-fresh-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;