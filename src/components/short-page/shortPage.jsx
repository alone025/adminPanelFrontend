import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../../layout/wrapper'

const ShortPage = () => {
	const [shortPageData, setShortPageData] = useState(null)

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

	useEffect(() => {
		fetch('https://e334514e7b754cb9.mokky.dev/shortabout')
			.then(response => response.json())
			.then(data => {
				setShortPageData(data[0])
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	if (!shortPageData) return <div>Loading...</div>

	return (
		<div className='relative'>
			<div className='absolute inset-0 w-full min-h-screen md:min-h-0 -z-10'>
				<img
					src='/Frame 268.png'
					alt='Background'
					className='absolute bottom-[-100%] lg:bottom-[-80%] xl:bottom-[-90%] 2xl:bottom-[-140%] left-0 h-full md:h-auto w-full'
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
							{shortPageData.aboutBigText}
						</h3>
					</div>
					<div className='relative max-w-max lg:max-w-xl xl:max-w-2xl'>
						<p className='text-sm sm:text-base md:text-lg xl:text-xl font-medium text-white opacity-60 mb-8'>
							{shortPageData.aboutShortText}
						</p>
						<p className='text-sm sm:text-base md:text-lg xl:text-xl font-light text-white opacity-60 mb-4'>
							{shortPageData.aboutDescOneText}
						</p>
						<p className='text-sm sm:text-base md:text-lg xl:text-xl font-light text-white opacity-60'>
							{shortPageData.aboutDescTwoText}
						</p>
					</div>
				</motion.div>
			</Wrapper>
		</div>
	)
}

export default ShortPage
