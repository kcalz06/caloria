import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import type { BlogPost } from '@shared/schema';
import { Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

export default function BlogDetail() {
  const [, params] = useRoute('/post/:id');
  const postId = params?.id;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ['/api/blog-posts', postId],
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" data-testid="loading-spinner" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm font-mono">post not found</p>
        <Link 
          href="/"
          className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground border-2 border-primary-border text-xs hover-elevate active-elevate-2"
        >
          back to timeline
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-border text-xs hover-elevate active-elevate-2" 
          data-testid="button-back"
        >
          <ArrowLeft className="w-3 h-3" />
          BACK TO TIMELINE
        </Link>

        <article className="border-4 border-border bg-card p-6" data-testid="article-blog-post">
          {post.imageUrl && (
            <div className="border-4 border-border mb-6 overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                style={{ imageRendering: 'pixelated' }}
                data-testid="img-blog-hero"
              />
            </div>
          )}

          <div className="flex items-center gap-2 mb-6 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <time dateTime={new Date(post.publishedAt).toISOString()} data-testid="text-blog-date">
              {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
            </time>
          </div>

          <h1 className="text-base font-sans mb-6 leading-relaxed" data-testid="text-blog-title">
            {post.title}
          </h1>

          <div className="prose prose-sm max-w-none">
            <p className="text-xs font-mono leading-relaxed whitespace-pre-wrap" data-testid="text-blog-content">
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
