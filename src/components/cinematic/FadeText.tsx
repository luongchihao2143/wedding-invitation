import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

const FadeText = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-center"
    >
      {children}
    </motion.div>
  );
};

export default FadeText;
