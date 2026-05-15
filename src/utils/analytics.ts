export const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtQ83HLKu9OnJeFKdvtDL0AMtBo2xx8SLvJt5hwl2e1oAlDfiXGGAo1KsTGm8uJSXV/exec';

export const trackEvent = async (eventType: string, details: any = {}) => {
  if (!SCRIPT_URL || SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
    console.warn('Analytics URL not set. Event not tracked:', eventType);
    return;
  }

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors for simple requests from frontend
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        details,
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackEvent('page_view', {
      title: document.title,
      search: location.search
    });
  }, [location]);

  return null;
};
