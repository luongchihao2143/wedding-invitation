import type { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {children}
    </section>
  );
};

export default Section;
