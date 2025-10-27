import { Link, useLocation } from 'wouter';
import { Home, Clock, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="border-b-4 border-border bg-background sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <a className="text-xs font-sans hover-elevate active-elevate-2 px-3 py-2 border-2 border-border" data-testid="link-home">
              CHIBI BLOG
            </a>
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/">
              <a
                className={`flex items-center gap-2 px-3 py-2 border-2 text-xs hover-elevate active-elevate-2 ${
                  location === '/' ? 'bg-accent' : ''
                }`}
                data-testid="link-timeline"
              >
                <Clock className="w-3 h-3" />
                <span className="hidden sm:inline">TIMELINE</span>
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`flex items-center gap-2 px-3 py-2 border-2 text-xs hover-elevate active-elevate-2 ${
                  location === '/about' ? 'bg-accent' : ''
                }`}
                data-testid="link-about"
              >
                <User className="w-3 h-3" />
                <span className="hidden sm:inline">ABOUT</span>
              </a>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
