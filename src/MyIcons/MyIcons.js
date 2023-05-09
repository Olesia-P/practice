import React, { useCallback, useEffect, useState } from "react";
import cx from "classnames";
import css from "./MyIcons.module.scss";

export default function MyIcons({ icon }) {
  const [color, setColor] = useState("");
  const [iconType, setIconType] = useState("");

  const changingColor = useCallback(() => {
    icon.includes("night") ? setColor("night") : setColor("day");
  }, [icon]);

  const changingType = useCallback(() => {
    switch (icon) {
      case icon.includes("clear"):
        setIconType("clearSky");
        break;
      case icon.includes("few"):
        setIconType("fewClouds");
        break;
      case icon.includes("scattered"):
      case icon.includes("broken"):
        setIconType("clouds");
        break;
      case icon.includes("thunderstorm"):
        setIconType("thunderstorm");
        break;
      case icon.includes("snow"):
        setIconType("snow");
        break;
      case icon.includes("mist"):
        setIconType("mist");
        break;
      default:
        console.log("icon type is wrong");
    }
  }, [icon]);

  console.log(iconType);
  console.log(color);

  useEffect(() => {
    changingColor();
    changingType();
  }, [icon, changingColor, changingType]);

  //   return (
  //     <div className={css.container}>
  //       <div
  //         className={(cx(css.icon, css.animation, css[iconType]), css[color])}
  //       ></div>
  //     </div>
  //   );
}
