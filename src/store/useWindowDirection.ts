// Source - https://stackoverflow.com/a
// Posted by QoP, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-16, License - CC BY-SA 4.0

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: winWidth, innerHeight: winHeight } = window;
  return {
    winWidth,
    winHeight
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

