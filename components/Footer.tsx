export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Ahmed Bahaaeldin Darwish — All rights reserved.
      </div>
    </footer>
  );
}
