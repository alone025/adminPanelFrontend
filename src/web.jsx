import Card from "./components/card/card";
import ShortPage from "./components/short-page/shortPage";

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
            src="/Frame 267.png"
            alt=""
            className="absolute w-[650px] lg:w-[800px] xl:w-[1000px] 2xl:w-auto -z-10 right-0 top-0"
          />

          <img src="/Component 1.png" alt="" />
        </div>
      </div>

      <div className="bg-page">
        {/* Cards */}
        <div className="cards flex flex-col md:flex-row gap-5 mt-[60px]">
          <Card />
          <Card />
        </div>

        {/* Short page */}

        <div className="short-page mt-[160px]">
          <ShortPage />
        </div>

        <div className="bg">
          <img
            src="/Frame 268.png"
            alt=""
            className="absolute hidden md:block md:top-[2380px] lg:top-[1500px] left-0 w-[-webkit-fill-available] -z-10"
          />
        </div>
      </div>

      <div className="game-page mt-[150px] sm:mt-[300px] lg:mt-[600px] xl:mt-[500px] 2xl:mt-[400px] flex flex-col xl:flex-row justify-between">
        <div className="left-side xl:max-w-[644px]">
          <h3 className="text-[32px] sm:text-[34px] md:text-[36px] font-inter font-semibold  text-[#FFF] lg:text-[#191B21] mb-[33px] ">Информация про плоформу</h3>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#FFF] lg:text-[#191B21] font-azosansLight opacity-60 flex flex-col" >
            <span className="font-azosans" >
              Cryptocurrency adoption is at less than 1% of the global world
              population with some countries and entities actively fighting
              against its mass adoption and the smartest developers and nerds
              holding the fort.
            </span>
            <br />
            Bitcoin was the first, and it has since grown to thousands of tokens
            launched all aiming to fix one problem or the other with some quite
            simply FOMOing the moment. Our goal is to bring mass adoption to the
            cryptocurrency space by dumbing it down. How far down? So down that
            even a celebrity can explain it in simple words to their followers
            and have them download an app, buy into the social currency of their
            favourite person and watch their investment as is with other
            cryptocurrency project. <br />
            <span className="mt-[15px]" >
              {" "}
              We are trying to do to this space what investment apps did for the
              "nonexistent retail investors". We are gamefying digital currency,
              bringing in popular faces instead of hard to understand projects
              to make it the norm and inadvertently being the "gateway drug" for
              a lot of people to finally give this space a real look.{" "}
            </span>
          </p>

          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#FFF] lg:text-[#191B21] font-azosansLight opacity-60 mt-[40px] flex flex-col" >
            <span className="font-azosans" >
              A new digital economy is coming. People would be just as powerful
              as countries and creators would be paid beyond the peanuts that
              conventional social media platforms can offer.
            </span>
            <br />
            There would be new markets and advertisers with little to offer
            would not find home there. Like Kanye said, "Personalities would
            become the new currency, and services would be built on top of
            them". Well, Kanye didn't exactly say that, but it sounds like
            something we hope he would say. <br /><span className="mt-[15px]" > Currency is digital, it has
            been that way for a while now, but this time there would be no dead
            presidents on the money, there would people like you on the money,
            and you would own it because it would make the most sense in the
            world.</span>
          </p>
        </div>
        <div className="img-side">
          <img
            src="/3d-render-game-equipment-console-headset-free-png 2.png"
            alt=""
          />
        </div>
        <img src="../public/Subtract.png" alt="" className="absolute hidden lg:block lg:top-[2460px] left-0 w-[-webkit-fill-available] -z-10" />
      </div>


    {/* New block */}

      <div className="new-block">
        <div className="title">
          <h3>Presale Details</h3>
        </div>
        <div className="tabs">
          <div className="tab--">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="div-bg w-[56px] h-[56px] rounded-full"></div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Web;
