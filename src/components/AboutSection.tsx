import { motion } from "framer-motion";
import { Cherry, Candy, Sparkles } from "lucide-react";

const features = [
  { icon: Cherry, title: "Fresh Dipped", desc: "Every berry is dipped to order in smooth, melted chocolate." },
  { icon: Candy, title: "Premium Chocolate", desc: "We use only the finest Belgian chocolate for the perfect coat." },
  { icon: Sparkles, title: "Fun Toppings", desc: "Sprinkles, nuts, coconut, Oreo crumbs — go wild." },
];

const AboutSection = () => (
  <section id="about" className="py-20 px-4 gradient-soft">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          About Naughty Berry
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Naughty Berry is a popup dessert experience serving irresistible chocolate-covered strawberries.
          Each berry is dipped fresh in smooth chocolate and finished with delicious toppings — the perfect
          balance of sweet, indulgent, and just a little naughty. You'll find Naughty Berry popping up at
          markets, festivals, and private events.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
