
const Card = ({title, desc, img}) => {
  return (
    <div className="card-contetn max-w-[777px] bg-[#fff] px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] rounded-[25px]">
        <div className="text-card">
            <h3 className="text-[28px] sm:text-[34px] lg:text-[36px] text-center font-inter font-semibold text-[#22A75D]" >{title}</h3>
            <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-center font-inter font-normal text-[#707076] mt-[20px] sm:mt-[25px] md:mt-[30px]">{desc}</p>
        </div>
        <div className="image-card mt-[15px]">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Card