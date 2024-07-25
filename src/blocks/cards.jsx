import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Cards() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
				delay: 0.2,
			},
		},
	}

	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: 'easeOut',
				delay: 0.4,
			},
		},
	}

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				delay: 0.6,
			},
		},
	}

	return (
		<>
			<div className='cards flex flex-col md:flex-row gap-5 mt-[60px]'>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={cardVariants}
					className='card-contetn max-w-[777px] bg-[#fff] px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] rounded-[25px]'
				>
					<motion.div className='text-card' variants={contentVariants}>
						<h3 className='text-[28px] sm:text-[34px] lg:text-[36px] text-center font-inter font-semibold text-[#22A75D]'>
							Lorem ipsum
						</h3>
						<p className='text-[13px] sm:text-[15px] lg:text-[16px] text-center font-inter font-normal text-[#707076] mt-[20px] sm:mt-[25px] md:mt-[30px] max-w-[613px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore
						</p>
					</motion.div>
					<motion.div className='image-card mt-[15px]' variants={imageVariants}>
						<img src='/public/пада бой.png' alt='' />
					</motion.div>
				</motion.div>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={cardVariants}
					className='card-contetn max-w-[777px] bg-[#fff] px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] rounded-[25px]'
				>
					<motion.div className='text-card' variants={contentVariants}>
						<h3 className='text-[28px] sm:text-[34px] lg:text-[36px] text-center font-inter font-semibold text-[#2278D4]'>
							Lorem ipsum
						</h3>
						<p className='text-[13px] sm:text-[15px] lg:text-[16px] text-center font-inter font-normal text-[#707076] mt-[20px] sm:mt-[25px] md:mt-[30px] max-w-[613px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua consectetur adipiscing elit , sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</motion.div>
					<motion.div className='image-card mt-[15px]' variants={imageVariants}>
						<img src='/public/панда гёл.png' alt='' />
					</motion.div>
				</motion.div>
			</div>
		</>
	)
}

export default Cards
