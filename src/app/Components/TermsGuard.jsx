"use client"
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Header from './Uiux/Header';
import Footer from './Uiux/Footer';

export default function TermsGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const termsAccepted = localStorage.getItem('termsAccepted');
    
    // If terms not accepted and not on terms page, redirect to terms
    if (termsAccepted !== 'true' && pathname !== '/terms') {
      router.push('/terms');
    }
    
    // If terms accepted and on terms page, redirect to home
    if (termsAccepted === 'true' && pathname === '/terms') {
      router.push('/');
    }
  }, [pathname, router]);

  // Don't render children if terms not accepted and not on terms page
  const termsAccepted = typeof window !== 'undefined' ? localStorage.getItem('termsAccepted') : null;
  
  if (termsAccepted !== 'true' && pathname !== '/terms') {
    return null; // Will redirect to terms page
  }

  // If on terms page, render without header/footer
  if (pathname === '/terms') {
    return children;
  }

  // For all other pages, render with header/footer
  return (
    <div className="relative max-w-[1960px] m-auto overflow-hidden">
      <div className="absolute w-full top-4 z-[10]">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}
