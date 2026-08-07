import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to top on route change
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}
