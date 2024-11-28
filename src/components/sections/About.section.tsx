import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitleSection } from "./AnimatedTitle.section";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=100 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      duration: 5,
      borderRadius: 0,
    });
  });

  return (
    <div className="min-h-screen w-screen overflow-y-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general uppercase text-black md:text-[10px] ">
          Welcome to Zentry
        </h2>

        <AnimatedTitleSection
          title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center text-4xl uppercase leading-[0.8] md:text-[6rem]"
        />

        <div className="about-subtext">
          <p>The game of Games begins-your life, now an epic MMORPG</p>

          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="about background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
