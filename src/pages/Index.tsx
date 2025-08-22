import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StorytellerStudio from "@/components/StorytellerStudio";
import MarketingAssistant from "@/components/MarketingAssistant";
import VideoScriptGenerator from "@/components/VideoScriptGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StorytellerStudio />
      <MarketingAssistant />
      <VideoScriptGenerator />
      <Footer />
    </div>
  );
};

export default Index;
