import { motion } from "motion/react";

const ButtonAni = ({classes,children}) => {
  return (
    <>
      <motion.button

        className={`px-6 py-2 text-white rounded-full shadow-lg ${classes}`}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.9, y: 1 }}
        transition={{type:"spring",stiffness:300,damping:15}}
      >
        {children}
      </motion.button>
    </>
  );
};

export default ButtonAni;
