import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

const BookUs = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", location: "", guests: "", message: "",
  });

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent! We'll be in touch soon 🍓");
    setForm({ name: "", email: "", phone: "", date: "", location: "", guests: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4 min-h-screen gradient-soft">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
              Book Naughty Berry
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              We're a popup dessert truck — we come to your event. 🍓
            </p>

            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-card space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} className="rounded-xl mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="rounded-xl mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="rounded-xl mt-1" />
              </div>
              <div>
                <Label htmlFor="date">Event date</Label>
                <Input id="date" type="date" required value={form.date} onChange={(e) => update("date", e.target.value)} className="rounded-xl mt-1" />
              </div>
              <div>
                <Label htmlFor="location">Event location</Label>
                <Input id="location" required value={form.location} onChange={(e) => update("location", e.target.value)} className="rounded-xl mt-1" />
              </div>
              <div>
                <Label htmlFor="guests">Estimated guest count</Label>
                <Input id="guests" type="number" value={form.guests} onChange={(e) => update("guests", e.target.value)} className="rounded-xl mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Message or notes</Label>
                <Textarea id="message" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className="rounded-xl mt-1" />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full shadow-elevated text-base">
                Send Booking Request
              </Button>

              <a
                href="https://wa.me/27000000000?text=Hi!%20I'd%20like%20to%20book%20Naughty%20Berry"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button type="button" variant="outline" size="lg" className="w-full rounded-full text-base gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookUs;
