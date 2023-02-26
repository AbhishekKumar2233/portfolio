import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationComp({ text }) {
  return (
    <TypeAnimation
      sequence={text}
      wrapper="div"
      cursor={false}
      repeat={0}
      style={{ fontSize: "2em", width: "40vw" }}
    />
  );
}
