import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wrapper from "../layout/wrapper";
import { useEffect, useState } from "react";

function Information() {
  const [infoData, setInfoData] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  useEffect(() => {
    fetch("https://e334514e7b754cb9.mokky.dev/bigabout")
      .then((response) => response.json())
      .then((data) => {
        setInfoData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!infoData) return <div>Loading...</div>;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative game-page flex flex-col xl:flex-row justify-between items-center min-h-screen"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <img
          src="/Subtract.png"
          alt="Wavy background"
          className="absolute h-full top-0 w-full -z-10"
        />
      </div>
      <Wrapper>
        <div className="flex flex-col mt-[330px] lg:mt-[250px] xl:mt-[182px] lg:flex-row justify-between items-center gap-[45px] xl:gap-[100px] mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0">
          <div className="">
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-8"
            >
              {infoData[0].big_aboutMainText}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-light opacity-60 mb-8 lg:w-[644px]"
            >
              <span className="font-semibold">
                {infoData[0].big_aboutOneBoldDesc}
              </span>
              <br />
              {infoData[0].big_aboutOneDesc}
              <br />
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-light opacity-60 lg:w-[644px]"
            >
              <span className="font-semibold">
                {infoData[0].big_aboutTwoBoldDesc}
              </span>
              <br />
              {infoData[0].big_aboutTwoDesc}
              <br />
            </motion.p>
          </div>
          <motion.div variants={imageVariants} className="">
            {infoData[0].big_aboutImageType == "true" ? (
              <img src={infoData[0].imageUrlBig_about} alt="Game equipment" />
            ) : (
              <img src={infoData[0].imageUrlBig_about} alt="Game equipment" />
            )}
          </motion.div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default Information;
