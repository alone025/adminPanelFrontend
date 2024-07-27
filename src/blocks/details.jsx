import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function Details() {
	const [openTab, setOpenTab] = useState(null)
	const [detailsData, setDetailsData] = useState([])

	const toggleTab = id => {
		setOpenTab(openTab === id ? null : id)
	}

	useEffect(() => {
		fetch('https://e334514e7b754cb9.mokky.dev/details')
			.then(response => response.json())
			.then(data => {
				setDetailsData(data)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	if (detailsData.length === 0) return <div>Loading...</div>

	if (!detailsData[0] || !detailsData[0].details_q_a)
		return <div>Data not available</div>

	return (
		<motion.div
			initial='hidden'
			animate='visible'
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1, transition: { duration: 0.5 } },
			}}
			className='relative min-h-screen'
		>
			<img
				src='/Frame new.png'
				alt='Background'
				className='absolute bottom-[-50px] md:bottom-0 lg:top-[-25%] 2xl:top-[-30%] left-0 w-full h-[115%] 2xl:h-full -z-30'
			/>
			<Wrapper>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='title mb-[50px] sm:mb-[50px]'
				>
					<h3 className='text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-azosans font-medium text-[#F7F5F9] text-center pt-[50px]'>
						{detailsData[0].details_article}
					</h3>
				</motion.div>

				<div className='tabs flex flex-col items-center gap-10 mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0'>
					{detailsData[0].details_q_a.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='tab-- bg-white select-none w-[100%] rounded-[20px] p-[21px] max-w-[1300px]'
						>
							<div
								className='flex flex-row justify-between items-center cursor-pointer'
								onClick={() => toggleTab(index)}
							>
								<p className='font-inter font-bold text-[14px] sm:text-[20px] md:text-[25px] lg:text-[27px] text-[#1D1534]'>
									{item.que}
								</p>
								<motion.div
									className='div-bg flex w-[30px] md:w-[56px] h-[30px] md:h-[56px] rounded-full items-center justify-center text-center p-2'
									animate={{ rotate: openTab === index ? 45 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<span className='text-white text-[20px] md:text-[35px] flex justify-center items-center mb-[5px]'>
										+
									</span>
								</motion.div>
							</div>
							<AnimatePresence>
								{openTab === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className='mt-4'
									>
										<p className='text-[#1D1534]'>{item.anw}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='how-to-buy mt-[40px]'
				>
					<h4 className='text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] text-center font-azosans text-[#F7F5F9] font-medium'>
						{detailsData[1]?.details_how_to_text || 'How to Buy'}
					</h4>
					<ul className='mt-[30px] flex flex-col gap-[30px] mx-[50px] md:mx-0'>
						{detailsData[1]?.details_how?.map((item, index) => (
							<li
								key={index}
								className='text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-azosansLight text-[#FFF] text-center'
							>
								{item.fi}
							</li>
						))}
					</ul>
				</motion.div>
			</Wrapper>
		</motion.div>
	)
}

export default Details
