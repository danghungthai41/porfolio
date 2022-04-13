import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const MyName = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { width: 200 },
    from: { width: 0 },
    reset: true,
    reverse: flip,
    delay: 100,
    config: config.molasses,
    onRest: () => set(!flip),
  });
  return (
    <div>
      <div className="w-1/3 text-[#BCB4B4] m-auto text-6xl text-center">
        {/* <animated.p style={props}> </animated.p> */}
        <p className="animationMyName text-3xl z-10">Hello, My Name's</p>
        <p>Dang Hung Thai</p>
      </div>
    </div>
  );
};

export default MyName;
