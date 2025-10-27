import { Link } from 'wouter';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import type { BlogPost } from '@shared/schema';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="border-4 border-border bg-card p-4 hover-elevate" data-testid={`card-blog-${post.id}`}>
      <div className="flex flex-col gap-4">
        {post.imageUrl && (
          <div className="border-4 border-border overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
              style={{ imageRendering: 'pixelated' }}
              data-testid={`img-blog-${post.id}`}
            />
          </div>
        )}

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <time dateTime={new Date(post.publishedAt).toISOString()} data-testid={`text-date-${post.id}`}>
            {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
          </time>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-sans leading-relaxed" data-testid={`text-title-${post.id}`}>
            {post.title}
          </h2>
          <p className="text-xs font-mono leading-relaxed text-muted-foreground" data-testid={`text-excerpt-${post.id}`}>
            {post.excerpt}
          </p>
        </div>

        <Link 
          href={`/post/${post.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border-2 border-primary-border text-xs hover-elevate active-elevate-2 w-fit" 
          data-testid={`button-read-${post.id}`}
        >
          READ MORE
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}
