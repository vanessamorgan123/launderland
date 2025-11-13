import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-clean-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 md:h-24 lg:h-28 grid grid-cols-[auto,1fr,auto] items-center gap-4">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center space-x-2">
            <img src={logo} alt="LaunderLand logo" className="h-20 md:h-24 lg:h-28 w-auto" />
            {/* <span className="sr-only">LaunderLand</span> */}
          </a>
        </div>
        
        <nav className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-3 md:gap-4 justify-end">
          {/* <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>+2349127052281</span>
          </div> */}
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+2349127052281">Place a Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;