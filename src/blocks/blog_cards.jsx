import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CardHomeBlog from '../components/cardHomeBlog/cardHomeBlog'
import Wrapper from '../layout/wrapper'

function Blog_cards() {
	const [blogData, setBlogData] = useState([])

	useEffect(() => {
		fetch('https://e334514e7b754cb9.mokky.dev/teamcards')
			.then(response => response.json())
			.then(data => {
				setBlogData(data)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	if (blogData.length === 0) return <div>Loading...</div>

	return (
		<div className='relative cards-blog min-h-screen'>
			{/* SVG Background */}
			<motion.img
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				src='/Subtract2.png'
				alt='Background'
				className='absolute top-0 left-0 w-full 2xl:h-full -z-10'
			/>
			<Wrapper>
				<div className='flex flex-col justify-center items-center mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0 2xl:h-screen'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-center mt-[150px] sm:mt-[200px] md:mt-[250px]'
					>
						<h3 className='text-xl md:text-4xl font-inter font-bold text-[#191B21]'>
							{blogData[0].topArticleTeam}
						</h3>
						<p className='text-sm md:text-base font-medium font-inter text-[#191B21] mt-5 md:mt-12 max-w-2xl mx-auto'>
							{blogData[0].topDescTeam}
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='flex flex-wrap justify-center xl:flex-nowrap gap-5 mt-10 z-10'
					>
						{blogData.slice(1).map((card, index) => (
							<CardHomeBlog key={index} cardData={card} />
						))}
					</motion.div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Blog_cards
