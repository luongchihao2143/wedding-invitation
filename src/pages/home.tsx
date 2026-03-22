import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Countdown from "@/components/sections/CountDown";
import RSVP from "@/components/sections/RSVP";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Gallery />
      <Countdown />
      <RSVP />
    </>
  );
}
