import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <h2 className="hero__title visually-hidden">Who I am</h2>
      <div className="hero__content container">
        <div className="hero__description">
          <div className="hero__action">
          <Typewriter
            options={{
              strings: [
                "Hi! I am Ibrohim, an aspiring web developer. I can do something great for ya!",
              ],
              autoStart: true,
              loop: false,
              deleteSpeed: Infinity,
              delay: 65,
            }}
          />
          <a className="hero__button button" href="#contacts">Let's check</a>
          </div>
        </div>
        <DotLottieReact
          src="https://lottie.host/421abaf4-b4df-4edf-87a7-7321ab8edf33/nI4vpgGJZz.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
}
