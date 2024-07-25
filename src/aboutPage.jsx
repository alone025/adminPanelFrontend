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
		hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } },
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
			<div className='pt-[50px]'>
				<svg
					className='absolute top-0 left-0 w-full h-auto z-[-1]'
					viewBox='0 0 1440 800'
					preserveAspectRatio='xMidYMid slice'
				>
					<path
						fill='#032457'
						d='M0,0 L1440,0 L1440,600 C1200,700 960,750 720,750 C480,750 240,700 0,600 Z'
					/>
				</svg>

				<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
					<div className='flex flex-col gap-[100px] lg:flex-row lg:items-start'>
						<motion.div
							className='flex flex-col mt-[100px] items-start max-w-2xl lg:max-w-3xl'
							ref={aboutRef}
							initial='hidden'
							animate={aboutAnimationControls}
							variants={aboutAnimation}
						>
							<motion.div
								className='flex items-center gap-3 mb-4'
								variants={textAnimation}
							>
								<img src='/Liner.png' alt='liner' />
								<h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight'>
									Lorem ipsum dolor sit amet
								</h2>
							</motion.div>
							<motion.p
								className='text-gray-300 text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-[600px]'
								variants={textAnimation}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua.
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
							className='blurBackground flex justify-center items-center'
							ref={secondSectionRef}
							initial='hidden'
							animate={secondSectionAnimationControls}
							variants={imageAnimation}
						>
							<img
								src='/about_home.png'
								alt='home'
								className='md:w-[400px]'
							/>
						</motion.div>
					</div>
				</div>

				<motion.div
					className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12 lg:mt-24'
					ref={secondSectionRef}
					initial='hidden'
					animate={secondSectionAnimationControls}
					variants={aboutAnimation}
				>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-24'>
						<motion.div className='w-[226px] lg:w-1/2' variants={imageAnimation}>
							<img src='/кот2.png' alt='кот' />
						</motion.div>
						<motion.div className='flex flex-col items-start w-full lg:w-1/2'>
							<motion.div
								className='flex items-center gap-2 md:gap-4'
								variants={textAnimation}
							>
								<img src='/about_label_icon.svg' alt='label' />
								<p className='font-popins text-lg md:text-xl'>About us</p>
							</motion.div>
							<motion.div variants={textAnimation}>
								<h2 className='text-3xl md:text-4xl lg:text-[48px] font-semibold text-white mt-4'>
									Lorem ipsum dolor sit amet
								</h2>
								<p className='text-base md:text-lg lg:text-[20px] text-white mt-6'>
									Carlio brand is one of the most reliable motor oil
									manufacturers, which is engaged in the production of
									high-quality products with a history of more than decades in
									the industry.
								</p>
							</motion.div>
							<div className='mt-8 flex flex-wrap gap-3'>
								<motion.button
									className='bg-[#E61467] w-full sm:w-auto px-6 py-3 rounded-full text-lg text-white'
									whileHover='hover'
									variants={buttonAnimation}
								>
									Кнопка номер 3
								</motion.button>
								<motion.button
									className='bg-[#fff] w-full sm:w-auto px-6 py-3 rounded-full text-lg text-[#032457]'
									whileHover='hover'
									variants={buttonAnimation}
								>
									Кнопка номер 4
								</motion.button>
								<motion.button
									className='bg-transparent border border-[#FEFBFB] w-full sm:w-auto px-6 py-3 rounded-full text-lg text-[#FEFBFB]'
									whileHover='hover'
									variants={buttonAnimation}
								>
									Кнопка номер 5
								</motion.button>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
			<img
				src='/about_bg.svg'
				alt='bg'
				className='absolute flex justify-center z-[-1] top-[0]'
			/>
		</>
	)
}

export default AboutPage
