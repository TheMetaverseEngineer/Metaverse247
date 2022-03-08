import {useEffect, useState} from "react";

export function useMediaQuery(query) {
  const mediaQuery = window.matchMedia(query);
  const [mediaMatches, setMediaMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleChangeMedia = () => {
      setMediaMatches(mediaQuery.matches);
    }

    mediaQuery.addEventListener("change", handleChangeMedia);

    return () => {
      mediaQuery.removeEventListener('change', handleChangeMedia);
    }
  }, [mediaQuery]);

  return mediaMatches;
}
