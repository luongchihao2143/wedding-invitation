import Section from "@/components/cinematic/Section";
import FadeText from "@/components/cinematic/FadeText";

const Story = () => {
  return (
    <Section>
      <div className="bg-black/50 p-10 rounded-xl">
        <FadeText>
          <h2 className="text-4xl text-white font-cinematic">
            Chúng ta đã gặp nhau...
          </h2>
          <p className="text-gray-300 mt-4">
            Một ngày bình thường, nhưng định mệnh thì không bình thường chút
            nào.
          </p>
        </FadeText>
      </div>
    </Section>
  );
};

export default Story;
