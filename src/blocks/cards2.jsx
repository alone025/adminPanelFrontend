import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function Cards2() {
	const [cardData, setCardData] = useState(null)

	useEffect(() => {
		fetch('https://e334514e7b754cb9.mokky.dev/cardsheader')
			.then(response => response.json())
			.then(data => {
				setCardData(data)
				console.log(data)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	if (!cardData) return <div>Loading...</div>
	return (
		<>
			<Wrapper>
				<div className='different-cards mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] 2xl:mx-0 pt-[180px] 2xl:pt-0'>
					<div className='top-cards flex flex-col xl:flex-row gap-[42px]'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='long-card xl:max-w-[800px] justify-between bg-[#FFFFFF] flex flex-col md:flex-row gap-[10px] md:items-end rounded-[30px] p-[30px] lg:p-[40px] 2xl:p-[50px]'
						>
							<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[400px] 2xl:max-w-[490px] pb-[50px]'>
								<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
									Lorem ipsum
								</h3>
								<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore
								</p>
							</div>
							<div className='imx'>
								<img src='/4756473 1.png' alt='' />
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='short-card bg-[#EBD6D9] flex flex-col md:flex-row justify-between gap-[10px] md:items-end rounded-[30px] p-[40px] 2xl:p-[50px]'
						>
							<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[250px] 2xl:max-w-[312px] '>
								<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
									Lorem ipsum
								</h3>
								<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore
								</p>
							</div>
							<div className='imx'>
								<img src='/gamers-5266580-4403854 1.png' alt='' />
							</div>
						</motion.div>
					</div>
					<div className='bottom-cards flex flex-col xl:flex-row gap-[42px] mt-11'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='short-card bg-[#FFF] flex flex-col md:flex-row justify-between gap-[10px] md:items-end rounded-[30px] p-[40px] 2xl:p-[50px]'
						>
							<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[250px] 2xl:max-w-[312px] '>
								<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
									Lorem ipsum
								</h3>
								<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore
								</p>
							</div>
							<div className='imx'>
								<img
									src='/3d-render-game-equipment-console-headset-free-png 2.png'
									alt=''
									className='max-h-[215px]'
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='long-card xl:max-w-[800px] justify-between bg-[#EBD6D9] flex flex-col md:flex-row gap-[10px] md:items-end rounded-[30px] p-[30px] lg:p-[40px] 2xl:p-[50px]'
						>
							<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[400px] 2xl:max-w-[490px] pb-[50px]'>
								<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
									Lorem ipsum
								</h3>
								<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore
								</p>
							</div>
							<div className='imx'>
								<img src='/image 68.png' alt='' />
							</div>
						</motion.div>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default Cards2
