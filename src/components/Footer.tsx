import { Palette, Mail, Twitter, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-terracotta" />
              <span className="font-heading text-xl font-bold">CraftStory AI</span>
            </div>
            <p className="font-body text-cream/80 text-sm leading-relaxed">
              Empowering artisans with AI-powered storytelling and marketing tools. 
              Craft your narrative, grow your business.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-cream/60 hover:text-terracotta transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 text-cream/60 hover:text-terracotta transition-colors cursor-pointer" />
              <Mail className="h-5 w-5 text-cream/60 hover:text-terracotta transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 font-body text-cream/80 text-sm">
              <li><a href="#storyteller" className="hover:text-terracotta transition-colors">Storyteller Studio</a></li>
              <li><a href="#marketing" className="hover:text-terracotta transition-colors">Marketing Assistant</a></li>
              <li><a href="#video-script" className="hover:text-terracotta transition-colors">Video Script Generator</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 font-body text-cream/80 text-sm">
              <li><a href="#" className="hover:text-terracotta transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 font-body text-cream/80 text-sm">
              <li><a href="#" className="hover:text-terracotta transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-cream/60 text-sm">
            © 2024 CraftStory AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 font-body text-cream/60 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-terracotta fill-current" />
            <span>for artisans</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;