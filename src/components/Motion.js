import { motion } from "framer-motion";

export const Motion = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {props.div}
    </motion.div>
  );
};
