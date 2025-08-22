import { useState } from "react";
import { Copy, Target, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const MarketingAssistant = () => {
  const [productName, setProductName] = useState("");
  const [style, setStyle] = useState("");
  const [platform, setPlatform] = useState("");
  const [results, setResults] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateContent = async () => {
    if (!productName || !style || !platform) {
      toast({
        title: "Please fill all fields",
        description: "We need product details to create marketing content.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Mock AI generation - replace with actual API call
    setTimeout(() => {
      const mockResults = {
        instagram: {
          caption: `✨ Introducing our ${productName} ✨\n\nWhere ${style} meets timeless craftsmanship. Each piece tells a story of dedication, passion, and artisanal excellence.\n\n🎨 Handcrafted with love\n🌿 Sustainable materials\n💝 Perfect for thoughtful gifting\n\nDM us for custom orders! 💌`,
          hashtags: "#handmade #artisan #crafted #${style.toLowerCase()} #sustainable #handcrafted #artisanmade #supportlocal #uniquedesign #craftsmanship"
        },
        facebook: {
          post: `🌟 Discover the art behind our ${productName}\n\nEvery piece in our ${style} collection is carefully crafted using traditional techniques passed down through generations. We believe in creating not just products, but heirlooms that carry stories and meaning.\n\nWhat makes us different?\n✓ Sustainable, locally-sourced materials\n✓ Traditional craftsmanship techniques\n✓ Each piece is unique and one-of-a-kind\n✓ Supporting local artisan communities\n\nExplore our collection and find your perfect piece today! 🛒`
        },
        email: {
          subject: `New Arrival: ${productName} Collection`,
          content: `Dear Valued Customer,\n\nWe're thrilled to introduce our latest ${productName}, where ${style} design meets exceptional craftsmanship.\n\nThis exclusive collection represents hours of careful work, using time-honored techniques and sustainable materials. Each piece is individually crafted, ensuring you receive something truly unique.\n\nAs one of our valued customers, you get early access to this collection with a special 15% discount using code: ARTISAN15\n\nDiscover the collection: [Shop Now]\n\nWith gratitude,\nThe Artisan Team`
        }
      };
      
      setResults(mockResults);
      setIsGenerating(false);
    }, 1500);
  };

  const copyContent = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: `${type} content has been copied.`,
    });
  };

  return (
    <section id="marketing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Grow Your Audience
          </h2>
          <p className="font-body text-xl text-warm-brown/80 max-w-2xl mx-auto">
            Generate compelling marketing content tailored for different platforms and audiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <Card className="p-6 shadow-card bg-card/80 backdrop-blur-sm border-sage/20">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Product Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="product-name" className="font-body text-warm-brown font-medium">
                  Product Name
                </Label>
                <Input
                  id="product-name"
                  placeholder="e.g., Ceramic Dinner Bowls"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 border-sage/30 focus:border-terracotta"
                />
              </div>
              
              <div>
                <Label htmlFor="style" className="font-body text-warm-brown font-medium">
                  Style
                </Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger className="mt-1 border-sage/30 focus:border-terracotta">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="rustic">Rustic</SelectItem>
                    <SelectItem value="bohemian">Bohemian</SelectItem>
                    <SelectItem value="contemporary">Contemporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="platform" className="font-body text-warm-brown font-medium">
                  Target Platform
                </Label>
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger className="mt-1 border-sage/30 focus:border-terracotta">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="email">Email Newsletter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              onClick={generateContent}
              disabled={isGenerating}
              className="w-full mt-6 bg-sage hover:bg-sage-dark text-white font-heading font-semibold shadow-warm"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Target className="mr-2 h-4 w-4" />
                  Generate Content
                </>
              )}
            </Button>
          </Card>

          {/* Results Display */}
          <div className="lg:col-span-2 grid gap-6">
            {results ? (
              Object.entries(results).map(([key, content]: [string, any]) => (
                <Card key={key} className="p-6 shadow-card bg-cream/50 backdrop-blur-sm border-sage/20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading text-lg font-semibold text-foreground capitalize">
                      {key} Content
                    </h3>
                    <div className="flex gap-2">
                      {content.subject && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyContent(content.subject, 'Subject')}
                          className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyContent(content.caption || content.post || content.content, 'Content')}
                        className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3 font-body text-warm-brown">
                    {content.subject && (
                      <div>
                        <div className="text-sm font-medium text-warm-brown/70 mb-1">Subject:</div>
                        <div className="p-3 bg-background/60 rounded border border-sage/20">
                          {content.subject}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <div className="text-sm font-medium text-warm-brown/70 mb-1">
                        {content.caption ? 'Caption:' : content.post ? 'Post:' : 'Content:'}
                      </div>
                      <div className="p-3 bg-background/60 rounded border border-sage/20 whitespace-pre-line">
                        {content.caption || content.post || content.content}
                      </div>
                    </div>
                    
                    {content.hashtags && (
                      <div>
                        <div className="text-sm font-medium text-warm-brown/70 mb-1">Hashtags:</div>
                        <div className="p-3 bg-background/60 rounded border border-sage/20 text-terracotta">
                          {content.hashtags}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-12 shadow-card bg-muted/30 border-sage/20">
                <div className="text-center text-warm-brown/50 font-body italic">
                  Fill in the form and generate content to see results here...
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAssistant;