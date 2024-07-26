import React from 'react'
import Wrapper from '../../layout/wrapper'
import team from '../../data/ourteamData'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Ourteam() {
	const controls = useAnimation()
	const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

	React.useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, y: 0 })
		} else {
			controls.start({ opacity: 0, y: 50 })
		}
	}, [inView, controls])

	return (
		<div className='relative w-full min-h-screen'>
			<img
				src='/ourteam.svg'
				alt='ourteam'
				className='absolute w-full z-[-1]'
			/>
			<Wrapper>
				<div className='pt-[100px] mx-[50px] 2xl:mx-0 font-inter'>
					<div className='blog_blur right-0 w-[!1000px]'></div>
					<motion.div
						ref={ref}
						initial={{ opacity: 0, y: 50 }}
						animate={controls}
						transition={{ duration: 0.8 }}
					>
						<div className='flex flex-col gap-[10px] text-white'>
							<h2 className='text-[20px] md:text-[36px] font-[800]'>
								Наша команда
							</h2>
							<p className='text-[16px] md:text-[20px]'>
								Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
								vulputate libero et velit interdum, ac aliquet odio mattis.
							</p>
						</div>
					</motion.div>
					<motion.div
						className='grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-[32px] mt-[64px] lg:grid-cols-3'
						ref={ref}
						initial={{ opacity: 0, y: 50 }}
						animate={controls}
						transition={{ duration: 0.8 }}
					>
						{team.map((teamData, index) => (
							<motion.div
								key={index}
								className='bg-[white] rounded-[17px] z-[2]'
								initial={{ opacity: 0, y: 50 }}
								animate={controls}
								transition={{ duration: 0.8, delay: index * 0.2 }}
							>
								<div className='p-[16px]'>
									<div className='ourteam_div_bg w-full flex justify-center items-center mx-auto h-[190px]'></div>
									<div className='flex flex-col gap-[10px]'>
										<h2 className='pt-[24px] text-[20px] text-[#032457] font-[700]'>
											{teamData.title}
										</h2>
										<p className='text-[14px] md:text-[16px] text-[#6B7280]'>
											{teamData.levelJob}
										</p>
										<p className='text-[14px] md:text-[16px] text-[#6B7280]'>
											{teamData.desc}
										</p>
										<div className='flex items-center gap-[12px] mt-[5px]'>
											<a href='#'>
												<img
													src='/facebook.svg'
													alt='facebook'
													className='cursor-pointer'
												/>
											</a>
											<a href='#'>
												<img
													src='/twiter.svg'
													alt='twiter'
													className='cursor-pointer'
												/>
											</a>
											<a href='#'>
												<img
													src='/dribble.svg'
													alt='dribble'
													className='cursor-pointer'
												/>
											</a>
											<a href='#'>
												<img
													src='/github.svg'
													alt='github'
													className='cursor-pointer'
												/>
											</a>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Ourteam
