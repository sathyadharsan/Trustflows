export const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtQ83HLKu9OnJeFKdvtDL0AMtBo2xx8SLvJt5hwl2e1oAIDfiXGGAo1KsTGm8uJSXV/exec';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Helper to get OS
const getOS = () => {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac")) return "MacOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iOS") || ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  return "Unknown OS";
};

// Helper to get Browser
const getBrowser = () => {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("SamsungBrowser")) return "Samsung Internet";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  if (ua.includes("Trident")) return "Internet Explorer";
  if (ua.includes("Edge") || ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Unknown Browser";
};

// Cache IP data to avoid hitting the API on every click
const getCachedIpData = async () => {
  const cached = sessionStorage.getItem('trustflows_ip_data');
  if (cached) return JSON.parse(cached);
  
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    sessionStorage.setItem('trustflows_ip_data', JSON.stringify(data));
    return data;
  } catch (err) {
    return null;
  }
};

export const trackEvent = async (eventType: string, details: any = {}) => {
  if (!SCRIPT_URL) return;

  try {
    const ipData = await getCachedIpData();
    const nav = navigator as any;

    const payload = {
      timestamp: new Date().toISOString(),
      localTime: new Date().toLocaleString(),
      eventType,
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || 'Direct',
      
      // IP & Location
      ip: ipData?.ip || 'Unknown',
      city: ipData?.city || 'Unknown',
      region: ipData?.region || 'Unknown',
      country: ipData?.country_name || 'Unknown',
      isp: ipData?.org || 'Unknown',
      latLong: ipData ? `${ipData.latitude}, ${ipData.longitude}` : 'Unknown',

      // Device
      deviceType: /Mobile|Tablet|iPad|iPhone|Android/i.test(navigator.userAgent) ? 'Mobile/Tablet' : 'Desktop',
      os: getOS(),
      browser: getBrowser(),
      userAgent: navigator.userAgent,
      
      // Hardware & Screen
      resolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      ram: nav.deviceMemory ? `${nav.deviceMemory}GB` : 'Unknown',
      cores: navigator.hardwareConcurrency || 'Unknown',
      
      // Environment
      connection: nav.connection ? nav.connection.effectiveType : 'Unknown',
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
      cookiesEnabled: navigator.cookieEnabled,

      // Additional custom details passed in
      details: details
    };

    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error('Analytics tracking failed', error);
  }
};

export const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackEvent('page_view', { search: location.search });
  }, [location]);

  return null;
};
