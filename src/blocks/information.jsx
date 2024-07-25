import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Information() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	}

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			variants={containerVariants}
			className='game-page mt-[150px] sm:mt-[300px] lg:mt-[600px] xl:mt-[600px] 2xl:mt-[400px] flex flex-col xl:flex-row justify-between h-screen items-center'
		>
			<div className='left-side xl:max-w-[644px]'>
				<motion.h3
					variants={itemVariants}
					className='text-[32px] sm:text-[34px] md:text-[36px] font-inter font-semibold text-[#FFF] lg:text-[#191B21] mb-[33px]'
				>
					Информация про плоформу
				</motion.h3>
				<motion.p
					variants={itemVariants}
					className='text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#FFF] lg:text-[#191B21] font-azosansLight opacity-60 flex flex-col'
				>
					<span className='font-azosans'>
						Cryptocurrency adoption is at less than 1% of the global world
						population with some countries and entities actively fighting
						against its mass adoption and the smartest developers and nerds
						holding the fort.
					</span>
					<br />
					Bitcoin was the first, and it has since grown to thousands of tokens
					launched all aiming to fix one problem or the other with some quite
					simply FOMOing the moment. Our goal is to bring mass adoption to the
					cryptocurrency space by dumbing it down. How far down? So down that
					even a celebrity can explain it in simple words to their followers and
					have them download an app, buy into the social currency of their
					favourite person and watch their investment as is with other
					cryptocurrency project.
					<br />
					<span className='mt-[15px]'>
						We are trying to do to this space what investment apps did for the
						"nonexistent retail investors". We are gamefying digital currency,
						bringing in popular faces instead of hard to understand projects to
						make it the norm and inadvertently being the "gateway drug" for a
						lot of people to finally give this space a real look.
					</span>
				</motion.p>

				<motion.p
					variants={itemVariants}
					className='text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#FFF] lg:text-[#191B21] font-azosansLight opacity-60 mt-[40px] flex flex-col'
				>
					<span className='font-azosans'>
						A new digital economy is coming. People would be just as powerful as
						countries and creators would be paid beyond the peanuts that
						conventional social media platforms can offer.
					</span>
					<br />
					There would be new markets and advertisers with little to offer would
					not find home there. Like Kanye said, "Personalities would become the
					new currency, and services would be built on top of them". Well, Kanye
					didn't exactly say that, but it sounds like something we hope he would
					say.
					<br />
					<span className='mt-[15px]'>
						Currency is digital, it has been that way for a while now, but this
						time there would be no dead presidents on the money, there would
						people like you on the money, and you would own it because it would
						make the most sense in the world.
					</span>
				</motion.p>
			</div>
			<motion.div variants={imageVariants} className='img-side'>
				<img
					src='/3d-render-game-equipment-console-headset-free-png 2.png'
					alt=''
				/>
			</motion.div>
			<motion.img
				variants={imageVariants}
				src='/Subtract.png'
				alt=''
				className='absolute hidden lg:block lg:top-[2460px] left-0 w-[-webkit-fill-available] -z-10'
			/>
		</motion.div>
	)
}

export default Information
