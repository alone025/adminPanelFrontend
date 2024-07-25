import React from 'react'
import { motion } from 'framer-motion'
import CardHomeBlog from '../components/cardHomeBlog/cardHomeBlog'
import Wrapper from '../layout/wrapper'

function Blog_cards() {
	return (
		<>
			<div className='relative cards-blog  min-h-screen'>
				{/* SVG Background */}
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					src='../public/Subtract2.png'
					alt='Background'
					className='absolute top-0 left-0 w-full 2xl:h-full -z-10 '
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
								Lorem ipsum dolor sit amet
							</h3>
							<p className='text-sm md:text-base font-medium font-inter text-[#191B21] mt-5 md:mt-12 max-w-2xl mx-auto'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='flex flex-wrap justify-center xl:flex-nowrap gap-5 mt-10 z-10'
						>
							<CardHomeBlog />
							<CardHomeBlog />
							<CardHomeBlog />
							<CardHomeBlog />
						</motion.div>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Blog_cards
