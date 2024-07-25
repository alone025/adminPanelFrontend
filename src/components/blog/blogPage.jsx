import React from 'react'

function BlogPage() {
	return (
		<>
			<div className=' bg-[#1D1534] w-full'>
				<div className='pt-[200px]'>
					<p className='text-start max-w-[1632px] text-white text-[32px] font-[500] font-inter relative z-10'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua
						consectetur adipiscing elit
					</p>
					<div className='absolute blog_blur'></div>
					<div className='relative bg-[#032457] max-w-[1491px] h-[467px] rounded-[30px] mt-[61px] z-10'>
						<div className='flex justify-center items-center h-full gap-[80px] px-[80px]'>
							<div className='flex flex-col items-start gap-[80px] h-full justify-center'>
								<p className='text-[25px] text-white leading-[35px] max-w-[668px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit
								</p>
								<button className='bg-[#E61467] rounded-[52px] px-[30px] py-[15px] text-white'>
									Lorem ispum dolar amet
								</button>
							</div>
							<div className='flex items-center'>
								<img src='/public/app-1 2.png' alt='app' />
								<img src='/public/app-4 2.png' alt='app' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogPage
