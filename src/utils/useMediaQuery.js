import { useState, useEffect } from "react";
/**
 * Custom hook to check if a media query matches the current viewport.
 * @param query The media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicating if the query matches
 */
export function useMediaQuery(query){
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    
    // Set the initial value immediately
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define the listener to update state on changes
    const listener = () => setMatches(media.matches);

    // Modern browsers use addEventListener
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query,matches]);

  return matches;
}