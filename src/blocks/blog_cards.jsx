import React from 'react'
import { motion } from 'framer-motion'
import CardHomeBlog from '../components/cardHomeBlog/cardHomeBlog'

function Blog_cards() {
	return (
		<>
			<div className='cards-blog mt-[900px] lg:mt-[250px] xl:mt-[300px] 2xl:mt-[450px] h-screen'>
				<div className='flex flex-col justify-center items-center h-full'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-center'
					>
						<h3 className='text-xl md:text-4xl font-inter font-bold text-white md:text-[#191B21]'>
							Lorem ipsum dolor sit amet
						</h3>
						<p className='text-sm md:text-base font-medium font-inter text-white md:text-[#191B21] mt-5 md:mt-12 max-w-2xl mx-auto'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='flex flex-wrap justify-center xl:flex-nowrap gap-5 mt-20 z-10'
					>
						<CardHomeBlog />
						<CardHomeBlog />
						<CardHomeBlog />
						<CardHomeBlog />
					</motion.div>
				</div>

				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					src='../public/Subtract2.png'
					alt=''
					className='absolute top-[7800px] md:top-[9200px] lg:top-[7755px] xl:top-[6000px] left-0 w-full -z-10 hidden md:block'
				/>
			</div>
		</>
	)
}

export default Blog_cards
