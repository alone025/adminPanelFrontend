import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function Cards2() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    fetch("https://e334514e7b754cb9.mokky.dev/four_cards")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!cardData) return <div>Loading...</div>;
  return (
    <>
      <Wrapper>
        <div className="different-cards mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0 pt-[180px] 2xl:pt-0">
          <div className="top-cards flex flex-col xl:flex-row gap-[42px]">
            {cardData.map((cm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="long-card xl:max-w-[800px] justify-between bg-[#FFFFFF] flex flex-col md:flex-row gap-[10px] md:items-end rounded-[30px] p-[30px] lg:p-[40px] 2xl:p-[50px]"
              >
                <div className="txp max-w-[400px] lg:max-w-[600px] xl:max-w-[400px] 2xl:max-w-[490px] pb-[50px]">
                  <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]">
                    {cm.firstCardArticle}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]">
                    {cm.firstCardDesc}
                  </p>
                </div>
                <div className="imx">
                  {cm.firstCardImage == "true" ? (
                    <img src={cm.firstCardImageUrl} alt="" />
                  ) : (
                    <></>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Cards2;
