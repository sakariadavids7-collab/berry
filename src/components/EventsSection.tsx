import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  { name: "Neighbourgoods Market", date: "March 15, 2026", city: "Cape Town", desc: "Find us at our favourite weekend market with fresh berries all day." },
  { name: "Weekend Strawberry Pop-Up", date: "March 22, 2026", city: "Johannesburg", desc: "A special weekend pop-up with limited-edition flavours." },
  { name: "Cape Town Food Festival", date: "April 5, 2026", city: "Cape Town", desc: "Join us at the biggest food festival of the year." },
];

const EventsSection = () => (
  <section id="events" className="py-20 px-4 bg-card">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
      >
        Next Events
      </motion.h2>

      <div className="space-y-4 mb-10">
        {events.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-2xl p-6 shadow-card flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-foreground">{e.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
              <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {e.date}</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {e.city}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Pop-up locations change often — follow us for updates.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            📸 Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            🎵 TikTok
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EventsSection;
