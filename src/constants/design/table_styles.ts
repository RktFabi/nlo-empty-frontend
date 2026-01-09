// Create new file table_style.ts under src/constants/design folder 
// src/constants/design/table_style.ts -- paste this code

export const TABLE_PAGE_MIN_HEIGHT = '100vh';
export const TABLE_PAGE_PADDING_Y = 4;
export const TABLE_PAGE_PADDING_X_SM = 2;
export const TABLE_PAGE_PADDING_X_MD = 4;
export const TABLE_PAGE_GRADIENT_HEIGHT = 240;
export const TABLE_PAGE_GRADIENT_OPACITY = 0.1;
export const TABLE_CONTENT_Z_INDEX = 1;

export const TABLE_CARD_RADIUS = 6;
export const TABLE_CARD_SHADOW = 6;
export const TABLE_CARD_BORDER_WIDTH = '1px';

// Add this section to src/constants/onboarding.ts
// Just know that this NL format here doesn't reflect our real NL at all
// In the next sections, the Backend will provide us the real values + real format
export const NEEDS = [
  {
    id: 'NL-2024-001',
    title: 'Winter Coats for Kids',
    org: 'Safe Haven Youth',
    category: 'Clothing',
    quantity: 50,
    urgency: 'Urgent',
    status: 'Active',
    date: 'Oct 24, 2024',
  },
  {
    id: 'NL-2024-002',
    title: 'Canned Food Drive',
    org: 'City Food Bank',
    category: 'Food',
    quantity: 200,
    urgency: 'Normal',
    status: 'Active',
    date: 'Oct 22, 2024',
  },
];