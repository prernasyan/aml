
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export const updateSEO = (seoData: SEOData) => {
  // Update title
  document.title = seoData.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', seoData.description);
  }
  
  // Update meta keywords
  if (seoData.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }
  }
  
  // Update canonical URL
  if (seoData.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoData.canonical);
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', seoData.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', seoData.description);
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && seoData.canonical) {
    ogUrl.setAttribute('content', seoData.canonical);
  }
  
  if (seoData.ogImage) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', seoData.ogImage);
    }
  }
  
  // Update Twitter Card tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', seoData.title);
  }
  
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', seoData.description);
  }
  
  if (seoData.ogImage) {
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', seoData.ogImage);
    }
  }
  
  // Update robots meta tag
  const robots = document.querySelector('meta[name="robots"]');
  if (robots) {
    robots.setAttribute('content', seoData.noindex ? 'noindex, nofollow' : 'index, follow');
  }
};

export const addStructuredData = (structuredData: object) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};
