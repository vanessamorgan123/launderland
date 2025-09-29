import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-section">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Fast, Reliable, and 
                <span className="text-primary"> Affordable</span>
                <br />
                Dry Cleaning & Laundry Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience fresh, spotless clothes delivered with care. Professional cleaning 
                with eco-friendly detergents and quick turnaround times.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                asChild
              >
                <a href="tel:+2349127052281">
                  Place a Call
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-fresh-green" />
                <span className="text-sm font-medium">Eco-Friendly Detergents</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-fresh-green" />
                <span className="text-sm font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-fresh-green" />
                <span className="text-sm font-medium"> Pickup & Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="Professional dry cleaning and laundry services" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;