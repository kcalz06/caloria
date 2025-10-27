import { Heart, Code, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-base font-sans mb-2 inline-block border-4 border-border bg-primary text-primary-foreground px-6 py-3" data-testid="text-page-title">
            ╔═══ ABOUT ME ═══╗
          </h1>
        </div>

        <div className="space-y-8">
          <div className="border-4 border-border bg-card p-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 border-4 border-border bg-accent flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-primary" />
              </div>
            </div>

            <div className="space-y-4 text-xs font-mono leading-relaxed">
              <p data-testid="text-about-intro">
                hi there! welcome to my little pixel corner of the internet.
              </p>

              <p>
                this is where i share my thoughts, projects, and random musings about life, code, and everything in between. i love pixel art, cozy vibes, and creating things that make people smile.
              </p>

              <div className="border-t-4 border-border pt-4 mt-4">
                <h2 className="text-sm font-sans mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  things i love
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• pixel art and retro aesthetics</li>
                  <li>• late night coding sessions</li>
                  <li>• coffee and lofi music</li>
                  <li>• creating cozy digital spaces</li>
                </ul>
              </div>

              <div className="border-t-4 border-border pt-4 mt-4">
                <h2 className="text-sm font-sans mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  what i do
                </h2>
                <p className="text-muted-foreground">
                  i spend my time building things, learning new skills, and documenting my journey through this blog. feel free to stick around and follow along!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground">
              thanks for visiting my pixel world~
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
