
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

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
			className='relative game-page flex flex-col xl:flex-row justify-between items-center min-h-screen'
		>
			<div className='absolute inset-0 w-full h-full overflow-hidden -z-10'>
				<img
					src='/Subtract.png'
					alt='Wavy background'
					// className='absolute bottom-0 top w-full'
					className='absolute h-full top-0 w-full -z-10'
				/>
			</div>
			<Wrapper>
				<div className='flex flex-col mt-[330px] lg:mt-[250px] xl:mt-[182px] lg:flex-row justify-between items-center gap-[45px] xl:gap-[100px] mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0'>
					<div className=''>
						<motion.h3
							variants={itemVariants}
							className='text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-8'
						>
							Информация про платформу
						</motion.h3>
						<motion.p
							variants={itemVariants}
							className='text-sm sm:text-base md:text-lg lg:text-xl text-black font-light opacity-60 mb-8 lg:w-[644px]'
						>
							<span className='font-semibold'>
								Cryptocurrency adoption is at less than 1% of the global world
								population with some countries and entities actively fighting
								against its mass adoption and the smartest developers and nerds
								holding the fort.
							</span>
							<br />
							Bitcoin was the first, and it has since grown to thousands of
							tokens launched all aiming to fix one problem or the other with
							some quite simply FOMOing the moment. Our goal is to bring mass
							adoption to the cryptocurrency space by dumbing it down. How far
							down? So down that even a celebrity can explain it in simple words
							to their followers and have them download an app, buy into the
							social currency of their favourite person and watch their
							investment as is with other cryptocurrency projects.
							<br />
							<span className='mt-4'>
								We are trying to do to this space what investment apps did for
								the "nonexistent retail investors". We are gamifying digital
								currency, bringing in popular faces instead of hard to
								understand projects to make it the norm and inadvertently being
								the "gateway drug" for a lot of people to finally give this
								space a real look.
							</span>
						</motion.p>

						<motion.p
							variants={itemVariants}
							className='text-sm sm:text-base md:text-lg lg:text-xl text-black font-light opacity-60 lg:w-[644px]'
						>
							<span className='font-semibold'>
								A new digital economy is coming. People would be just as
								powerful as countries and creators would be paid beyond the
								peanuts that conventional social media platforms can offer.
							</span>
							<br />
							There would be new markets and advertisers with little to offer
							would not find home there. Like Kanye said, "Personalities would
							become the new currency, and services would be built on top of
							them". Well, Kanye didn't exactly say that, but it sounds like
							something we hope he would say.
							<br />
							<span className='mt-4'>
								Currency is digital, it has been that way for a while now, but
								this time there would be no dead presidents on the money, there
								would be people like you on the money, and you would own it
								because it would make the most sense in the world.
							</span>
						</motion.p>
					</div>
					<motion.div variants={imageVariants} className=''>
						<img
							src='/3d-render-game-equipment-console-headset-free-png 2.png'
							alt='Game equipment'
						/>
					</motion.div>
				</div>
			</Wrapper>
		</motion.div>
	)
}

export default Information
