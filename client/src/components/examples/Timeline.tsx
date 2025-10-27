import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from 'wouter';
import Timeline from '../../pages/Timeline';

const mockPosts = [
  {
    id: '1',
    title: 'welcome to my pixel world',
    excerpt: 'first post on my new chibi blog! excited to share my thoughts...',
    content: 'Full content',
    imageUrl: '/attached_assets/generated_images/Cozy_pixel_art_header_e2517497.png',
    publishedAt: new Date('2025-10-20'),
  },
  {
    id: '2',
    title: 'cozy coding sessions',
    excerpt: 'spent the afternoon coding with coffee and lofi music...',
    content: 'Full content',
    imageUrl: '/attached_assets/generated_images/Pixel_coffee_illustration_de0600eb.png',
    publishedAt: new Date('2025-10-22'),
  },
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async () => mockPosts,
      retry: false,
    },
  },
});

export default function TimelineExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="bg-background">
          <Timeline />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
