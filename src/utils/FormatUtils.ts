// Utility functions for formatting numbers and dates with null-safe handling
export const formatNumber = (value: number | null | undefined): string => {
  if (value === null || value === undefined) {
    return '-';
  }
  return value.toLocaleString();
};

export const formatDate = (value: string | null | undefined): string => {
  if (!value) {
    return '-';
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toLocaleDateString();
};
