// [Pendiente] Reemplazar placeholders por IDs reales cuando se despliegue a producción

export const SITE_CONFIG = {
  siteUrl: "https://bordadoscordoba.com", // [Pendiente]
  businessName: "Bordados Córdoba",
  whatsappNumber: "+529512078403",
  whatsappUrl: "https://wa.me/529512078403",
  
  // Analytics & Tracking
  // Si se usa GTM, gaMeasurementId no cargará el script directo de GA4 para evitar duplicidad.
  gaMeasurementId: "G-XXXXXXXXXX", // [Pendiente] Google Analytics 4 ID
  gtmId: "GTM-XXXXXXX", // [Pendiente] Google Tag Manager ID
  
  // Firebase
  firebaseProjectId: "bordados-cordoba"
};
