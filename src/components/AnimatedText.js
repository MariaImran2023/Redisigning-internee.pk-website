import React from 'react';
import Typical from 'react-typical';

const AnimatedText = () => {
    return (
      <Typical
        steps={[
          'On your desired domain', 2000, 'Get a competative job', 2000, 'Gives hands-on experience', 2000
        ]}
        loop={Infinity}
        wrapper="span"
      />
    );
  };
  

export default AnimatedText;
