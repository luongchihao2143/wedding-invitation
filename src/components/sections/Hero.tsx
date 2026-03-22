import Section from "@/components/cinematic/Section";
import FadeText from "@/components/cinematic/FadeText";

const Hero = () => {
  return (
    <Section>
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/wedding.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <FadeText>
        <h1 className="text-6xl text-white font-cinematic">Hào & My Love 💍</h1>
        <p className="text-xl text-gray-200 mt-4">A love story begins...</p>
      </FadeText>
    </Section>
  );
};

export default Hero;
