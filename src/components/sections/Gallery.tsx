// sections/Gallery.tsx
import Section from "@/components/cinematic/Section";

const Gallery = () => {
  return (
    <Section>
      <div className="grid grid-cols-3 gap-4 p-10">
        {["1.jpg", "2.jpg", "3.jpg"].map((img) => (
          <img
            key={img}
            src={`/images/${img}`}
            className="rounded-xl hover:scale-110 transition duration-700"
          />
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
