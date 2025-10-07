import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-clean-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center space-x-2">
            <img src={logo} alt="LaunderLand logo" className="h-16 md:h-20 lg:h-24 w-auto" />
            {/* <span className="sr-only">LaunderLand</span> */}
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>+2349127052281</span>
          </div>
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+2349127052281">Place a Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;