import Card from "./components/card/card";
// import CardHomeBlog from "./components/cardHomeBlog/cardHomeBlog";
import ShortPage from "./components/short-page/shortPage";

const Web = () => {
  const datacha = [
    {
      title: "Lorem ipsum ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      image: "/пада бой.png",
    },
    {
      title: "Lorem ipsum ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/панда гёл.png",
    },
  ];

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
          {datacha.map((c, index) => (
            <Card key={index} desc={c.text} title={c.title} img={c.image} />
          ))}
        </div>

        {/* Short page */}

        <div className="short-page mt-[160px]">
          <ShortPage />
        </div>

        <div className="bg">
          <img
            src="/Frame 268.png"
            alt=""
            className="absolute hidden md:block md:top-[2100px] lg:top-[1500px] left-0 w-[-webkit-fill-available] -z-10"
          />
        </div>
      </div>

      <div className="game-page mt-[150px] sm:mt-[300px] lg:mt-[600px] xl:mt-[500px] 2xl:mt-[400px] flex flex-col xl:flex-row justify-between">
        <div className="left-side xl:max-w-[644px]">
          <h3 className="text-[32px] sm:text-[34px] md:text-[36px] font-inter font-semibold  text-[#FFF] lg:text-[#191B21] mb-[33px] ">
            Информация про плоформу
          </h3>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#FFF] lg:text-[#191B21] font-azosansLight opacity-60 flex flex-col">
            <span className="font-azosans">
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
            <span className="mt-[15px]">
              {" "}
              We are trying to do to this space what investment apps did for the
              "nonexistent retail investors". We are gamefying digital currency,
              bringing in popular faces instead of hard to understand projects
              to make it the norm and inadvertently being the "gateway drug" for
              a lot of people to finally give this space a real look.{" "}
            </span>
          </p>

          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#FFF] lg:text-[#191B21] font-azosansLight opacity-60 mt-[40px] flex flex-col">
            <span className="font-azosans">
              A new digital economy is coming. People would be just as powerful
              as countries and creators would be paid beyond the peanuts that
              conventional social media platforms can offer.
            </span>
            <br />
            There would be new markets and advertisers with little to offer
            would not find home there. Like Kanye said, "Personalities would
            become the new currency, and services would be built on top of
            them". Well, Kanye didn't exactly say that, but it sounds like
            something we hope he would say. <br />
            <span className="mt-[15px]">
              {" "}
              Currency is digital, it has been that way for a while now, but
              this time there would be no dead presidents on the money, there
              would people like you on the money, and you would own it because
              it would make the most sense in the world.
            </span>
          </p>
        </div>
        <div className="img-side">
          <img
            src="/3d-render-game-equipment-console-headset-free-png 2.png"
            alt=""
          />
        </div>
        <img
          src="/Subtract.png"
          alt=""
          className="absolute hidden lg:block lg:top-[2460px] left-0 w-[-webkit-fill-available] -z-10"
        />
      </div>

      {/* New block */}

      <div className="new-block mt-[160px] xl:mt-[360px] 2xl:mt-[650px]">
        <div className="title mb-[60px] sm:mb-[100px]">
          <h3 className="text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-azosans font-medium text-[#F7F5F9] text-center">
            Presale Details
          </h3>
        </div>
        <div className="tabs flex flex-col items-center gap-10">
          <div className="tab-- bg-white flex flex-row w-[100%] justify-between items-center rounded-[20px] p-[21px] max-w-[1300px]">
            <p className="font-inter font-bold text-[21px] sm:text-[23px] md:text-[25px] lg:text-[27px] text-[#1D1534]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="div-bg hidden sm:block w-[47px] md:w-[56px] h-[47px] md:h-[56px] rounded-full"></div>
          </div>
          <div className="tab-- bg-white flex flex-row w-[100%] justify-between items-center rounded-[20px] p-[21px] max-w-[1300px]">
            <p className="font-inter font-bold text-[21px] sm:text-[23px] md:text-[25px] lg:text-[27px] text-[#1D1534]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="div-bg hidden sm:block w-[47px] md:w-[56px] h-[47px] md:h-[56px] rounded-full"></div>
          </div>
          <div className="tab-- bg-white flex flex-row w-[100%] justify-between items-center rounded-[20px] p-[21px] max-w-[1300px]">
            <p className="font-inter font-bold text-[21px] sm:text-[23px] md:text-[25px] lg:text-[27px] text-[#1D1534]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="div-bg hidden sm:block w-[47px] md:w-[56px] h-[47px] md:h-[56px] rounded-full"></div>
          </div>
          <div className="tab-- bg-white flex flex-row w-[100%] justify-between items-center rounded-[20px] p-[21px] max-w-[1300px]">
            <p className="font-inter font-bold text-[21px] sm:text-[23px] md:text-[25px] lg:text-[27px] text-[#1D1534]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="div-bg hidden sm:block w-[47px] md:w-[56px] h-[47px] md:h-[56px] rounded-full"></div>
          </div>
        </div>
        <div className="how-to-buy mt-[140px]">
          <h4 className="text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] text-center font-azosans text-[#F7F5F9] font-medium">
            How to buy
          </h4>
          <ul className="mt-[30px] flex flex-col gap-11">
            <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-azosansLight text-[#FFF] text-center">
              First Connect your Metamask or TrustWallet to the "Connect Wallet"
              on the Homepage.
            </li>
            <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-azosansLight text-[#FFF] text-center">
              Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale
              wallet
            </li>
            <li className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-azosansLight text-[#FFF] text-center">
              Then after you will received your $Tokners to your address within
              24hours.{" "}
            </li>
          </ul>
        </div>
        <img
          src="/Frame new.png"
          alt=""
          className="absolute hidden lg:block lg:top-[4100px] xl:top-[3740px] left-0 w-[-webkit-fill-available] -z-30"
        />
      </div>

      {/* Ozgacha cardlar */}

      <div className="different-cards  mt-[200px] sm:mt-[250px] md:mt-[300px] lg:mt-[550px]">
        <div className="top-cards flex flex-col xl:flex-row gap-[42px]">
          <div className="long-card xl:max-w-[800px] justify-between bg-[#FFFFFF] flex flex-col md:flex-row gap-[10px] md:items-end rounded-[30px] p-[30px] lg:p-[40px] 2xl:p-[50px]">
            <div className="txp max-w-[400px] lg:max-w-[600px] xl:max-w-[400px] 2xl:max-w-[490px] pb-[50px]">
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]">
                Lorem ipsum
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </p>
            </div>
            <div className="imx">
              <img src="/4756473 1.png" alt="" />
            </div>
          </div>
          <div className="short-card bg-[#EBD6D9] flex flex-col md:flex-row justify-between gap-[10px] md:items-end rounded-[30px] p-[40px] 2xl:p-[50px]">
            <div className="txp max-w-[400px] lg:max-w-[600px] xl:max-w-[250px] 2xl:max-w-[312px] ">
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]">
                Lorem ipsum
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </p>
            </div>
            <div className="imx">
              <img src="/gamers-5266580-4403854 1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bottom-cards flex flex-col xl:flex-row gap-[42px] mt-11">
          <div className="short-card bg-[#FFF] flex flex-col md:flex-row justify-between gap-[10px] md:items-end rounded-[30px] p-[40px] 2xl:p-[50px]">
            <div className="txp max-w-[400px] lg:max-w-[600px] xl:max-w-[250px] 2xl:max-w-[312px] ">
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]">
                Lorem ipsum
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </p>
            </div>
            <div className="imx">
              <img
                src="/3d-render-game-equipment-console-headset-free-png 2.png"
                alt=""
                className="max-h-[215px]"
              />
            </div>
          </div>

          <div className="long-card xl:max-w-[800px] justify-between bg-[#EBD6D9] flex flex-col md:flex-row gap-[10px] md:items-end rounded-[30px] p-[30px] lg:p-[40px] 2xl:p-[50px]">
            <div className="txp max-w-[400px] lg:max-w-[600px] xl:max-w-[400px] 2xl:max-w-[490px] pb-[50px]">
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]">
                Lorem ipsum
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </p>
            </div>
            <div className="imx">
              <img src="/image 68.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cards-blog">
        <div className="top-texts">
          <h3 className="text-[40px] font-inter font-bold text-[#191B21] ">Lorem ipsum dolor sit amet</h3>
          <p className="text-[15px] font-medium font-inter text-[#191B21]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="btm-cards">
          <CardHomeBlog />
          <CardHomeBlog />
          <CardHomeBlog />
          <CardHomeBlog />
        </div>
        <img
          src="../public/Subtract2.png"
          alt=""
          className="absolute hidden lg:block lg:top-[6700px] left-0 w-[-webkit-fill-available] -z-10"
        />
      </div> */}
    </div>
  );
};

export default Web;
