import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarDays, MessageSquare, Truck } from "lucide-react";

const steps = [
  { icon: CalendarDays, title: "Choose your date", desc: "Pick the date for your event." },
  { icon: MessageSquare, title: "Tell us about your event", desc: "Share the details so we can plan." },
  { icon: Truck, title: "We pop up & serve", desc: "We arrive and serve fresh berries!" },
];

const eventTypes = ["Weddings", "Birthdays", "Corporate events", "Markets", "Private parties"];

const HireSection = () => (
  <section id="hire" className="py-20 px-4 gradient-soft">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Hire Naughty Berry
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          Bring the Naughty Berry experience to your next event.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {eventTypes.map((e) => (
            <span key={e} className="bg-primary/20 text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
              {e}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary-foreground">
              {i + 1}
            </div>
            <s.icon className="w-6 h-6 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <Link to="/book">
        <Button size="lg" className="rounded-full px-10 shadow-elevated text-base">
          Book Naughty Berry
        </Button>
      </Link>
    </div>
  </section>
);

export default HireSection;
