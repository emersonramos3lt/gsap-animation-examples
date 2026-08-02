import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const GsapTest = () => {
  useGSAP(
    () => {
      // O GSAP fica responsável APENAS pela digitação do texto!
      gsap.to("#typing-text", {
        duration: 3,
        text: "Desenvolvendo interfaces profissionais com GSAP e React.",
        ease: "none",
      });
    },
    { scope: ".main-content" },
  );

  return (
    <main className="main-content p-10">
      <h1 className="text-2xl font-mono text-white inline-block">
        <span id="typing-text"></span>
        {/* Apenas adicionei 'animate-pulse' do Tailwind aqui */}
        <span className="animate-pulse text-white font-bold ml-0.5">|</span>
      </h1>
    </main>
  );
};

export default GsapTest;
