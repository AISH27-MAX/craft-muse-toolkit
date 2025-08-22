import { useState } from "react";
import { Copy, Video, Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const VideoScriptGenerator = () => {
  const [craftProcess, setCraftProcess] = useState("");
  const [platform, setPlatform] = useState("");
  const [script, setScript] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateScript = async () => {
    if (!craftProcess.trim() || !platform) {
      toast({
        title: "Please fill all fields",
        description: "Describe your craft process and select a platform.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Mock AI generation - replace with actual API call
    setTimeout(() => {
      const mockScript = {
        duration: platform === "tiktok" ? "30 seconds" : platform === "reels" ? "60 seconds" : "45 seconds",
        hook: "POV: You're watching ancient pottery techniques come alive ✨",
        scenes: [
          {
            time: "0-5s",
            visual: "Close-up of hands centering clay on the wheel",
            narration: "It starts with just clay and water...",
            caption: "The magic begins ✨"
          },
          {
            time: "6-15s", 
            visual: "Time-lapse of shaping the vessel",
            narration: "But watch what happens when tradition meets passion",
            caption: "700+ years of technique 🏺"
          },
          {
            time: "16-25s",
            visual: "Detailed shots of adding texture and details",
            narration: "Every curve tells a story",
            caption: "Handcrafted perfection 👐"
          },
          {
            time: "26-30s",
            visual: "Final reveal of the finished piece",
            narration: "From earth to art - that's the artisan way",
            caption: "Would you try pottery? 💭"
          }
        ],
        cta: "Follow for more behind-the-scenes artisan magic! ✨",
        hashtags: "#pottery #artisan #handmade #satisfying #craft #process #clayart #maker"
      };
      
      setScript(mockScript);
      setIsGenerating(false);
    }, 2000);
  };

  const copyScript = () => {
    const scriptText = `
${script.hook}

${script.scenes.map((scene: any) => 
  `${scene.time}: ${scene.visual}\nNarration: "${scene.narration}"\nCaption: "${scene.caption}"`
).join('\n\n')}

CTA: ${script.cta}
Hashtags: ${script.hashtags}
Duration: ${script.duration}
    `.trim();
    
    navigator.clipboard.writeText(scriptText);
    toast({
      title: "Script copied!",
      description: "Your video script has been copied to clipboard.",
    });
  };

  const downloadScript = () => {
    const scriptText = `Video Script - ${platform.toUpperCase()}\n\nHook: ${script.hook}\n\n${script.scenes.map((scene: any) => 
      `Scene ${scene.time}:\nVisual: ${scene.visual}\nNarration: ${scene.narration}\nCaption: ${scene.caption}`
    ).join('\n\n')}\n\nCall to Action: ${script.cta}\nHashtags: ${script.hashtags}\nDuration: ${script.duration}`;
    
    const blob = new Blob([scriptText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `video-script-${platform}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Script downloaded!",
      description: "Your video script has been saved as a text file.",
    });
  };

  return (
    <section id="video-script" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bring Your Art to Life
          </h2>
          <p className="font-body text-xl text-warm-brown/80 max-w-2xl mx-auto">
            Create engaging video scripts that showcase your craft process and connect with your audience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card className="p-8 shadow-card bg-card/80 backdrop-blur-sm border-sage/20">
            <div className="mb-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Describe Your Process
              </h3>
              <p className="font-body text-warm-brown/70 text-sm">
                Tell us about your craft process, techniques, and what makes it special
              </p>
            </div>
            
            <Textarea
              placeholder="e.g., I throw pottery on a wheel using local clay, shape it by hand, add intricate carved patterns, then fire it in a wood kiln for 3 days..."
              value={craftProcess}
              onChange={(e) => setCraftProcess(e.target.value)}
              className="min-h-[150px] font-body text-base resize-none border-sage/30 focus:border-terracotta mb-4"
            />
            
            <div className="mb-6">
              <label className="font-body text-warm-brown font-medium block mb-2">
                Platform
              </label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger className="border-sage/30 focus:border-terracotta">
                  <SelectValue placeholder="Choose video platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tiktok">TikTok (30s)</SelectItem>
                  <SelectItem value="reels">Instagram Reels (60s)</SelectItem>
                  <SelectItem value="shorts">YouTube Shorts (45s)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={generateScript}
              disabled={isGenerating}
              className="w-full bg-terracotta hover:bg-terracotta-light text-white font-heading font-semibold shadow-warm"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Creating Script...
                </>
              ) : (
                <>
                  <Video className="mr-2 h-4 w-4" />
                  Generate Video Script
                </>
              )}
            </Button>
          </Card>

          {/* Script Display */}
          <Card className="p-8 shadow-card bg-cream/50 backdrop-blur-sm border-sage/20">
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Video Script
                </h3>
                {script && (
                  <Badge variant="outline" className="border-sage text-sage">
                    {script.duration}
                  </Badge>
                )}
              </div>
              
              {script && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyScript}
                    className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadScript}
                    className="border-sage text-sage hover:bg-sage hover:text-white"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            
            <div className="min-h-[300px]">
              {script ? (
                <div className="space-y-6 font-body text-warm-brown">
                  {/* Hook */}
                  <div className="p-4 bg-terracotta/10 rounded-lg border border-terracotta/20">
                    <h4 className="font-semibold text-terracotta mb-2">Hook (Opening)</h4>
                    <p>{script.hook}</p>
                  </div>
                  
                  {/* Scenes */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sage">Scenes</h4>
                    {script.scenes.map((scene: any, index: number) => (
                      <div key={index} className="p-4 bg-background/60 rounded-lg border border-sage/20">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {scene.time}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div><strong>Visual:</strong> {scene.visual}</div>
                          <div><strong>Narration:</strong> "{scene.narration}"</div>
                          <div><strong>Caption:</strong> {scene.caption}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA & Hashtags */}
                  <div className="space-y-3">
                    <div className="p-3 bg-sage/10 rounded border border-sage/20">
                      <strong className="text-sage">Call to Action:</strong> {script.cta}
                    </div>
                    <div className="p-3 bg-muted/50 rounded border border-muted text-xs">
                      <strong>Hashtags:</strong> {script.hashtags}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-warm-brown/50 font-body italic">
                  Your video script will appear here as a storyboard...
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoScriptGenerator;