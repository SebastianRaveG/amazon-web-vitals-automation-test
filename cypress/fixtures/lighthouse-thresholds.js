// Umbrales para métricas en Desktop
export const thresholdsDesktop = {
  performance: 50,
  'first-contentful-paint': 3000,
  'largest-contentful-paint': 3000,
  'total-blocking-time': 200,
  'cumulative-layout-shift': 0.1,
  'speed-index': 3000,
};

// Umbrales para métricas en Mobile
export const thresholdsMobile = {
  performance: 50,
  'first-contentful-paint': 4000,
  'largest-contentful-paint': 4000,
  'total-blocking-time': 300,
  'cumulative-layout-shift': 0.2,
  'speed-index': 4000,
};

// Configuración para Desktop
export const configDesktop = {
  formFactor: 'desktop',
  screenEmulation: { disabled: true }
};

// Configuración para Mobile
export const configMobile = {
  formFactor: 'mobile',
  screenEmulation: { disabled: false }
};
