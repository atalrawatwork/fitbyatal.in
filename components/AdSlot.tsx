'use client';

import { useEffect, useRef } from 'react';

type Props = {
  slotId: string;
  format?: 'horizontal' | 'rectangle' | 'sticky-bottom' | 'in-article';
  className?: string;
};

// Reserve exact space per format so the ad never causes layout shift,
// even before the AdSense script loads or if it's blocked.
const SIZES: Record<NonNullable<Props['format']>, string> = {
  horizontal: 'min-h-[90px] w-full',
  rectangle: 'min-h-[280px] w-full max-w-[336px] mx-auto',
  'sticky-bottom': 'min-h-[60px] w-full',
  'in-article': 'min-h-[250px] w-full',
};

export default function AdSlot({ slotId, format = 'rectangle', className = '' }: Props) {
  const ref = useRef<HTMLModElement>(null);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) return;
    try {
      // @ts-ignore - adsbygoogle is injected by the external script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* AdSense not yet loaded — safe to ignore */
    }
  }, [clientId]);

  if (!clientId) {
    // Dev / not-configured fallback keeps the reserved space visible
    return (
      <div className={`ad-slot ${SIZES[format]} ${className}`}>
        Ad space ({format})
      </div>
    );
  }

  return (
    <div className={`${SIZES[format]} ${className}`}>
      {/* @ts-ignore */}
      <ins
        ref={ref}
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
