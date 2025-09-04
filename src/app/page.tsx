import { Theme} from '@radix-ui/themes';
import { CardProvider } from './cards/CardProvider';
import { IAppartment } from './models/cards';

const appartments: IAppartment[] = [
  {
    id: 1,
    title: 'Sunny Loft in City Center',
    description: 'A beautiful, sunlit loft in the heart of the city. 2 beds, 1 bath.',
    images: ['/wombat.jpg', '/samoyed.jpg', '/Adult-capybara.webp'],
    datePosted: '2025-01-01',
    priceDetails: {
      deposit: 1000,
      negotiable: false,
      rentPrice: 1000,
      utilities: 500
    },
    type: 'appartment'
  },
  {
    id: 2,
    title: 'Cozy Suburban Home',
    description: 'Quiet neighborhood, perfect for families. 3 beds, 2 baths.',
    images: ['/samoyed.jpg', '/wombat.jpg', '/Adult-capybara.webp'],
    datePosted: '2025-01-02',
    priceDetails: {
      deposit: 1000,
      negotiable: false,
      rentPrice: 1000,
      utilities: 500
    },
    type: 'appartment'
  },
  {
    id: 3,
    title: 'Modern Apartment with View',
    description: 'Stunning views, modern amenities, close to transport.',
    images: ['/Adult-capybara.webp', '/wombat.jpg', '/samoyed.jpg'],
    datePosted: '2025-01-03',
    priceDetails: {
      deposit: 1000,
      negotiable: false,
      rentPrice: 1000,
      utilities: 500
    },
    type: 'appartment'
  },
];

export default function Home() {
  return (
      <Theme accentColor="purple" appearance="dark">
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-background)',
          position: 'relative'
        }}>
          <CardProvider cardsArr={appartments} />
        </div>
      </Theme>
  );
}
