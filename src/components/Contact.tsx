import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the best laundry service in Lagos? Contact us today!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground">+234 800 123 4567</p>
                <p className="text-muted-foreground">Call us for immediate assistance</p>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">123 Clean Street</p>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">contact@launderland.ng</p>
                <p className="text-muted-foreground">Email us anytime</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday</span>
                  <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p>@LaunderLand</p>
                  <p>@LaunderLand_NG</p>
                  <p>@LaunderLandNG</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <Button variant="cta" size="xl" className="w-full md:w-auto">
                Schedule Your Pickup Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;