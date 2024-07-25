import  { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

const ShortPage = () => {
	const controls = useAnimation()
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.2,
				duration: 0.6,
			},
		},
	}

	return (
		<div className='relative'>
			<div className='absolute inset-0 w-full min-h-screen -z-10'>
				<img
					src='/public/Frame 268.png'
					alt='Background'
					className='absolute bottom-0 left-0 w-full'
				/>
			</div>
			<Wrapper>
				<motion.div
					className='flex flex-col lg:flex-row justify-around gap-12 lg:gap-16 xl:gap-20 mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0'
					ref={ref}
					initial='hidden'
					animate={controls}
					variants={containerVariants}
				>
					<div className='max-w-lg'>
						<h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white'>
							Про платформу Urban Clans
						</h3>
					</div>
					<div className='relative max-w-max lg:max-w-xl xl:max-w-2xl'>
						<p className='text-sm sm:text-base md:text-lg xl:text-xl font-medium text-white opacity-60 mb-8'>
							We would only launch tokens with the express permission of the
							creators.
						</p>
						<p className='text-sm sm:text-base md:text-lg xl:text-xl font-light text-white opacity-60 mb-4'>
							There are several thousand celebrities and creators on Twitter,
							TikTok, Instagram, and YouTube with followings in the millions who
							we would be
							<span className='font-medium'> actively engaging</span> before we
							go viral.
						</p>
						<p className='text-sm sm:text-base md:text-lg xl:text-xl font-light text-white opacity-60'>
							We would get them on our platform and they would see the
							opportunity to create a fan-driven digital economy where their
							digital content can be traded as NFTs and their most loyal fans
							can have the monetary value of their creator's currency increase{' '}
							<span className='font-medium'>significantly</span> as they promote
							their digital currency across their channels while our native
							token holders benefit from the token's popularity.
						</p>
					</div>
				</motion.div>
			</Wrapper>
		</div>
	)
}

export default ShortPage
