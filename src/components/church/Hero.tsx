import { Flame, PlayCircle, ChevronDown, Users, Heart, BookOpen, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bg5 from "@/assets/bg5.jpeg"; // Make sure bg5.jpg exists in src/assets

const features = [
  {
    icon: Users,
    title: "Community",
    description: "Join a loving family of believers committed to growth",
  },
  {
    icon: Heart,
    title: "Outreach",
    description: "Serving our community with compassion and love",
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    description: "Deep dive into God's Word every week",
  },
  {
    icon: Music,
    title: "Worship",
    description: "Experience powerful Spirit-filled worship",
  },
];

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg5})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--fire)/0.2),transparent_50%)]" />
      
      {/* Animated elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-fire/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 mb-8 animate-fade-in">
            <Flame className="h-4 w-4 text-fire" />
            <span className="text-sm font-medium text-primary-foreground">Welcome to Holy Ghost Fire International</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience the{" "}
            <span className="text-gradient-gold">Power</span> of the{" "}
            <span className="text-primary-foreground/90">Holy Spirit</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Join our vibrant community of believers as we worship, grow together in faith, 
            and experience God's transforming presence in our lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg shadow-xl"
            >
              Join Us This Sunday
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#sermons")}
              className="px-8 py-6 text-lg group border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Sermons
            </Button>
          </div>

          {/* Service Time */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-primary-foreground/70 mb-2">Join us every Sunday</p>
            <p className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground">
              9:00 AM & 11:00 AM
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "1s" }}>
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-card/90 backdrop-blur-sm border-border/50 shadow-lg hover-lift group cursor-pointer"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};
