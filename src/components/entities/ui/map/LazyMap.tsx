'use client';

import { Loader } from '@/components/shared';
import dynamic from 'next/dynamic';

export const LazyMap = dynamic(
  () => import('@/components/entities/ui/map/Map'),
  {
    ssr: false,
    loading: () => <Loader className="border-t-darkblue-tur" />,
  }
);
