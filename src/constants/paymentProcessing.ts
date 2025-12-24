// API endpoints
const API_BASE_FALLBACK = 'http://localhost:3000/api';
export const API_BASE: string = (import.meta.env.VITE_API_BASE as string) ?? API_BASE_FALLBACK;

// Canada
export const STRIPE_PUBLISHABLE_KEY_CANADA: string = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_CANADA as string;
// USA
export const STRIPE_PUBLISHABLE_KEY_USA: string = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_USA as string;
