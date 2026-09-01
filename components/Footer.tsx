export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-ink md:flex-row">
        <p>© {new Date().getFullYear()} Shift Agency</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-cream">
            Instagram
          </a>
          <a href="#" className="hover:text-cream">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
