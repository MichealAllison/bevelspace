import { useMemo } from 'react';

/**
 * Hook for formatting numbers into currency or other number formats
 * @param value - The number to format
 * @param options - Intl.NumberFormat options
 * @returns formatted number string
 */
export function useFormatNumber() {
  const formatNumber = useMemo(() => {
    return (value: number, options: Intl.NumberFormatOptions = {}) => {
      // Default options for currency formatting
      const defaultOptions: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      };

      // Merge default options with passed options
      const formatterOptions = { ...defaultOptions, ...options };
      
      return new Intl.NumberFormat('en-NG', formatterOptions).format(value);
    };
  }, []);

  return { formatNumber };
}

/**
 * Utility function for formatting numbers without using the hook
 */
export const formatNumber = (value: number, options: Intl.NumberFormatOptions = {}) => {
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  const formatterOptions = { ...defaultOptions, ...options };
  return new Intl.NumberFormat('en-NG', formatterOptions).format(value);
};
