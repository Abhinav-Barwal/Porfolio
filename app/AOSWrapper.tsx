'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

export default function AOSWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
    AOS.refresh()
  }, [pathname])

  return <>{children}</>
}
