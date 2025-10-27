import { Router } from 'wouter';
import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  const mockPost = {
    id: '1',
    title: 'welcome to my pixel world',
    excerpt: 'first post on my new chibi blog! excited to share my thoughts...',
    content: 'Full content here',
    imageUrl: '/attached_assets/generated_images/Cozy_pixel_art_header_e2517497.png',
    publishedAt: new Date('2025-10-20'),
  };

  return (
    <Router>
      <div className="p-8 bg-background max-w-2xl">
        <BlogCard post={mockPost} />
      </div>
    </Router>
  );
}
