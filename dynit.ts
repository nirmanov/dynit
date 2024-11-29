/**
 * Breakpoints for the application
 */
export const breakpoints = {
  mobile: 320,
  mobileXL: 480,
  tablet: 768,
  laptop: 1200,
  desktop: 1440,
  wide: 1920,
} as const;

/**
 * Dynamic Unit - returns calc expression for smooth value transition between screen widths.
 * @param minScreenWidth - Minimum screen width in pixels
 * @param minValue - Value at minimum screen width
 * @param maxScreenWidth - Maximum screen width in pixels
 * @param maxValue - Value at maximum screen width
 * @returns CSS calc expression
 * @example
 * // Returns: calc(20px + 0.0125 * (100vw - 768px))
 * dynit(768, 20, 1920, 40)
 */
export function dynit(
  minScreenWidth: number,
  minValue: number,
  maxScreenWidth: number,
  maxValue: number
): string {
  // Prevent division by zero
  if (maxScreenWidth === minScreenWidth) {
    return `${minValue}px`;
  }

  const valueDiff = maxValue - minValue;
  const screenDiff = maxScreenWidth - minScreenWidth;
  const value2screen = valueDiff / screenDiff;

  // Optimize the calculation if the slope is 0
  if (value2screen === 0) {
    return `${minValue}px`;
  }

  const vwFactor = `(100vw - ${minScreenWidth}px)`;
  return `calc(${minValue}px + ${value2screen} * ${vwFactor})`;
}

/**
 * Creates a media query string for min-width
 * @param breakpoint - Breakpoint in pixels
 * @returns Media query string
 * @example
 * // Returns: "@media (min-width: 768px)"
 * mediaUp(768)
 */
export function mediaUp(breakpoint: number): string {
  return `@media (min-width: ${breakpoint}px)`;
}

/**
 * Creates a media query string for max-width
 * @param breakpoint - Breakpoint in pixels
 * @returns Media query string
 * @example
 * // Returns: "@media (max-width: 767.98px)"
 * mediaDown(768)
 */
export function mediaDown(breakpoint: number): string {
  return `@media (max-width: ${breakpoint - 0.02}px)`;
}

/**
 * Creates a media query string for a range between two breakpoints
 * @param minBreakpoint - Minimum breakpoint in pixels
 * @param maxBreakpoint - Maximum breakpoint in pixels
 * @returns Media query string
 * @example
 * // Returns: "@media (min-width: 768px) and (max-width: 1199.98px)"
 * mediaBetween(768, 1200)
 */
export function mediaBetween(minBreakpoint: number, maxBreakpoint: number): string {
  return `@media (min-width: ${minBreakpoint}px) and (max-width: ${maxBreakpoint - 0.02}px)`;
}
