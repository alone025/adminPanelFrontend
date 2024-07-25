const CardHomeBlog = () => {
	return (
		<div className='card-content relative max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] justify-center xl:justify-normal xl:max-w-max max-h-[480px] sm:max-h-[550px] md:max-h-[610px] z-[10]'>
			<div className='img absolute top-0 left-0 h-full w-full bg-[#C4D3EA] rounded-[17px] -z-[1]'></div>
			<div className='btm rounded-[17px] bgh min-h-[400px] sm:min-h-[440px] md:min-h-[460px] flex flex-col justify-end p-[18px] sm:p-[22px] md:p-[26px]'>
				<h4 className='text-[15px] sm:text-[17px] md:text-[20px] lg:text-[32px] font-inter font-bold text-[#fff]'>
					Клан 1
				</h4>
				<p className='text-[12px] sm:text-[13px] lg:text-[14px] mt-[22px] font-inter font-[400] text-[#fff]'>
					Lorem ipsum dolor sit amet, consec adipiscing elit, sed consec
					adipiscing elit, sed consec adipiscing elit, sed{' '}
				</p>
				<button className='rounded-[52px] mt-4 bg-[#E61467] hover:text-[#E61467] transition-all hover:bg-transparent hover:border hover:border-[#E61467] hover:py-[8px] py-[9px] text-[14px] font-inter font-[600] text-[#fff]'>
					Узнать подробнее
				</button>
			</div>
		</div>
	)
}

export default CardHomeBlog
