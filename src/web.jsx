import Card from "./components/card/card";

const Web = () => {
  return (
    <div className="web-main px-8 sm:px-10 md:px-12">
      <div className="bg-bop flex flex-col lg:flex-row mt-[50px]">
        <div className="left-text max-w-[500px] xl:max-w-[610px] mt-[40px] md:mt-[80px] gap-[25px] flex flex-col">
          <div className="smal">
            <p className="font-azosans font-medium text-[#2278D4] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px]">
              At Tokners are
            </p>
          </div>
          <div className="big-text">
            <h2 className="font-inter font-semibold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] leading-[38px] sm:leading-[42px] md:leading-[48px] text-[#fff]">
              Lorem ipsum <span className="text-[#E61467]">dolor sit amet</span>{" "}
              consectetur adipiscing elit, sed do eiusmod
            </h2>
          </div>
          <div className="desc">
            <p className="text-[13px] sm:text-[14px] md:text-[15px] ld:text-[16px] leading-[30px] font-inter font-normal text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing elit, sed do{" "}
            </p>
          </div>
          <div className="btns flex flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-normal gap-4 mt-[12px]">
            <button className="bg-[#01BAD6] hover:bg-transparent hover:border hover:border-[#01BAD6] hover:text-[#01BAD6] transition-all rounded-[52px] hover:py-[11px] py-[13px] w-full max-w-[158px] md:max-w-[178px] text-[15px] md:text-[17px] font-inter font-medium text-[#FFFFFF]">
              О Проекте
            </button>
            <button className="bg-[#E61467] hover:bg-transparent hover:border hover:border-[#E61467] hover:text-[#E61467] transition-all rounded-[52px] hover:py-[11px] py-[13px] w-full max-w-[158px] md:max-w-[178px] text-[15px] md:text-[17px] font-inter font-medium text-[#FFFFFF]">
              Наша команда
            </button>
          </div>
        </div>
        <div className="right-picture flex items-center xl:block xl:items-baseline">
          <img
            src="/public/Frame 267.png"
            alt=""
            className="absolute w-[650px] lg:w-[800px] xl:w-[1000px] 2xl:w-auto -z-10 right-0 top-0"
          />

          <img src="/public/Component 1.png" alt="" />
        </div>
      </div>


{/* Cards */}
      <div className="cards flex flex-col md:flex-row gap-5 mt-[60px]">
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Web;
