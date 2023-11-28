import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";

import styles from "./styles.module.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const BannerText = () => {
  const [open, set] = useState(true);
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <Trail open={open}>
        <h1 className="banner-title logo">
          <span className="lg:text-[100px] text-5xl text-yellow-700">
            LensCrafters
          </span>
        </h1>
        <p className="lg:block hidden banner-title space-y-3 logo">
          Mastering the Art <br />
          <span className="pb-4 bottom-0"> of Photography </span>
        </p>

        <p className="banner-subtitle logo hidden lg:block pt-4">
          Capture Moments, Unleash Creativity:
          <br /> Enroll in ShutterCraft Academy for a <br /> Journey into the
          World of Photography <br /> Excellence!
        </p>
      </Trail>
    </div>
  );
};

export default BannerText;
