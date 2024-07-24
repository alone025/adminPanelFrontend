
const Card = () => {
  return (
    <div className="card-contetn bg-[#fff] px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] rounded-[25px]">
        <div className="text-card">
            <h3 className="text-[28px] sm:text-[34px] lg:text-[36px] text-center font-inter font-semibold text-[#22A75D]" >Lorem ipsum </h3>
            <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-center font-inter font-normal text-[#707076] mt-[20px] sm:mt-[25px] md:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="image-card mt-[15px]">
            <img src="/пада бой.png" alt="" />
        </div>
    </div>
  )
}

export default Card