import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
		<motion.div
			className='lkmljnn flex flex-col lg:flex-row justify-around gap-[50px] lg:gap-[70px] xl:gap-[79px]'
			ref={ref}
			initial='hidden'
			animate={controls}
			variants={containerVariants}
		>
			<div className='lkjm lg:max-w-[500px]'>
				<h3 className='text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-semibold font-inter text-[#FBF9ED]'>
					Про платформу Urban Clans
				</h3>
			</div>
			<div className='rhis relative -z-[1] max-w-max lg:max-w-[560px] xl:max-w-[600px]'>
				<p className='text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] font-medium font-azosans text-[#fff] opacity-60 mb-[30px]'>
					We would only launch tokens with the express permission of the
					creators.
				</p>
				<p className='text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] font-light font-azosansLight text-[#fff] opacity-60 mb-[15px]'>
					There are several thousand celebrities and creators on twitter,
					tiktok, Instagram and YouTube with followings in the millions who we
					would be <span className='font-medium'>actively engaging</span> before
					we go viral.
				</p>
				<p className='text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] font-light font-azosansLight text-[#fff] opacity-60'>
					We would get them on our platform and they would see the opportunity
					to create a fan driven digital economy where their digital content can
					be traded as NFTs and their most loyal fans can have the monetary
					value of their creator's currency increase{' '}
					<span className='font-medium'>significantly</span> as they promote
					their digital currency across their channels while our native token
					holders benefit from the Tokners popularity.
				</p>
			</div>
		</motion.div>
	)
}

export default ShortPage
