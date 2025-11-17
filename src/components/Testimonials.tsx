import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Port-Harcourt",
      text: "Launderland has been a lifesaver! Their pickup and delivery service is so convenient, and my clothes always come back perfectly clean and pressed.",
      rating: 5
    },
    {
      name: "Michael Adebayo",
      location: "Port-Harcourt",
      text: "I've been using Launderland for my business suits for over a year. The quality is exceptional and they always meet their promised deadlines.",
      rating: 5
    },
    {
      name: "Emma Williams",
      location: "Port-Harcourt",
      text: "The eco-friendly approach and attention to detail sets Launderland apart. They've restored clothes I thought were ruined forever!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-trust-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border shadow-card bg-clean-white hover:shadow-hero transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-fresh-green text-fresh-green" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;