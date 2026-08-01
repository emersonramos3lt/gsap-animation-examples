import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapTest = () => {
  useGSAP(
    () => {
      gsap.to(".text-animated", {
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".text-animated",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    },
    { scope: ".main-container" },
  );

  return (
    <main className="main-container">
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          beatae.
        </h1>
      </section>
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-animated text-4xl font-bold scale-50 opacity-20">
          Lorem ipsum dolor sit amet.
        </h1>
      </section>
    </main>
  );
};

export default GsapTest;
