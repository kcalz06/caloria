import { useQuery } from '@tanstack/react-query';
import type { BlogPost } from '@shared/schema';
import BlogCard from '@/components/BlogCard';
import { Loader2 } from 'lucide-react';

export default function Timeline() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" data-testid="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-base font-sans mb-2 inline-block border-4 border-border bg-primary text-primary-foreground px-6 py-3" data-testid="text-page-title">
            ╔═══ TIMELINE ═══╗
          </h1>
          <p className="text-xs font-mono text-muted-foreground mt-4">
            all my thoughts, one pixel at a time
          </p>
        </div>

        <div className="space-y-8">
          {posts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
