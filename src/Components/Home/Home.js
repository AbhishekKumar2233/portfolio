import React, { useState } from "react";
import "../Home/Home.css";
import { Fade, Slide } from "react-awesome-reveal";
import { useTypedText } from "./TypingText";
// import TypedText  from "../Home/TypingText";
import logo from "./../../images/port.png";

export default function Home() {
  const [counter, setCounter] = useState(0);
  let name = (
    <h2>
      Hello !<br /> Abhishek Kumar.{" "}
    </h2>
  );
  let desc = (
    <p>
      Welcome on my portfolio page! I'm a Software Developer Content Creator,
      currently working as TypeScript React Web Developer. Living in Cracow,
      Poland.
    </p>
  );
  return (
    <>
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title">
              {/* <div style={{ color: "green" }}>
                <TypeAnimationComp text={"Hello ! Abhishek Kumar."} />
              </div> */}
              <div>
                <h1 style={{ color: "rgb(252, 68, 68)" }}>
                  {useTypedText("Hello !", 50)}
                  <br />
                  {useTypedText("I'm Abhishek Kumar", 50, 200)}
                </h1>
                <h2 className="home-desc">
                  {useTypedText(
                    "Welcome on my portfolio page! I'm a Software Developer, currently working as ReactJs Web Developer. Living in Gurugram, India.",
                    30,
                    350
                  )}
                </h2>
              </div>
            </div>

            <div className="icons">
              <a href="https://github.com/0xTijan" target="_blank">
                {/* <AiFillGithub className="icon" /> */}
              </a>
              <a href="https://twitter.com/0xTijan" target="_blank">
                {/* <AiFillTwitterCircle className="icon" /> */}
              </a>
              <a href="https://t.me/TijanWeb3" target="_blank">
                {/* <BsTelegram className="icon" /> */}
              </a>
            </div>

            <a href="mailto:contactme@tijan.dev">
              {/* <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button> */}
            </a>
          </div>
          <div className="about-avatar">
            <img
              className="avatar"
              alt="Tijan Bitmoji"
              // src="https://4c8spi-3000.preview.csb.app/static/media/hi.3053a97e105138786656.png"
              src={logo}
            />
          </div>
        </div>
        {/* <div className="icon-wrapper">
          <div className="bottom-icon"></div>
        </div> */}
      </div>
    </>
  );
}
