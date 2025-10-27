import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router, Route } from 'wouter';
import BlogDetail from '../../pages/BlogDetail';

const mockPost = {
  id: '1',
  title: 'welcome to my pixel world',
  excerpt: 'first post on my new chibi blog! excited to share my thoughts...',
  content: 'Hi everyone! Welcome to my little corner of the internet.\n\nI\'ve been wanting to start a blog for a while now, and I finally did it! This is going to be a place where I share my thoughts, projects, and daily adventures.\n\nStay tuned for more updates!',
  imageUrl: '/attached_assets/generated_images/Cozy_pixel_art_header_e2517497.png',
  publishedAt: new Date('2025-10-20'),
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async () => mockPost,
      retry: false,
    },
  },
});

export default function BlogDetailExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="bg-background min-h-screen">
          <Route path="/post/:id" component={BlogDetail} />
          <Route path="/" component={BlogDetail} />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
