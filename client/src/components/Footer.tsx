import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-4 border-border bg-background mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span>made with</span>
            <Heart className="w-3 h-3 fill-primary text-primary" />
            <span>and pixels</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 chibi blog
          </p>
        </div>
      </div>
    </footer>
  );
}
