const CardHomeBlog = () => {
  return (
    <div className="card-content relative -z-[1] max-w-[360px] justify-center xl:justify-normal xl:max-w-max max-h-[610px] ">
      <img src="../../../public/Frame 267.png" className="img absolute top-0 left-0 h-full w-full bg-[#C4D3EA] rounded-[17px] -z-[2]"></img>
      <div className="btm bgh rounded-[17px] border-none min-h-[460px] flex flex-col justify-end p-[26px]">
        <h4 className="text-[32px] font-inter font-bold text-[#fff]">Клан 1</h4>
        <p className="text-[11px] mt-[22px] font-inter font-[400] text-[#fff]">
          Lorem ipsum dolor sit amet, consec adipiscing elit, sed consec
          adipiscing elit, sed consec adipiscing elit, sed{" "}
        </p>
        <button className="rounded-[52px] mt-4 bg-[#E61467] hover:text-[#E61467] transition-all hover:bg-transparent hover:border hover:border-[#E61467] hover:px-[76px] px-[77px] hover:py-[8px] py-[9px] text-[14px] font-inter font-[600] text-[#fff]">
          Узнать подробнее
        </button>
      </div>
    </div>
  );
};

export default CardHomeBlog;
