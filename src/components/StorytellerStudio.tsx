import { useState } from "react";
import { Copy, Wand2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const StorytellerStudio = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateStory = async () => {
    if (!input.trim()) {
      toast({
        title: "Please describe your craft",
        description: "Tell us about your artisan work to generate a story.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Mock AI generation - replace with actual API call
    setTimeout(() => {
      const mockStory = `In the heart of our workshop, where time seems to slow and tradition comes alive, each piece of ${input} begins its journey. 

Drawing inspiration from generations of craftsmanship, we carefully select only the finest materials, honoring the age-old techniques passed down through skilled hands. Every curve, every texture tells a story of dedication and passion.

Our process is meditative—a dance between vision and reality. As we shape each piece, we're not just creating an object; we're preserving a legacy, adding our own chapter to centuries of artisanal excellence.

What emerges is more than just a product—it's a piece of art that carries the soul of its maker, ready to become part of your story, to grace your space with authenticity and timeless beauty.`;
      
      setOutput(mockStory);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied to clipboard!",
      description: "Your artisan story has been copied.",
    });
  };

  return (
    <section id="storyteller" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Craft Your Narrative
          </h2>
          <p className="font-body text-xl text-warm-brown/80 max-w-2xl mx-auto">
            Transform your craft descriptions into compelling artisan stories that connect with your audience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card className="p-8 shadow-card bg-card/80 backdrop-blur-sm border-sage/20">
            <div className="mb-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Describe Your Craft
              </h3>
              <p className="font-body text-warm-brown/70 text-sm">
                Tell us about your artisan work, materials, techniques, or inspiration
              </p>
            </div>
            
            <Textarea
              placeholder="e.g., handmade pottery inspired by local clay traditions, each piece thrown on the wheel with glazes made from natural materials..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[200px] font-body text-base resize-none border-sage/30 focus:border-terracotta"
            />
            
            <Button 
              onClick={generateStory}
              disabled={isGenerating}
              className="w-full mt-6 bg-terracotta hover:bg-terracotta-light text-white font-heading font-semibold shadow-warm"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Crafting Your Story...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Story
                </>
              )}
            </Button>
          </Card>

          {/* Output Panel */}
          <Card className="p-8 shadow-card bg-cream/50 backdrop-blur-sm border-sage/20">
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Your Artisan Story
                </h3>
                <p className="font-body text-warm-brown/70 text-sm">
                  AI-generated narrative ready to share
                </p>
              </div>
              
              {output && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div className="min-h-[200px] p-4 bg-background/60 rounded-lg border border-sage/20">
              {output ? (
                <div className="font-body text-warm-brown leading-relaxed whitespace-pre-line">
                  {output}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-warm-brown/50 font-body italic">
                  Your generated story will appear here...
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StorytellerStudio;