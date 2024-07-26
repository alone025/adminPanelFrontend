import Wrapper from "../../layout/wrapper"


const MobileApps = () => {
  return (
  <Wrapper>
     <div className="mobile-apps mt-[120px] lg:mt-[88px] px-2">
    <div className="title">
      <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-inter font-bold text-[#fff] text-center">Наше мобильное приложение скоро</h3>
    </div>
    <div className="stars flex flex-row gap-[24px] items-center justify-center mt-5">
     <div className="star-div flex flex-row gap-[6px] md:gap-[10px]">
     <img src="/star 8.png" alt="star" />
      <img src="/star 8.png" alt="star" />
      <img src="/star 8.png" alt="star" />
      <img src="/star 8.png" alt="star" />
      <img src="/star 8.png" alt="star" />
     </div>
     <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-[#fff] font-inter font-bold leading-none pt-2">4.8</p>
    </div>
    <div className="app-store flex flex-row flex-wrap gap-[24px] justify-center mt-[45px]">
      <div className="app-store-app bg-[#fff] pl-[15px] pr-[38px] py-[13px] rounded-[7px] flex flex-row items-center gap-[10px]">
        <div className="lim">
          <img src="/apple-logo (3) 1.png" alt="" />
        </div>
        <div className="textim">
          <p className="text-[8px] text-[#000] font-inter font-medium" >Доступно в</p>
          <h4 className="text-[16px] text-[#000] font-inter font-bold">App store</h4>
        </div>
      </div>
      <div className="play-market bg-[#fff] pl-[15px] pr-[38px] py-[13px] rounded-[7px] flex flex-row items-center gap-[10px]">
      <div className="lim">
        <img src="/playstore 1.png" alt="" />
      </div>
      <div className="textim">
      <p className="text-[8px] text-[#000] font-inter font-medium" >Доступно в</p>
      <h4 className="text-[16px] text-[#000] font-inter font-bold" >Play store</h4>
      </div>
      </div>
      <div className="steam bg-[#fff] pl-[15px] pr-[38px] py-[13px] rounded-[7px] flex flex-row items-center gap-[10px]">
      <div className="lim">
        <img src="/Steam_icon_logo.svg 1.png" alt="" />
      </div>
      <div className="textim">
      <p className="text-[8px] text-[#000] font-inter font-medium" >Доступно в</p>
      <h4 className="text-[16px] text-[#000] font-inter font-bold" >Steam</h4>
      </div>
      </div>
    </div>
    <div className="imgs flex flex-row flex-wrap gap-[14px] xl:gap-[18px] mt-[100px] justify-center">
      <img src="/app-1 1.png" alt="" />
      <img src="/app-2 1.png" alt="" />
      <img src="/app-3 1.png" alt="" />
      <img src="/app-4 1.png" alt="" />
    </div>
   </div>
  </Wrapper>
  )
}

export default MobileApps