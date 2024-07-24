import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutPage = () => {
	const { ref: aboutRef, inView: aboutInView } = useInView({
		triggerOnce: true,
	})
	const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
		triggerOnce: true,
	})

	const aboutAnimationControls = useAnimation()
	const secondSectionAnimationControls = useAnimation()

	const aboutAnimation = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
	}

	const textAnimation = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
	}

	const imageAnimation = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: 'easeOut' },
		},
	}

	const buttonAnimation = {
		hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
	}

	useEffect(() => {
		if (aboutInView) {
			aboutAnimationControls.start('visible')
		} else {
			aboutAnimationControls.start('hidden')
		}
	}, [aboutInView, aboutAnimationControls])

	useEffect(() => {
		if (secondSectionInView) {
			secondSectionAnimationControls.start('visible')
		} else {
			secondSectionAnimationControls.start('hidden')
		}
	}, [secondSectionInView, secondSectionAnimationControls])

	return (
		<>
			<img
				src='/public/about_bg.svg'
				alt='about background'
				className='absolute top-0 left-0 w-full h-[55%] xl:h-auto object-cover z-[-1]'
			/>
			<div className='relative w-full flex flex-col lg:flex-row items-start px-4 sm:px-6 md:px-8 lg:px-12 font-inter'>
				<motion.div
					className='flex flex-col items-start max-w-4xl'
					ref={aboutRef}
					initial='hidden'
					animate={aboutAnimationControls}
					variants={aboutAnimation}
				>
					<motion.div
						className='flex items-center gap-3 mb-4 mt-6 md:mt-12'
						variants={textAnimation}
					>
						<img src='/public/Liner.png' alt='line' className='w-2 md:w-3' />
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight'>
							Lorem ipsum dolor sit amet
						</h2>
					</motion.div>
					<motion.p
						className='text-gray-300 text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8'
						variants={textAnimation}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</motion.p>
					<div className='flex flex-wrap gap-4'>
						<motion.button
							className='bg-pink-600 hover:bg-pink-700 transition-colors duration-200 rounded-full text-white py-2 px-4 md:py-3 md:px-6'
							whileHover='hover'
							variants={buttonAnimation}
						>
							Кнопка номер 1
						</motion.button>
						<motion.button
							className='bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-200 rounded-full text-white py-2 px-4 md:py-3 md:px-6'
							whileHover='hover'
							variants={buttonAnimation}
						>
							Кнопка номер 2
						</motion.button>
					</div>
				</motion.div>
				<motion.div
					className='flex justify-center items-center w-full lg:w-1/2 mt-6 md:mt-8 lg:mt-0 blurBackground'
					ref={secondSectionRef}
					initial='hidden'
					animate={secondSectionAnimationControls}
					variants={imageAnimation}
				>
					<img
						src='/public/about_home.png'
						alt='home'
						className='w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl lg:w-auto object-contain'
					/>
				</motion.div>
			</div>

			<motion.div
				className='flex flex-col mt-[150px] lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-8 md:gap-12 lg:gap-[140px]'
				ref={secondSectionRef}
				initial='hidden'
				animate={secondSectionAnimationControls}
				variants={aboutAnimation}
			>
				<motion.div className='w-full flex justify-center lg:justify-start lg:w-[640px]' variants={imageAnimation}>
					<img
						src='/public/кот2.png'
						alt='кот'
						className='w-full max-w-[400px] lg:max-w-[640px]'
					/>
				</motion.div>
				<motion.div className='flex flex-col items-start'>
					<motion.div
						className='flex items-center gap-2 md:gap-4'
						variants={textAnimation}
					>
						<img
							src='/public/about_label_icon.svg'
							alt='icon'
							className='w-6 md:w-8'
						/>
						<p className='font-popins text-lg md:text-xl'>About us</p>
					</motion.div>
					<motion.div variants={textAnimation}>
						<h2 className='text-3xl md:text-4xl lg:text-[48px] font-semibold text-white mt-[15px]'>
							Lorem ipsum dolor sit amet
						</h2>
						<p className='text-base md:text-lg lg:text-[20px] text-white w-full md:w-[680px] mt-[40px]'>
							Carlio brand is one of the most reliable motor oil manufacturers,
							which is engaged in the production of high-quality products with a
							history of more than decades in the industry. In order to get more
							information about other aspects and products of the Carlio brand,
							you can use the following buttons:
						</p>
					</motion.div>
					<div className='mt-8 flex flex-wrap gap-4 '>
						<motion.button
							className='bg-[#E61467] w-full md:w-[215px] h-[54px] rounded-full text-lg text-white'
							whileHover='hover'
							variants={buttonAnimation}
						>
							Кнопка номер 3
						</motion.button>
						<motion.button
							className='bg-[#fff] w-full md:w-[215px] h-[54px] rounded-full text-lg text-[#032457]'
							whileHover='hover'
							variants={buttonAnimation}
						>
							Кнопка номер 4
						</motion.button>
						<motion.button
							className='bg-transparent border border-[#FEFBFB] w-full md:w-[215px] h-[54px] rounded-full text-lg text-[#FEFBFB]'
							whileHover='hover'
							variants={buttonAnimation}
						>
							Кнопка номер 5
						</motion.button>
					</div>
				</motion.div>
			</motion.div>
		</>
	)
}

export default AboutPage
