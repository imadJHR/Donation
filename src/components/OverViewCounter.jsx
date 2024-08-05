import CountUp from "react-countup";
import { motion } from "framer-motion";

const OverViewCounter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="container h-12 md:h-32 p-3 "
    >
      <div className="mx-auto my-4 grid w-full grid-cols-4 divide-x divide-slate-700 bg-white p-2 shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] lg:-translate-y-20 md:p-8   ">
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl ">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={243}
              duration={3}
              suffix="+"
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Fundreaisers</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl ">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={243}
              duration={3}
              suffix="+"
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Raised</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl ">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={177}
              duration={3}
              suffix="K+"
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Donations</p>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl ">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={-875.039}
              end={160527.012}
              duration={2.75}
              suffix="+"
            />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Volunteers</p>
        </div>
      </div>
    </motion.section>
  );
};

export default OverViewCounter;
