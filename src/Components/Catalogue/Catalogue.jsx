import { Button } from '@mui/material';
import Image from 'next/image';
import { CATALOGUE_DATA, UI_CONFIG } from '@/constants';

/**
 * Catalogue Component
 * Displays product category showcases in a grid layout
 * @returns {JSX.Element} Catalogue component
 */
export default function Catalogue() {
  return (
    <section className="w-full flex flex-col sm:flex-row items-center bg-[#f8f8f8]">
      {CATALOGUE_DATA.map((item) => (
        <div
          key={item.id}
          className="relative w-[90%] h-[50vh] lg:h-[95vh] rounded-[20px] mb-5 sm:mb-0 sm:m-5 sm:first:mr-0 bg-[#ebebeb] flex items-center justify-center group hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={item.image}
            alt={`${item.heading} collection - Zanttico`}
            fill
            className="object-cover rounded-[20px]"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
            priority={item.id === 1}
          />
          
          <Button
            href={`/products?category=${item.category}`}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 2 },
              bgcolor: 'rgba(255, 255, 255, 0.7)',
              color: '#111111',
              fontWeight: 600,
              borderRadius: '999px',
              backdropFilter: 'blur(6px)',
              textTransform: 'none',
              opacity: 0.9,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                opacity: 1,
                transform: 'translate(-50%, -50%) scale(1.05)',
              },
            }}
          >
            Shop {item.heading}
          </Button>
        </div>
      ))}
    </section>
  );
}
