import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Fading = (props) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    opacity: 1,
    transform: "translate(0%, 0px)",
    from: { opacity: 0, transform: "translate(0%, 0%)" },
    reset: true,
    config: { duration: props.duration },
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>{props.children}</animated.div>
    </div>
  );
};

export default Fading;
