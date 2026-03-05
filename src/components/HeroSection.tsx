import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-strawberries.jpg";

const HeroSection = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Chocolate covered strawberries" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-body font-medium tracking-widest uppercase text-muted-foreground mb-4">
            🍓 Popup Dessert Experience
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4">
            Naughty Berry
          </h1>
          <p className="font-display text-xl md:text-2xl italic text-muted-foreground mb-4">
            Sweet. Juicy. Just a little naughty.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-8">
            Fresh chocolate-covered strawberries served at popups, markets, and private events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="rounded-full px-8 shadow-elevated text-base">
                Book Us
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base"
              onClick={scrollToEvents}
            >
              See Next Events
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating strawberry */}
      <div className="absolute bottom-10 right-10 text-4xl animate-float hidden md:block">🍓</div>
      <div className="absolute top-32 left-10 text-2xl animate-float hidden md:block" style={{ animationDelay: "1s" }}>🍫</div>
    </section>
  );
};

export default HeroSection;
