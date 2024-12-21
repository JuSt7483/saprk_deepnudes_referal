import { useState, useEffect, useLayoutEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => window.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export function useBreakpoints() {
  const [isClient, setIsClient] = useState(false);

  const breakpoints = {
    isMobileS: useMediaQuery("(max-width: 480px)"),
    isMobile: useMediaQuery("(min-width: 768px) and (max-width: 1023px)"),
    isTablet: useMediaQuery("(min-width: 1024px) and (max-width: 1280px)"),
    isDesktop: useMediaQuery("(min-width: 1281px)"),
    active: "SSR",
  };
  
  useLayoutEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  if (isClient && breakpoints.isMobileS) breakpoints.active = "mobileS";
  if (isClient && breakpoints.isMobile) breakpoints.active = "mobile";
  if (isClient && breakpoints.isTablet) breakpoints.active = "tablet";
  if (isClient && breakpoints.isDesktop) breakpoints.active = "desktop";

  return breakpoints;
}