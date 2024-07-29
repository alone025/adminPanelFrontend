import  { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Wrapper from '../layout/wrapper'

function Cards() {
	const [cardData, setCardData] = useState(null)
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

	useEffect(() => {
		fetch('https://e334514e7b754cb9.mokky.dev/cardsheader')
			.then(response => response.json())
			.then(data => {
				setCardData(data)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	if (!cardData) return <div>Loading...</div>

	return (
		<>
			<Wrapper>
				<div className='cards flex flex-col md:flex-row gap-5 mt-[60px] mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0'>
					{cardData.slice(0, 2).map((card, index) => (
						<motion.div
							key={card.id}
							ref={ref}
							initial='hidden'
							animate={inView ? 'visible' : 'hidden'}
							variants={cardVariants}
							className='card-contetn max-w-[777px] bg-[#fff] px-[30px] md:px-[40px] lg:px-[60px] xl:px-[80px] pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] rounded-[25px]'
						>
							<motion.div className='text-card' variants={contentVariants}>
								<h3
									className={`text-[28px] sm:text-[34px] lg:text-[36px] text-center font-inter font-semibold ${
										index === 0 ? 'text-[#22A75D]' : 'text-[#2278D4]'
									}`}
								>
									{card.article}
								</h3>
								<p className='text-[13px] sm:text-[15px] lg:text-[16px] text-center font-inter font-normal text-[#707076] mt-[20px] sm:mt-[25px] md:mt-[30px] max-w-[613px]'>
									{card.description}
								</p>
							</motion.div>
							<motion.div
								className='image-card flex justify-center max-w-[200px] md:max-w-[250px] lg:max-w-[300px] 2xl:max-w-[400px] mx-auto items-center mt-[15px]'
								variants={imageVariants}
							>
								{
									cardData[2].imageType == "true" ? (<img src={card.image} alt='' />) : (<></>)
								}
								
							</motion.div>
						</motion.div>
					))}
				</div>
			</Wrapper>
		</>
	)
}

export default Cards
