import { Shirt, Droplets, Zap, Scissors, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics and premium garments."
    },
    {
      icon: Droplets,
      title: "Laundry Washing & Folding",
      description: "Thorough wash, dry, and neatly folded laundry using eco-friendly detergents for everyday freshness."
    },
    {
      icon: Zap,
      title: "Ironing & Pressing",
      description: "Precision ironing and steam-pressing to keep your clothes crisp, smooth, and professionally finished."
    },
    {
      icon: Scissors,
      title: "Alterations & Repairs",
      description: "Skilled tailoring and garment adjustments to restore perfect fit, comfort, and style."
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      description: "Convenient door-to-door laundry service."
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
            <div
              key={index}
              className="service-card"
            >
              <div className="service-inner">
                <div className="service-front">
                  <div className="service-icon">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <div className="service-back">
                  <p className="text-base text-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;