import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Chocolate strawberry with white drizzle" },
  { src: g2, alt: "Box of assorted chocolate strawberries" },
  { src: g3, alt: "Elegant chocolate strawberry with gold leaf" },
  { src: g4, alt: "Strawberry pops with sprinkles" },
  { src: g5, alt: "Chocolate being poured over strawberry" },
  { src: g6, alt: "Event platter of chocolate strawberries" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 px-4 bg-card">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
      >
        Berry Delicious
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl shadow-card group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
