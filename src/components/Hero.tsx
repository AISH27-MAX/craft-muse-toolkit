import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-artisan.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Artisan crafting pottery" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-terracotta/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="text-terracotta mr-2 h-6 w-6" />
          <span className="font-heading font-medium text-warm-brown/80 tracking-wide">
            AI-Powered Creative Tools
          </span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
          Craft Your Story,
          <br />
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Grow Your Art
          </span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-warm-brown/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your passion into compelling narratives with AI-powered storytelling, 
          marketing tools, and content creation designed specifically for artisans and makers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-terracotta hover:bg-terracotta-light text-white font-heading font-semibold px-8 py-4 text-lg shadow-warm hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Creating
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-sage text-sage hover:bg-sage hover:text-white font-heading font-semibold px-8 py-4 text-lg transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center items-center space-x-8 text-warm-brown/70 font-body">
          <div className="text-center">
            <div className="text-2xl font-bold text-terracotta">5K+</div>
            <div className="text-sm">Stories Created</div>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sage">98%</div>
            <div className="text-sm">Satisfaction Rate</div>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-terracotta">50+</div>
            <div className="text-sm">Craft Types</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;