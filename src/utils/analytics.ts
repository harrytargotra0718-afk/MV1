// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  // Create script tag for Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href
  });
};

// Track events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.form_type || 'general',
      value: parameters.value || 1,
      ...parameters
    });
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formType: string, formName: string) => {
  trackEvent('form_submit', {
    form_type: formType,
    form_name: formName,
    event_category: 'lead_generation',
    event_label: formType
  });
};

// Track conversions
export const trackConversion = (conversionType: string, value: number = 1) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    event_category: 'conversion',
    event_label: conversionType
  });
};

// Track downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    event_category: 'engagement',
    event_label: 'download'
  });
};

// Track phone calls
export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call', {
    phone_number: phoneNumber,
    event_category: 'engagement',
    event_label: 'phone_call'
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (phoneNumber: string) => {
  trackEvent('whatsapp_click', {
    phone_number: phoneNumber,
    event_category: 'engagement',
    event_label: 'whatsapp'
  });
};

// Enhanced ecommerce tracking for real estate
export const trackPropertyInterest = (propertyType: string, propertyValue: string) => {
  trackEvent('property_interest', {
    property_type: propertyType,
    property_value: propertyValue,
    event_category: 'real_estate',
    event_label: propertyType
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
    event_category: 'engagement',
    event_label: `${percentage}%`
  });
};