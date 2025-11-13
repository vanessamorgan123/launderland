import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            {/*<div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">L</span>
              </div>
              <h3 className="text-2xl font-bold">LaunderLand</h3>
            </div>*/}
            <p className="text-primary-foreground/80 leading-relaxed">
              {/*Professional dry cleaning and laundry services with eco-friendly practices 
              and exceptional customer care.*/}
              Launderland provides professional, eco-friendly dry cleaning and laundry services 
              with exceptional care, precision, and a commitment to quality and customer satisfaction—keeping 
              your wardrobe looking its best.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
              {/* <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Pricing</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">Dry Cleaning</span></li>
              <li><span className="text-primary-foreground/80">Laundry & Folding</span></li>
              <li><span className="text-primary-foreground/80">Ironing & Pressing</span></li>
              <li><span className="text-primary-foreground/80">Alterations</span></li>
              <li><span className="text-primary-foreground/80">Pickup & Delivery</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+2349127052281</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">17 King Perekule, GRA Phase 2, Port-Harcourt</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">launderlandph@gmail.com</span>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4">
              <a href="https://www.facebook.com/share/1AwJahbjSC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Facebook className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.instagram.com/launderlandng?igsh=MWF6Ymd0czE3N2d3Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              </a>
              <a href="https://x.com/launderlandng?s=21&t=cZDSg25lgTuXdx9PWuSUUg" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {getCurrentYear()} Launderland Dry-Cleaning Services LTD | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;