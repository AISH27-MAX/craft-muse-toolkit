import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-terracotta" />
            <span className="font-heading text-xl font-bold text-foreground">
              CraftStory AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('storyteller')}
              className="font-body text-warm-brown hover:text-terracotta transition-colors"
            >
              Storyteller
            </button>
            <button 
              onClick={() => scrollToSection('marketing')}
              className="font-body text-warm-brown hover:text-terracotta transition-colors"
            >
              Marketing
            </button>
            <button 
              onClick={() => scrollToSection('video-script')}
              className="font-body text-warm-brown hover:text-terracotta transition-colors"
            >
              Video Scripts
            </button>
            
            <Button 
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white font-heading"
            >
              Sign In
            </Button>
            <Button className="bg-terracotta hover:bg-terracotta-light text-white font-heading">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-warm-brown hover:text-terracotta"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sage/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('storyteller')}
                className="font-body text-warm-brown hover:text-terracotta transition-colors text-left"
              >
                Storyteller Studio
              </button>
              <button 
                onClick={() => scrollToSection('marketing')}
                className="font-body text-warm-brown hover:text-terracotta transition-colors text-left"
              >
                Marketing Assistant
              </button>
              <button 
                onClick={() => scrollToSection('video-script')}
                className="font-body text-warm-brown hover:text-terracotta transition-colors text-left"
              >
                Video Script Generator
              </button>
              
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline"
                  className="border-sage text-sage hover:bg-sage hover:text-white font-heading w-full"
                >
                  Sign In
                </Button>
                <Button className="bg-terracotta hover:bg-terracotta-light text-white font-heading w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;