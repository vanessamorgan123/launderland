import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImagePrimary from "@/assets/hero-3.jpeg";
import heroImageSecondary from "@/assets/hero-2.jpeg";
import heroImageLaundry from "@/assets/hero-laundry.jpg";

const HERO_IMAGES = [
  {
    src: heroImagePrimary,
    alt: "Professional dry cleaning and laundry services",
  },
  {
    src: heroImageSecondary,
    alt: "Friendly staff folding freshly laundered clothes",
  },
  {
    src: heroImageLaundry,
    alt: "Laundry machines prepared for garment care",
  },
] as const;

const SLIDE_INTERVAL_MS = 5000;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length),
      SLIDE_INTERVAL_MS,
    );

    return () => clearInterval(interval);
  }, []);

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
              <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] bg-gray-100">
                {HERO_IMAGES.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 h-full w-full object-contain object-top transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={index !== currentSlide}
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;