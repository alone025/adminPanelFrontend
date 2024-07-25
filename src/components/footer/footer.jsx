import Wrapper from "../../layout/wrapper";

const Footer = () => {
  return (
    <div className="footer mt-[200px] lg:mt-[280px] bg-[#1D1534] pt-[80px] sm:pt-[120px] pb-[60px] px-5 2xl:px-0">
      <Wrapper>
        <div className="top-side flex flex-raw gap-3 flex-wrap justify-between">
          <div className="left-tap max-w-[455px]">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <p className="statue-owner text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal mt-[25px]">
              @Lorem
            </p>
          </div>
          <div className="middle-tap">
            <p className="new-div text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] text-[#FBF9ED] font-inter font-medium">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-1">
              <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                Home page
              </li>
              <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                About company
              </li>
              <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal">
                Our team
              </li>
            </ul>
          </div>
          <div className="end-tap">
            <p className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] text-[#FBF9ED] font-inter font-medium">
              Contact us
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal max-w-[360px] mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FBF9ED] font-inter font-normal mt-9">
              +908 89097 890
            </p>
          </div>
        </div>
        <div className="bottom-sde mt-[80px] flex flex-row gap-3 flex-wrap items-center justify-between">
          <div className="logo-tab">
            <h2 className="text-[25px] md:text-[29px] lg:text-[36px] font-popins font-bold text-left text-[#FBF9ED]">
              LOGO
            </h2>
          </div>
          <div className="social-links">
            <ul className="flex flex-row flex-wrap gap-[10px]">
              <li className="p-[15px] rounded-[24px] border-white border-opacity-5 border">
                <img src="../../../public/twitter (2) 1.svg" alt="" />
              </li>
              <li className="p-[15px] rounded-[24px] border-white border-opacity-5 border">
                <img src="../../../public/facebook (4) 1.svg" alt="" />
              </li>
              <li className="p-[15px] rounded-[24px] border-white border-opacity-5 border">
                <img src="../../../public/instagram (1) 1.svg" alt="" />
              </li>
              <li className="p-[15px] rounded-[24px] border-white border-opacity-5 border">
                <img src="../../../public/medium 1.svg" alt="" />
              </li>
              <li className="p-[15px] rounded-[24px] border-white border-opacity-5 border">
                <img src="../../../public/github 1.svg" alt="" />
              </li>
              <li className="p-[15px] rounded-[24px] border-white border-opacity-5 border">
                <img src="../../../public/reddit 1.svg" alt="" />
              </li>
            </ul>
          </div>
          <div className="license">
            <p className="text-[13px] mt-2 sm:mt-0 sm:text-[14px] text-[#FFF] font-azosansLight font-normal">
              © 2021 Tokners. All rights reserved.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
