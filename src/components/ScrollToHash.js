import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        scroller.scrollTo(id, { smooth: true, duration: 500, offset: -80 });
      }, 100);
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
