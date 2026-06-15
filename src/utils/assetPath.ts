/**
 * Returns the correct path for assets, accounting for the base URL in production.
 * Use this for any paths to images, videos, or other static assets.
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present, since BASE_URL ends with /
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
