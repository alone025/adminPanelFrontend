import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardHomeBlog from "../components/cardHomeBlog/cardHomeBlog";
import Wrapper from "../layout/wrapper";

function Blog_cards() {
  const [blogData, setBlogData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch("https://e334514e7b754cb9.mokky.dev/teamcards")
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedCard(null);
  };

  if (blogData.length === 0) return <div>Loading...</div>;

  return (
    <div className="relative cards-blog min-h-screen">
      {/* SVG Background */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="/Subtract2.png"
        alt="Background"
        className="absolute top-0 left-0 w-full 2xl:h-full -z-10"
      />
      <Wrapper>
        <div className="flex flex-col justify-center items-center mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0 2xl:h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-[150px] sm:mt-[200px] md:mt-[250px]"
          >
            <h3 className="text-xl md:text-4xl font-inter font-bold text-[#191B21]">
              {blogData[0].topArticleTeam}
            </h3>
            <p className="text-sm md:text-base font-medium font-inter text-[#191B21] mt-5 md:mt-12 max-w-2xl mx-auto">
              {blogData[0].topDescTeam}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center xl:flex-nowrap gap-5 mt-10 z-10"
          >
            {blogData.slice(1).map((card, index) => (
              <>
                {card.cardType1 == "true" ? (
                  <CardHomeBlog
                    key={index}
                    cardData={card}
                    handleOpenModal={handleOpenModal}
                  />
                ) : null}
              </>
            ))}
          </motion.div>
        </div>
      </Wrapper>

      <AnimatePresence>
        {modal && selectedCard && (
          <motion.div
            className="z-[1000] left-0 top-0 right-0 bottom-0 w-screen h-screen inset-0 bg-[#00000099] fixed flex justify-center items-center font-inter px-[20px]"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-[95%] md:max-w-[1130px] pb-[20px] md:pb-0 md:h-[500px] relative flex flex-col md:flex-row justify-center items-center bg-white overflow-hidden rounded-[20px] md:rounded-[60px] z-[2000]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/close.png"
                alt="close"
                className="absolute right-4 top-4 md:right-8 md:top-8 cursor-pointer z-[3000]"
                onClick={handleCloseModal}
              />
              <motion.div
                className="w-full md:w-1/2 z-[2000] md:pr-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={selectedCard.teamCardImage1 || "/modal_pic.png"}
                  alt="modal picture"
                  className="w-full h-[400px] object-cover md:h-auto"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 pr-4 md:pr-6 flex justify-center flex-col"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] mb-4 text-[#032457] font-[700] text-center">
                  {selectedCard.teamCardArticle1}
                </h2>
                <div className="flex flex-col gap-[12px] text-sm md:text-base">
                  <p className="text-[#032457]">
                    {selectedCard.teamCardBigDesc1}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Blog_cards;
