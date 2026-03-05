const Footer = () => (
  <footer className="py-10 px-4 border-t border-border bg-card">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-display font-semibold text-foreground">Naughty Berry 🍓</span>
      <div className="flex items-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">TikTok</a>
        <a href="mailto:hello@naughtyberry.co" className="hover:text-foreground transition-colors">hello@naughtyberry.co</a>
      </div>
      <span>© {new Date().getFullYear()} Naughty Berry</span>
    </div>
  </footer>
);

export default Footer;
