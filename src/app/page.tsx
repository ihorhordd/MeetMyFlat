import { Theme } from '@radix-ui/themes';
import { CardWrapper } from './cards/CardWrapper';

const appartments = [
  {
    id: 1,
    title: 'Sunny Loft in City Center',
    description: 'A beautiful, sunlit loft in the heart of the city. 2 beds, 1 bath.',
    images: ['/wombat.jpg', '/samoyed.jpg', '/Adult-capybara.webp'],
  },
  {
    id: 2,
    title: 'Cozy Suburban Home',
    description: 'Quiet neighborhood, perfect for families. 3 beds, 2 baths.',
    images: ['/wombat.jpg', '/samoyed.jpg', '/Adult-capybara.webp'],
  },
  {
    id: 3,
    title: 'Modern Apartment with View',
    description: 'Stunning views, modern amenities, close to transport.',
    images: ['/Adult-capybara.webp', '/wombat.jpg', '/samoyed.jpg'],
  },
];

export default function Home() {
  return (
    <Theme accentColor="purple">
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-background)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <CardWrapper appartments={appartments} />
      </div>
    </Theme>
  );
}
