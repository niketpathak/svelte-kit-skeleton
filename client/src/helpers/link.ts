import { browser } from '$app/env';

export const isInternalLink = (href: string | null): boolean => {
  if (!href?.match(/^https?:\/\//g)) {
    return true;
  }

  return Boolean(
    browser && href && (href.includes(window.location.origin)),
  );
};

export const pathNormalize = (path: string): string | null => {
  if (!path?.trim()) {
    return null;
  }

  const matcher = path.match(/^(\/|mailto|tel|#|javascript|https?)/g);

  return !matcher ? `/${path}` : path;
};
