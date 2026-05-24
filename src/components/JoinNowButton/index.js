import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';
import useJoinFlow from '../../hooks/useJoinFlow';

const JoinNowButton = ({ plan = '', primary, dark, dark2, children = 'Join Now' }) => {
  const [hover, setHover] = useState(false);
  const { handleJoinClick } = useJoinFlow();

  return (
    <Button
      as="button"
      type="button"
      onClick={() => handleJoinClick(plan)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      primary={primary ? 1 : 0}
      dark={dark ? 1 : 0}
      dark2={dark2 ? 1 : 0}
    >
      {children} {hover ? <ArrowForward /> : <ArrowRight />}
    </Button>
  );
};

export default JoinNowButton;
