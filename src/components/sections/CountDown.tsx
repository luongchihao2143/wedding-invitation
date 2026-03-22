// sections/Countdown.tsx
import Section from "@/components/cinematic/Section";
import dayjs from "dayjs";

const Countdown = () => {
  const weddingDate = dayjs("2026-12-20");
  const diff = weddingDate.diff(dayjs(), "day");

  return (
    <Section>
      <div className="text-white text-center">
        <h2 className="text-5xl font-cinematic">Còn {diff} ngày</h2>
        <p className="mt-4 text-gray-300">
          Cho đến ngày chúng ta về chung một nhà
        </p>
      </div>
    </Section>
  );
};

export default Countdown;
