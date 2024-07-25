
import React from 'react'
import Wrapper from '../../layout/wrapper'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function BlogPage() {
	const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
	const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
	const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
	const controls1 = useAnimation()
	const controls2 = useAnimation()
	const controls3 = useAnimation()

	React.useEffect(() => {
		if (inView1) {
			controls1.start({ opacity: 1, y: 0 })
		} else {
			controls1.start({ opacity: 0, y: 50 })
		}
	}, [inView1, controls1])

	React.useEffect(() => {
		if (inView2) {
			controls2.start({ opacity: 1, y: 0 })
		} else {
			controls2.start({ opacity: 0, y: 50 })
		}
	}, [inView2, controls2])

	React.useEffect(() => {
		if (inView3) {
			controls3.start({ opacity: 1, y: 0 })
		} else {
			controls3.start({ opacity: 0, y: 50 })
		}
	}, [inView3, controls3])

	return (
		<>
			<div className='bg-[#1D1534] w-full'>
				<Wrapper>
					<div className='pt-[200px] lg:mx-[50px] 2xl:mx-0'>
						<div>
							<motion.div
								ref={ref1}
								initial={{ opacity: 0, y: 50 }}
								animate={controls1}
								transition={{ duration: 0.8 }}
							>
								<p className='text-start max-w-[1632px] text-white text-[20px] md:text-[32px] font-[500] font-inter relative z-[1] mx-[10px] lg:mx-0'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit
								</p>
								<div className='absolute blog_blur'></div>
								<div className='relative mx-[5px] md:mx-[40px] bg-[#032457] py-[20px] xl:py-0 max-w-[1491px] xl:h-[467px] rounded-[30px] mt-[61px] z-[1]'>
									<div className='flex flex-col xl:flex-row justify-center items-center h-full gap-[20px] xl:px-[100px]'>
										<div className='flex flex-col items-start gap-[80px] h-full justify-center'>
											<p className='text-[18px] sm:text-[20px] md:text-[25px] mx-[30px] text-white leading-[35px] max-w-[668px]'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua consectetur adipiscing elit
											</p>
											<button className='bg-[#E61467] rounded-[52px] px-[30px] py-[15px] text-white hidden xl:block'>
												Lorem ispum dolar amet
											</button>
										</div>
										<div className='flex items-center flex-col sm:flex-row'>
											<img src='/app-1 2.png' alt='app' />
											<img src='/app-4 2.png' alt='app' />
										</div>
										<button className='bg-[#E61467] block xl:hidden rounded-[52px] px-[30px] py-[15px] text-white'>
											Lorem ispum dolar amet
										</button>
									</div>
								</div>
							</motion.div>
							<motion.div
								ref={ref2}
								initial={{ opacity: 0, y: 50 }}
								animate={controls2}
								transition={{ duration: 0.8 }}
							>
								<p className='text-start md:max-w-[1632px] mt-[100px] text-white text-[20px] md:text-[32px] font-[500] font-inter relative z-10 mx-[10px] lg:mx-0'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit
								</p>
								<div className='mx-[40px]'>
									<img
										src='/blog_2.png'
										alt='blog'
										className='mt-[100px]'
									/>
								</div>
							</motion.div>
							<motion.div
								ref={ref3}
								initial={{ opacity: 0, y: 50 }}
								animate={controls3}
								transition={{ duration: 0.8 }}
							>
								<p className='text-start max-w-[1632px] mt-[50px] text-white text-[20px] md:text-[32px] font-[500] font-inter relative z-10 mx-[10px] lg:mx-0'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit
								</p>
								<div className='relative mx-[5px] md:mx-[40px] bg-[#E61467] max-w-[1491px] xl:h-[467px] rounded-[30px] mt-[61px] z-10 py-[30px] xl:py-0'>
									<div className='flex flex-col xl:flex-row justify-center items-center h-full gap-[20px] xl:px-[80px]'>
										<div className='flex flex-col items-start gap-[80px] h-full justify-center'>
											<p className='text-[18px] sm:text-[20px] md:text-[25px] px-[30px] text-white leading-[35px] max-w-[668px]'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua consectetur adipiscing elit
											</p>
											<div className='xl:flex gap-[18px] hidden'>
												<button className='bg-[#032457] rounded-[52px] px-[30px] py-[15px] text-white'>
													Lorem ispum dolar amet
												</button>
												<button className='bg-transparent border border-white rounded-[52px] px-[30px] py-[15px] text-white'>
													Lorem ispum dolar amet
												</button>
											</div>
										</div>
										<div className='flex items-center'>
											<img src='/blog_home.png' alt='home' />
										</div>
										<div className='flex gap-[18px] xl:hidden flex-col sm:flex-row'>
											<button className='bg-[#032457] rounded-[52px] px-[30px] py-[15px] text-white'>
												Lorem ispum dolar amet
											</button>
											<button className='bg-transparent border border-white rounded-[52px] px-[30px] py-[15px] text-white'>
												Lorem ispum dolar amet
											</button>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</Wrapper>
			</div>
		</>
	)

}

export default BlogPage;
