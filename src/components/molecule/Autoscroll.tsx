import { motion } from "framer-motion";

export const TranslateWrapper = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-50%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};