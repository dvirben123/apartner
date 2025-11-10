
import React from 'react';

// Main Logo
export const ApartnerLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="#1a3a4f"/>
        <path d="M50 5L90.45 28.59V71.41L50 95L9.55 71.41V28.59L50 5Z" stroke="#C4A87E" strokeWidth="3"/>
        <path d="M50 35L67.32 45V65L50 75L32.68 65V45L50 35Z" stroke="#C4A87E" strokeWidth="3"/>
        <path d="M50 50V70" stroke="#C4A87E" strokeWidth="3"/>
        <path d="M50 50L58.66 55" stroke="#C4A87E" strokeWidth="3"/>
        <path d="M58.66 61L58.66 55" stroke="#C4A87E" strokeWidth="3"/>
        <path d="M55.13 63L58.66 61" stroke="#C4A87E" strokeWidth="3"/>
    </svg>
);


// App Store Icons
export const AppStoreIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="160" height="53" viewBox="0 0 160 53" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="160" height="53" rx="12" fill="black"/>
    <path d="M36.1082 25.135C36.1082 23.4253 37.1362 22.4593 39.4627 22.3353C38.9867 20.4415 37.3802 19.3514 35.358 19.3514C32.7483 19.3514 30.664 21.1372 29.574 23.4873C26.5485 23.4873 24.16 25.7551 24.16 28.6729C24.16 31.7748 26.8566 33.7446 29.82 33.7446C30.848 33.7446 31.814 33.4366 32.532 32.8806C33.684 34.6044 35.5421 35.5084 37.4622 35.4464C37.5242 35.4464 37.5862 35.4464 37.6482 35.4464C37.5242 35.4464 37.4002 35.4464 37.2762 35.4464C37.3382 35.4464 37.4002 35.4464 37.4622 35.4464C39.7507 35.3844 41.2946 33.9287 41.2946 31.4068C41.2946 28.5489 39.3386 27.6449 36.1082 25.135ZM35.0501 18.051C36.2641 16.5953 37.0441 14.6395 36.9201 12.7457C34.7701 12.8697 32.8741 14.1636 31.5981 15.8113C30.3221 17.3421 29.4181 19.36 29.6021 21.3157C31.9285 21.3157 33.7866 19.5919 35.0501 18.051Z" fill="white"/>
    <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Poppins" fontSize="10" fontWeight="300" letterSpacing="0.05em"><tspan x="56" y="24.5">Download on the</tspan></text>
    <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Poppins" fontSize="16" fontWeight="500" letterSpacing="0.02em"><tspan x="56" y="42.5">App Store</tspan></text>
  </svg>
);

export const GooglePlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="178" height="53" viewBox="0 0 178 53" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="178" height="53" rx="12" fill="black"/>
    <path d="M25.7533 11.232L36.8596 16.7852L32.1883 21.4565L25.7533 11.232Z" fill="#FBC02D"/>
    <path d="M25.7533 41.7679L32.1883 31.5434L36.8596 36.2147L25.7533 41.7679Z" fill="#EA4335"/>
    <path d="M43.9189 26.4999L38.4891 21.0701L36.8596 16.7852L24 10.5V42.5L36.8596 36.2147L38.4891 31.9298L43.9189 26.4999Z" fill="#4CAF50"/>
    <path d="M36.8596 26.5L32.1883 21.4566L25.7533 11.2321L24 10.5V42.5L25.7533 41.7679L32.1883 31.5434L36.8596 26.5Z" opacity="0.2" fill="url(#paint0_linear_10_3)"/>
    <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Poppins" fontSize="10" fontWeight="300" letterSpacing="0.05em"><tspan x="58" y="24.5">GET IT ON</tspan></text>
    <text fill="white" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Poppins" fontSize="16" fontWeight="500" letterSpacing="0.02em"><tspan x="58" y="42.5">Google Play</tspan></text>
    <defs>
      <linearGradient id="paint0_linear_10_3" x1="24" y1="26.5" x2="36.8596" y2="26.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);


// Yardi Logo
export const YardiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="35" fontWeight="bold" fill="#003366">YARDI</text>
    </svg>
);

// Feature Icons
export const FeatureIcon: React.FC<{ name: 'rent' | 'maintenance' | 'community' | 'smart' | 'marketplace' | 'amenities' | 'dashboard' | 'revenue' | 'permissions' } & React.SVGProps<SVGSVGElement>> = ({ name, ...props }) => {
  switch (name) {
    case 'rent':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      );
    case 'maintenance':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      );
    case 'community':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'smart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-6a3 3 0 013-3h1a3 3 0 013 3v6M9 18v-6a3 3 0 00-3-3H5a3 3 0 00-3 3v6M12 18h0M9 18h0" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18V6m0 0a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case 'marketplace':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'amenities':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'dashboard':
       return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
        </svg>
      );
    case 'revenue':
       return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4v-1m-4 0v1H8a1 1 0 01-1-1V7a1 1 0 011-1h4v1z" />
        </svg>
      );
    case 'permissions':
       return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    default:
      return <svg />;
  }
};
