import { Navbar } from "@/components/church/Navbar";
import { Footer } from "@/components/church/Footer";
import { Users } from "lucide-react";

const executives = [
  {
    name: "Pastor John Doe",
    role: "Senior Pastor & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Leading the ministry with vision and passion for over 20 years."
  },
  {
    name: "Pastor Mary Doe",
    role: "Co-Pastor & Women's Ministry",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    bio: "Dedicated to empowering women and families in faith."
  },
  {
    name: "Elder James Smith",
    role: "Church Administrator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Overseeing church operations and community outreach programs."
  },
  {
    name: "Deacon Peter Johnson",
    role: "Youth Ministry Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    bio: "Inspiring the next generation to walk in faith and purpose."
  },
  {
    name: "Sister Grace Williams",
    role: "Worship Leader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Leading worship with excellence and a heart for God's presence."
  },
  {
    name: "Brother Michael Brown",
    role: "Missions Coordinator",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    bio: "Coordinating local and international mission efforts."
  },
];

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1920&h=600&fit=crop')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Users className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Meet Our Team</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Church Leadership
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Our dedicated team of spiritual leaders serving the Holy Ghost Fire International community with passion and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Executives Grid */}
        <section className="py-20 relative">
          <div 
            className="absolute inset-0 opacity-5 bg-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=400&fit=crop')",
              backgroundSize: "400px"
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((member, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/30"
                >
                  {/* Photo */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                        {member.role}
                      </span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=600&fit=crop')"
            }}
          />
          <div className="absolute inset-0 bg-primary/90" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Ministry Team
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals to serve in various capacities. 
              Contact us to learn about volunteer opportunities.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
