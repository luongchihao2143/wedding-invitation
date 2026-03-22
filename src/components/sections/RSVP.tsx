// sections/RSVP.tsx
import Section from "@/components/cinematic/Section";

const RSVP = () => {
  return (
    <Section>
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl text-white">
        <h2 className="text-3xl font-cinematic mb-6">Bạn sẽ đến chứ? 💌</h2>

        <input className="p-3 w-full mb-4 text-black" placeholder="Tên..." />
        <button className="bg-pink-500 px-6 py-3 rounded-xl">Xác nhận</button>
      </div>
    </Section>
  );
};

export default RSVP;
