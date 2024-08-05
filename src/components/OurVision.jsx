import { motion } from "framer-motion";

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const OurVision = () => {
  return (
    <div className="container my-16 bg-white dark:bg-gray-900 dark:text-white  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div
          variants={fadeAnimation(0.3)}
          initial="initial"
          animate="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-xl border-t-8 border-yellow-300 dark:bg-slate-800 "
        >
          <h1 className="text-xl font-semibold">Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium sapiente ab nemo fuga qui esse magnam iste optio
            consectetur!
          </p>
          <a className="inline-block hover:text-yellow-300 border-b hover:border-yellow-300">
            Learn More
          </a>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.6)}
          initial="initial"
          animate="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-xl border-t-8 border-green-300 dark:bg-slate-800 "
        >
          <h1 className="text-xl font-semibold">Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium sapiente ab nemo fuga qui esse magnam iste optio
            consectetur!
          </p>
          <a className="inline-block hover:text-green-300 border-b hover:border-green-300">
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
