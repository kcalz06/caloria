import PixelCursor from '../PixelCursor';

export default function PixelCursorExample() {
  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Move your mouse to see the pixel cursor</p>
      <PixelCursor />
    </div>
  );
}
